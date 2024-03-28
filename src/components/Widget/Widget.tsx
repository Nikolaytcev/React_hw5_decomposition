import { FC } from "react"

interface Iwidget {
    img: string,
    title: string,
    description: string
}

/**Функция добавляет виджет справа от новостного блока */

export const Widget: FC<Iwidget> = (props) => {
    const { img, title, description } = props;
  return (
    <div className="widget">
        <img src={img} alt="" />
        <h2 className="card-info-title">{title}</h2>
        <p className="title">{description}</p>
    </div>
  )
}
