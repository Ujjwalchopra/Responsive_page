import React from "react";
import { useState } from "react";
import "./navbar.css"
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import circular_image from "./assets/featured-small-circular.jpg";

const Navbar = () => {
  const[nav,setNav] = useState(false);

    const handleClick= () =>{
      return(
        setNav(!nav)
      )
      
    }

  return (
    <div className="w-screen z-10 md:bg-blue-500 bg-black">
      <div className="w-screen h-full  flex justify-between py-4 text-white px-10">
        <div className="mt-2">
          <h1 className="font-bold text-3xl">Coinbase</h1>
        </div>
        <ul className="navbar-list hidden md:flex  justify-between font-bold mt-2">
          <li className="mx-2 px-2 py-2">Features</li>
          <li className="mx-2 px-2 py-2">Merchants</li>
          <li className="mx-2 px-2 py-2">Apps</li>
          <li className="mx-2 px-2 py-2">Vault</li>
          <li className="mx-2 px-2 py-2">Resources</li>
        </ul>
        <div className="hidden md:flex font-bold mt-4">
          <p>Cureent Buy Price: $625.10</p>
        </div>
        <div className="hidden md:flex justify-center  md:ml-16">
          <img src={circular_image} alt="img" className="w-6  rounded-full"  />
          <p className="mx-4 mt-3">Ujjwal Chopra</p>
        </div>
        <div className="md:hidden" onClick= {handleClick}>
        {!nav?<MenuIcon  className="w-5 text-white"/>:<XIcon className="w-5 text-white"/>}
        </div>
      </div>
      <div className= {nav?"w-full px-3 py-3": "hidden"}>
      <ul className="text-white bg-black flex-col items-start w-full px-10">
      <li className="w-full text-left  text-2xl border-b-2 my-2">Features</li>
      <li className="w-full text-left  text-2xl border-b-2 my-2">Merchants</li>
      <li className="w-full text-left  text-2xl border-b-2 my-2">Apps</li>
      <li className="w-full text-left  text-2xl border-b-2 my-2">Vault</li>
      <li className="w-full text-left  text-2xl border-b-2 my-2">Resources</li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
