import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
     
     
      <aside>
        <p>
          Copyright © ${new Date().getFullYear()} - All right reserved by Chandabir Singh
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
