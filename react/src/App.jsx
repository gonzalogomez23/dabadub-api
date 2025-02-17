import { useStateContext } from "contexts/ContextProvider.jsx";

const App = ({ children }) => {

    const {notification} = useStateContext()
    
    return (
        <>
            {children}
            {notification &&
                <div className="fixed top-0 left-0 w-screen flex justify-center p-8" role="alert">
                    <div className="max-w-full text-green-800 bg-green-50 border-2 border-green-700 rounded-lg px-6 py-3">
                        <span className="font-medium">{notification}</span>
                    </div>
                </div>
            }
        </>
    );
};

export default App
