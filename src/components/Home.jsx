/* eslint-disable react/jsx-key */
import { useState } from "react";
import CategoryButtons from "./CategoryButtons";
// import books from "../utils/mockData";
import Book from "./book";
import { button } from "framer-motion/client";
import { useSelector } from "react-redux";


function Home(){
    const books = useSelector((state) => state.book.books)

    const [filteredBooks, setFilteredBooks] = useState(books);
    const[isClicked, setIsClicked] = useState(false);

    // console.log(filteredBooks);

    function handelFiction(){
        const afterFilter = books.filter((book)=> book.category == "Fiction")
        setFilteredBooks(afterFilter);
        setIsClicked(true);
        // console.log(filteredBooks);
    }

    function handelNonFiction() {
        const afterFilter = books.filter((book) => book.category == "Non-Fiction")
        setFilteredBooks(afterFilter);
        setIsClicked(true);
        // console.log(filteredBooks);
    }

    function handelScienceFiction() {
        const afterFilter = books.filter((book) => book.category == "Science Fiction")
        setFilteredBooks(afterFilter);
        setIsClicked(true);
        // console.log(filteredBooks);
    }

    return(
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-full p-8 flex justify-center items-center gap-10 flex-wrap-reverse">
                 {
                !isClicked ? (<CategoryButtons operation={{fiction:handelFiction, nonFiction: handelNonFiction, scifi: handelScienceFiction}} />) : filteredBooks.map((book)=>(
                <Book key={book.id} bookDetails = {book}/>
             ))
            
          }
          
            </div>
            {
                isClicked && <button className=" w-[100px] h-[50px] my-12 bg-green-400 rounded-2xl" onClick={()=> setIsClicked(false)}>back</button>
            }
        </div>
       
    );
}
export default Home