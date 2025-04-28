import React from 'react'

function About({ about = "About this blog", image = "https://via.placeholder.com/215" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;