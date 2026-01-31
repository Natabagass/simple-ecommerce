const ProductDetailSkeleton = () => (
    <div className="w-full flex min-h-screen items-center justify-center">
        <div className="w-full max-w-6xl px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                
                <div className="aspect-square bg-gray-200 rounded-xl md:col-span-2 animate-pulse" />

                <div className="space-y-4">
                    <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
                    <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
                    <div className="h-10 w-40 bg-gray-200 rounded animate-pulse mt-6" />
                </div>

            </div>
        </div>
    </div>
);

export default ProductDetailSkeleton;