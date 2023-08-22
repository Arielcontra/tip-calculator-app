function Button ({onClickFunction, buttonClass, tipNumber}) {
    return(
        <button onClick={onClickFunction} className={buttonClass}>{tipNumber}%</button>
    )
}

export default Button


