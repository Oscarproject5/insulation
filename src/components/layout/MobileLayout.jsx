import React from 'react'
import FloatingMenu from '../common/FloatingMenu'
import MobileBottomNav from '../common/MobileBottomNav'

const MobileLayout = ({ children }) => {
  return (
    <>
      {children}
      <FloatingMenu />
      <MobileBottomNav />
    </>
  )
}

export default MobileLayout