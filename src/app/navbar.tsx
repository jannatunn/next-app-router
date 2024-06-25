import Link from "next/link";

export default function Navbar() {
  return (
          <>
            <nav className="flex bg-gray-800 p-5">
              <div className="flex gap-10 justify-between ">
                <h1 className="text-white">Navbar</h1>
                <ul className="flex gap-5">
                  <Link href="/">
                    <li className="text-blue-300 cursor-pointer">Home</li>
                  </Link>
                  <Link href="/about">
                    <li className="text-blue-300 cursor-pointer">About</li>
                  </Link>
                  <Link href="/about/profile">
                    <li className="text-blue-300 cursor-pointer">Profile</li>
                  </Link>
                </ul>
              </div>
            </nav>
          </>
  )
}