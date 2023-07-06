import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <div className="flex bg-slate-800 text-slate-100 text-md md:text-xl font-primary md:pl-2 flex-row justify-between cursor-pointer h-12">

      {/* Left Side */}
      <div className="p-2">
        <span>
          Messaging App
        </span>
      </div>

      {/* Right Side */}
      <div className="flex flex-row align-middle">
        {/* Add Friend */}
        <div className="flex align-middle sm:text-xl p-3 hover:bg-slate-700 rounded-sm">
          <FontAwesomeIcon icon={faUserPlus} />
        </div>
        {/* User Profile */}
        <div className="flex flex-row font-sm align-middle gap-2 cursor-pointer hover:bg-slate-700 rounded-sm w-fit">
          <span className="p-2 hidden md:block">mughilan</span>
          <img src="https://avatars.githubusercontent.com/u/85350593?s=400&u=0433340e7f00c0281ff9b5a2fef178cb3898875d&v=4" className="h-12 w-12" />
        </div>
      </div>
    </div>
  )
}

export default NavBar;
