
import React from "react";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, children, className = "" }: SectionWrapperProps) => {
  return (
    <div id={id} className={`bg-white p-8 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default SectionWrapper;
