import {Route, Routes} from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/login/LoginPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import HomePage from "../pages/home/HomePage";

function App() {
    return (
        <Routes>
            <Route path="/auth" element={<AuthLayout/>}>
                <Route path="login" element={<LoginPage/>}></Route>
            </Route>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default App
