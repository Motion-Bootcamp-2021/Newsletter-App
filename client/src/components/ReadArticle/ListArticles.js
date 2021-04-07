import {  useState } from 'react';
import {  useParams } from 'react-router-dom';

import { useFetch } from '../../hooks';
import FolderProps from './FolderProps';
import VerticalList from './VerticalList';
import VisualizedArticle from './VisualizedArticle'; 
import './ListArticles.scss';


function ListArticles(){
    let { folderName } = useParams();
    const data = useFetch(`http://localhost:5000/articles`);

    const [state, setState] = useState({folderName, data, chosenArticle: '', unreadArticles: 0});

    if(data !== null && state.data === null){
        data.forEach((element) => {
            element.read = false;
        });
        setState({...state, data, unreadArticles: data.length});
    }   

    if(state.folderName !== folderName){
        setState({...state, folderName});
    }
    
    let ShareLabel;
    if(state ==='business'){
        ShareLabel = <label className="share">Share</label>;
    }

    function setChosenArticle(article){
        setState({...state, chosenArticle: article});
    }

    function setArticleAsRead(article){
        if(article.read === true){
            return;
        }
        article.read = true;
        setState({...state, unreadArticles: state.unreadArticles - 1});
    }

    return (
            <div>
                <div className="verticalOne"></div>
                <FolderProps folderName={state.folderName} unreadArticles={state.unreadArticles} />
                <VerticalList props={{data: state.data, setChosenArticle, setArticleAsRead}} />
                {ShareLabel}
                <div className="verticalTwo"></div>
                <VisualizedArticle chosenArticle={state.chosenArticle}/>
                <label className="bookmark">Bookmark</label>
            </div>
    )
}

export default ListArticles;