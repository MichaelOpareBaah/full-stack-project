import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

export default function Blog({limit}) {
  const [blogdata, setBlogData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3000/blogs");
        const data = await response.json();
        setBlogData(data);
      } catch (err) {
        throw new Error(err);
      }
    };
    getData();
  }, []);
  const blogsToShow=blogdata.slice(0,limit)

  const displayData = blogsToShow.map(item => (
    <NavLink key={item.id} to={`blogs/${item.id}`}>
      <div className='wrapper'>
        <div>
          <img src={item.image} alt='' className='wrapper-img'/>
        </div>
        <div className='wrapper-content'>
          <h4 className='wrapper-caption'>{item.title}</h4>
          <p>{item.content}</p>
        </div>
      </div>
    </NavLink>
  ));

  return (
    <>
      <h2 className='caption'>LATEST NEWS</h2>
      <div className='all-wrappers'>
        {displayData}
      </div>
    </>
  );
}
