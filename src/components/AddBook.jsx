import {useState} from "react"
import { addBook } from "../utils/bookSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./AddBook.css"

function AddBook(){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handelSubmit(e){
        e.preventDefault();

        if(!title || !author || !imageUrl || !category || !description){
            alert("all fields are required");
        }else{
            dispatch(addBook({
                id: Date.now(),
                title,
                author,
                image: imageUrl,
                category,
                description
            }))
        }
        
        navigate("/browse-books");

    }
    return(
        <div className="w-full h-full flex justify-center">
            <form className="w-[40%] h-[70%] flex gap-5 justify-center items-center" onSubmit={handelSubmit}>
                <div className=" w-full h-full flex flex-col items-center justify-center">
                    <div className="flex flex-col">
                        <label htmlFor="Title">Title</label>
                        <input className="w-60 p-1 border rounded-lg" type="text" placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Author">Author</label>
                        <input className="w-60 p-1 border rounded-lg" type="text" placeholder="Author name" onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Image">Image</label>
                        <input className="w-60 p-1 border rounded-lg" type="text" placeholder="Enter image URL" onChange={(e) => setImageUrl(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Category">Category</label>
                        <input className="w-60 p-1 border rounded-lg" type="text" placeholder="Enter Category" onChange={(e) => setCategory(e.target.value)} />
                    </div>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <textarea className="border w-full h-[36%] p-1" name="description" placeholder="Enter description" id="" onChange={(e) => setDescription(e.target.value)}></textarea>
                    <button className="submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddBook;