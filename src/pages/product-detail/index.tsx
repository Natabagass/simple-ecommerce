import { useState } from "react";
import ProductGallery from "../../components/product/gallery";
import { useProduct } from "../../hooks/custom/useProduct";
import ProductInfo from "../../components/product/info";


const ProductDetailPage = () => {
    const { data, isLoading, error } = useProduct();
    const [activeIndex, setActiveIndex] = useState(0);

    if (isLoading) return <div>Loading...</div>;

    const activeProduct = data.data[activeIndex];

    console.log(data)

    return (
        <div className="w-full flex min-h-screen items-center justify-center">
            <div className="w-full max-w-6xl px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    <ProductGallery
                        data={data}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />
                    <ProductInfo
                        data={activeProduct}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;