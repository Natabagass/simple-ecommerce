import { useState } from "react";
import ProductGallery from "../../sections/product/gallery";
import { useProduct } from "../../hooks/custom/useProduct";
import ProductInfo from "../../sections/product/info";
import ErrorState from "../../components/error";
import ProductDetailSkeleton from "../../sections/product/skeleton";


const ProductDetailPage = () => {
    const { data, isLoading, error,} = useProduct();
    const [activeIndex, setActiveIndex] = useState(0);

    if (isLoading) return  (
        <ProductDetailSkeleton />
    );

    if (error) return (
        <ErrorState
            title="Something went wrong."
        />
    )

    const activeProduct = data?.data[activeIndex];

    return (
        <div className="w-full flex min-h-screen items-center justify-center">
            <div className="w-full max-w-6xl px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
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