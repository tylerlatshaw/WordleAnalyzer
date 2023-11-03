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
        link: "/homepage",
        filepath: "src/app/(main-site)/homepage/page.tsx",
        changeFrequency: "monthly",
        priority: 1.0,
    },
    {
        display: "Resume",
        link: "/resume",
        filepath: "src/app/(main-site)/resume/page.tsx",
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        display: "Portfolio",
        link: "/portfolio",
        filepath: "src/app/(main-site)/portfolio/page.tsx",
        changeFrequency: "yearly",
        priority: 0.8,
    },
    {
        display: "Interests",
        link: "/interests",
        filepath: "src/app/(main-site)/interests/page.tsx",
        changeFrequency: "weekly",
        priority: 0.6,
    },
    {
        display: "Contact Me",
        link: "/contact-me",
        filepath: "src/app/(main-site)/contact-me/page.tsx",
        changeFrequency: "yearly",
        priority: 0.7,
    }
];

export const supplementalLinks: navigationLinkType[] = [
    {
        display: "Privacy Policy",
        link: "/privacy-policy",
        filepath: "src/app/(main-site)/privacy-policy/page.tsx",
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