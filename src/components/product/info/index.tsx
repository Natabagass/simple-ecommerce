import { Product } from "../../../types/response/product";

const ProductInfo = ({ data }: { data: Product }) => {
    return (
        <div className="flex flex-col py-20">
            <span className="">{data.badge}</span>
        </div>
    );
}

export default ProductInfo;