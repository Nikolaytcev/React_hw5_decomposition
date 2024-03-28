import { FC } from 'react'

export interface IetherAndTV {
    icon?: string,
    time?: string,
    title: string,
    description: string,
    link: string
}

/**Функция EtherAndTV формирует TV или эфирную строку с информацией */

export const EtherAndTV: FC<IetherAndTV> = (props) => {
  const { icon, time, title, description, link } = props;
  return (
    <li className='News'>
        {time !== undefined ? 
        <a href={link}>
            <span className='time'>{time}</span>
            <span className='title'>{title}</span>
            <span className='descriptoion'>{description}</span>
        </a> : 
        <a href={link}>
            <img src={icon} alt="label" />
            <span className='title'>{title}</span>
            <span className='description'>{description}</span>
        </a>}
    </li>
  )
}
