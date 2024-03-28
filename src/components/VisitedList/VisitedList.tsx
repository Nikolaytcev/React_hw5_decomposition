import { FC } from 'react'
import { Ivisited, Visited } from '../Visited/Visited';

interface IvisitedList {
  visited: Ivisited[],
}

/** Функция VisitedList собирает все посещения в один блок */

export const VisitedList: FC<IvisitedList> = (props) => {
  const { visited } = props;
  return (
    <ul className='news-list'>
      {visited.map(item => <Visited key={item.title} {...item}/>)}
    </ul>
  )
}
