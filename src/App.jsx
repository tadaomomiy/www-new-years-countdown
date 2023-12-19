import styles from './App.module.css';
import { Counter } from './components/Counter';
import { Header } from './components/Header';


import './global.css';

export function App() {
  function getLocalTimezone() {
    const date = new Date();
    const localTimezone = date.getTimezoneOffset() / 60 * (-1);
    return localTimezone
  }

  return (
    <div className={ styles.card }>
      <Header />
      <Counter placeName={"Local Timezone"} timezone={getLocalTimezone()}/>
      <Counter placeName={"Brasil"} timezone={-3}/>
      <Counter placeName={"Japan"} timezone={+9}/>
      <Counter placeName={"London"} timezone={0}/>
    </div>
  )
};