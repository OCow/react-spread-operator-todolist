import React from "react";
import SingleItem from "./SingleItem";

function ListItems(props) {
//   console.log("ListItems() called, props.name: " + props.name);
  return  props.name.map((item, i) => <SingleItem key={i} item={item} /> );
}

export default ListItems;
