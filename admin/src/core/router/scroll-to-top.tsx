import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On every route change, forces the page to scroll to the top
 */
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
