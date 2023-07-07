import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCtyLwBhaT_MccTC5iI053LvdRer2QRyP4",
  authDomain: "messaging-app-b9d0c.firebaseapp.com",
  projectId: "messaging-app-b9d0c",
  storageBucket: "messaging-app-b9d0c.appspot.com",
  messagingSenderId: "409939198885",
  appId: "1:409939198885:web:1b75e294d43a641c219e4c",
  measurementId: "G-W255JV1WHB"
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)

const NavBar = () => {
  return (
    <div className="flex bg-neutral-950 text-slate-100 text-md md:text-xl font-primary md:pl-2 flex-row justify-between cursor-pointer h-12 border-b border-neutral-900 absolute w-full top-0">

      {/* Left Side */}
      <div className="p-2">
        <span>
          Messaging App
        </span>
      </div>

      {/* Right Side */}
      <div className="flex flex-row align-middle">
        {/* Add Friend */}
        <div className="flex align-middle sm:text-xl p-3 hover:bg-zinc-800 rounded-sm">
          <FontAwesomeIcon icon={faUserPlus} />
        </div>
        {/* User Profile */}
        <div className="flex flex-row font-sm align-middle gap-2 cursor-pointer hover:bg-zinc-800 rounded-sm w-fit">
          <span className="p-2 hidden md:block">mughilan</span>
          <img src="https://avatars.githubusercontent.com/u/85350593?s=400&u=0433340e7f00c0281ff9b5a2fef178cb3898875d&v=4" className="h-12 w-12" />
        </div>
      </div>

    </div>
  )
}

export default NavBar;
