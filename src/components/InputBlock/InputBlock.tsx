import { FC } from "react"

interface IinputBlock {
    titles: string[],
    clue: string
}

/** */

export const InputBlock: FC<IinputBlock> = (props) => {
  const { titles, clue } = props;
  return (
    <div className="input-box">
        <ul className="input-titles">
            {titles.map(title => <li className="input-title"><a href="">{title}</a></li>)}
        </ul>
        <img className="logo" src="" alt="Yandex logo" />
        <input className="input" type="text" />
        <img src="" alt="keyboard" />
        <button className="input-button">Найти</button>
        <div className="input-clue">Найдётся всё. Например: <a href="" className="description">{clue}</a></div>
    </div>
    
  )
}
