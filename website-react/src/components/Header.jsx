import React from 'react'

export default function Header(){
  return (
    <header className="flex items-center justify-between px-6 py-2">
      <div className="flex items-center gap-2">
        <img src="/LogoMain.png" alt="Eloy Logo" className="h-6 w-6 filter drop-shadow-[0_0_12px_rgba(110,168,255,0.8)]" />
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Eloy Browser</h1>
      </div>
    </header>
  )
}
