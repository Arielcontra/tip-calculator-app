import { useContext } from 'react'
import { ConfigContext } from '../config-provider'

function Display() {

    const { totalBill, valueTip, customValue, people, setReset, buttonLocked, setButtonLocked } = useContext(ConfigContext)

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

    const showButton = !(spent > 0 || totalPeople > 0 || valueTip > 0 || customValue > 0)
    setButtonLocked(showButton)


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
                            <h2 className="displayTip">{tip > 0 ? tip.toFixed(2) : '0,00'}</h2>
                        </div>
                    </div>
                    <div className="wrapperTotal">
                        <div className="total">
                            <h3 className="h3">Total</h3>
                            <p>/ person</p>
                        </div>
                        <div className="wrapperDisplayTotal">
                            <h2 className="displayTotal">{total > 0 ? total.toFixed(2) : '0,00'}</h2>
                        </div>
                    </div>
                </div>
                <button type='reset' onClick={handleClick} className={buttonLocked ? 'oculto' : 'buttonReset'} >RESET</button>
            </div>
        </div>
    )
}

export default Display