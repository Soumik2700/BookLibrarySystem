/* eslint-disable react/prop-types */
import "./Book.css"
import { Link } from "react-router-dom";

function Book(props){
    return(
          <div className="book w-[200px] h-[330px] bg-blue-100 flex flex-col items-center justify-around rounded-lg">
            <img className="w-[200px] h-[200px] rounded-lg" src={props.bookDetails.image} alt=""/>
            <h1 className="text-center">{props.bookDetails.title}</h1>
            <h1>{props.bookDetails.author}</h1>
            <Link to={`/bookDetails/${props.bookDetails.id}`}>
              <div className="viewDetails">View details</div>
            </Link>
          </div>
    );
}

export default Book;