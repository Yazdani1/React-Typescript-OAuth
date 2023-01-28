import React, { useEffect, useState } from "react";
import axios from "axios";

import PageLayout from "../../layouts/PageLayout";
import { getUserPosts, CreatePostProps, createPost } from "../../services/API";
import DashboardCard from "../Dashboard/DashboardCard";

const Dashboard = () => {
  /****************************************/
  /*********Create Post    ****************/
  /****************************************/

  const [title, setTtitle] = useState<string>("");

  const onSubmitCreatePost = async (e: any) => {
    e.preventDefault();
    try {
      const payload: CreatePostProps = {
        title: title,
      };

      const res = await createPost(payload);

      if (res) {
        loadUserPosts();
        setTtitle("");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

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
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUserPosts();
  }, []);

  return (
    <PageLayout>
      <div>
        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Your Password*"
            value={title}
            onChange={(e) => setTtitle(e.target.value)}
          />
          <button
            className="btn btn-info"
            onClick={(e) => onSubmitCreatePost(e)}
          >
            Create Post
          </button>
        </div>

        <h4>Post List</h4>

        {userPosts &&
          userPosts.map((post: any) => (
            <DashboardCard post={post} key={post._id} />
          ))}
      </div>
    </PageLayout>
  );
};

export default Dashboard;
