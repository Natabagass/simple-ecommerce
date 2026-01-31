import Text from "../text";

const ErrorState = ({
    title,
    description,
    onRetry
}: {
    title: string;
    description?: string;
    onRetry?: () => void;
}) => {
    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen text-center gap-4">
            <div className="w-full h-full relative">
                <img
                    src="/assets/images/error-state.webp"
                    alt="Error State - E-Commerce"
                    width={600}
                    height={400}
                />
            </div>

            <Text size="text-lg" weight="font-semibold">
                {title}
            </Text>

            <Text size="text-sm" color="text-gray-500" weight="font-normal" className="max-w-sm">
                {description}
            </Text>

        </div>
    );
}

export default ErrorState;