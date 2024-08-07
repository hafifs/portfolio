import { PiMoon, PiSun } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-4">
      <a className="text-sm font-medium hover:text-primary" href="#">
        Home
      </a>
      <a className="text-sm font-medium hover:text-primary" href="#">
        Projects
      </a>
      <a className="text-sm font-medium hover:text-primary" href="#">
        Skills
      </a>
      <a className="text-sm font-medium hover:text-primary" href="#">
        Contact
      </a>
      <button className="inline-flex items-center justify-center p-1 transition-colors rounded-md whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-black hover:text-white">
        <PiMoon size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
