"use client"

import React, { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("")
  const revalidate = async () => {
    const res = await fetch("http://localhost:3000/api/revalidate?tag=products&secret=SKDTU8RE8987576GYIUOD", {
      method: "POST"
    })

    if(!res.ok){
      setStatus("Revalidate Faild")
    }else {
      const response = await res.json()
      if(response.revalidate) {
        setStatus("Revalidate Success")
      }
    }
    // console.log(await res.json());
    
  };

  return (
    <div className="w-3/6 h-96 bg-gray-300 rounded flex justify-center items-center">
      <h1>{status}</h1>
      <button onClick={() => revalidate()} className="rounded mx-auto my-5 px-3 py-1 bg-blue-400">Revalidate</button>
    </div>
  )
}