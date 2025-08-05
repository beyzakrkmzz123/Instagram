import React from "react";
import StoryBar from "../components/Storybar";
import PostCard from "../components/Postcard";
import Suggestions from "../components/Suggestions";

const Home = () => {
  return (
    <div className="flex flex-1 ml-[250px] p-8 gap-8">
      <div className="flex flex-col gap-6 w-[600px]">
        <StoryBar />
        <PostCard />
      </div>
      <div className="w-[320px] hidden lg:block">
        <Suggestions />
      </div>
    </div>
  );
};

export default Home;
