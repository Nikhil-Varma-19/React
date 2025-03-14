/* eslint-disable react/prop-types */
import { useState } from "react";
// id, image, info, price, name

const Card = ({tours,removeTours}) => {
  const [moreless, setmoreless] = useState(false);

  const description = moreless ? tours.info :`${tours.info.substring(0, 200)}`;

  const handlertText = () => {
    setmoreless(!moreless);
  };

  return (
    <div className=" h-max w-[400px] m-4 p-4 flex flex-col rounded-lg items-center shadow-[rgba(0,0,0,0.24)_0px_3px_8px]  ">
      <img src={tours.image} className="w-[380px] object-cover aspect-[1/1]" />
    <div className="tour-info">
    <div className="tour-delails">
        <h3 className="text-green-400 pt-2 text-xl font-naruto font-bold">₹ {tours.price}</h3>
        <h4 className="font-naruto text-2xl font-bold p-1">{tours.name}</h4>
      </div>
      <div className="tour-desc">
        {description}....
        <span className="read-more hover:cursor-pointer" onClick={handlertText}>
          {moreless ? `Show less` : ` Read More`}
        </span>
      </div>
    </div>
    <button className="bg-blue-400 w-full rounded-md m-2 font-naruto hover:text-white py-2 text-xl hover:bg-red-600 text-black " onClick={()=> removeTours(tours.id)}>Not Interested</button>
    </div>
  );
};

export default Card;
