import React from "react";
// let url :string ="https://www.google.com"
// url=5
// function convertCurrency(amount: number, currency: string): string {
//   return "yes";
// }
// convertCurrency(1, "USD");
type Color = "yellow" | "green";
type Button2Props = {
  // backgroundColor: string;
  backgroundColor: "red" | "blue";
  textColor?: Color;
  fontSize: number;
  pillShape?: boolean;
  padding?:number[];//array[number]
};
export default function Button2({
  backgroundColor,
  fontSize,
  pillShape,
}: Button2Props) {
  return <button>Button2</button>;
}
