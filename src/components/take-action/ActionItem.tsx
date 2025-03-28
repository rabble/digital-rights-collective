
import React from "react";

interface ActionItemProps {
  title: string;
  listItems: string[];
}

const ActionItem = ({ title, listItems }: ActionItemProps) => {
  return (
    <div>
      <p className="font-medium text-digital-gray-dark mb-1">{title}</p>
      <ul className="ml-6 list-disc text-digital-gray-medium">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActionItem;
