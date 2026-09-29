/**
 * Meta Pixel Tracking Utility
 * 
 * Safely handles:
 * - Meta Pixel initialization (official base code, single initialization)
 * - PageView tracking across SPA route transitions without duplicate firing
 * - Lead event tracking (fired ONLY after successful backend/database submission)
 * - Lead deduplication (prevents multiple events on double clicks, retries, etc.)
 * - Contact event tracking (WhatsApp and Phone calls)
 * - Privacy protection (no personally identifiable information is ever sent)
 * - Robust error handling (website never breaks if Meta/adblocker fails)
 */

// Meta Pixel ID
export const DEFAULT_PIXEL_ID = '1829453078049803';

export const getMetaPixelId = () => {
  return (
    (typeof import.meta !== 'undefined' &&
      import.meta.env &&
      import.meta.env.VITE_META_PIXEL_ID) ||
    (typeof window !== 'undefined' && window.META_PIXEL_ID) ||
    DEFAULT_PIXEL_ID
  );
};

let isInitialized = false;
let globalContactTrackingInstalled = false;

/**
 * Initializes the official Meta Pixel script asynchronously once.
 */
export function initMetaPixel() {
  if (typeof window === 'undefined' || isInitialized) return;

  const pixelId = getMetaPixelId();

  // Official Meta Pixel base code
  /* eslint-disable */
  (function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    if (s && s.parentNode) {
      s.parentNode.insertBefore(t, s);
    } else {
      document.head.appendChild(t);
    }
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  try {
    if (window.fbq) {
      window.fbq('init', pixelId);
      isInitialized = true;
      if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
        console.log(`[Meta Pixel] Initialized successfully with ID: ${pixelId}`);
      }
    }
  } catch (err) {
    console.warn('[Meta Pixel] Failed to initialize:', err);
  }
}

/**
 * Core reusable Meta tracking function.
 * Safely verifies window.fbq availability and wraps execution in try/catch.
 *
 * @param {string} eventName - Meta event name (e.g., 'PageView', 'Lead', 'Contact')
 * @param {object} [parameters] - Optional non-sensitive parameters
 */
export function trackMetaEvent(eventName, parameters = {}) {
  if (typeof window === 'undefined') return;

  try {
    if (typeof window.fbq === 'function') {
      if (parameters && Object.keys(parameters).length > 0) {
        window.fbq('track', eventName, parameters);
      } else {
        window.fbq('track', eventName);
      }
      if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
        console.log(`[Meta Pixel] Tracked: ${eventName}`, parameters);
      }
    }
  } catch (err) {
    console.warn(`[Meta Pixel] Error tracking event "${eventName}":`, err);
  }
}

/**
 * Tracks standard PageView event.
 */
export function trackPageView() {
  trackMetaEvent('PageView');
}

// In-memory cache of tracked lead submissions to strictly prevent duplicate firing
const trackedLeads = new Set();

/**
 * Tracks a verified Lead event.
 * MUST be invoked only after the form submission has succeeded in the database/backend.
 *
 * @param {string} [submissionId] - Unique ID (UUID or booking ref) for deduplication
 * @param {object} [extraParams] - Safe non-PII descriptors (e.g., { content_name: 'Consultation Booking' })
 */
export function trackLeadEvent(submissionId, extraParams = {}) {
  if (submissionId) {
    if (trackedLeads.has(submissionId)) {
      if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
        console.log(`[Meta Pixel] Ignored duplicate Lead event for ID: ${submissionId}`);
      }
      return;
    }
    trackedLeads.add(submissionId);
  }

  // Strictly enforce privacy: only allow approved non-PII metadata
  const safeParams = {};
  if (extraParams.content_name) safeParams.content_name = String(extraParams.content_name);
  if (extraParams.content_category) safeParams.content_category = String(extraParams.content_category);

  trackMetaEvent('Lead', safeParams);
}

/**
 * Tracks standard Contact event (WhatsApp or Phone Call).
 *
 * @param {'WhatsApp'|'Phone Call'|string} [channel]
 */
export function trackContactEvent(channel = 'General') {
  trackMetaEvent('Contact', { content_name: channel });
}

/**
 * Global delegated click listener for WhatsApp and Phone links.
 * Detects tel: and WhatsApp URLs and tracks 'Contact' without blocking or delaying navigation.
 */
export function setupGlobalContactTracking() {
  if (typeof window === 'undefined' || globalContactTrackingInstalled) return;
  globalContactTrackingInstalled = true;

  document.addEventListener(
    'click',
    (e) => {
      try {
        const link = e.target.closest('a');
        if (!link) return;

        const href = (link.getAttribute('href') || '').trim();

        // Phone click: tel: link or data-meta-contact="phone"
        if (href.startsWith('tel:') || link.dataset.metaContact === 'phone') {
          trackContactEvent('Phone Call');
          return;
        }

        // WhatsApp click: wa.me, api.whatsapp.com, whatsapp://, or data-meta-contact="whatsapp"
        if (
          href.includes('wa.me') ||
          href.includes('api.whatsapp.com') ||
          href.startsWith('whatsapp:') ||
          link.dataset.metaContact === 'whatsapp'
        ) {
          trackContactEvent('WhatsApp');
          return;
        }
      } catch (err) {
        console.warn('[Meta Pixel] Error in contact click listener:', err);
      }
    },
    { passive: true }
  );
}
