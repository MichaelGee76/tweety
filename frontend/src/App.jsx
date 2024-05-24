import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserDataContext, TokenDataContext } from "./context/Context";
import { useState } from "react";

function App() {
    const [user, setUser] = useState();
    const [token, setToken] = useState();
    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            <TokenDataContext.Provider value={{ token, setToken }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login " element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile/:id" element={<Profile />} />
                        <Route path="/verifyEmail" element={<VerifyEmail />} />
                    </Routes>
                </BrowserRouter>
            </TokenDataContext.Provider>
        </UserDataContext.Provider>
    );
}

export default App;
