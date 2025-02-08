import { createSlice } from "@reduxjs/toolkit";

// Load cart data from localStorage
const loadCartFromStorage = () => {
    const cartData = localStorage.getItem("cart");
    console.log(cartData);
    return cartData ? JSON.parse(cartData) : [];
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: loadCartFromStorage(),
    },
    reducers: {
        addToCart: (state, action) => {
            const existingBook = state.items.find((book) => book.id === action.payload.id);
            if (existingBook) {
                existingBook.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state.items)); // Save cart to localStorage
        },

        removeFromCart: (state, action) => {
            state.items = state.items
                .map((book) =>
                    book.id === action.payload.id
                        ? { ...book, quantity: book.quantity - 1 } // Decrease quantity
                        : book
                )
                .filter((book) => book.quantity > 0); // Remove item only when quantity reaches 0

            localStorage.setItem("cart", JSON.stringify(state.items)); // Save updated cart
        },

        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem("cart"); // Remove cart from storage
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
