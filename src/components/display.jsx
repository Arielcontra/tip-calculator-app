import { useContext } from 'react'
import { ConfigContext } from '../config-provider'

function Display() {

    const { totalBill, setTotalBill, valueTip, setValueTip, setCustomValue, people, setPeople } = useContext(ConfigContext)
    const spent = parseInt(totalBill)
    const selectTip = parseInt(valueTip)
    const totalPeople = parseInt(people)

    const tipTotal = (spent * selectTip) / 100

    const total = (spent + tipTotal) / totalPeople

    const tip = tipTotal / totalPeople

    const handleClick = () => {
        setValueTip('')
        setCustomValue('')
        setTotalBill('')
        setPeople('')
    }

    return (
        <div className="display">
            <div className="wrapperItems">
                <div className="wrapperResult">
                    <div className="wrapperTip">
                        <div className="tipAmount">
                            <h3 className="h3">Tip Amount</h3>
                            <p>/ person</p>
                        </div>
                        <div className="wrapperDisplayTip">
                            <h1 className="displayTip">{tip}</h1>
                        </div>
                    </div>
                    <div className="wrapperTotal">
                        <div className="total">
                            <h3 className="h3">Total</h3>
                            <p>/ person</p>
                        </div>
                        <div className="wrapperDisplayTotal">
                            <h1 className="displayTotal">{total}</h1>
                        </div>
                    </div>
                </div>
                <button type='reset' onClick={() => handleClick} className="buttonReset" disabled={true}>RESET</button>
            </div>
        </div>
    )
}

export default Display