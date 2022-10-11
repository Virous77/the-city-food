const reducer = (state, action) => {
  if (action.type === "SHOW-CART") {
    return {
      ...state,
      cartShow: true,
    };
  }

  if (action.type === "HIDE-CART") {
    return {
      ...state,
      cartShow: false,
    };
  }

  if (action.type === "ADD-CART") {
    const { id, title, price, imageURL: image, calories, qty } = action.payload;

    const tempItem = state.cart.find((i) => i.id === id);

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmmount = +cartItem.price + +price;
          let newQty = cartItem.qty + +qty;

          return {
            ...cartItem,
            price: newAmmount,
            qty: newQty,
          };
        } else {
          return cartItem;
        }
      });

      return {
        ...state,
        cart: tempCart,
      };
    } else {
      const newItem = {
        id: id,
        title: title,
        price: price,
        image: image,
        calories: calories,
        qty: qty,
      };

      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === "DELETE") {
    let tempCart = state.cart.filter((data) => data.id !== action.payload);

    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === "CLEAR-CART") {
    return {
      ...state,
      cart: [],
    };
  }

  // if (action.type === "INC-ITEM") {
  //   const { id, price } = action.payload;

  //   const tempCart = state.cart.map((item) => {
  //     if (item.id === id) {
  //       let newQty = +item.qty + 1;
  //       let newAmmount = item.price + price;

  //       return {
  //         ...item,
  //         qty: newQty,
  //         price: newAmmount,
  //       };
  //     }
  //   });

  //   return {
  //     ...state,
  //     cart: tempCart,
  //   };
  // }

  // if (action.type === "DEC-ITEM") {
  //   const { id, price } = action.payload;
  //   const tempCart = state.cart.map((item) => {
  //     if (item.id === id) {
  //       let newQty = +item.qty - 1;
  //       let newAmmount = item.price - price;

  //       return {
  //         ...item,
  //         qty: newQty,
  //         price: newAmmount,
  //       };
  //     }
  //   });

  //   return {
  //     ...state,
  //     cart: tempCart,
  //   };
  // }

  if (action.type === "TOGGLE-ITEM") {
    const { id, value } = action.payload;

    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmmount = item.qty + 1;

          return {
            ...item,
            qty: newAmmount,
          };
        }

        if (value === "dec") {
          let newAmmount = item.qty - 1;

          if (newAmmount < 1) {
            newAmmount = 1;
          }

          return {
            ...item,
            qty: newAmmount,
          };
        }
      } else {
        return item;
      }
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === "COUNT-CART-ITEM") {
    const { totalAmount, totalItems } = state.cart.reduce(
      (total, curr) => {
        const { qty, price } = curr;

        total.totalItems += qty;
        total.totalAmount += +price * qty;

        return total;
      },
      {
        totalAmount: 0,
        totalItems: 0,
      }
    );

    return {
      ...state,
      totalAmount,
      totalItems,
    };
  }
};

export default reducer;
