import { ReactComponent as DiscoverIcon } from '../assets/discover.svg';
import { ReactComponent as MakeReadingIcon } from '../assets/make-reading.svg';
import { ReactComponent as OneClickIcon } from '../assets/one-click.svg';
import { ReactComponent as YourOwnIcon } from '../assets/your-own.svg';

import './Benefit.scss';

const Benefit = ({ icon, title, description }) => {
    const icons = {
        DiscoverIcon: <DiscoverIcon />,
        MakeReadingIcon: <MakeReadingIcon />,
        OneClickIcon: <OneClickIcon />,
        YourOwnIcon: <YourOwnIcon />
    }

    return (
        <article className={'coming-soon-benefit'}>
            <div className="benefit-icon-container">
                {icons[icon]}
            </div>
            <h3 className="benefit-title">{title}</h3>
            <p className="benefit-description">{description}</p>
        </article>
    )
}

export default Benefit;