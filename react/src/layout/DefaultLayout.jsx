import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";
import { useEffect } from "react";
import axiosClient from "../axios-client.js";

import AsideLink from 'components/AsideLink'
import DabadubHorizontal from "../assets/DabadubHorizontal.jsx";
import DropdownMenu from "components/DropdownMenu.jsx";
import { ArrowRightStartOnRectangleIcon, UserIcon, UserCircleIcon, HomeModernIcon, HomeIcon, NewspaperIcon, BriefcaseIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import SecondaryButtonLink from "components/SecondaryButtonLink.jsx";

export default function DefaultLayout() {

    const {user, token, notification, setUser, setToken} = useStateContext()

    // if (!token){
    //     return <Navigate to="/login"/>
    // }

    const onLogout = (ev) => {
        ev.preventDefault()

        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    useEffect(() => {
        axiosClient.get('/user')
            .then(({data}) => {
                setUser(data)
            })
    }, [])

    return (
        <div id="defaultLayout" className="flex flex-col w-full min-h-screen bg-white bg-gradient-to-br from-light1 to-transparent"> {/* bg-gradient-to-br from-light1 to-transparent */}
            <header className="w-full flex items-center justify-between bg-white/40 border-t border-b border-border1 px-8 py-6">
                <Link to="/">
                    <DabadubHorizontal color="var(--color-primary)" className="w-44"/>
                </Link>
                {token ?
                <DropdownMenu
                    buttonText={user.name}
                    buttonIcon={(
                        <>
                            <UserCircleIcon className="size-6"/>
                        </>
                    )}
                    menuContent={(
                        <>
                            <a href="#" className="w-full flex gap-2 items-center hover:bg-gray-200/60 rounded p-2">
                                <UserIcon className="size-6"/>
                                My profile
                            </a>
                            <a href="#" onClick={onLogout} className="w-full flex gap-2 items-center hover:bg-gray-200/60 rounded p-2">
                                <ArrowRightStartOnRectangleIcon className="size-6"/>
                                Logout
                            </a>
                        </>
                    )}>
                </DropdownMenu>
                :
                <SecondaryButtonLink to="/login">
                    {/* <PlusIcon className="size-5"/> */}
                    Login
                </SecondaryButtonLink>
                }
            </header>
            <main className="w-100 grow flex p-4">
                <aside className="w-full max-w-80">
                    <div className="w-full h-full flex flex-col gap-6 border border-border1 shadow-sm rounded-xl bg-white/40 p-2">
                            
                        <div className="w-full flex flex-col gap-2">
                            <AsideLink to="/">
                                <HomeIcon className="size-6"/>
                                Home
                            </AsideLink>
                            <AsideLink to="/resources">
                                <NewspaperIcon className="size-6"/>
                                Resources
                            </AsideLink>
                            <AsideLink>
                                <HomeModernIcon className="size-6"/>
                                Living Spaces
                            </AsideLink>
                            <AsideLink>
                                <BriefcaseIcon className="size-6"/>
                                Work
                            </AsideLink>
                            <AsideLink>
                                <UserGroupIcon className="size-6"/>
                                Comunity
                            </AsideLink>
                            {/* <AsideLink to="/users">Users</AsideLink> */}
                        </div>
                    </div>
                </aside>
                <div className="content grow p-4">
                    <Outlet/>
                </div>
            </main>
            {notification &&
            <div className="notification">
                {notification}
            </div>
            }
        </div>
    )
}