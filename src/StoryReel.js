import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://external-preview.redd.it/3z4jkYQXf8_aCt3DYJdxsuxX6QtQAk93Ig8JxbIuNlw.jpg?auto=webp&s=08030398883bba114f14b0180353538d65d180d1"
        profileSrc="https://www.denofgeek.com/wp-content/uploads/2020/10/homelander.jpg?resize=768%2C432"
        title="Homelander"
      />
      <Story
        image="https://i.insider.com/620ef712462ff20019c59af9?width=700"
        profileSrc="https://www.boxofficepro.com/wp-content/uploads/2022/01/thebatman-775x970-copy-479x600.png"
        title="Batman"
      />
      <Story
        image="https://m.media-amazon.com/images/M/MV5BYTlhNzJjYzYtNGU3My00ZDI5LTgzZDUtYzllYjU1ZmU0YTgwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg"
        profileSrc="https://variety.com/wp-content/uploads/2016/10/wonder-woman-75th-anniversary.jpg?w=681&h=383&crop=1"
        title="Wonder Woman"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/en/3/3b/Flash_%28Barry_Allen_circa_2019%29.png"
        profileSrc="https://static.kino.de/wp-content/uploads/2017/09/TheFlashEd3-rcm672x0u.png"
        title="Flash"
      />
      <Story
        image="https://i.pinimg.com/originals/02/b1/cc/02b1cc8ec980cf04ae1b28022454912f.jpg"
        profileSrc="https://dam.smashmexico.com.mx/wp-content/uploads/2022/04/doctor-strange-in-the-multiverse-of-madness-scarlet-witch-elizabeth-olsen-razon-cover.jpg"
        title="Scarlett Witch"
      />
    </div>
  );
}

export default StoryReel;
