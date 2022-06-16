import config from './config';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  console.log('pageview', url);
  (window as any).gtag("config", config.GA_TRACKING_ID, {
    page_path: url,
    debug_mode: true,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: string, { category, label, value }: any) => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};