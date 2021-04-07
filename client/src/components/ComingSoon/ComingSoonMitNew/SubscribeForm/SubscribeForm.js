import InputText from './InputText';
import TextButton from './TextButton';
import './SubscribeForm.scss'

const SubscribeForm = () => {
    return (
        <form className="subscribe-form">
            <InputText id="email" placeholder="Email Address"/>
            <TextButton className="text-button" text="Subscribe"/>
        </form>
    );
}

export default SubscribeForm;