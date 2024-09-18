import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mb-2 flex items-center justify-center gap-2">
      <div className="font-poppins text-center text-xs">
        © Copyright <b>{currentYear}</b> Designed & Built by
      </div>
      <div
        className="cursor-pointer text-sm font-bold tracking-wider"
        onClick={() => {
          window.open(FooterLink);
        }}
      >
        JacobBananalDev
      </div>
    </div>
  );
}

export default Footer;
