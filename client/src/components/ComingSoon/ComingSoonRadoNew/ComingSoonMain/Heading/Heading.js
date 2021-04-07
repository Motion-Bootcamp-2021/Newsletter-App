import './Heading.scss';

function Title({subscribed}){

    return (
        <div className="heading-element">
            <h1>{subscribed ? 'Thank you for joining our community' : 'Bring back the joy of reading newsletters'}</h1>
        </div>
    )
}

export default Title;