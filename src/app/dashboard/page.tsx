"use client"

import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

function Dashboard() {

    const { data: session} = useSession()
    console.log(session)
    return (
        <div className="flex flex-col gap-5 mt-20">
        {session?.user ? (
            <div className="flex flex-col gap-6">
            {session?.user?.image && (
                <Image width={32} height={32} className="rounded-full" alt="user avatar" src={session.user.image} />
            )}
            {session.user.name && (
                <span>{session.user.name}</span>
            )}
            <button onClick={() => signOut()}>Logout</button>
            </div>
        ):
        (
            <Link href="/login">
                <button>Connexion</button>
            </Link>
        )}
        </div>
    )
}

export default Dashboard