import React from 'react'

function ToggleTheme(get) {
  console.log("theme")
    

  return (
    <div>
        {get.color}      
    </div>
  )
}

export default React.memo(ToggleTheme)
