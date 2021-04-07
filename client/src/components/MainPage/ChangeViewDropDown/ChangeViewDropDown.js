import { useContext } from 'react';
import MainPageContext from '../../../contexts/MainPageContext';

import {ReactComponent as TitleOnly } from '../../MainPage/shared/assets/tItleOnlyView.svg';
import {ReactComponent as CardView } from '../../MainPage/shared/assets/cardView.svg';
import {ReactComponent as MagazineView } from '../../MainPage/shared/assets/magazineView.svg';

import './ChangeViewDropDown.scss';

const ChangeViewDropDown = () => {
    const [mainPageState, setMainPageState] = useContext(MainPageContext);

    const changeView = (e) => {
        let icon
        if(e.target.id === "titleOnlyView"){
            icon = <TitleOnly />
        } else if(e.target.id === "cardView"){
            icon = <CardView />
        } else {
            icon = <MagazineView />
        }
        setMainPageState({
            ...mainPageState,
            pageView: e.target.id,
            viewIcon: icon
        })         
    }

    return (
        <div className="change-view-dropdown">
            <span>change view <span className="change-view-icon">{mainPageState.viewIcon || <MagazineView />}</span></span>
            <ul className="change-view-dropdown-content">
                <li onClick={changeView} id="titleOnlyView"><span><TitleOnly /></span> Title 0nly view</li>
                <li onClick={changeView} id="cardView"><span><CardView /></span> Card view</li>
                <li onClick={changeView} id="magazineView"><span><MagazineView /></span> Magazine view</li>
            </ul>

        </div>
    )
}

export default ChangeViewDropDown;