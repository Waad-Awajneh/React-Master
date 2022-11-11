import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

function FooterCompone() {
  return (
    <Footer container={true}>
      <div>
        <img
          src={require("./../assests/img/logo.png")}
          className="h-16 w-16 ml-3"
          alt=" Logo"
        />
      </div>

      <ul className="px-10 text-lnav flex">
        <li className="px-5">
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
    </Footer>
  );
}

export default FooterCompone;
