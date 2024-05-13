import React from "react";
import "./portfolio.scss";

const item = [
  {
    id: 1,
    title: "react protfolio",
    img: "https://www.freepik.com/premium-psd/personal-portfolio-resume-template_6004377.htm#fromView=search&page=1&position=5&uuid=4eb52b6d-a8cb-42c4-94dc-1b7fa3b093d7",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veniam, repellat repellendus debitis tempore accusantium ut necessitatibus totam ipsa consectetur!",
  },
  {
    id: 2,
    title: "next.js protfolio",
    img: "https://www.freepik.com/free-vector/hand-drawn-portfolio-template_21742874.htm#fromView=search&page=1&position=35&uuid=eb49b285-0051-493f-b630-7928abeec6ac",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veniam, repellat repellendus debitis tempore accusantium ut necessitatibus totam ipsa consectetur!",
  },
  {
    id: 3,
    title: "dashboard",
    img: "https://www.freepik.com/free-vector/gradient-portfolio-template_21908513.htm#fromView=search&page=1&position=20&uuid=eb49b285-0051-493f-b630-7928abeec6ac",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veniam, repellat repellendus debitis tempore accusantium ut necessitatibus totam ipsa consectetur!",
  },
  {
    id: 4,
    title: "star App",
    img: "https://www.freepik.com/free-psd/flat-design-architecture-template_30120783.htm#fromView=search&page=1&position=30&uuid=eb49b285-0051-493f-b630-7928abeec6ac",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veniam, repellat repellendus debitis tempore accusantium ut necessitatibus totam ipsa consectetur!",
  },
];
const Single = ({ item }) => {
  return <section>{item.title}</section>;
};
const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="progess">
        <h1>Featured Work</h1>
        <div className="progessBar"></div>
      </div>
      {item.map((item) => (
        <Single item={item} key={id} />
      ))}
    </div>
  );
};

export default Portfolio;
