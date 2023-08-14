import React from 'react';
import { setTimeSong } from '../api/durationSong';
import './Cards.css'

function Cards({ song }){
    return (
        <article id={song.id} className='box-container'>
            <h1>{song.artist}</h1>
            <p className='image-container'><img src={song.coverAlbum} alt="" /></p>
            <h3>{song.title} </h3>
            <h5>duración {setTimeSong(song.duration)}</h5>
            <p><a href={song.video} target='blank' >Link al video</a></p>
        </article>
    );
};

export default Cards;