interface Ititles {
    titles: {
        title: string,
        status: string
    }[]
}

/**Данная функция формирует строку со списком главных тем */

export const Titles = ({ titles }: Ititles) => {
  return (
    <ul className="titles">
        {titles.map(title => title.status === 'active' ?
        <li><h2 className="card-info-title active"><a href="">{title.title}</a></h2></li> :
        <li><h2 className="card-info-title"><a href="">{title.title}</a></h2></li>)}
    </ul>
  )
}
