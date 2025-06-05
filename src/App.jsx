import React from "react"
import backGround from "./images/bg-pattern-desktop.svg"
import girl from "./images/hero-desktop.jpg"
import baseApparel from "./images/logo.svg"

function App() {
  return (
    <div className="app-container flex justify-center items-center h-screen">
      <div className="panel flex w-[90%] max-w-[1000px] h-[450px] shadow-lg">
        <div className="w-[60%] h-full bg-no-repeat bg-cover bg-center px-10 py-10 flex flex-col gap-y-4" style={{ backgroundImage: `url(${backGround})` }}>
          <div className="px-10">
            <img className="w-24 mb-20" src={baseApparel}></img>
            <h1 className="text-pink-500 tracking-widest text-[42px] font-medium">WE'RE</h1>
            <h1 className="text-[42px] font-bold text-gray-900 leading-tight" >COMING <br /> SOON</h1>
            <p className="text-[13px] text-pink-300 leading-relaxed max-w-xs">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
            <div className="flex items-center w-full max-w-md bg-white rounded-full overflow-hidden shadow-sm mt-6">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 text-sm text-pink-500 placeholder-pink-300 outline-none bg-transparent" />
              <button></button>
            </div>
          </div>
        </div>
        <div className="w-[40%] h-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${girl})` }}></div>
      </div>
    </div>
  )
}

export default App