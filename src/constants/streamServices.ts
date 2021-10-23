import Spotify from '../images/icons/spotify.svg';
import Apple from '../images/icons/apple.svg';
import Amazon from '../images/icons/amazon.svg';
import Deezer from '../images/icons/deezer.svg';
import YouTube from '../images/icons/youtube.svg';

type StreamingService = {
  name: string;
  icon: string;
  link?: string;
};

export const services: StreamingService[] = [
  {
    name: 'Spotify',
    icon: Spotify,
    link: 'https://open.spotify.com/album/3KaQULEjcEyJ1NntHerEuw',
  },
  {
    name: 'Apple Music',
    icon: Apple,
    link: 'https://music.apple.com/album/1590883952',
  },
  {
    name: 'Amazon Music',
    icon: Amazon,
    link: 'https://music.amazon.com/albums/B09JSWN2QY',
  },
  { name: 'Deezer', icon: Deezer },
  {
    name: 'YouTube',
    icon: YouTube,
    link: 'https://www.youtube.com/watch?v=knLSKn-JtTc',
  },
];
