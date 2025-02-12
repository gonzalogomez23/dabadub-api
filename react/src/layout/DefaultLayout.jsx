import { Link, Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useStateContext } from "contexts/ContextProvider.jsx";
import LogoDabadub from "assets/LogoDabadub.jsx";
import axiosClient from "/src/axios-client.js";
import DropdownMenu from "components/DropdownMenu.jsx";
import { ArrowRightStartOnRectangleIcon, UserIcon, UserCircleIcon, HomeIcon, NewspaperIcon, UserGroupIcon, PlusIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import PrimaryButton from "components/PrimaryButton.jsx";

export default function DefaultLayout() {

    const {user, token, notification, setUser, setToken} = useStateContext()

    const handleLogout = (ev) => {
        ev.preventDefault()

        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    useEffect(() => {
        if (token) {
            axiosClient.get('/user')
                .then(({ data }) => {
                    setUser(data);
                })
                .catch((err) => {
                    console.error('Error fetching user data:', err);
                });
        }
    }, [token])


    return (
        <div id="defaultLayout" className="flex flex-col h-screen w-full overflow-x-hidden bg-gray-100 min-h-full"> {/* bg-gradient-to-br from-light1 to-transparent */}
            <header className="w-full flex items-center justify-between bg-white border-b border-t border-primary/15 px-12 py-6">
                <Link to="/">
                    <LogoDabadub className="w-14"/>
                </Link>
                    {token ?
                        <div className="flex gap-4 items-center">
                            <PrimaryButton to="/posts/new">
                                New post
                                <PencilSquareIcon className="size-5"/>
                            </PrimaryButton>
                            <DropdownMenu
                                label={user.name}
                                buttonIcon={(
                                    <UserCircleIcon className="size-6"/>
                                )}
                            >
                                <DropdownMenu.Item>
                                    <UserIcon className="size-6"/>
                                    My profile
                                </DropdownMenu.Item>
                                <DropdownMenu.Item parentMethod={handleLogout}>
                                    <ArrowRightStartOnRectangleIcon className="size-6"/>
                                    Logout
                                </DropdownMenu.Item>
                            </DropdownMenu>
                        </div>
                    :
                        <PrimaryButton to="/login" variant="secondary">
                            Login
                        </PrimaryButton>
                    }
            </header>
            <main className="w-100 grow">
                <Outlet/>
            </main>
            {notification &&
                <div className="fixed top-0 left-0 w-screen flex justify-center p-8" role="alert">
                    <div className="max-w-full text-green-800 bg-green-50 border-2 border-green-700 rounded-lg px-6 py-3">
                        <span className="font-medium">{notification}</span>
                    </div>
                </div>
            }
        </div>
    )
}