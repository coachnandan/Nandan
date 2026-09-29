import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initMetaPixel, trackPageView, setupGlobalContactTracking } from '../../lib/metaPixel';

/**
 * MetaPixelTracker component
 * 
 * Placed inside <BrowserRouter> to:
 * 1. Initialize Meta Pixel once on mount
 * 2. Setup global delegated listener for WhatsApp and Phone calls
 * 3. Track PageView reliably on initial load and on every SPA route transition
 */
export default function MetaPixelTracker() {
  const location = useLocation();

  useEffect(() => {
    initMetaPixel();
    setupGlobalContactTracking();
  }, []);

  useEffect(() => {
    trackPageView();
  }, [location.pathname, location.search]);

  return null;
}
