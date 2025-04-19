export default function Tooltip({
    children,
    text,
    className,
}: Readonly<{
    children: React.ReactNode;
    text: string;
    className?: string;
}>) {
    return (
        <div className={`relative group text-center ${className}`}>
            {children}
            <div className="absolute hidden rounded-lg group-hover:block -top-8 left-1/2 transform -translate-x-1/2">
                {text}
            </div>
        </div>
    );
}