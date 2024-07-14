import { v4 as uuidv4} from 'uuid'
import { LuLayoutDashboard } from "react-icons/lu";
import { IconType } from 'react-icons';
import { FaRegUser } from "react-icons/fa";
import React from 'react';
type AdminSidebarType = {
    id: string
    name: string
    href: string
    icon: React.ReactNode
    subLinks?: AdminSidebarType[]
}

export const ADMIN_SIDEBAR_LINKS: AdminSidebarType[] = [
    {
        id: uuidv4(),
        name: 'Dashboard',
        href: '/admin/dashboard',
        icon: <LuLayoutDashboard/>,
    },
    {
        id: uuidv4(),
        name: 'Users',
        href: '/admin/users',
        icon: <FaRegUser/>,
        subLinks: [
            {
                id: uuidv4(),
                name: 'Add User',
                href: '/admin/users/add',
                icon: null
            }
        ]
    }
]