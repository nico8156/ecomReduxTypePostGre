import Products from "@/components/products/Products";
import { getData } from "@/helpers/getProdctsByCategory";
import { Item } from "@/types/globalTypes";


const Store = async() => {

  const category: string = "phone";

  const products: Item[] = await getData(category);

  return (
    <div className="flex flex-wrap gap-5 justify-evenly overflow-y-auto no-scrollbar">
       <Products products={products}/>
    </div>
  )
}

export default Store