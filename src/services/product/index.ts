import axios from "axios"

// Call API GET Product
export async function getProduct() {
    const res = await axios.get(`/api/products`);

    if (res.status !== 200) {
        throw new Error("Data was not found.")
    }

    return res.data
}
