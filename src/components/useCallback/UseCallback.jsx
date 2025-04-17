import React, { useCallback, useEffect, useState } from 'react'
import Button from '../usable/Button'
import ToggleTheme from './ToggleTheme'
import Counter from './Counter'


function UseCallback() {

    let[count, setCount] = useState(0)
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme")
    })

    const handleTheme = useCallback(() => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }, [theme])

    const handleCount = useCallback(() => {
        setCount(count => count+1)

        console.log(count)
    }, [count])

    useEffect(() => {
        document.body.style.background = theme === "light" ? "white" : "black"
        document.body.style.color = theme === "light" ? "black" : "white"
    }, [theme])



  return (
    <>
    <Button label="ToggleTheme" onClick={handleTheme}/>
    <ToggleTheme color={theme}/>
    <Button label="Count" onClick={handleCount}/>
    <Counter value={count}/>
    </>
  )
}

export default UseCallback
