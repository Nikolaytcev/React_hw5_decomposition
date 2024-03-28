import { FC } from "react"

interface Imap {
    title: string,
    link: string,
}

/**Функция Map формирует строку для блока информации "карта Германии" */
export const Map: FC<Imap> = (props) => {
  const { title, link } = props;
  return (
      <a className="title" href={link}>{title}</a>
  )
}
