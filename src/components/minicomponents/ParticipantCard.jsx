const PersonCard = ({ name, title, description, imageSrc }) => {
  return (
    <div className="flex items-center border-2 border-dark_blue rounded-lg bg-white ">
      <div>
        <h2 className="text-center block sm:hidden my-2">{title}</h2>
        <img
          src={imageSrc}
          alt={name}
          className="h-full aspect-square sm:max-w-40 object-cover border-dark_blue max-sm:border-t-2 sm:border-r-2 rounded-sm"
        />
      </div>

      <div className="mx-5 hidden sm:block">
        <h2>
          {name} : {title}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PersonCard;
