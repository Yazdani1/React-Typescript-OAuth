import React,{FC} from 'react'

import "./DashboardCard.module.scss";
import {PostProps} from "../../services/DataProvider";

interface DashboardCardProps {
    post:PostProps
}

const DashboardCard:FC<DashboardCardProps> = ({post}) => {
  return (
    <div>
      

        <p>{post.title}</p>
        <p>{post.postedBy.name}</p>
    </div>
  )
}

export default DashboardCard