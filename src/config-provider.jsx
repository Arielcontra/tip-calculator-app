import { createContext, useState } from 'react'

const ConfigContext = createContext();

// eslint-disable-next-line
const ConfigProvider = ({ children }) => {
    const [totalBill, setTotalBill] = useState('')
    const [valueTip, setValueTip] = useState(null)
    const [customValue, setCustomValue] = useState('')
    const [people, setPeople] = useState('')

    const values = {
        totalBill,
        setTotalBill,
        valueTip,
        setValueTip,
        customValue,
        setCustomValue,
        people,
        setPeople
    }

    return (
        <ConfigContext.Provider value={values}>
            {children}
        </ConfigContext.Provider>
    )
}

export { ConfigContext, ConfigProvider }