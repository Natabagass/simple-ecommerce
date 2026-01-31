import { Product } from "../../../types/response/product";
import { formatUSD } from "../../../utils/converterUSD";
import Button from "../../../components/button";
import StarRating from "../../../components/star-rating";
import Text from "../../../components/text";

const ProductInfo = ({ data }: { data: Product }) => {
    return (
        <div className="flex flex-col md:py-20 gap-4">
            <div className="flex flex-col gap-2">
                <Text
                    weight="font-bold"
                    style={{ color: colorBadge[data?.badge] }}
                >
                    {data?.badge}
                </Text>

                <Text
                    weight="font-bold"
                    size="text-3xl"
                >
                    {data?.name}
                </Text>
            </div>

            <StarRating rating={data?.rating} size={32} />

            <Text
                weight="font-bold"
                size="text-4xl"
            >
                {formatUSD(data?.price)}
            </Text>

            <div className="w-full my-6 h-1 bg-gray-200" />

            <div className="flex flex-row w-full gap-3">
                <Button type="button" color="bg-yellow-400 text-black" className="flex flex-row justify-center items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke='#000000'
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    Add To Cart
                </Button>
                <Button type="button" color="bg-green-500 text-white">
                    Buy Now
                </Button>
            </div>
        </div>
    );
}

export default ProductInfo;

const colorBadge = {
    "SALE": "#EF4444",
    "SELL": "#F97316",
    "NEW": "#22C55E",
    "BESTSELLER": "#2563EB"
} as const