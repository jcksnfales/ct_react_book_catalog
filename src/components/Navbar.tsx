import { useState } from "react";
import NavLinkSet from "./NavLinkSet";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleNavVis = ():void => {
    setIsVisible(!isVisible);
  }
  const collapseNav = ():void => {
    setIsVisible(false);
  }

  return (
    <nav className="flex flex-wrap items-center justify-between bg-indigo-950 py-6 px-9">
      {/* TITLE */}
      <div className="flex items-center text-slate-200 tracking-tight font-serif font-semibold text-xl my-2">Book Catalogue</div>
      {/* LINKS - LARGE WINDOW */}
      <div className="max-sm:hidden block text-slate-400">
        <NavLinkSet/>
      </div>
      {/* LINKS - SMALL WINDOW */}
      <div className="sm:hidden block">
        <button onClick={toggleNavVis} className="flex items-center px-3 py-2 border rounded text-slate-400 border-slate-400 hover:text-slate-200 hover:border-slate-200">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      {
        isVisible ? (
          <div className="md:hidden w-full block items-center mt-5 text-slate-400">
            <NavLinkSet linkAction={collapseNav}/>
          </div>
        ) : (
          <></>
        )
      }
      
    </nav>
  )
}

export default Navbar;
