import React from 'react'

export default function DownloadSection(){
  return (
    <section className="download-section">
      <h2 className="text-white text-3xl font-bold">Download Client</h2>
      <div className="download-buttons">
        <a className="download-btn" href="https://github.com/AbstractWolf/AbstractWolf-Browser/releases/latest">🐧 Linux</a>
        <a className="download-btn" href="https://github.com/AbstractWolf/AbstractWolf-Browser/releases/latest">🪟 Windows</a>
        <a className="download-btn" href="https://github.com/AbstractWolf/AbstractWolf-Browser/releases/latest">🍎 macOS</a>
      </div>
    </section>
  )
}
