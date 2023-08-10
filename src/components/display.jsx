import { useContext } from 'react'
import { ConfigContext } from '../config-provider'
function Display() {

    const { totalBill, valueTip, people } = useContext(ConfigContext)

    const tipTotal = (totalBill * valueTip) / 100

    const total = (totalBill + tipTotal) / people

    const tip = tipTotal / people

    
        // if (totalBill !== '' && valueTip !== '') {
        //   const tipTotal = parseFloat(totalBill) + parseFloat(valueTip);
          
        // } 
      

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
                <button className="buttonReset">RESET</button>
            </div>
        </div>
    )
}

export default Display