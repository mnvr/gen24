import React, { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";

export const App: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Hello</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </>
    );
};
