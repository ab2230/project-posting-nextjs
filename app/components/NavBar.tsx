import { auth, signOut, signIn } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = async () => {
    const session = await auth();
  return (
    <div className='px-s py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href={'/'}>
              <Image src={'/logo.png'} alt='logo' width={100} height={100} />
            </Link>

            <div className='flex items-center gap-5 text-black'>
                {session && session?.user?(
                    <>
                        <Link href={"/startup/create"}>
                            <span>Create</span>
                        </Link>

                        <button onClick={signOut}>
                            <span>Logout</span>
                        </button>

                        <Link href={`/user/${session?.user?.id}`}>
                            <span>{session?.user?.name}</span>
                        </Link>
                    </>
                ): (
                    <button onClick={signIn('github')}>
                        <span>LogIn</span>
                    </button>
                )}
            </div>
        </nav>
    </div>
  )
}

export default NavBar