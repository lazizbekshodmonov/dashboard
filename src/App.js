import {useState, lazy, Suspense} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import "./App.scss"
import Agents from './pages/Agents/Agents';
import Articles from './pages/Articles/Articles';
import Contacts from './pages/Contacts/Contacts';
import Ideas from './pages/Ideas/Ideas';
import Settings from './pages/Settings/Settings';
import Subscription from './pages/Subscription/Subscription';
import Tickets from './pages/Tickets/Tickets';
const Overview = lazy(() => import('./pages/Overview/Overview'));
const LoginPage = lazy(() => import('./pages/Auth/Login'));
// const RegistePage = lazy(() => import('./pages/Auth/Register'));

function App() {
    const [token, setToken] = useState(window.localStorage.getItem('token'));
    
    return (
        <div className = "App" >    
        {/* <RegisterPage/> */}
        
        <Suspense callback = {<h1>Error from react</h1>}>
            <Router>
                <Routes>
                    {
                        token ? (
                            <>
                                <Route path="/overview" element={<Overview />} />
                                <Route path="/tickets" element={<Tickets />} />
                                <Route path="/ideas" element={<Ideas />} />
                                <Route path="/contacts" element={<Contacts />} />
                                <Route path="/agents" element={<Agents />} />
                                <Route path="/articles" element={<Articles />} />
                                <Route path="/settings" element={<Settings />} />
                                <Route path="/subscription" element={<Subscription />} />
                                <Route
                                    path="*"
                                    element={<Navigate to="/overview" replace />}
                                />
                            </>
                        ) : (
                            <>
                                <Route path='/login' element = {<LoginPage setToken={setToken}/>}/>
                                <Route
                                    path="*"
                                    element={<Navigate to="/login" replace />}
                                />
                            </>
                        )
                    }
                </Routes>
            </Router>
            </Suspense>
        
            
        </div>
    );
}

export default App;