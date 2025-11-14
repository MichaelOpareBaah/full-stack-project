import React from 'react'
import { useParams } from 'react-router'
import {data} from '../data'


export default function BlogDetail() {
  const styles={
    width:'100%',
    height:'500px',
    objectFit:'cover'
  }
    const {id} =useParams()
    const displayParam=data.find((item) => item.id === Number(id))
  return (
    <div className='container'>
      <img src={displayParam.image} alt=' ' style={styles} />
       <h4 className='blog-caption'>{displayParam.title}</h4>
      <p>{displayParam.content}</p>
    </div>
  )
}
