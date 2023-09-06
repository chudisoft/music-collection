import {
  rocket1, rocket2, rocket3,
} from '../assets';

export const links = [
  {
    name: 'Rockets',
    path: '/',
  },
  {
    name: 'Missions',
    path: '/missions',
  },
  {
    name: 'My Profile',
    path: '/profile',
  },
];

export const rockets = [
  {
    id: 1,
    name: 'Falcon 1',
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    flickr_images: rocket1,
  },
  {
    id: 2,
    name: 'Falcon 9',
    description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
    flickr_images: rocket2,
  },
  {
    id: 3,
    name: 'Falcon Heavy',
    description: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
    flickr_images: rocket3,
  },
];
