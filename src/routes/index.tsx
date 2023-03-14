import { Routes, Route } from "react-router-dom";

import SignIn from "~/pages/sign-in";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
        </Routes>
    )
}

export default AppRoutes;