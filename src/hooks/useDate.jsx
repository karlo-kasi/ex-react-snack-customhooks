import { useState, useEffect } from "react"

export default function useDate() {
    const [currentDate, setCurrentDate] = useState(new Date())


    useEffect(() => {

        const data = setInterval(() => {
            const newData = new Date()
            setCurrentDate(newData)
        }, 1000)

        return () => clearInterval(data)
    }, [])

    return currentDate

}