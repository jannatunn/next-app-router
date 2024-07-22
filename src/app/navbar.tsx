import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { status }: { status: string } = useSession();

  return (
          <>
            <nav className="flex bg-red-800 p-5">
              <div className="flex gap-10 justify-between w-full">
                <h1 className="text-white">Navbar</h1>
                <div className="">
                  <ul className="flex gap-5">
                    <Link href="/">
                      <li className={`${pathname === "/" ? "text-blue-300" : "text-white"} cursor-pointer`}>Home</li>
                    </Link>
                    <Link href="/about">
                      <li className={`${pathname === "/about" ? "text-blue-300" : "text-white"} cursor-pointer`}>About</li>
                    </Link>
                    <Link href="/about/profile">
                      <li className={`${ pathname === "/about/profile" ? "text-blue-300" : "text-white"}`}>Profile</li>
                    </Link>
                  </ul>
                </div>

                <div>
                  {
                    status === "authenticated" ? (
                      <button onClick={() => signOut()} className="px-3 text-sm rounded font-medium hover:bg-slate-300 bg-white">LogOut</button>
                    ) : (
                      <button onClick={() => signIn()} className="px-3 text-sm rounded font-medium hover:bg-slate-300 bg-white">Login</button>
                    )
                  }
                </div>
              </div>
            </nav>
          </>
  )
}