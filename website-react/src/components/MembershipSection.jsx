import React from 'react'

const plans = [
  { name: 'Free', price: '$0 / mo', features: ['Adblocker', 'Secure browsing', 'Customizable settings'] },
  { name: 'Plus', price: '$3 / mo', features: ['Adblocker', 'Secure browsing', 'Customizable settings', 'Faster updates & priority support'] },
]

export default function MembershipSection(){
  return (
    <section className="membership-section">
      <h2 className="text-white text-3xl font-bold">Membership Plans</h2>
      <p className="text-center text-blue-100 mb-8">Choose the plan that fits your needs</p>
      <div className="membership-cards">
        {plans.map(p => (
          <div className="membership-card group hover:translate-y-[-6px] transition-all duration-300 cursor-pointer" key={p.name}>
            <h3 className="plan-name">{p.name}</h3>
            <div className="plan-price">{p.price}</div>
            <ul className="plan-features">
              {p.features.map(f => <li key={f}>✓ {f}</li>)}
            </ul>
            <a className="plan-cta hover:brightness-110 transition-all" href="#">Get {p.name}</a>
          </div>
        ))}
      </div>
    </section>
  )
}
