import React from 'react';

const variants = {
  open: {
    transition: {
      staggeredChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggeredChildren: 0.05,
    },
  },
};

const Links = () => {

  const items = [
    "Home",
    "Services",
    "Portfolio",
    "Contact",
    "About",
  ]

  return (
    <div className='links'>
      {items.map((item)=>(
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
       <div className="social">
          <a
            href="https://www.linkedin.com/in/ikram-mughal-4a6378259/"
            target="blank"
          >
            <img src="/linkedIn.png" alt="" />
          </a>
          <a href="https://www.instagram.com/em_ikram09/" target="blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.facebook.com/ikram.charmingb0y" target="blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=MAlSjtxy5ak" target="blank">
            <img src="/youtube.png" alt="" />
          </a>
        </div>
    </div>
  )
}

export default Links