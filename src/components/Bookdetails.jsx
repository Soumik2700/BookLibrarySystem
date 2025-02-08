import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import "./BookDetails.css"

function BookDetails(){
    
    const params = useParams();
    // console.log(params);
    const books = useSelector((state) => state.book.books);
    // console.log(books);
    const book = books.filter((book) => book.id == params.id);
    // console.log(book);

    const{title, author, image, description, rating} = book[0];
    // console.log("book",book[0]);

    const dispatch = useDispatch()
    return(
        <>
            <div className="w-full h-full flex flex-col justify-center items-center gap-3">
               <section className="w-[70%] h-[70%] bg-blue-200 flex">
                    <div className="w-[30%] h-full">
                        <img className="w-full h-full" src={image} alt="" />
                    </div>
                    <div className="w-[70%] h-full flex flex-col">
                        <div className="w-full h-[40%] flex flex-col justify-evenly items-center">
                            <h1 className="title">{title}</h1>
                            <h2>Rating: {rating}</h2>
                            <h1 className="author">{author}</h1>
                        </div>
                        <div className="w-full h-[60%] bg-gray-200 p-4 text-justify">{description}</div>
                    </div>
               </section>

                <button className="viewDetails" onClick={() => dispatch(addToCart(book[0]))}>Add to cart</button>
                <Link to={"/browse-books"}>
                    <div className="backToBrowse">Back to Browse</div>
                </Link>
            </div>
        </>
    );
}

export default BookDetails;