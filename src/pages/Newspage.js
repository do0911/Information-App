import React from "react";

const Newspage = ({ title, desc, url, image }) => {
  return (
    <div>
      <a href={url}>
        <img width="300" height="200" src={image} alt="thumbnail" />
      </a>
      {title}
      {desc}
    </div>
  );
};

export default Newspage;
