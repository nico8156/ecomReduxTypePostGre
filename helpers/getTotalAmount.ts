import { Item } from "@/types/globalTypes";


export const getTotalAmount = (products: any) => {
    let totalAmount = 0
    products.map((item: Item) => {
        totalAmount += item.price * item.quantity;
    })
    return totalAmount.toFixed(2);
}