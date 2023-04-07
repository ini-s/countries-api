import { HeaderStyle } from '../styles/main.styles'
import { useState, useEffect } from "react"
import { HiSun, HiMoon } from "react-icons/hi"

export default function Header() {
    const [darkMode, setDarkMode] = useState<boolean>(typeof window !== "undefined" ? JSON.parse(localStorage.getItem("theme") || "false") : false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", JSON.stringify(darkMode))
            console.log(typeof window)
        }
        if (darkMode) { document.body.classList.add('dark') }
        else {
            document.body.classList.remove('dark')
        }
        console.log('unmount')
    }, [darkMode])
    console.log(darkMode)

    function setTheme() {
        setDarkMode(prevValue => !prevValue)
    }

    return (
        <HeaderStyle>
            <p>Where in the world?</p>
            <div onClick={setTheme}>
                {darkMode ?
                    <>
                        <HiSun />
                        <p>Light Mode</p>
                    </>
                    :
                    <>
                        <HiMoon />
                        <p>Dark Mode</p>
                    </>
                }
            </div>
        </HeaderStyle>
    )
}