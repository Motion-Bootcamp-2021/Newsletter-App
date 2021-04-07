import Benefit from './Benefit';
import './BenefitsContainer.scss';

const BenefitsContainer = () => {
    return (
        <div className="benefits-container">
            <Benefit icon={'OneClickIcon'}
                title={'One-Click Unsubscribe'}
                description={'Don’t like what you’re reading? Remove the feed and           never see it again.'}
            />

            <Benefit icon={'YourOwnIcon'}
                title={'Your Own Letterbox Email'}
                description={'See something cool on the web? Subscribe with your new  custom email.'}
            />

            <Benefit icon={'DiscoverIcon'}
                title={'Discover        Top Newsletters'}
                description={'Browse through your interests and find the hottest newsletters in that space.'}
            />

            <Benefit icon={'MakeReadingIcon'}
                title={'Make Reading Pleasant Again'}
                description={'Group newsletters into folders, quickly mark as read, switch between day/night mode.'}
            />

        </div>
    )
}

export default BenefitsContainer;