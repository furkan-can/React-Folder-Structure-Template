import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { Home, Login, About, SignUp, Error } from '@/pages';
const Routers = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Routers
