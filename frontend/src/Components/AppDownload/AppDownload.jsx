import React from 'react'
import "C:/Users/DELL/Desktop/Food/frontend/src/Components/AppDownload/AppDownload..css"
import { assests } from '../../assests/assests'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download' >
        <p>For Better Experience Download<br/>App</p>
       <div className="app-download-platform">
        <img src={assests.playstore}/>
        </div>      
    </div>
  )
}

export default AppDownload
