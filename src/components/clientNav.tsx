'use client'

import { useSession, signOut } from 'next-auth/react'
import { Button } from './ui/button'
import Link from 'next/link'

function ClientNav() {
  const { data: session } = useSession()

  return (
        <div className='flex items-center space-x-6'>
        {session ? (
            <div>

            <Button variant='green' size='md' onClick={() => signOut()}>
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