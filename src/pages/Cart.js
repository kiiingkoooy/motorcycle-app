import React from "react";
import CardCart from "../components/CardCart";
import { useCart } from "../store/Store";

export default function Cart() {
  const { itemCart, setItemCart } = useCart();

  return <CardCart itemCart={itemCart} setItemCart={setItemCart} />;
}
