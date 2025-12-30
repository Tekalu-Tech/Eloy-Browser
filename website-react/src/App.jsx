import React from 'react'
import Header from './components/Header'
import DownloadSection from './components/DownloadSection'
import Message from './components/Message'
import MembershipSection from './components/MembershipSection'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative z-10">
      <Header />

      <main className="max-w-5xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card animate-slideUp">
            <h2 className="text-2xl font-bold text-white mb-4">Why you should try Eloy</h2>
            <p className="text-blue-100">Eloy Browser is built with one clear goal: give users speed, clarity, and full control. Clean design, strong privacy, and modern performance.</p>
          </div>

          <div className="card animate-slideUp [animation-delay:0.1s]">
            <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
            <ul className="space-y-2 text-blue-100">
              <li>✨ Built-in adblocker</li>
              <li>🎁 Membership support</li>
              <li>🔒 Secure browsing</li>
              <li>⚡ Fast and lightweight performance</li>
            </ul>
          </div>
        </div>
      </main>

      <DownloadSection />
      <Message />

      <div className="text-center my-16">
        <a className="admin-btn inline-flex hover:shadow-[0_34px_70px_rgba(0,0,0,0.8),0_0_55px_rgba(110,168,255,0.7)] hover:translate-y-[-6px]" href="https://discord.gg/hfjqaUBc">👑 Want to be an administrator?</a>
      </div>

      <MembershipSection />

      <footer className="site-footer animate-fadeIn [animation-delay:0.3s]">© 2025 Eloy Browser. All rights reserved.</footer>
    </div>
  )
}
