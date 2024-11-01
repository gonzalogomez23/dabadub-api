import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";
import { useEffect } from "react";
import axiosClient from "../axios-client.js";

import AsideLink from 'components/AsideLink'
import LogoEspendub from "../assets/LogoEspendub.jsx";

export default function DefaultLayout() {

    const {user, token, notification, setUser, setToken} = useStateContext()

    if (!token){
        return <Navigate to="/login"/>
    }

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
        <div id="defaultLayout" className="flex w-full h-screen p-4 gap-4">
            <aside className="w-full max-w-80">
                <div className="w-full h-full flex flex-col gap-6 border shadow-sm rounded-xl p-2">
                    <div className="flex items-center gap-3 p-2">
                        <LogoEspendub color="var(--color-primary)" className="w-10"/>
                        <h1 className="text-primary font-headings font-medium text-3xl">daba<span className="font-bold">Dub</span></h1>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <AsideLink to="/dashboard">Dashboard</AsideLink>
                        <AsideLink to="/users">Users</AsideLink>
                    </div>
                </div>
            </aside>
            <div className="content grow">
                <header className="w-full border shadow-sm rounded-xl flex items-center justify-between px-8 py-6">
                    <div>
                        Header
                    </div>
                    <div className="flex gap-8">
                        {user.name}
                        <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
                    </div>
                </header>
                <main className="p-4">
                    <Outlet/>
                </main>
            </div>
            {notification &&
            <div className="notification">
                {notification}
            </div>
            }
        </div>
    )
}