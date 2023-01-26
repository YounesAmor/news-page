const MainContent = () => {
  return (
    <div className="grid grid-cols-3 w-full content-start gap-10">
      <div className="col-span-2">
        <div>
          <img
            src={require("../assets/images/image-web-3-desktop.jpg")}
            alt="web3"
            className="h-[300px] w-full"
          />
          <div className="grid grid-cols-12 mt-8 gap-8">
            <div className="text-[40px] font-inter text-left font-extrabold text-veryDarkBlue col-span-5 flex items-center">
              The Bright Future of Web 3.0?
            </div>
            <div className="col-span-7 text-l font-medium text-left ml-12 font-inter text-darkGrayishBlue flex flex-col items-start">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="border bg-softRed p-3 inline-block text-white w-[200px] mt-5 font-inter hover:bg-veryDarkBlue">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full bg-veryDarkBlue w-full text-left">
        <p className="text-softOrange text-4xl text-inter font-bold mt-8 mx-8">
          New
        </p>
        <div className="grid grid-cols-1 divide divide-y-2 divide-grayishBlue mx-8 gap-3">
          <div className=" font-inter mt-4 mb-0">
            <p className="text-offWhite font-bold text-xl mb-2 hover:cursor-pointer hover:text-softOrange">
              Hydrogen VS Electric Cars
            </p>
            <p className="text-grayishBlue text-sm">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className=" font-inter mt-4 pt-5">
            <p className="text-offWhite font-bold text-xl mb-2 hover:cursor-pointer hover:text-softOrange">
              The Downsides of AI Artistry
            </p>
            <p className="text-grayishBlue text-sm">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className=" font-inter my-4 pt-5">
            <p className="text-offWhite font-bold text-xl mb-2 hover:cursor-pointer hover:text-softOrange">
              Is VC Funding Drying Up?
            </p>
            <p className="text-grayishBlue text-sm">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
