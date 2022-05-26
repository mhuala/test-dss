import { React, Fragment } from "react";
import hublogo from "../Images/assets/hub-logo.svg";

export default function Footer2() {
    return (
        <Fragment>
            <div className="block bg-brand w-full">
                <svg
                    id="wave"
                    viewBox="0 0 1440 150"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            id="sw-gradient-0"
                            x1={0}
                            x2={0}
                            y1={1}
                            y2={0}
                        >
                            <stop
                                stopColor="rgba(67, 56, 202, 1)"
                                offset="0%"
                            />
                            <stop
                                stopColor="rgba(13, 13, 43, 1)"
                                offset="100%"
                            />
                        </linearGradient>
                    </defs>
                    <path
                        style={{ transform: "translate(0, 0px)", opacity: 1 }}
                        fill="url(#sw-gradient-0)"
                        d="M0,75L48,80C96,85,192,95,288,102.5C384,110,480,115,576,120C672,125,768,130,864,125C960,120,1056,105,1152,90C1248,75,1344,60,1440,67.5C1536,75,1632,105,1728,107.5C1824,110,1920,85,2016,67.5C2112,50,2208,40,2304,47.5C2400,55,2496,80,2592,97.5C2688,115,2784,125,2880,112.5C2976,100,3072,65,3168,60C3264,55,3360,80,3456,87.5C3552,95,3648,85,3744,77.5C3840,70,3936,65,4032,72.5C4128,80,4224,100,4320,105C4416,110,4512,100,4608,95C4704,90,4800,90,4896,75C4992,60,5088,30,5184,15C5280,0,5376,0,5472,5C5568,10,5664,20,5760,22.5C5856,25,5952,20,6048,17.5C6144,15,6240,15,6336,12.5C6432,10,6528,5,6624,22.5C6720,40,6816,80,6864,100L6912,120L6912,150L6864,150C6816,150,6720,150,6624,150C6528,150,6432,150,6336,150C6240,150,6144,150,6048,150C5952,150,5856,150,5760,150C5664,150,5568,150,5472,150C5376,150,5280,150,5184,150C5088,150,4992,150,4896,150C4800,150,4704,150,4608,150C4512,150,4416,150,4320,150C4224,150,4128,150,4032,150C3936,150,3840,150,3744,150C3648,150,3552,150,3456,150C3360,150,3264,150,3168,150C3072,150,2976,150,2880,150C2784,150,2688,150,2592,150C2496,150,2400,150,2304,150C2208,150,2112,150,2016,150C1920,150,1824,150,1728,150C1632,150,1536,150,1440,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"
                    />
                </svg>
                <div className="bg-indigo-700">
                    <footer className="flex mx-auto items-center">
                        <div className="px-5 py-16 grid grid-cols-1 md:grid-cols-5 mx-auto">
                            {/* IMAGE */}
                            <div className="col-span-1">
                                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                                    <img
                                        src={hublogo}
                                        className="h-32 mb-10 pr-10"
                                    />
                                </a>
                                <p className="mt-2 text-sm text-white"></p>
                            </div>
                            {/* FOOTER CATEGORIES*/}
                            <div className="col-span-1 md:col-span-2 md:text-left text-center md:ml-10">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className="w-full px-4">
                                        <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                                            NOSOTROS
                                        </h2>
                                        <nav className="list-none mb-10">
                                            <li>
                                                <a
                                                    className="text-white hover:text-red-300"
                                                    href="#"
                                                >
                                                    First Link
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-white hover:text-red-300"
                                                    href="#"
                                                >
                                                    Second Link
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-white hover:text-red-300"
                                                    href="#"
                                                >
                                                    Third Link
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-white hover:text-red-300"
                                                    href="#"
                                                >
                                                    Fourth Link
                                                </a>
                                            </li>
                                        </nav>
                                    </div>
                                    <div className="w-full px-4">
                                        <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                                            PARTNERS
                                        </h2>
                                        <nav className="list-none mb-10">
                                            <li>
                                                <a
                                                    className="text-white hover:text-red-300"
                                                    href="#"
                                                >
                                                    First Link
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-white hover:text-red-300"
                                                    href="#"
                                                >
                                                    Second Link
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-white hover:text-red-300"
                                                    href="#"
                                                >
                                                    Third Link
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-white hover:text-red-300"
                                                    href="#"
                                                >
                                                    Fourth Link
                                                </a>
                                            </li>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            {/* MAP */}
                            <div className="col-span-1 md:col-span-2">
                                <div className="mapouter">
                                    <div className="gmap_canvas ">
                                        <iframe
                                            width={417}
                                            height={142}
                                            id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=Corporaci%C3%B3n%20de%20Desarrollo%20Valdivia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            frameBorder={0}
                                            scrolling="no"
                                            marginHeight={0}
                                            marginWidth={0}
                                        />
                                        <a href="https://123movies-to.org">
                                            123movies
                                        </a>
                                        <br />
                                        <style
                                            dangerouslySetInnerHTML={{
                                                __html: ".mapouter{position:relative;text-align:right;height:142px;width:417px;}",
                                            }}
                                        />
                                        <a href="https://www.embedgooglemap.net">
                                            embedgooglemap.net
                                        </a>
                                        <style
                                            dangerouslySetInnerHTML={{
                                                __html: ".gmap_canvas {overflow:hidden;background:none!important;height:142px;width:417px;}",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* Personal INFO */}
                    <div className="bg-indigo-900">
                        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                            <p className="text-white text-sm text-center sm:text-left">
                                © 2021 Developed —
                                <a
                                    href="https://twitter.com/knyttneve"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 ml-1"
                                    target="_blank"
                                >
                                    @mhuala
                                </a>
                            </p>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                <a className="text-gray-200">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-200">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-200">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect
                                            width={20}
                                            height={20}
                                            x={2}
                                            y={2}
                                            rx={5}
                                            ry={5}
                                        />
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-200">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={0}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="none"
                                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                        />
                                        <circle
                                            cx={4}
                                            cy={4}
                                            r={2}
                                            stroke="none"
                                        />
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="#fff"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
