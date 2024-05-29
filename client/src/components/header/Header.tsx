import { Link, NavLink } from 'react-router-dom';
import DropdownUser from '../DropdownUser';
import LOGO from '../../assets/logo.jpg';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-20 flex w-full bg-white shadow-md  drop-shadow-1  dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-4 px-4 h-[8vh] shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
  
          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={LOGO} alt="Logo" />
          </Link>
        </div>

        <div className="hidden sm:block">
          <NavLink to="/dashboard">
            <div className="flex flex-col gap-3 ">
              <img src={LOGO} alt="" />
              {/* <img src={AUTHORS_ICON} alt="" /> */}
            </div>
          </NavLink>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
