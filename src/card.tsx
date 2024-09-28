import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="w-96 h-56 bg-white shadow-lg rounded-lg overflow-hidden">
      {children}
    </div>
  );
};

export default Card;
