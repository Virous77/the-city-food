import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./CartReducer";
import { toast } from "react-toastify";

const CartContext = createContext();

const localStorageCart = () => {
  let cart = localStorage.getItem("cartItems");

  if (cart) {
    return JSON.parse(localStorage.getItem("cartItems"));
  } else {
    return [];
  }
};

const initialState = {
  cart: localStorageCart(),
  cartShow: false,
  totalAmount: 0,
  totalItems: 0,
  shippingFee: 5,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const showCart = () => {
    dispatch({ type: "SHOW-CART" });
  };

  const hideCart = () => {
    dispatch({ type: "HIDE-CART" });
  };

  //Add To Cart
  const addToCart = (data) => {
    dispatch({ type: "ADD-CART", payload: data });
    toast.success("Item added to Cart!");
  };

  //RemoveFromCart
  const removeCartItem = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  //ClearCart
  const clearCart = () => {
    dispatch({ type: "CLEAR-CART" });
  };

  // const incCartButton = (item) => {
  //   dispatch({ type: "INC-ITEM", payload: item });
  // };

  // const decCartButton = (item) => {
  //   dispatch({ type: "DEC-ITEM", payload: item });
  // };

  const toggleCart = (id, value) => {
    console.log(id, value);
    dispatch({ type: "TOGGLE-ITEM", payload: { id, value } });
  };

  //Update to localStorage
  useEffect(() => {
    dispatch({ type: "COUNT-CART-ITEM" });
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        showCart,
        addToCart,
        clearCart,
        removeCartItem,
        hideCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
