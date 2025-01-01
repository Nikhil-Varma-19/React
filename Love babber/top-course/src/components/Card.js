import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let liked =props.liked;
  let setliked =props.setliked;

  const handletoogle=()=>{
//like ha 
    if(liked.includes(course.id)){
      setliked((perv)=> perv.filter((cid)=>(cid !== course.id)))
      toast.warning("Liked Removed")
    }
    //like nhi hai
    else{
        if(liked.length === 0){
          setliked([course.id])
        }
        else{
          setliked((prev)=>[...prev,course.id])
        }
          toast.success("Liked Succesfully")
    }


  }

  return (
    <div className="w-[350px] bg-bgDark  rounded-md overflow-hidden opacity-80">
      <div className="relative">
        <img src={course.image.url} alt={course.image.alt} />
        <div className="w-[35px] h-[35px] bg-white rounded-full absolute  right-2 bottom-3 grid place-items-center">
          <button onClick={handletoogle}>
           {
            liked.includes(course.id) ?  <FcLike fontSize="1.5rem"/> : <FcLikePlaceholder fontSize="1.5rem" />
           }
          </button>
        </div>
      </div>

      <div className="">
        <p className="text-white m-2 font-semibold text-lg leading-10">{course.title}</p>
        <p className="text-white m-2">
          {
          course.description.length > 101 ? (course.description.substr(0,100)):(course.description)
        }...</p>
      </div>
    </div>
  );
};

export default Card;
