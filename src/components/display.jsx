import { useContext } from 'react'
import { ConfigContext } from '../config-provider'
import DisplayComponent from './DisplayComponent'
import Button from './Button'

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
                    <DisplayComponent
                        wrapperFatherClass="wrapperTip"
                        wrapperChildOneClass="tipAmount"
                        description="Tip Amount"
                        wrapperChildTwoClass="wrapperDisplayTip"
                        textResultClass="displayTip"
                        textResult={tip > 0 ? tip.toLocaleString('es-AR') : '0,00'}
                    />
                    <DisplayComponent
                        wrapperFatherClass="wrapperTotal"
                        wrapperChildOneClass="total"
                        description="Total"
                        wrapperChildTwoClass="wrapperDisplayTotal"
                        textResultClass="displayTotal"
                        textResult={total > 0 ? total.toLocaleString('es-AR') : '0,00'}
                    />
                </div>
                <Button
                    onClickFunction={handleClick}
                    buttonClass={buttonLocked ? 'oculto' : 'buttonReset'}
                    text="RESET"
                />
            </div>
        </div>
    )
}

export default Display