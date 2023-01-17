import React from "react";

export default function ForMerchant() {
  return (
    <div className="w-screen h-[80px] py-10">
      <div className=" bg-white text-black flex justify-between">
        <div className="">
          <h1>For Merchant</h1>
        </div>
        <div>
             <ul className= "flex justify-center">
                <li className="font-bold mx-3">Overview</li>
                <li className="font-bold mx-3 text-slate-500">Customers</li>
                <li className="font-bold mx-10 text-slate-800">API Documentation</li>
             </ul>      
        </div>
      </div>
    </div>
  );
}
