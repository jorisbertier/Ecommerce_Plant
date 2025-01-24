"use client"

import { signIn } from "next-auth/react"

function Login() {
    return (
        <div className="flex flex-col gap-5">
            <button onClick={() => signIn('github',{ redirectTo: "/dashboard"})}>Sign in with Github</button>
            <button onClick={() => signIn('google',{ redirectTo: "/dashboard"})}>Sign in with Google</button>
        </div>
    )
}

export default Login