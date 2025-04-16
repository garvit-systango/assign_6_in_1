import React from 'react'
import { Route, Routes } from 'react-router'
import UseMemo from '../components/UseMemo'
import Projects from './Projects'
import UseCallback from '../components/UseCallback'

function AppRoutes() {
  return (
    
    <Routes>
      <Route path='/' element={<Projects/>}>
        <Route path='useMemo' element={<UseMemo/>}/>
        <Route path='useCallback' element={<UseCallback/>}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes
