import React ,{Suspense}from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AppPlayerBar from './pages/player/app-player-bar'
import './assets/css/base.css'
import  {HashRouter} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import {Provider} from 'react-redux'
import routes from './router'
import store from './store/index'
export default function App() {
  return (
<Provider store={store}>
<HashRouter>
<Header/>
<Suspense fallback={<div>
  page_loading 
</div>}>{renderRoutes(routes)}</Suspense>
<Footer/>
<AppPlayerBar/>
</HashRouter>

</Provider>
  )
}

