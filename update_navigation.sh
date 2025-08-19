#!/bin/bash

# Update all service and area pages to include FloatingMenu

for file in src/pages/services/*.jsx src/pages/areas/*.jsx; do
  if [ -f "$file" ]; then
    echo "Processing $file..."
    
    # Check if FloatingMenu is already imported
    if ! grep -q "import FloatingMenu" "$file"; then
      # Add FloatingMenu import after MobileBottomNav import
      sed -i "/import MobileBottomNav/a import FloatingMenu from '../../components/common/FloatingMenu';" "$file"
    fi
    
    # Check if FloatingMenu is already in use
    if ! grep -q "<FloatingMenu" "$file"; then
      # Add FloatingMenu before MobileBottomNav in the render
      sed -i '/<MobileBottomNav/i\      <FloatingMenu />' "$file"
    fi
    
    echo "Updated $file"
  fi
done

echo "All files updated!"