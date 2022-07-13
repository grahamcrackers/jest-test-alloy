declare module "@adobe/alloy";

declare global {
    const SNOWPLOW_COLLECTOR_URL: string;
    const SNOWPLOW_COLLECTOR_PATH: string;

    interface Window {
        magentoStorefrontEvents: MagentoStorefrontEvents;
        alloy: AlloyInstance;
    }
}