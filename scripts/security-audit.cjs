#!/usr/bin/env node

/**
 * Security Audit Script
 * Run: node scripts/security-audit.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Running Security Audit...\n');

// Check for common security issues
const checks = {
  envExample: {
    name: 'Environment Example File',
    check: () => fs.existsSync('.env.example'),
    fix: 'Create .env.example with sample environment variables'
  },
  
  envNotCommitted: {
    name: 'Environment File Not in Git',
    check: () => {
      try {
        const result = execSync('git ls-files .env', { stdio: 'pipe' }).toString().trim();
        return result === ''; // Empty result means not tracked - good!
      } catch {
        return true; // Error means git not available or file not tracked - assume good
      }
    },
    fix: 'Add .env to .gitignore'
  },
  
  httpsOnly: {
    name: 'HTTPS Enforcement',
    check: () => {
      const netlifyToml = fs.readFileSync('netlify.toml', 'utf8');
      return netlifyToml.includes('Strict-Transport-Security');
    },
    fix: 'Add HSTS header to netlify.toml'
  },
  
  contentSecurityPolicy: {
    name: 'Content Security Policy',
    check: () => {
      const netlifyToml = fs.readFileSync('netlify.toml', 'utf8');
      return netlifyToml.includes('Content-Security-Policy');
    },
    fix: 'Add CSP header to netlify.toml'
  },
  
  rateLimiting: {
    name: 'Rate Limiting Implementation',
    check: () => {
      const securityUtils = path.join('src', 'utils', 'security.js');
      if (!fs.existsSync(securityUtils)) return false;
      const content = fs.readFileSync(securityUtils, 'utf8');
      return content.includes('RateLimiter');
    },
    fix: 'Implement rate limiting in security.js'
  },
  
  inputSanitization: {
    name: 'Input Sanitization',
    check: () => {
      const appFile = fs.readFileSync(path.join('src', 'App.jsx'), 'utf8');
      return appFile.includes('sanitizeInput');
    },
    fix: 'Add input sanitization to form handlers'
  },
  
  securityHeaders: {
    name: 'Security Headers',
    check: () => {
      const netlifyToml = fs.readFileSync('netlify.toml', 'utf8');
      return netlifyToml.includes('X-Frame-Options') && 
             netlifyToml.includes('X-Content-Type-Options');
    },
    fix: 'Add security headers to netlify.toml'
  }
};

// Run checks
let passed = 0;
let failed = 0;

Object.entries(checks).forEach(([key, check]) => {
  process.stdout.write(`Checking ${check.name}... `);
  
  try {
    if (check.check()) {
      console.log('✅ PASSED');
      passed++;
    } else {
      console.log('❌ FAILED');
      console.log(`   Fix: ${check.fix}`);
      failed++;
    }
  } catch (error) {
    console.log('❌ ERROR');
    console.log(`   Error: ${error.message}`);
    failed++;
  }
});

console.log('\n📊 Dependency Audit\n');

// Run npm audit
try {
  const auditResult = execSync('npm audit --json', { stdio: 'pipe' }).toString();
  const audit = JSON.parse(auditResult);
  
  console.log(`Total vulnerabilities: ${audit.metadata.vulnerabilities.total}`);
  console.log(`  Critical: ${audit.metadata.vulnerabilities.critical}`);
  console.log(`  High: ${audit.metadata.vulnerabilities.high}`);
  console.log(`  Moderate: ${audit.metadata.vulnerabilities.moderate}`);
  console.log(`  Low: ${audit.metadata.vulnerabilities.low}`);
  
  if (audit.metadata.vulnerabilities.total > 0) {
    console.log('\n⚠️  Run "npm audit fix" to fix vulnerabilities');
  }
} catch (error) {
  console.log('Could not run npm audit');
}

// Summary
console.log('\n📈 Summary\n');
console.log(`Checks passed: ${passed}/${passed + failed}`);

if (failed === 0) {
  console.log('\n✅ All security checks passed!');
  process.exit(0);
} else {
  console.log('\n❌ Some security checks failed. Please review and fix.');
  process.exit(1);
}