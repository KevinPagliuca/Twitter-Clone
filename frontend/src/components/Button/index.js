import './styles.css';

const Button = (props) => {
    return (
        <div className="button-container">
            <button type={props.type} {...props}>{props.text}</button>
        </div>
    );
}

export default Button;