import {  useState } from 'react';

import Heading from './Heading';
import Input from './Input';
import Paragraph from './Paragraph'

import {ReactComponent as OneClick} from '../assets/one-click.svg';
import {ReactComponent as YourOwn} from '../assets/your-own.svg';
import {ReactComponent as DiscoverSvg} from '../assets/discover.svg';
import {ReactComponent as MakeReading} from '../assets/make-reading.svg';

import './ComingSoonMain.scss';


function ComingSoonMain(){
    const [subscribed, setSubscribed] = useState(false);

    const firstParagraphProps = {
        title: 'One-Click\nUnsubscribel',
        content: 'Don’t like what you’re reading?\nRemove the feed and\nnever see it again.',
    }

    const secondParagraphProps = {
        title: 'Your Own\nLetterbox Email',
        content: 'See something cool on the web?\nSubscribe with your new\ncustom email.',
    }

    const thirdParagraphProps = {
        title: 'Discover \nTop Newsletters',
        content: 'Browse through your interests\nand find the hottest newsletters\nin that space.',
    }

    const fourthParagraphProps = {
        title: 'Make Reading\nPleasant Again',
        content: 'Group newsletters into folders,\nquickly mark as read, switch\nbetween day/night mode.',
    }

    return (
        <div className="main">
            <div className="main-element">

                <div className="heading-container">
                    <Heading subscribed={subscribed}/>
                </div>

                <div className="input-container">
                    <Input subscribed={subscribed} setSubscribed={setSubscribed}/>
                </div>

                <div className="paragraphs">

                    <div className="paragraph-container">
                        <Paragraph props={firstParagraphProps} icon={<OneClick/>}/>
                        <Paragraph props={secondParagraphProps} icon={<YourOwn/>} />
                        <Paragraph props={thirdParagraphProps} icon={<DiscoverSvg/>} />
                        <Paragraph props={fourthParagraphProps} icon={<MakeReading/>} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ComingSoonMain;