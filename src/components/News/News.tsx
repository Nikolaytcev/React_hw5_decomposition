import { FC } from "react"

export interface Inews {
    icon: string,
    link: string,
    title: string
}

/** Функция News формирует новостную строку. */

export const News: FC<Inews> = (props) => {
  const { icon, link, title } = props
  return (
    <li className="News">
        <img src={icon} alt="news-label" />
        <a href={link}>{title}</a>
    </li>
    
  )
}
