import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { signOut } from './services/userService';

import './App.css';

function App() {
    const user = useContext(AuthContext);

    const handleSignOut = () => {
        signOut();
    }

    return (
        <div className="App">
            {
                user ?
                    <Link to="/" onClick={handleSignOut}>Sign Out</Link>
                    : <Link to="/signin">Sign In</Link>
            }
        </div>
    );
}

export default App;