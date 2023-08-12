import { useContext } from 'react'
import { ConfigContext } from '../config-provider'

function Display() {

    const { totalBill, valueTip, people, setReset } = useContext(ConfigContext)

    const spent = parseInt(totalBill)
    const selectTip = parseInt(valueTip)
    const totalPeople = parseInt(people)

    const tipTotal = (spent * selectTip) / 100

    const total = (spent + tipTotal) / totalPeople

    const tip = tipTotal / totalPeople

    const handleClick = () => {
        setReset(true);

        setTimeout(() => {
            setReset(false)
        }, 1000)
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
                <button type='reset' onClick={handleClick} className="buttonReset" >RESET</button>
            </div>
        </div>
    )
}

export default Display