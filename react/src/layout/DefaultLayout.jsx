import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";
import { useState, useEffect } from "react";
import axiosClient from "../axios-client.js";

import AsideLink from 'components/AsideLink'
import DabadubHorizontal from "../assets/DabadubHorizontal.jsx";
import DropdownMenu from "components/DropdownMenu.jsx";
import { ArrowRightStartOnRectangleIcon, UserIcon, UserCircleIcon, HomeIcon, NewspaperIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import PrimaryButton from "components/PrimaryButton.jsx";
import CategoryIcon from "components/CategoryIcon.jsx";

export default function DefaultLayout() {

    const {user, token, notification, setUser, setToken} = useStateContext()
    const [categories, setCategories] = useState([]);


    const onLogout = (ev) => {
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

    
    const getCategories = () => {
        // setLoading(true)
        axiosClient.get('/categories')
            .then(({data}) => {
                // setLoading(false)
                // console.log(data.categories)
                setCategories(data.categories)
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                  setErrors(response.data.errors || { general: [response.data.message] });
                } else {
                  console.error("Unexpected error:", response.data.error);
                }
              })
            // .finally(() => {
            // setLoading(false);
            // });
    }
    
    useEffect(() => {
        getCategories()
    }, [])


    return (
        <div id="defaultLayout" className="flex flex-col h-screen w-full overflow-x-hidden bg-gray-100 min-h-full gap-3 p-4"> {/* bg-gradient-to-br from-light1 to-transparent */}
            <header className="w-full flex items-center justify-between bg-white rounded-xl px-8 py-6">
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
                <PrimaryButton to="/login" variant="secondary">
                    {/* <PlusIcon className="size-5"/> */}
                    Login
                </PrimaryButton>
                }
            </header>
            <main className="w-100 grow flex gap-3">
                <aside className="w-full max-w-80">
                    <div className="w-full flex flex-col gap-6 rounded-xl bg-white p-2">
                        <div className="w-full flex flex-col gap-2">
                            <AsideLink to="/">
                                <HomeIcon className="size-6"/>
                                Home
                            </AsideLink>
                            <AsideLink to="/posts">
                                <NewspaperIcon className="size-6"/>
                                All posts
                            </AsideLink>
                            {categories.map(category => (
                                <AsideLink
                                    to={`/posts/${category.slug}`}
                                    key={category.id}
                                    category={category}
                                >
                                    <CategoryIcon iconName={category.icon} className="size-6"/>
                                    {category.title}
                                </AsideLink>
                            ))}
                            <AsideLink>
                                <UserGroupIcon className="size-6"/>
                                Comunity
                            </AsideLink>
                            {/* <AsideLink to="/users">Users</AsideLink> */}
                        </div>
                    </div>
                </aside>
                <div className="content grow rounded-xl bg-white p-4">
                    <Outlet/>
                </div>
            </main>
            {notification &&
                <div class="fixed top-0 left-0 w-screen flex justify-center p-8" role="alert">
                    <div className="max-w-full text-green-800 bg-green-50 border-2 border-green-700 rounded-lg px-6 py-3">
                        <span class="font-medium">{notification}</span>
                    </div>
                </div>
            }
        </div>
    )
}