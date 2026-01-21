'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import { Analytics } from '@shipixen/pliny/analytics';
import { siteConfig } from '@/data/config/site.settings';

export const AnalyticsWrapper = () => {
    const analyticsConfig = siteConfig.analytics;

    return (
        <>
            {analyticsConfig && <Analytics analyticsConfig={analyticsConfig} />}
            <VercelAnalytics />
        </>
    );
};
