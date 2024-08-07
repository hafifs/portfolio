import Navbar from "../components/Navbar";
import {PiUserPlus} from "react-icons/pi";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <PiUserPlus size={27} />
          <h1 className="text-xl font-bold">faiz</h1>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
