import { IoMdArrowBack } from "react-icons/io";
import { useRouteError } from "react-router-dom";
import "./Error.css"
import { Link } from "react-router-dom";

function Error(){
    const showError = useRouteError();
    console.log(showError);

    return(
        <>
           <div className="w-full flex flex-col items-center justify-center">
                <h1>{showError.status} {showError.statusText}</h1>
                <h1>{showError.data}</h1>
               
               <Link to="/">
                    <div className="backToHome w-20 h-8 flex justify-around items-center bg-green-500">
                        <p>Home</p>

                        <IoMdArrowBack />
                    </div>
               </Link>
           </div>
        </>
    );
}

export default Error;