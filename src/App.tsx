
import './assets/global.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApiAxios } from './api';
import { AuthProvider } from './contexts/auth-context';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignUp from './pages/Signup';
import SignIn from './pages/SingIn';

export type AppProps = {}

export function App(props: AppProps) {
    let api = new ApiAxios()
    return (
        <BrowserRouter>
            <AuthProvider api={api}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
export default App;
