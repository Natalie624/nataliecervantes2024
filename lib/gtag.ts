export const GA_TRACKING_ID = 'G-B5EKW2ECL5';

export const pageview = (url: string) => {
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
    });
};