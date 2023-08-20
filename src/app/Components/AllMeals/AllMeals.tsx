"use client";
import React, { useEffect, useState } from "react";
import SingleMeal from "./SingleMeal";
import LoaderComponent from "../Common/Loader";

export default function AllMeals() {
  const [allMeals, setAllMeals] = useState<any>();
  console.log("🚀 ~ file: AllMeals.tsx:7 ~ AllMeals ~ allMeals:", allMeals);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setAllMeals(data.meals);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  if (!allMeals) {
    return <LoaderComponent className="h-80" />;
  }
  return (
    <div className="flex flex-wrap -mx-4">
      {allMeals.map((card: any, index: any) => (
        <SingleMeal
          data={allMeals}
          key={index}
          image={card.strMealThumb}
          title={card.strMeal}
          description={card.strInstructions}
        />
      ))}
    </div>
  );
}
