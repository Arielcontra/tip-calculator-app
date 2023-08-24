function DisplayComponent({ wrapperFatherClass, wrapperChildOneClass, description,
    wrapperChildTwoClass, textResultClass, textResult
}) {
    
    return (
        <div className={wrapperFatherClass}>
            <div className={wrapperChildOneClass}>
                <h5>{description}</h5>
                <p>/person</p>
            </div>
            <div className={wrapperChildTwoClass}>
                <h2 className={textResultClass}>{textResult}</h2>
            </div>
        </div>
    )
}

export default DisplayComponent