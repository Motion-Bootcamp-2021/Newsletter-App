import './Header.scss';

function Header({ message }) {
    return (
        <header className="App-header">
            <img src="" className="App-logo" alt="logo" />
            <p>
                {message}
            </p>
        </header>
    )
}

export default Header;