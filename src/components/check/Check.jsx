import React from "react";
import useFetch from "./UseFetch";
export const Check = () => {
  const { response, isLoading, error } = useFetch();

  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <>
      {response?.map((curElem, index) => {
        return <p key={index}>{curElem.title}</p>;
      })}
    </>
  );
};
