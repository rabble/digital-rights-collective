
import React from "react";

interface TestimonialBoxProps {
  label: string;
  quote: string;
}

const TestimonialBox = ({ label, quote }: TestimonialBoxProps) => {
  return (
    <div className="bg-digital-gray-light/50 p-4 rounded-lg">
      <p className="font-medium text-digital-gray-dark mb-1">{label}:</p>
      <p className="text-digital-gray-medium italic">
        {quote}
      </p>
    </div>
  );
};

export default TestimonialBox;
