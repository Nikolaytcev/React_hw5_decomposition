interface Icurrency {
    data: {
        currency: string,
        value: string,
        change: string
    }[]
}
/** Данная функция выводит строку с курсами валют*/
export const Currency = ({ data }: Icurrency) => {
  return (
    <ul className="currency">
        {data.map(c => <li key={c.currency}>
            {c.currency}
            {c.value}
            <span className="currency-change">{c.change}</span>
        </li>)}
    </ul>
  )
}
