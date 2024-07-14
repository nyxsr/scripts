import { ADMIN_SIDEBAR_LINKS } from '@/constants/links';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
function Sidebar() {
    const router = useRouter()
    return (
        <aside className='bg-[#1b3024] max-w-[20rem] w-full min-h-screen rounded-r-2xl sticky top-0 left-0 text-white px-4 py-3'>
            <div className='my-6'>
                <span className='font-bold'>Your Logo</span>
            </div>
            <nav className='flex flex-col gap-2'>
                {ADMIN_SIDEBAR_LINKS.map(link => (
                    <Link href={link.href} key={link.id} className={`flex items-center gap-4 font-medium ${router.pathname === link.href ? 'text-[#fefefc]' : 'text-[#acb7af]'}`}>
                        <span className={`${router.pathname === link.href ? 'text-[#fcfd86]' : 'text-[#acb7af]'}`}>{link.icon}</span>
                        <span>{link.name}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar