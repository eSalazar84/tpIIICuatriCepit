import { useEffect, useState } from 'react'
import Cards from './components/Cards'
import { getSongs } from './api/getSongs';
import './App.css'

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
      {
        songs.map(sng => <Cards song={sng} key={sng.id} />)
      }
    </>
  )
}

export default App
