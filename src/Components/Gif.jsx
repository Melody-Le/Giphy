import React from "react";

const Gif = (props) => {
  return (
    <div>
      <img src={props.url}></img>
      <p>{props.title}</p>
    </div>
  );
};

export default Gif;
