import './Explore.scss';
import NewsletterRectangle from './NewsletterRectangle';
import TopicButton from './TopicButton';

import { useFetch } from '../../hooks';
import { useState } from 'react';

function Explore() {
    const data = useFetch('http://localhost:5000/newsletters');
    const [selectedTopic, setSelectedTopic] = useState('all');

    const chooseTopic = (e) => {
        const topic = e.target.textContent.toLowerCase();
        setSelectedTopic(topic);
    }

    const newsletters = (
        selectedTopic === 'all' ? data
            : data.filter(x => x.topic === selectedTopic)
    );

    return (
        <div className="explore">
            <header className="header">
                <h1>Explore</h1>

                <label htmlFor="search">Search</label>
            </header>

            <main className="main">
                <aside className="aside">
                    <ul>
                        <li>
                            <TopicButton content='All' selectedTopic={selectedTopic} chooseTopic={chooseTopic} />
                        </li>
                        <li>
                            <TopicButton content='Business' selectedTopic={selectedTopic} chooseTopic={chooseTopic} />
                        </li>
                        <li>
                            <TopicButton content='Writing' selectedTopic={selectedTopic} chooseTopic={chooseTopic} />
                        </li>
                        <li>
                            <TopicButton content='Creative' selectedTopic={selectedTopic} chooseTopic={chooseTopic} />
                        </li>
                    </ul>
                </aside>

                <section className="section">
                    {
                        newsletters ? newsletters.map(newsletter => <NewsletterRectangle key={newsletter._id} newsletter={newsletter} />)
                            : null
                    }
                </section>
            </main>

        </div>
    );
}
export default Explore;
