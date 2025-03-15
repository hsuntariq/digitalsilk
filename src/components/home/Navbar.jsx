import React, { useRef, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const line1 = useRef();

  // const handleLine = () => {
  //   line1.current.style.width = 0;
  // };

  return (
    <>
      <div className="flex p-4 px-10 justify-between items-center">
        <img
          // onClick={handleLine}
          src="https://www.digitalsilk.com/wp-content/uploads/2022/10/ds-logo.svg"
          width={200}
          alt="logo"
        />

        <div className="flex items-center gap-3">
          <div className="border uppercase border-white py-2 px-4 text-white font-semibold">
            request a quote
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="flex cursor-pointer items-center gap-2 text-white"
          >
            <div className="flex flex-col gap-2 lines">
              <div
                className={`line me-auto transition-all duration-[0.3s] line1 h-[2px] ${
                  open ? "w-0" : "w-[30px]"
                } bg-white`}
              ></div>
              <div
                className={`line transition-all duration-[0.8s] line2 h-[2px] ${
                  open ? "w-0" : "w-[22px]"
                } me-auto bg-white`}
              ></div>
              <div
                className={`line me-auto transition-all duration-[1.1s] line3 h-[2px] ${
                  open ? "w-0" : "w-[30px]"
                } bg-white`}
              ></div>
            </div>

            {/* cross */}

            <div className="flex flex-col gap-2 lines">
              <div
                className={`line-cross1 absolute   origin-top-left translate-y-3 -rotate-45  me-auto transition-all duration-[0.4s] line1 h-[2px] ${
                  !open ? "w-0" : "w-[30px]"
                } bg-white`}
              ></div>

              <div
                className={`line line-cross1   absolute  translate-x-[2px] translate-y-[-8px] origin-top-left rotate-45 me-auto transition-all duration-[0.8s] line3 h-[2px] ${
                  !open ? "w-0" : "w-[30px]"
                } bg-white`}
              ></div>
            </div>

            {/* cross */}

            <h5 className={`text-xl uppercase ${open && "hidden"} `}>menu</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
