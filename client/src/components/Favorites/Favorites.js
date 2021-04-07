import FavoriteArticle from './FavoriteArticle/FavoriteArticle';
import './Favorites.scss';

import { useFetch } from '../../hooks';

function Favorites() {
    const data = useFetch('http://localhost:5000/articles');

    return (
        <div className="favorites">
            <header className="header">
                <h1>Favorites</h1>

                <label htmlFor="search">Search</label>
            </header>

            <main className="main">
                {
                    data ? data.map((article, index) => <FavoriteArticle key={article._id} article={article} />)
                        : null
                }
            </main>
        </div>
    );
}

export default Favorites;
