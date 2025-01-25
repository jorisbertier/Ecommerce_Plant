'use client'

import { useSession, signOut } from 'next-auth/react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "./ui/dialog"

function ClientNav() {
  const { data: session } = useSession()

  return (
        <div className='flex items-center space-x-6'>
        {session ? (
            <div className='flex gap-5 items-center'>

            <Dialog>
            <DialogTrigger asChild>
            <Avatar>
                <AvatarImage src={session?.user?.image} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                <DialogTitle>{session?.user?.name}</DialogTitle>
                <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                </div>
                </div>
            </DialogContent>
            </Dialog>
            <Button variant='green' size='md' onClick={() => signOut({callbackUrl: '/'})}>
            Logout
            </Button>
            </div>
        ) : (
            <Link href="/login">
            <Button variant='green' size='md'>
                Login
            </Button>
            </Link>
        )}
        </div>
    )
}

export default ClientNav;