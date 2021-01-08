import './styles.css';

const InputBlock = (props) => {
    return (
        <div className="input-block">
            <input type={props.type} placeholder={props.placeholder} {...props} />
        </div>
    );
}

export default InputBlock;