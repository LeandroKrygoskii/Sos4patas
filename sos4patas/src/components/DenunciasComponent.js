import React from 'react';
import styled from '../styles/components/DenunciasComponent.module.css';

export default function Components({data}) {
 return (
  <>
    {data.map(item => (
        <div className={styled.container}>
        <h6 className={styled.text}>codigo : {item.id}</h6>
        <h4 className={styled.title}>email: {item.email}</h4>
        <h5 className={styled.text}>Assunto: {item.about}</h5>
      </div>
    ))}  
  </>
 );
}