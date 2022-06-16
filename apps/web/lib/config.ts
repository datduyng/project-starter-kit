// eslint-disable-next-line import/no-anonymous-default-export
const config = {
  GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_ID,
}

if (!config.GA_TRACKING_ID) {
  console.error('GA_TRACKING_ID is not set');
}

export default config;