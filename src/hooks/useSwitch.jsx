import { useState } from "react"

export default function useSwitch(initialValue) {
    const [boolean, setBoolean] = useState(initialValue)

    const isOn = boolean

    const toogle = () => {
        if (!isOn === true) {
            setBoolean(true)
        } else {
            setBoolean(false)
        }
    }
    console.log(isOn)


    return [isOn, toogle]
}