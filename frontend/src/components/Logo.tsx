import React from 'react';
import logoImage from '../assets/logo.jpeg';

type LogoProps = {
  className?: string;
  imageClassName?: string;
};

export const Logo = ({ className = "", imageClassName = "" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImage}
        alt="Ready2Go Overseas Consultancy"
        className={`h-12 w-auto object-contain ${imageClassName}`}
      />
    </div>
  );
};
