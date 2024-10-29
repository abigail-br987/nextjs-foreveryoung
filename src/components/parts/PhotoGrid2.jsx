import photo10 from "/photo10.png";
import photo11 from "/photo11.png";

function PhotoGrid2() {
    return (
        <div className="flex space-x-4 my-4">
        <div className="flex-1 h-64 border-dark_blue border-2 rounded-lg">
          <img
            src={photo10}
            alt="Hospital"
            loading="lazy"
            className="w-full h-full object-cover object-top rounded-lg"
          />
        </div>
        <div className="flex-1 h-64 border-dark_blue border-2 rounded-lg">
          <img
            src={photo11}
            alt="Hospital"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    )
}
export default PhotoGrid2