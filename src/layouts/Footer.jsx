import React from "react";
import { PiGithubLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="py-6 bg-muted">
      <div className="container flex items-center justify-between px-4 mx-auto sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © 2024 Faiz. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a className="hover:bg-black hover:text-white p-1 rounded-md transition-colors" href="#">
            <PiGithubLogoBold size={25}/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
