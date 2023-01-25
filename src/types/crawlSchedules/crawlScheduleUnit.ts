export const CrawlScheduleUnits = ['hour', 'day', 'week', 'month'] as const;

export type CrawlScheduleUnit = (typeof CrawlScheduleUnits)[number];
