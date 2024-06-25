"use client"

import { useState } from "react"

export default function Template({
  children,
}: {
  children: React.ReactNode
}){
  const [state, setState] = useState(0)
  return (
    <div>
      <h1>Template <span className="px-2 py-0.5 bg-gray-300">{state}</span></h1>
      <button onClick={() => setState(state + 1)} className='ml-5 px-3 py-1 rounded text-white bg-green-500'>Click</button>
      {children}
    </div>
  )
}