import React, { useState } from "react";

export default function Square(props/*{value,onClick}*/) {
  return <button className="square" onClick={()=>props.onClick()}>{props.value}</button>;
}
