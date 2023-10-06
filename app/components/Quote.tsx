import React from "react";

const Quote = () => {
  return (
    <div className="py-[150px] px-10">
      <div className="w-1/2 mx-auto text-center">
        <blockquote className="text-[1.875rem] mb-5 leading-snug font-zapf">
        &lsquo;Nothing is ever ended, everything only begun.&rsquo;
        </blockquote>
        <cite className="text-[.875rem] leading-loose font-semibold not-italic">Sara Teasdale</cite>
      </div>
    </div>
  );
};

export default Quote;
