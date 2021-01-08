import Button from '../Button';
import './styles.css';

const TextAreaBlock =(props) => {
    return (
        <div className="textarea-block">
            <textarea className="textarea" placeholder={props.placeholder}/>
            <Button type="button" text={props.text} />
        </div>
    );
}

export default TextAreaBlock;