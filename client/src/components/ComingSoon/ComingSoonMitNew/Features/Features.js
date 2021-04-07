import { ReactComponent as Discover } from './asserts/Discover.svg';
import { ReactComponent as MakeReading } from './asserts/MakeReading.svg';
import { ReactComponent as OneClick } from './asserts/OneClick.svg';
import { ReactComponent as YourOwn } from './asserts/YourOwn.svg';
import Feature from './Feature';

import './Features.scss'

const Features = () => {
    return (
        <div className="features">
            <Feature icon={<OneClick />} title="One-Click Unsubscribe" content="Don’t like what you’re reading? Remove the feed and never see it again." />
            <Feature icon={<YourOwn />} title="Your Own Letterbox Email" content="See something cool on the web? Subscribe with your new custom email." />
            <Feature icon={<Discover />} title="Discover Top Newsletters" content="Browse through your interests and find the hottest newsletters in that space." />
            <Feature icon={<MakeReading />} title="Make Reading Pleasant Again" content="Group newsletters into folders, quickly mark as read, switch between day/night mode." />
        </div>
    )
}

export default Features;