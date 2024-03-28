import { FC } from 'react'
import { EtherAndTV, IetherAndTV } from '../EtherAndTV/EtherAndTV';

interface IetherTV {
  etherAndTV: IetherAndTV[],
}

/** Функция EtherList собирает все TV и Эфирные ссылки в один блок */

export const EtherList: FC<IetherTV> = (props) => {
  const { etherAndTV } = props;
  return (
    <ul className='news-list'>
      {etherAndTV.map(item => <EtherAndTV key={item.title} {...item}/>)}
    </ul>
  )
}
