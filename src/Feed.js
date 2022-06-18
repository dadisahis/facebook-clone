import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://www.denofgeek.com/wp-content/uploads/2020/10/homelander.jpg?resize=768%2C432"
        message="I am homelander"
        timestamp="timestamp"
        username="Homelander"
        image="https://external-preview.redd.it/3z4jkYQXf8_aCt3DYJdxsuxX6QtQAk93Ig8JxbIuNlw.jpg?auto=webp&s=08030398883bba114f14b0180353538d65d180d1"
      />
      <Post
        profilePic="https://www.denofgeek.com/wp-content/uploads/2020/10/homelander.jpg?resize=768%2C432"
        message="I am homelander"
        timestamp="timestamp"
        username="Homelander"
        image=""
      />
      <Post
        profilePic="https://www.denofgeek.com/wp-content/uploads/2020/10/homelander.jpg?resize=768%2C432"
        message="I am homelander"
        timestamp="timestamp"
        username="Homelander"
        image="https://external-preview.redd.it/3z4jkYQXf8_aCt3DYJdxsuxX6QtQAk93Ig8JxbIuNlw.jpg?auto=webp&s=08030398883bba114f14b0180353538d65d180d1"
      />
    </div>
  );
}

export default Feed;
