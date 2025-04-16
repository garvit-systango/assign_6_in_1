import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import Button from '../components/usable/Button'

function Projects() {
    const navigate = useNavigate()
  return (<>
    <div>
        <h2>Routes to the Projects:</h2>
      </div>
      <div>
        <Button label='useMemo' onClick={() => navigate('useMemo')}/>
        <Button label='useCallback' onClick={() => navigate('useCallback')}/>
      </div>
      <div>
        <Outlet/>
      </div>

      </>
  )
}

export default Projects
