import { ReactComponent as StarDarkIcon } from '../../../shared/assets/star-dark.svg';
import { ReactComponent as MiniLogoGreenIcon } from '../../../shared/assets/lb-logo-mini-green.svg';
import './AddToLabel.scss';

const AddToLabel = ({ labels, setLabels }) => {
    
    return (
        <ul className="labels">
            {
                labels && labels.map(label => (
                    <li key={label._id}>
                        <h3 className="label-title">
                            <MiniLogoGreenIcon />
                            {label.labelTitle}
                        </h3>
                        <span className="save-txt">
                            SAVE
                            <StarDarkIcon />
                        </span>
                    </li>
                ))
            }
            
        </ul>
    );
}

export default AddToLabel;
