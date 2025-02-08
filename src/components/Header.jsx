import { IoMdHome } from "react-icons/io";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const cartItems = useSelector((state) => state.cart.items);

    // Calculate total quantity
    const cartLength = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <div className="header w-full bg-slate-800 text-amber-50 flex justify-around items-center">
                <div className="text-4xl font-bold">BOOK HAVEN</div>
                <ul className="flex w-[20%] justify-around">
                    <Link to="/"><li className="flex justify-center items-center gap-1 home"><IoMdHome />Home</li></Link>
                    <Link to="/browse-books"><li>Browse Books</li></Link>
                    <Link to="/add-book"><li>Add book</li></Link>
                </ul>
                <Link to="/cart">
                    <div>{cartLength} Cart</div>
                    {/* Now cart length updates automatically! ✅ */}
                </Link>
            </div>
        </>
    );
}

export default Header;
