import React from "react";
import './Button2.css'

export interface ButtonProps {
  label: string;
}

const Button2 = (props: ButtonProps) => {
  return <button className="button-2">{props.label}</button>;
};

export default Button2;