import React, { useEffect, useState } from "react";
import axios from "axios";

import PageLayout from "../../layouts/PageLayout";
import { getUserPosts } from "../../services/API";
import DashboardCard from "../Dashboard/DashboardCard";

const Dashboard = () => {
  /****************************************/
  /*********Load user Post    *************/
  /****************************************/

  const [userPosts, setUserPosts] = useState<any>([]);

  const loadUserPosts = async () => {
    try {
      const res = await getUserPosts();

      if (res) {
        setUserPosts(res.data);
      }
    } catch (error: any) {}
  };

  useEffect(()=>{

    loadUserPosts();

  },[]);




  return (
    <PageLayout>
      <div>

        <h4>Post List</h4>

        {userPosts && userPosts.map((post:any)=>(

          <DashboardCard post={post} key={post._id}/>

        ))}
        
      </div>
    </PageLayout>
  );
};

export default Dashboard;
