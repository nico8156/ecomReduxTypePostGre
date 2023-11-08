import { getData } from "./getProdctsByCategory";


interface Item {
    brand: string;
    category: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    title: string;
    _id: number;
    quantity: number;
  }

export const getSingleProduct = async(_id: number, category: string | string[] | undefined): Promise<any> => {

    
    let categoryString = category?.toString();

    const categoryProduct = categoryString?.replace(" ", "");
    
    const products = await getData(categoryProduct);
    
    const singleProduct = await products.find((product:Item ) => product._id === _id);
    
    return singleProduct;
}