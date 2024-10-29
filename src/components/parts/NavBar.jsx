import { Link } from "react-scroll";
import logo2 from "/logo2.png";

const navItems = [
    { name: "Proyectos", to: "what-do-we-do" },
    { name: "Dónde", to: "where-are-we" },
    { name: "Home", to: "landing", photo: logo2 },
    { name: "Nosotros", to: "who-are-we" },
    { name: "Unete", to: "join-us" },
  ];

function Navbar() {
    return (
      <nav className="bg-deep_green p-2 fixed w-full top-0 border-dark_blue border-b-2 z-10">
        <ul className="flex space-x-7 justify-center items-center cursor-pointer">
          {navItems.map((item, index) => (
            <li key={index} className="font-serif flex items-center text-sm md:text-base lg:text-lg">
              {item.name === "Home" ? (
                <Link
                  activeClass="active"
                  offset={-100}
                  smooth
                  spy
                  to={item.to}
                  duration={500}
                  className="flex items-center"
                >
                  <img src={item.photo} alt="Home Logo" className="h-10 w-10" />
                </Link>
              ) : (
                <Link
                  activeClass="active"
                  offset={-70}
                  smooth
                  spy
                  to={item.to}
                  duration={500}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }

export default Navbar