export function  Button({label,parenthMetod, changeMetod}){
    return(
        <button onChange={changeMetod} onClick={parenthMetod} >
            {label}
        </button>
    );
}

export default Button;