import { useContext, useEffect } from 'react'
import { ConfigContext } from '../config-provider'
import Button from './Button'

function SelectTip() {

    const { valueTip, setValueTip, customValue, setCustomValue, reset } = useContext(ConfigContext)

    const handleClick = buttonId => {
        setValueTip(buttonId)
        setCustomValue('')
    }

    const handleCustomChange = (e) => {
        const newValue = e.target.value
        setCustomValue(newValue)
        setValueTip(newValue)
    }

    useEffect(() => {
        if (reset === true) {
            setValueTip('');
            setCustomValue('');
        }
    }, [reset]);

    return (
        <div className="wrapperSelectTip">
            <div className="selectTip">
                <p>Select Tip %</p>
            </div>
            <div className="wrapperButtons">
                <Button
                    onClickFunction={() => handleClick(5)}
                    buttonClass={valueTip === 5 ? 'selected' : 'button'}
                    text="5%"
                />
                <Button
                    onClickFunction={() => handleClick(10)}
                    buttonClass={valueTip === 10 ? 'selected' : 'button'}
                    text="10%"
                />
                <Button
                    onClickFunction={() => handleClick(15)}
                    buttonClass={valueTip === 15 ? 'selected' : 'button'}
                    text="15%"
                />
                <Button
                    onClickFunction={() => handleClick(25)}
                    buttonClass={valueTip === 25 ? 'selected' : 'button'}
                    text="25%"
                />
                <Button
                    onClickFunction={() => handleClick(50)}
                    buttonClass={valueTip === 50 ? 'selected' : 'button'}
                    text="50%"
                />
                <input type="number" placeholder="Custom" value={customValue} onChange={handleCustomChange}
                    className={customValue !== '' ? 'selectedCustom' : 'custom'}
                />
            </div>
        </div>
    )
}

export default SelectTip