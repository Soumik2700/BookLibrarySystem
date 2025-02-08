/* eslint-disable react/prop-types */
function CategoryButtons({operation}){
    // console.log("cate",operation);
    return(
        <>
            
                <div className="w-[20%] h-[100px] bg-amber-300 rounded-2xl flex justify-center items-center text-slate-100 font-extrabold text-2xl" onClick={operation.fiction}>Fiction</div>
                <div className="w-[20%] h-[100px] bg-red-300 rounded-2xl flex justify-center items-center text-slate-100 font-extrabold text-2xl" onClick={operation.nonFiction}>Non Fiction</div>
                <div className="w-[20%] h-[100px] bg-green-300 rounded-2xl flex justify-center items-center text-slate-100 font-extrabold text-2xl" onClick={operation.scifi}>Science Fiction</div>

        </>
    );
}

export default CategoryButtons;