"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function LoginPage() {
  const formRef = useRef(null);
  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log("Form Reference: ", formRef.current);
    console.log("formRef", formRef)
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const email = formData.get("email");
      const password = formData.get("password");

      fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
    }
  }

  return (
    <div className="flex flex-col justify-center px-6 py-12 lg:px-8 h-screen">
      <div className="p-5 rounded-md mx-auto w-full max-w-sm border border-gray-400 bg-gray-300 shadow-lg">
        <h2 className="mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Form Login
        </h2>
        <Image src="/next.svg" width={200} height={200} alt="gamabr nextJs"/>
        <form ref={formRef} className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Dont Have an Account yet?{' '}
          <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            register
          </Link>
        </p>
      </div>
    </div>
  )
}
