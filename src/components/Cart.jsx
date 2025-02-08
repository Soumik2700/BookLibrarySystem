import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../utils/cartSlice";

function Cart(){
    const cartItems = useSelector((state) => state.cart.items);
    // console.log(cart);
    const dispatch = useDispatch();

    return(
        <>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Your Cart</h1>

                {cartItems.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((book) => (
                            <li key={book.id} className="flex justify-between items-center border p-2">
                                <div>
                                    <h2 className="text-lg font-semibold">{book.title}</h2>
                                    <p>Quantity: {book.quantity}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        className="bg-green-500 text-white px-3 py-1 rounded"
                                        onClick={() => dispatch(addToCart(book))}
                                    >
                                        +
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                        onClick={() => dispatch(removeFromCart(book))}
                                    >
                                        -
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {cartItems.length > 0 && (
                    <button
                        className="mt-4 bg-red-700 text-white px-4 py-2 rounded"
                        onClick={() => dispatch(clearCart())}
                    >
                        Clear Cart
                    </button>
                )}
            </div>
        </>
    );
}

export default Cart;