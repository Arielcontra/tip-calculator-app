import { useContext } from 'react'
import { ConfigContext } from '../config-provider'

function SelectTip() {

    const { valueTip, setValueTip } = useContext(ConfigContext)
    const { customValue, setCustomValue } = useContext(ConfigContext)
    

    const handleClick = buttonId => {
        setValueTip(buttonId)
        setCustomValue('')
    }

    const handleCustomChange = (e) => {
        const newValue = e.target.value
        setCustomValue(newValue)
        setValueTip(newValue)
    }

    return (
        <div className="wrapperSelectTip">
            <div className="selectTip">
                <p>Select Tip %</p>
            </div>
            <div className="wrapperButtons">
                <button onClick={() => handleClick(5)} className={valueTip === 5 ? 'selected' : 'button'}>
                    5%
                </button>
                <button onClick={() => handleClick(10)} className={valueTip === 10 ? 'selected' : 'button'}>
                    10%
                </button>
                <button onClick={() => handleClick(15)} className={valueTip === 15 ? 'selected' : 'button'}>
                    15%
                </button>
                <button onClick={() => handleClick(25)} className={valueTip === 25 ? 'selected' : 'button'}>
                    25%
                </button>
                <button onClick={() => handleClick(50)} className={valueTip === 50 ? 'selected' : 'button'}>
                    50%
                </button>
                <input type="number" placeholder="Custom" onChange={handleCustomChange}
                    className={customValue !== '' ? 'selectedCustom' : 'custom'}
                />
            </div>
        </div>
    )
}

export default SelectTip