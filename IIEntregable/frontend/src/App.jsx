import { useEffect, useState } from 'react'
import Cards from './components/Cards'
import { getSongs } from './api/getSongs';
import './App.css'
import Header from './components/Header';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs()
      .then(res => res.json())
      .then(data => {
        return setSongs(data)
      })
      .catch(err => {
        throw Error(err);
      })
  }, [])

  return (
    <>
      <Header />
      <section className='layout'>
        {
          songs.map(sng => <Cards song={sng} key={sng.id} />)
        }
      </section>
    </>
  )
}

export default App
