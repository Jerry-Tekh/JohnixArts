import React from "react";
import Typewriter from "typewriter-effect";




const TypewriterEffect = ({
  words,
  children,

}) => {
  // Allow wrapping text OR passing words array
  const typeWords = words || [children];

  return (
    <Typewriter
       options={{
        strings: typeWords,
        autoStart: true,
        loop: true,
        delay: 120,
        deleteSpeed: 40,
      }}
    />
  );
};

export default TypewriterEffect;
