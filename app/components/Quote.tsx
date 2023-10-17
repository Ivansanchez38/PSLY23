import React from "react";

const Quote = () => {
  return (
    <div className="py-[150px] px-4 md:px-10">
      <div className="w-full md:w-1/2 mx-auto text-center">
        <blockquote className="text-2xl md:text-3xl mb-5 leading-snug font-zapf">
        &lsquo;Nothing is ever ended, everything only begun.&rsquo;
        </blockquote>
        <cite className="text-[.875rem] leading-loose font-semibold not-italic">Sara Teasdale</cite>
      </div>
    </div>
  );
};

export default Quote;
