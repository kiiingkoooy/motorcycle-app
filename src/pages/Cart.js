import React, { useContext } from "react";
import CardCart from "../components/CardCart";
import { Context } from "../store/Store";

export default function Cart({itemCart}) { 

  return (
    <CardCart itemCart={itemCart}/>
  );
}
