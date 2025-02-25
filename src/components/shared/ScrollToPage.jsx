import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToPage = ({trigger}) => {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, trigger])

  return null;

}
