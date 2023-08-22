function FormElement({ fieldsetClass, wrapperTextClass, labelClass, textHtmlFor, textLabel, paragraphClass, colorParagraph, textParagraph, inputClass, inputValue, onChangeEvent, imageSource, textImg, imgClass }) {

    return (
        <fieldset className={fieldsetClass}>
            <div className={wrapperTextClass}>
                <label className={labelClass} htmlFor={textHtmlFor}>{textLabel}</label>
                <p className={paragraphClass} style={colorParagraph}>{textParagraph}</p>
            </div>
            <input type="number"
                className={inputClass}
                id={textHtmlFor}
                placeholder='0'
                value={inputValue}
                onChange={onChangeEvent} />
            <img src={imageSource} alt={textImg} className={imgClass} />
        </fieldset>
    )

}

export default FormElement
