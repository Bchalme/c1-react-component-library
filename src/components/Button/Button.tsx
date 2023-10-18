import React from "react";
import './Button.css'

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="button-1">{props.label}</button>;
};

export default Button;