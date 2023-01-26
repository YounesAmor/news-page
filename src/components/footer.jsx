const Footer = () => {
  return (
    <div className="grid grid-cols-3 w-full gap-10">
      <div className="grid grid-cols-5 gap-1">
        <div className="col-span-2">
          <img
            src={require("../assets/images/image-retro-pcs.jpg")}
            alt="retro gaming"
            className="h-[170px]"
          />
        </div>
        <div className="col-span-3 text-left">
          <p className="text-3xl text-grayishBlue font-bold font-inter mb-4">
            01
          </p>
          <p className="text-veryDarkBlue font-inter text-xl font-bold mb-4 hover:text-softRed hover:cursor-pointer">
            Reviving Retro PCs
          </p>
          <p className="text-md text-darkGrayishBlue">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1">
        <div className="col-span-2">
          <img
            src={require("../assets/images/image-top-laptops.jpg")}
            alt="retro gaming"
            className="h-[170px]"
          />
        </div>
        <div className="col-span-3 text-left">
          <p className="text-3xl text-grayishBlue font-bold font-inter mb-4">
            02
          </p>
          <p className="text-veryDarkBlue font-inter text-xl font-bold mb-4 hover:text-softRed hover:cursor-pointer">
            Top 10 Laptops of 2022
          </p>
          <p className="text-md text-darkGrayishBlue">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1">
        <div className="col-span-2">
          <img
            src={require("../assets/images/image-gaming-growth.jpg")}
            alt="retro gaming"
            className="h-[170px]"
          />
        </div>
        <div className="col-span-3 text-left">
          <p className="text-3xl text-grayishBlue font-bold font-inter mb-4">
            03
          </p>
          <p className="text-veryDarkBlue font-inter text-xl font-bold mb-4 hover:text-softRed hover:cursor-pointer">
            The Growth of Gaming
          </p>
          <p className="text-md text-darkGrayishBlue">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
