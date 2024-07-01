"use client"

import { useEffect } from "react";

export default function Error({error, reset,}: { error: Error; reset: () => void; }) {
    useEffect(() => {
      console.log("ini error +>>", error)
    }, [error])
  return (
    <div>
      <h1>Something went Wrong</h1>
      <button onClick={() => reset()}> Try Again</button>
    </div>
  )
}