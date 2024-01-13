"use client";

import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FormFooterContact from "./footer-contact";
import { navigationLinks, supplementalLinks } from "./navigation-links";

export default function Footer() {

    const primaryLinks = navigationLinks.map((menuItem) =>
        <Link key={menuItem.display} href={menuItem.link} className="w-fit text-blue-300 no-underline hover:text-green-500 hover:text-underline transform hover:scale-125 duration-300 ease-in-out">{menuItem.display}</Link>
    );

    const secondaryLinks = supplementalLinks.map((menuItem) =>
        <Link key={menuItem.display} href={menuItem.link} className="w-fit text-blue-300 no-underline hover:text-green-500 hover:text-underline transform hover:scale-125 duration-300 ease-in-out">{menuItem.display}</Link>
    );

    return (
        <>
            <div className="h-2 bg-gradient-to-r from-green-500 via-stone-500 to-yellow-400"></div>
            <div className="w-full pb-8 md:py-8 px-3 bg-gray-900 text-white">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3">
                        <div className="grid grid-col content-start w-fit mx-auto py-6">
                            <div className="m-auto">
                                <Link className="grid items-center text-white hover:text-green-500 no-underline hover:no-underline font-bold text-3xl sm:text-3xl" href="/">
                                    <span className="logo-full">Wordle Analyzer</span>
                                </Link>
                            </div>
                            <div className="grid justify-items-center">
                                <div className="mt-6">
                                    <a href="mailto:tyler@tylerlatshaw.com" className="group block" target="_blank">
                                        <div className="flex items-center">
                                            <MailOutlineIcon className="group-hover:text-green-500" />&nbsp;
                                            <h3 className="text-white group-hover:text-green-500">tyler@tylerlatshaw.com</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="grid justify-items-center">
                                <div className="mt-3">
                                    <a href="https://www.linkedin.com/in/tylerlatshaw/" className="group block" target="_blank">
                                        <div className="flex items-center">
                                            <LinkedInIcon className="group-hover:text-green-500" />&nbsp;
                                            <h3 className="text-white group-hover:text-green-500">Connect With Me On LinkedIn</h3>
                                        </div>
                                    </a>
                                </div>
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
                            {/* <FormFooterContact /> */}
                        </div>
                    </div>
                    <div className="w-full pt-6 text-md fade-in text-gray-400">
                        <div className="text-center" id="copyright">
                            &copy; {new Date().getFullYear()} Tyler J. Latshaw. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}