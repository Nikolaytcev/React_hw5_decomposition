import { FC } from 'react'

interface Iweather {
    icon: string,
    title: string,
    description: {
        day: string,
        night: string
    }
}

/**Функция добавляет иноформацию о погоде в блок "Погода" */

export const Weather: FC<Iweather> = (props) => {
  const { icon, title, description } = props
  return (
    <div className='info-item'>
        <img src={icon} alt="weather" />
        {title}
        <div className='weather-descripton'>
            Днём: {description.day}
            Ночью: {description.night}
        </div>
    </div>
  )
}
