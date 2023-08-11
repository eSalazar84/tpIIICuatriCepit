import React from 'react';

function Cards({ song }){
    return (
        <article id={song.id}>
            <h1>{song.artist}</h1>
            <h3>{song.title} </h3>
            <p><img src={song.coverAlbum} alt="" /></p>
            <h5>duración:{song.duration} </h5>
            <p><a href={song.video} target='blank' >Link al video</a></p>
        </article>
    );
};

export default Cards;