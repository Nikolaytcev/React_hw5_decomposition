import { FC } from "react"
export interface Ivisited {
    title: string,
    description: string,
    link: string
}

export const Visited: FC<Ivisited> = (props) => {
  const { title, description, link } = props;
  return (
    <li className="News">
      <a href={link}>
        <a className="visited-title">{title}</a>
        <span className="description">-{description}</span>
      </a>
    </li>
  )
}
