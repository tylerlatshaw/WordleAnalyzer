"use client";

import Link from "next/link";
import SvgIcon from "@mui/icons-material/Home";
import { footerSocialLinks, navigationLinks, supplementalLinks } from "../lib/navigation-links";

export default function Footer() {

    const linkClasses = "w-fit text-blue-300 no-underline hover:text-green-500";

    const socialLinks = footerSocialLinks.map((link) =>
        <div key={link.display} className="grid justify-items-center">
            <div className="mt-3">
                <a href={link.link} className="group block" target="_blank">
                    <div className="flex items-center">
                        <SvgIcon component={link.icon} className="group-hover:text-green-500 text-3xl md:text-2xl" />&nbsp;
                        <span className="desktop-only group-hover:text-green-500">{link.display}</span>
                    </div>
                </a>
            </div>
        </div>
    );

    const primaryLinks = navigationLinks.map((menuItem) =>
        <Link key={menuItem.display} href={menuItem.link} className={linkClasses}>{menuItem.display}</Link>
    );

    const secondaryLinks = supplementalLinks.map((menuItem) =>
        <Link key={menuItem.display} href={menuItem.link} className={linkClasses}>{menuItem.display}</Link>
    );

    const copyright = <>
        <div className="w-full pt-6 text-md fade-in text-gray-400">
            <div className="text-center" id="copyright">
                &copy; {new Date().getFullYear()} <a href="http://tylerlatshaw.com" target="_blank" className="hover:text-green-500">Tyler J. Latshaw</a>. All rights reserved.
            </div>
        </div>
    </>;

    return (
        <>
            <div className="h-2 bg-gradient-to-r from-green-500 via-stone-500 to-yellow-400"></div>
            <div className="w-full pb-8 md:py-8 px-3 bg-gray-900 text-white">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3">
                        <div className="grid grid-col content-start w-fit mx-auto py-6">
                            <div className="m-auto mb-3">
                                <Link className="grid items-center text-white hover:text-green-500 no-underline hover:no-underline font-bold text-3xl sm:text-3xl" href="/">
                                    <span className="logo-full">Wordle Analyzer</span>
                                </Link>
                            </div>

                            <div className="flex flex-row md:flex-col w-full justify-center gap-3 md:gap-0 mt-2 md:mt-0">
                                {socialLinks}
                            </div>
                        </div>
                        <div className="w-full md:border-x-2 border-slate-700 py-6">
                            <div className="grid grid-cols-2">
                                <div className="grid grid-col content-start w-fit mx-auto">
                                    <span className="font-medium">Quick Links</span>
                                    {primaryLinks}
                                </div>
                                <div className="grid grid-col content-start w-fit mx-auto">
                                    <span className="font-medium">Site Links</span>
                                    {secondaryLinks}
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-3 sm:px-4 md:px-0 sm:w-[80%] mx-auto py-6 bg-slate-900 md:bg-transparent rounded-md md:rounded-none">
                            <div className="w-full text-center">
                                <span className="font-medium">Send Me a Message</span>
                            </div>
                        </div>
                    </div>
                    {copyright}
                </div>
            </div>
        </>
    );
}