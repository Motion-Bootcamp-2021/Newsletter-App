import { BtnOutlineGreen } from '../shared/Buttons/BaseBtn/BaseBtn';
import { ReactComponent as LeftArrow } from '../shared/Icons/LeftArrow.svg';
import './ReadNewsHeader.scss';

const ReadNewsHeader = () => {
    const backToFeeds = () => {
        console.log('back to feeds')
    }
    return (
        <header className='read-header'>
            <div className='read-header-back' onClick={backToFeeds}><LeftArrow /><span className='read-header-back-text'>Back to feeds</span></div>
            <div className='read-header-title'><span className='newsletter-circle-logo'>CNN</span> CNN.COM The Good Stuff</div>
            <BtnOutlineGreen onClick={()=>{console.log('Unsubscribe')}}>Unsubscribe</BtnOutlineGreen>
        </header>
    )
}

export default ReadNewsHeader;