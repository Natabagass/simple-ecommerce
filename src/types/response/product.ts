export interface ProductImage {
    id: string;
    url: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    rating: number;
    badge: string;
    images: ProductImage[];
}

export interface ProductResponse {
    status: "success";
    data: Product[];
}
