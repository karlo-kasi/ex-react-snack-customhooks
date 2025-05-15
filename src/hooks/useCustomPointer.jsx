import { useState, useEffect } from "react"

export default function useCustomPointer(value) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updateMouse = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        document.addEventListener('mousemove', updateMouse)

        return () => document.removeEventListener('mousemove', updateMouse)

    }, [])


    return (
        <div

            style={{
                position: "fixed",
                top: mousePosition.y,
                left: mousePosition.x,
                trasform: "translate (-50%, -50%)",
                cursor: "none"
            }}>
            {value}
        </div>
    )
}