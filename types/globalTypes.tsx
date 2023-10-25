export interface Product{
    rootreducer: any
    id: number,
    title: string,
    price: number,
    category: string,
    previousPrice: number,
    description: string,
    image: string,
    isNew: boolean,
    brand: string,
    quantity: number
}

export interface User {
    rootreducer: any
    username: string
    email: string
    photo?: string
}

export interface ProductSlice {
    currentProducts: Product[] | null,
    status: string,
    error: null | string
}

export interface Item {
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