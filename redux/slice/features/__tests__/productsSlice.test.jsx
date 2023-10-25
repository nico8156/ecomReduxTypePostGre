import productsReducer, { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, setAllProducts } from '../productsSlice';

describe('productsSlice', () => {
  it('should use action addToCart', () => {
    const initialState = {
      productData: [],
      allProducts: [],
    };

    const productToAdd = { id: 1, name: 'Product 1', quantity: 1 }; // Exemple de produit à ajouter

    const action = addToCart(productToAdd);

    const newState = productsReducer(initialState, action);

    
    expect(newState.productData).toContainEqual(productToAdd);
  });

  it('should use action removeFromCart', () => {
    const initialState = {
      productData: [{ id: 1, name: 'Product 1', quantity: 1 }],
      allProducts: [] 
    };

    const productToRemove = { id: 1 };

    const action = removeFromCart(productToRemove);

    const newState = productsReducer(initialState, action);

    
    expect(newState.productData).not.toContainEqual(productToRemove);
  });

  it('should use action increaseQuantity', () => {
    const initialState = {
      productData: [{ id: 1, name: 'Product 1', quantity: 1 }],
      allProducts: [] 
    };

    const productToIncrease = { id: 1 }; 

    const action = increaseQuantity(productToIncrease);

    const newState = productsReducer(initialState, action);

   
    expect(newState.productData.find((item) => item.id === productToIncrease.id)?.quantity).toBe(2);
  });

  it('should use action decreaseQuantity', () => {
    const initialState = {
      productData: [{ id: 1, name: 'Product 1', quantity: 2 }],
      allProducts: [] 
    };

    const productToDecrease = { id: 1 }; 

    const action = decreaseQuantity(productToDecrease);

    const newState = productsReducer(initialState, action);

    
    expect(newState.productData.find((item) => item.id === productToDecrease.id)?.quantity).toBe(1);
  });

  it('should use action clearCart to get initialState', () => {
    const initialState = {
      productData: [{ id: 1, name: 'Product 1', quantity: 1 }],
      allProducts: [] // Vous devrez peut-être fournir des données ici
    };

    const action = clearCart();

    const newState = productsReducer(initialState, action);

    // Assurez-vous que productData est vide après avoir effacé le panier
    expect(newState.productData.length).toBe(0);
  });

  it('should use action to load the products', () => {
    const initialState = {
      productData: [],
      allProducts: [] // Vous devrez peut-être fournir des données ici
    };

    const newAllProducts = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];

    const action = setAllProducts(newAllProducts);

    const newState = productsReducer(initialState, action);

    // Assurez-vous que allProducts a été correctement mis à jour
    expect(newState.allProducts).toEqual(newAllProducts);
  });

  
});
