import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client.js";
import DabadubBox from "../assets/DabadubBox.jsx";

export default function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    
    const [errors, setErrors] = useState(null)
    const {setUser, setToken} = useStateContext()

    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        setErrors(null)
        
        axiosClient.post('/login', payload)
            .then(({data}) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch(err => {
                const response = err.response;
                if(response && response.status === 422) {
                    if (response.data.errors) {
                        setErrors(response.data.errors);
                    } else {
                        setErrors({
                            email: [response.data.message]
                        });
                    }
                }
            })
    }

    return (
        <div className="flex bg-white bg-gradient-to-br from-light1 to-transparent min-h-screen w-full flex-col items-center justify-center gap-8 p-4">
            <DabadubBox color="var(--color-primary)" className="w-40"/>
            <form className="max-w-full flex flex-col items-start bg-white/60 border border-border1 shadow-sm rounded-xl gap-4 py-6 px-4 lg:p-8" action="" onSubmit={onSubmit}>
                <h1 className="title">Login into your account</h1>
                {errors && <div className="alert">
                    {Object.keys(errors).map(key => (
                        <p key={key}>{errors[key][0]}</p>
                    ))}
                </div>}
                <input className="w-96 max-w-full border rounded-lg px-4 py-2" ref={emailRef} type="email" placeholder="Email"/>
                <input className="w-96 max-w-full border rounded-lg px-4 py-2" ref={passwordRef} type="password" placeholder="Password"/>
                <button className="btn btn-block bg-primary text-white px-4 py-2 rounded-lg ms-auto">Login</button>
                <p className="w-full text-end">
                    Not Registered? <Link to="/signup" className="text-primary hover:">Create an acount</Link>
                </p>
            </form>
        </div>
    )
}