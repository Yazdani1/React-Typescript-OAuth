import React,{FC} from 'react'

import "./DashboardCard.module.scss";
import {PostProps} from "../../services/DataProvider";

interface DashboardCardProps {
    post:PostProps
}

const DashboardCard:FC<DashboardCardProps> = ({post}) => {
  return (
    <div style={{border:"1px solid black",padding:"10px",margin:"10px",background:"white"}}>
      

        <p>{post.title}</p>
        <p>{post.postedBy.name}</p>
        <p>{post.postedBy.email}</p>
    </div>
  )
}

export default DashboardCard