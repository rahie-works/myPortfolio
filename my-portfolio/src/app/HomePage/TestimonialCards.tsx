import React, { useState, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { Testimonials } from "./TestimonialConstants";

export const TestimonialCards = () => {
  const [changeTestimonial, setChangeTestimonial] = useState(0);

  const updateTestimonial = (arrow: string) => {
    switch (arrow) {
      case "right":
        if (changeTestimonial + 1 === Testimonials.length) {
          setChangeTestimonial(0);
        } else {
          setChangeTestimonial(changeTestimonial + 1);
        }
        break;
      case "left":
        if (changeTestimonial === 0) {
          setChangeTestimonial(Testimonials.length - 1);
        } else {
          setChangeTestimonial(changeTestimonial - 1);
        }
        break;
    }
  };

  useEffect(() => {
    setInterval(() => {
      updateTestimonial("right");
    }, 5000);
  }, [changeTestimonial]);

  return (
    <div className="w-full h-full mt-5">
      <div className="text-white text-lg flex justify-center">Testimonials</div>
      <div className="flex text-white items-center justify-center ml-20 p-5">
        <IoMdArrowBack
          className="text-2xl mr-10"
          onClick={() => updateTestimonial("left")}
        />
        <div className="w-2/3 bg-gradient-to-r animate-fadeInOut text-sm from-gray-900 via-gray-600 to-gray-800 rounded-lg p-5 shadow-lg">
          <p>{Testimonials[changeTestimonial].testimonial}</p>
          <p className="flex justify-end text-white">
            {" "}
            - {Testimonials[changeTestimonial].reporter}{" "}
            {`(${Testimonials[changeTestimonial].title})`}{" "}
            {`[${Testimonials[changeTestimonial].dated}]`}
          </p>
        </div>
        <IoArrowForward
          className="text-2xl ml-10"
          onClick={() => updateTestimonial("right")}
        />
      </div>
    </div>
  );
};
