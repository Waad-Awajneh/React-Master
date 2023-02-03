import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <div className="flex flex-warp pt-3 items-center font-[Satisfy] justify-evenly text-lg hover:text-pcol hover:translate-x-2">
      <div className="flex ">
        <img
          src={require("./../assests/img/logo.png")}
          className="h-16 w-16"
          alt=" Logo"
        />
      </div>

      <ul className="px-15 text-lnav text-lg hover:text-pcol hover:translate-x-2 flex">
        <li className="px-5 text-lg hover:text-pcol hover:translate-x-2">
          <Link to="/landing">Home</Link>
        </li>
        <li className="px-5">
          <Link to="/about">About</Link>
        </li>
        <li className="px-5">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <span className="text-lnav ">
        <Footer.Copyright href="/landing" by="WED" year={2022} />
      </span>
    </div>
  );
}

export default FooterComponent;
