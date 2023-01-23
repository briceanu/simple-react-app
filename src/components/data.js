import mountain from '../assets/mountain.jpg';
import norway from '../assets/norway.jpg';
import sydney from '../assets/sydney.jpg';

const data = [
  {
    id: 1,
    title: 'Mount Fuji',
    location: 'Japan',
    googleMapsUrl:
      'https://www.google.com/maps/place/Fuji/@35.3606422,138.7186086,15z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
    imageUrl: mountain,
  },
  {
    id: 2,
    title: 'Sydney Opera House',
    location: 'Australia',
    googleMapsUrl:
      'https://www.google.com/maps/place/Opera+din+Sydney/@-33.8567799,151.213108,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967',
    startDate: '27 May, 2021 ',
    endDate: '8 Jun, 2021',
    description:
      'The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th centur is most famous and distinctive building',
    imageUrl: sydney,
  },
  {
    id: 3,
    title: 'Geirangerfjord',
    location: 'Norway',
    googleMapsUrl:
      'https://www.google.com/maps/place/6216+Geiranger,+Norvegia/@62.0988152,7.2005966,15z/data=!3m1!4b1!4m5!3m4!1s0x4614266d0e317cc9:0xee5b40919d3f7313!8m2!3d62.1008441!4d7.2058941',
    startDate: '01 Oct, 2021 ',
    endDate: '18 Nov, 2021',
    description:
      'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.',
    imageUrl: norway,
  },
];
export default data;
