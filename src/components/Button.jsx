function Button({ onClickFunction, buttonClass, text }) {
    return (
        <button onClick={onClickFunction} className={buttonClass}>{text}</button>
    )
}

export default Button


