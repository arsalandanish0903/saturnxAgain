import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to the top of the page when location changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;
