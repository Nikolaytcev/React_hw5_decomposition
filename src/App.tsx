import './App.css'
import { Currency } from './components/Currency/Currency';
import { InfoCard } from './components/InfoCard/InfoCard';
import { InputBlock } from './components/InputBlock/InputBlock';
import { NewsList } from './components/NewsList/NewsList';
import { Titles } from './components/Titles/Titles';
import { VisitedList } from './components/VisitedList/VisitedList';
import { Weather } from './components/Weather/Weather';
import { Map } from './components/Map/Map';
import { EtherList } from './components/EtherAndTVList/EtherAndTVlist';

function App() {
  const titles = [{title: 'Сейчас в СМИ', status: 'active'}, {title: 'В германии', status: ''}];
  const news = [{icon: '', link: '#', title: 'Новость'}, {icon: '', link: '#', title: 'Ещё новость'}];
  const currensy = [{currency: 'USD MOEX', value: '32', change: '+4%'}, {currency: 'EURO MOEX', value: '40', change: '+3%'}];
  const date: string = new Date().toString();
  const inputtitles = ['Видео', 'Картинки', 'Новости', 'карты', 'Маркет', 'переводчик'];
  const inputClue = 'Фаза луны сегодня';
  const visited = [{title: 'Недвижимость', description: '-о сталинках', link: ''}, {title: 'Маркет', description: '-люстры и светильники', link: ''}]
  const TVList = [{time: '02.00', title: 'ТНТ.best', description: 'ТНТ international', link: ''}, {time: '04.00', title: 'ТНТ.worst', description: 'ТНТ international', link: ''}]
  const eatherList = [{icon: '', title: 'Управление как искуство', description: 'Успех', link: ''}, {icon: '', title: 'Ночью Мир в это время', description: 'earth TV', link: ''}]
  return (
    <>
      <Titles titles={titles}/>
      <div className='date'>{date}</div>
      <div className='news-box'><NewsList news={news}/></div>
      <div className='currency-box'><Currency data={currensy}/></div>
      <InputBlock titles={inputtitles} clue={inputClue}/>
      <img className="banner" src="" alt="Рекламный баннер" />
      <InfoCard title={{name: "Погода"}}><Weather icon='' title='+16' description={{day: '+17', night: '+10'}}/></InfoCard>
      <InfoCard title={{name: "Посещаемое"}}><VisitedList visited={visited}/></InfoCard>
      <InfoCard title={{name: "Карта Германии"}}><Map title='Расписания' link=''/></InfoCard>
      <InfoCard title={{name: "Телепрограмма", btn: 'эфир'}}><EtherList etherAndTV={TVList}/></InfoCard>
      <InfoCard title={{name: "Эфир"}}><EtherList etherAndTV={eatherList}/></InfoCard>
    </>
  )
}

export default App
