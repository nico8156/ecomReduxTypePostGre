

export const getTotalAmount = (products: any) => {
    let totalAmount = 0
    products.map((item: any) => {
        totalAmount += item.price * item.quantity;
    })
    return totalAmount.toFixed(2);
}