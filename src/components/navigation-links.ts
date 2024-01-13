export type navigationLinkType = {
    display: string,
    link: string,
    filepath: string,
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never",
    priority: number,
}

export const navigationLinks: navigationLinkType[] = [
    {
        display: "Home",
        link: "/",
        filepath: "src/app/page.tsx",
        changeFrequency: "monthly",
        priority: 1.0,
    }
];

export const supplementalLinks: navigationLinkType[] = [
    {
        display: "Privacy Policy",
        link: "/privacy-policy",
        filepath: "src/app/privacy-policy/page.tsx",
        changeFrequency: "yearly",
        priority: 0.1
    },
    {
        display: "Sitemap",
        link: "/sitemap.xml",
        filepath: "src/app/sitemap.xml",
        changeFrequency: "yearly",
        priority: 0.1,
    }
];