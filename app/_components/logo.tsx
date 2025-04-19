/* eslint-disable @next/next/no-html-link-for-pages */
export default function Logo({
    centred = false, }) {
    return (
        <a href="/" className={`flex flex-col ${centred ? " items-center justify-center" : "items-start justify-start"} `}>
            <h1 className=" dark:text-white text-lg font-semibold">
                <span className="">47</span><span className="dark:text-white/70 text-black/50">Labs</span>
            </h1>
            <p className="dark:text-white/70 text-black/50">
                Build <span>•</span> Ship <span>•</span> Scale <span>•</span> Repeat
            </p>
        </a>
    );
}