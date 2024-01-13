import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";

import type { FooterSocialType } from "./type-library";

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

export const footerSocialLinks: FooterSocialType[] = [
    {
        display: "tyler@tylerlatshaw.com",
        link: "mailto:tyler@tylerlatshaw.com",
        icon: MailOutlineIcon
    },
    {
        display: "Connect With Me On LinkedIn",
        link: "https://www.linkedin.com/in/tylerlatshaw/",
        icon: LinkedInIcon
    },
    {
        display: "Find My Code on GitHub",
        link: "https://github.com/tylerlatshaw",
        icon: GitHubIcon
    }
];