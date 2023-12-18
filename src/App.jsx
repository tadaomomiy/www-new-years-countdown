import styles from './App.module.css';
import { Counter } from './components/Counter';
import { Header } from './components/Header';


import './global.css';

export function App() {

  return (
    <div className={ styles.card }>
      <Header />
      <Counter />
    </div>
  )
};