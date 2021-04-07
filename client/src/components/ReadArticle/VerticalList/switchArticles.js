let selected = '';

function changeArticle(e){
    const currSelectedElement = e.target;
    const newText = currSelectedElement.innerText;

    if(selected !== ''){
        selected.style.fontWeight = 'normal';
    }

    currSelectedElement.style.fontWeight = 'bold';
    selected = currSelectedElement
    
    const titleElement = document.getElementById('articleTitle');
    titleElement.innerText = newText;
}

export default changeArticle;