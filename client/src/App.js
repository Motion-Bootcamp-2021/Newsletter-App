import './App.css';
import UserContext from './contexts/UserContext';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';

function App() {
    const [message, setMessage] = useState('');
    const [userState, setUserState] = useContext(UserContext);
    
    const login = () => {
        setUserState(() => ({name: 'MAIL@MAIL.COM'}))
        console.log('LOGIN'); 
    }

    const logout = () => {
        setUserState(() => ({name: ''}))
        console.log('LOGOUT');
    }
    
    const isLoginUserNavigation = () => {
        if(userState.name){
            return(
                <>
                    <div onClick={logout}>| SignOut - {userState.name} | </div>
                    <Link to="/explore">Explore | </Link>
                    <Link to="/favorites">Favorites | </Link>
                    <Link to="/newsletter/test">Newsletter Page | </Link>
                    <Link to="/folder-share">FolderShare | </Link>
                </>
            )
        }
        return(
            <>
                <Link to="/onboarding">| Onboarding | </Link>
                <div onClick={login}>SignIn | </div>
            </>
        )
    }

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => {
                setMessage(data.message);
            });
    }, []);

    return (
            <div className="App">
                <Header message={message} />
                {isLoginUserNavigation()}                            
            </div>
    );
}

export default App;