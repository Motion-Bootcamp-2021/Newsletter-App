import './FolderProps.scss';

function FolderProps({folderName, unreadArticles}){
    const currFolder = folderName;

    let shapeDiv = '';

    if(currFolder === 'morning-brew'){
        shapeDiv = <div className="circle"></div>;
    }else{
        shapeDiv = <div className="semi-circle"></div>
    }

    return (
    <div className="folder-props">
        {shapeDiv}
        <div className="title-props">
            <h4 className="title">{currFolder === 'morning-brew' ? 'Morning Brew' : 'Business'}</h4>
           {unreadArticles ? <label className="unread-mess">{unreadArticles} unread</label> : null} 
        </div>
    </div>
    );
}

export default FolderProps;
