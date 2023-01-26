import mainIcon from "../assets/images/logo.svg";
const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center">
      <div>
        <img src={mainIcon} alt="logo" />
      </div>
      <div>
        <ul className="text-grayishBlue font-inter">
          <li className="inline-block mx-7 hover:text-softRed hover:cursor-pointer">
            Home
          </li>
          <li className="inline-block mx-7 hover:text-softRed hover:cursor-pointer">
            New
          </li>
          <li className="inline-block mx-7 hover:text-softRed hover:cursor-pointer">
            Popular
          </li>
          <li className="inline-block mx-7 hover:text-softRed hover:cursor-pointer">
            Trending
          </li>
          <li className="inline-block ml-7 hover:text-softRed hover:cursor-pointer">
            Categories
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
