import React from "react";
import "./Input.scss";

interface IInput {
  onChange: any;
  value: string;
  placeholder: string;
}

const Input = ({ onChange, value, placeholder }: IInput) => {
  return (
    <input
      className="input"
      onChange={(e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        onChange(newValue);
      }}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
