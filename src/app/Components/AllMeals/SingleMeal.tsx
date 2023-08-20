import { useAppDispatch } from "@/hooks";
import { increment } from "@/redux/features/counter/counterSlice";
import React from "react";

const SingleMeal = ({ data, image, title, description }: any) => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 w-full sm:w-1/2 lg:w-1/3">
      <img
        src={image}
        alt={title}
        className="mb-4 h-32 w-full object-cover rounded-lg"
      />
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>

        <div
          className="bg-green-500 px-3 py-2 text-white font-bold rounded-md cursor-pointer hover:bg-slate-400"
          onClick={() => dispatch(increment())}
        >
          Add To Cart
        </div>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default SingleMeal;
