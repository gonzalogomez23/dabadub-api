const App = ({ children }) => {
    return (
        <div className="flex flex-col h-screen w-screen overflow-x-hidden">
            {children}
        </div>
    );
};

export default App
