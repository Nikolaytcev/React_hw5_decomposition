import { Inews, News } from '../News/News'
import { FC } from 'react'

interface Inewslist {
  news: Inews[],
}

/** Функция NewsList собирает все новости в один блок */

export const NewsList: FC<Inewslist> = (props) => {
  const { news } = props;
  return (
    <ul className='news-list'>
      {news.map(news => <News key={news.title} {...news}/>)}
    </ul>
  )
}
