import Spotify from '../images/icons/spotify.svg';
import Apple from '../images/icons/apple.svg';
import Amazon from '../images/icons/amazon.svg';
import Deezer from '../images/icons/deezer.svg';
import YouTube from '../images/icons/youtube.svg';
import Tidal from '../images/icons/tidal.svg';
import Claro from '../images/icons/claro.svg';

type StreamingService = {
  id: number;
  name: string;
  icon: string;
  link?: string;
};

export const services: StreamingService[] = [
  {
    id: 1,
    name: 'Spotify',
    icon: Spotify,
    link: 'https://open.spotify.com/album/3KaQULEjcEyJ1NntHerEuw',
  },
  {
    id: 2,
    name: 'Apple Music',
    icon: Apple,
    link: 'https://music.apple.com/pt/album/1590883952',
  },
  {
    id: 3,
    name: 'Amazon Music',
    icon: Amazon,
    link: 'https://music.amazon.com/albums/B09JSWN2QY',
  },
  { id: 4, name: 'Deezer', icon: Deezer },
  {
    id: 5,
    name: 'YouTube',
    icon: YouTube,
    link: 'https://www.youtube.com/watch?v=knLSKn-JtTc',
  },
  {
    id: 6,
    name: 'Tidal',
    icon: Tidal,
    link: 'https://listen.tidal.com/album/201723999',
  },
  {
    id: 7,
    name: 'Claro Música',
    icon: Claro,
    // link: 'https://www.claromusica.com/album/22297266',
  },
];
