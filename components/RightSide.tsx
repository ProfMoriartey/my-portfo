import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-3 text-textLight">
      <a href="mailto:aaajh98@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wide  text-textDark">
          aaajh98@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;
