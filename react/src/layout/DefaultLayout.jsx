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
        <div id="defaultLayout" className="flex w-full h-screen">
            <aside className="w-full max-w-80 bg-gray-100 flex flex-col gap-6 border-e p-4">
                <div className="flex items-center gap-2 py-2">
                    <LogoEspendub color="var(--color-primary)" className="w-12"/>
                    <h1 className="font-semibold text-primary text-2xl">Esp<span className="text-secondary">en</span>Dub</h1>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <AsideLink to="/dashboard">Dashboard</AsideLink>
                    <AsideLink to="/users">Users</AsideLink>
                </div>
            </aside>
            <div className="content grow">
                <header className="w-full border-b-2 border-emerald-900 flex items-center justify-between p-8">
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