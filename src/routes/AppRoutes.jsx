import React, {Suspense} from 'react'
import { Route, Routes } from 'react-router'
import UseMemo from '../components/UseMemo'
import Projects from './Projects'
import UseCallback from '../components/useCallback/UseCallback'
import Lazy from '../components/lazy/Lazy'
const LazyHome = React.lazy(() => import('../components/lazy/Home'))
const LazyAbout = React.lazy(() => import('../components/lazy/About'))
const LazyContact = React.lazy(() => import('../components/lazy/Contact'))

function AppRoutes() {
  return (
    
    <Routes>
      <Route path='/' element={<Projects/>}>
        <Route path='useMemo' element={<UseMemo/>}/>
        <Route path='useCallback' element={<UseCallback/>}/>
        <Route path='lazy' element={<Lazy/>}>
          <Route path='home' element={<Suspense fallback={<h3 style={{color:"blue"}}>Loading...</h3>}><LazyHome/></Suspense>}/>
          <Route path='about' element={<Suspense fallback={<h3 style={{color:"blue"}}>Loading...</h3>}><LazyAbout/></Suspense>}/>
          <Route path='contact' element={<Suspense fallback={<h3 style={{color:"blue"}}>Loading...</h3>}><LazyContact/></Suspense>}/>
        </Route>
        
      </Route>
    </Routes>
  )
}

export default AppRoutes
