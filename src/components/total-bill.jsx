import { useContext } from 'react'
import { ConfigContext } from '../config-provider'
import FormElement from './FormElement'
import iconDollar from '../assets/images/icon-dollar.svg'

function TotalBill() {
    const { totalBill, setTotalBill, reset } = useContext(ConfigContext)

    const handlebill = (e) => { setTotalBill(e.target.value) }

    if (reset === true) {
        setTotalBill('')
    }

    return (
        <FormElement
            fieldsetClass="wrapperBill"
            wrapperTextClass="bill"
            textHtmlFor="bill"
            textLabel="Bill"
            inputClass="totalBill"
            inputValue={totalBill}
            onChangeEvent={handlebill}
            imageSource={iconDollar}
            textImg="icon dollar"
            imgClass="iconDollar"
        />
    )
}
export default TotalBill