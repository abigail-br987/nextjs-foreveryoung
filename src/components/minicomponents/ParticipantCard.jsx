const PersonCard = ({ name, title, description, imageSrc }) => {
  return (
    <div className="items-center bg-darkBlue border-2 border-darkBlue rounded-lg  ">
      
      <div className="mx-5 hidden sm:block text-center uppercase text-white">
        <h2>
          {title}
        </h2>
      </div>
      <div>
        <h2 className="text-center block sm:hidden my-2">{title}</h2>
        <img
          src={imageSrc}
          alt={name}
          className="h-full aspect-square
           object-cover border-dark_blue max-sm:border-t-2 sm:border-r-2 rounded-lg"
        />
      </div>
    
      <div className="mx-5 hidden sm:block text-center uppercase text-white">
      <h2>
          {name}
        </h2>
      </div>
    </div>
  );
};

export default PersonCard;
