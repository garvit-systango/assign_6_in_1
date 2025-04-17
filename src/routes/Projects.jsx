import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import Button from '../components/usable/Button'

function Projects() {
    const navigate = useNavigate()
  return (<>
  <div className="bg-gray-400 p-6 rounded-lg shadow" >
      <div>
        <h2>Routes to the Projects:</h2>
      </div>
      <div>
        <Button label='useMemo' onClick={() => navigate('useMemo')}/>
        <Button label='useCallback' onClick={() => navigate('useCallback')}/>
        <Button label='lazy' onClick={() => navigate('lazy')}/>
      </div>
  </div>
      <div style={{margin: '30px'}}>
        <Outlet/>
      </div>
      </>
  )
}

export default Projects
