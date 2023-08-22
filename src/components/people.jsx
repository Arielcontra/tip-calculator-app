import { useContext } from 'react'
import { ConfigContext } from '../config-provider'
import FormElement from './FormElement'
import IconPerson from '../assets/images/icon-person.svg'


function People() {
    const { totalBill, valueTip, customValue, people, setPeople, reset } = useContext(ConfigContext)

    const handlebill = (e) => { setPeople(e.target.value) }

    if (reset === true) {
        setPeople('')
    }

    const isInputEmpty = people === ''
    const showAlert = !((totalBill > 0 || customValue > 0 || valueTip > 0) && (people < 0 || isInputEmpty))

    return (
        <FormElement
            fieldsetClass="wrapperPeople"
            wrapperTextClass="textPeople"
            labelClass="numberOfPeople"
            textHtmlFor="numberOfPeople"
            textLabel="Number of People"
            paragraphClass={showAlert ? 'locked' : 'cantBeZero'}
            colorParagraph={{ color: "red" }}
            textParagraph="can't be zero"
            inputClass={showAlert ? 'people' : 'peopleBorder'}
            inputValue={people}
            onChangeEvent={handlebill}
            imageSource={IconPerson}
            textImg="Icon person"
            imgClass="iconPerson"
        />
    )
}

export default People

