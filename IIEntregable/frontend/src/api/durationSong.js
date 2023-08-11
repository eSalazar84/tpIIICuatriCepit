export const setTimeSong = (duration) => {
    const minutos = Math.floor(duration / 60);
    const segundos = duration % 60;
    return `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}