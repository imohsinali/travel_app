import Image from "next/image";
import React from "react";
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  variant: "btn_dark_green";
  icon: string;
};
const Button = ({ type, variant, title, icon }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
