import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center p-4">
        <aside className="w-11/12 mx-auto">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Rahmania-Jamemajid
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
