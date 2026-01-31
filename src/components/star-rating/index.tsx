const StarRating = ({
    rating,
    max = 5,
    size = 20,
    color = "#FACC15"
}: {
    rating: number;
    max?: number;
    size?: number;
    color?: string;
}) => {
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: max }).map((_, i) => {
                const starIndex = i + 1;

                if (rating >= starIndex) {
                    return <FullStar key={i} size={size} color={color} />;
                }

                if (rating >= starIndex - 0.5) {
                    return <HalfStar key={i} size={size} color={color} />;
                }

                return <EmptyStar key={i} size={size} />;
            })}
        </div>
    );
};

export default StarRating;


const FullStar = ({ size, color }: { size: number; color: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const HalfStar = ({ size, color }: { size: number; color: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
        <defs>
            <linearGradient id="half">
                <stop offset="50%" stopColor={color} />
                <stop offset="50%" stopColor="#E5E7EB" />
            </linearGradient>
        </defs>
        <path
            fill="url(#half)"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
    </svg>
);


const EmptyStar = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#E5E7EB">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);
