"use client"
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 text-center">
        {session ? (
          <>
            <img
              src={session.user.image}
              alt={session.user.name}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h2 className="text-xl font-bold mt-4">{session.user.name}</h2>
            <p className="text-black-600">{session.user.email}</p>
            <button
              onClick={() => signOut()}
              className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4">Welcome</h2>
            <p className="text-gray-600 mb-6">Sign in to continue</p>
            <button
              onClick={() => signIn()}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
}
