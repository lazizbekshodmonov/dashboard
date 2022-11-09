import {useState, lazy, Suspense} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import './index.scss'
const HomePage = lazy(() => import('./pages/Home/Home'));
const LoginPage = lazy(() => import('./pages/Auth/Login'));
// const RegisterPage = lazy(() => import('./pages/Auth/Register'));

function App() {
    const [token, setToken] = useState();

    return (
        <div className = "App" >    
        {/* <RegisterPage/> */}
            <Suspense callback = {<h1>Error from react</h1>}>
            <Router>
                <Routes>
                    {
                        token ? (
                            <Route path='/' element = {<HomePage />}/>
                        ) : (
                            <Route path='/' element = {<LoginPage setToken={setToken}/>}/>
                        )
                    }
                </Routes>
            </Router>
            </Suspense>
        </div>
    );
}

export default App;