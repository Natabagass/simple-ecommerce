import { useState } from "react";

const BlurImage = ({
    src,
    alt,
    className
}: {
    src: string,
    alt: string,
    className: string
}) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative w-full h-full bg-gray-100">
            {!loaded && (
                <img
                    src={GENERIC_PLACEHOLDER}
                    aria-hidden
                    width={400}
                    height={400}
                    alt="Image Placeholder - E-Commerce"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}

            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                className={className}
            />
        </div>
    );
};

export default BlurImage;

export const GENERIC_PLACEHOLDER = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNFNUU3RUIiIC8+PC9zdmc+";

