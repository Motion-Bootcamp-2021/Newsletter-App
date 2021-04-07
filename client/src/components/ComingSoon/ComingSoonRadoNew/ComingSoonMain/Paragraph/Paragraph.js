import './Paragraph.scss';

function Paragraph({props, icon}){
    
    return (
        <div className="paragraph-element">

            <div className="paragraph-icon">
                {icon}
            </div>
        
            <div className="paragraph-props">
                <div className="paragraph-heading">
                    <h4>{props.title}</h4>
                </div>

                <div className="paragraph-content">
                    <p>{props.content}</p>
                </div>
            </div>

        </div>
    )
}

export default Paragraph;