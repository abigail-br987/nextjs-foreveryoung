import React from "react";

interface PersonCardProps {
  name: string;
  title: string;
  imageSrc: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ name, title, imageSrc }) => {
  return (
    <div className="items-center shadow-sm flex-col flex justify-center shadow-darkBlue border-2 bg-white border-darkBlue rounded-lg text-darkBlue pb-2">
      <div className="p-4">
        <h2 className="text-center block sm:hidden my-2">{title}</h2>
        <img
          src={imageSrc}
          alt={name}
          className="aspect-square object-cover border-darkBlue border-2 rounded-lg"
        />
      </div>
      <h2>{title}</h2>
      <h3>{name}</h3>
    </div>
  );
};

export default PersonCard;