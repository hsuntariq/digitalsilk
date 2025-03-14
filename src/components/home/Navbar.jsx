import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex p-4 px-10 justify-between items-center">
        <img
          src="https://www.digitalsilk.com/wp-content/uploads/2022/10/ds-logo.svg"
          width={200}
          alt="logo"
        />

        <div className="flex items-center gap-3">
          <div className="border uppercase border-white py-2 px-4 text-white font-semibold">
            request a quote
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="flex flex-col gap-2 lines">
              <div className="line line1 h-[2px] w-[35px] bg-white"></div>
              <div className="line line2 h-[2px] w-[25px] ms-auto bg-white"></div>
              <div className="line line3 h-[2px] w-[35px] bg-white"></div>
            </div>
            <h5 className="text-2xl uppercase">menu</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
