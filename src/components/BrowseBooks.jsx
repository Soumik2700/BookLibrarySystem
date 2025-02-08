import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Book from "./book";
import { IoSearchOutline } from "react-icons/io5";

function BrowseBooks() {
    const books = useSelector((state) => state.book.books);
    const { category } = useParams();  // This will get the category from the URL
    const [filteredBooks, setFilteredBooks] = useState(books);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        if (category) {
            // Filter books by the category from the URL
            const newBooks = books.filter((book) => book.category.toLowerCase() === category.toLowerCase());
            setFilteredBooks(newBooks);
        } else {
            setFilteredBooks(books);
        }
    }, [category, books]);

    function handleFilter() {
        const newBooks = books.filter(
            (book) =>
                book.author.toLowerCase().includes(searchValue.toLowerCase()) ||
                book.category.toLowerCase().includes(searchValue.toLowerCase()) ||
                book.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        setFilteredBooks(newBooks);
    }

    return (
        <div className="w-full h-full">
            <div className="gap-2 p-1 flex justify-center items-center border">
                <input
                    className="border w-[20%] m-2 p-1 rounded-lg"
                    type="text"
                    placeholder="Search books"
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className="border p-2 rounded-md" onClick={handleFilter}>
                    <IoSearchOutline />
                </button>
                <div className="flex w-120 justify-evenly">
                    <p>Categories: </p>
                    <Link to="/browse-books/Fiction">
                        <div className="p-1 bg-amber-300 rounded-lg">Fiction</div>
                    </Link>
                    <Link to="/browse-books/Non-Fiction">
                        <div className="p-1 bg-green-300 rounded-lg">Non-fiction</div>
                    </Link>
                    <Link to="/browse-books/Science Fiction">
                        <div className="p-1 bg-red-300 rounded-lg">Science Fiction</div>
                    </Link>
                </div>
            </div>
            <div className="w-full border flex justify-center items-center flex-wrap p-25 gap-10">
                {filteredBooks.map((book) => (
                    <Book key={book.id} bookDetails={book} />
                ))}
            </div>
        </div>
    );
}

export default BrowseBooks;
