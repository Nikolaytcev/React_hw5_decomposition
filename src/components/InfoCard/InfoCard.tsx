import React from 'react'

interface IinfoCard {
    title: {
        name: string,
        btn?: string
    },
    children: React.ReactNode
}


export const InfoCard = ({title, children}: IinfoCard) => {
  return (
    <article className='card-info'>
        <h2 className='card-info-title'><a href="">{title.name}</a></h2>
        {title.btn !== undefined ? <button className='card-info-watch'>{title.btn}</button> : ''}
        {children}
    </article>
  )
}
