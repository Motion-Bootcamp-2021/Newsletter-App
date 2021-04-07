import './Input.scss'

function Input({subscribed, setSubscribed}){

    return (
        <div className="input-elements">

            <div className="input-heading-element">
               {subscribed ? 
                <h3>You should receive a <span>confirmation email</span> soon</h3> : 
                <h3>Discover, subscribe and manage email newsletters in one place</h3>}
            </div>

            {subscribed ? 
            null :  
            <form className="input-element">
                 <input placeholder="Email Address" />
                 <button onClick={() => setSubscribed(true)}>Subscribe</button>
            </form>}
           
        </div>
    )
}

export default Input;