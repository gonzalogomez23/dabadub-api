import {Navigate, createBrowserRouter} from "react-router-dom";
import Home from "views/Home";
import Posts from "views/Posts/Posts";
import Login from "views/Login";
import Users from "views/Users/Users";
import Signup from "views/Signup";
import NotFound from "views/NotFound";
import DefaultLayout from "layout/DefaultLayout";
import LoginLayout from "layout/LoginLayout";
import Dashboard from "views/Dashboard";
import UserForm from "views/Users/UserForm";
import PostForm from "views/Posts/PostForm";
import Post from "./views/Posts/Post";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            // {
            //     path: '/',
            //     element: <Navigate  to="/users" />
            // },
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/posts/:category?',
                element: <Posts />
            },
            {
                path: '/post/:slug',
                element: <Post />
            },
            {
                path: '/posts/new',
                element: <PostForm key="postCreate"/>
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate"/>
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate"/>
            },
        ]
    },
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },
    
    {
        path: '/*',
        element: <NotFound />
    },
]);

export default router;