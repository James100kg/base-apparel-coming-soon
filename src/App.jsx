import React from "react"
import backGround from "./images/bg-pattern-desktop.svg"
import girl from "./images/hero-desktop.jpg"
import baseApparel from "./images/logo.svg"
import arrowIcon from "./images/icon-arrow.svg"

function App() {
  return (
    <div className="app-container flex justify-center items-center h-screen">
      <div className="panel flex w-[90%] max-w-[1000px] min-h-[450px] shadow-lg">
        <div className="w-[60%] h-full bg-no-repeat bg-cover bg-center px-10 py-10 flex flex-col gap-y-4 pb-12" style={{ backgroundImage: `url(${backGround})` }}>
          <div className="px-10">
            <img className="w-24 mb-12" src={baseApparel}></img>
            <h1 className="text-pink-500 tracking-widest text-[42px] font-thin">WE'RE</h1>
            <h1 className="text-[42px] font-medium text-gray-900 leading-tight mb-2" >COMING <br /> SOON</h1>
            <div className="flex flex-col gap-y-6 max-w-sm">
            <p className="text-[13px] text-pink-300 leading-relaxed">Hello fellow shoppers! We're currently building our new <br /> fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
            <div className="flex items-center w-full max-w-xl bg-white rounded-full shadow-sm px-1">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-6 h-[48px] text-sm border border-pink-200 text-pink-500 placeholder-pink-300 outline-none bg-transparent rounded-l-full" />
              <button className="bg-gradient-to-r from-pink-400 to-red-400 w-[64px] h-[48px] -ml-4 px-6 rounded-full shadow-lg hover:brightness-110 transition flex items-center justify-center">
                <img src={arrowIcon} className="w-4 h-4"></img>
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] h-auto bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${girl})` }}></div>
      </div>
    </div>
  )
}

export default App