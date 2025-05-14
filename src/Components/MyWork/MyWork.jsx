import React from 'react'
import './MyWork.css'
import {ReactComponent as ArrowRight} from '../../assets/arrow-right.svg'
import { mywork_data } from '../../assets/projects/mywork_data'

const MyWork = () => {
  return (
    <div id='projects' className='mywork'>
        <div className="mywork-title">
            <h1>My Projects</h1>
            <img src="" alt="" />
        </div>
        <div className="mywork-container">
             {mywork_data.map(({w_no,w_image,w_name,w_link})=>{
                return <a href={w_link} target="_blank"
    rel="noopener noreferrer"><img key={w_no} src={w_image} alt="" /></a>
             })}
        </div>
        {/*<div className="mywork-showmore">
            <p>Show more</p>
            <img src="" alt="" />
        </div>*/}
        {/* give arrow img here. also unlock area when more projects are done */}
    </div>
  )
}

export default MyWork