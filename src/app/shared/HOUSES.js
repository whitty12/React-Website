import ottisStreetImg from '../assets/img/house1.jpg';
import broadwayImg from '../assets/img/house2..jpg';
import house3 from '../assets/img/house3.jpg';
import house4 from '../assets/img/house4.jpeg';
import house5 from '../assets/img/house5.jpg';
import house6 from '../assets/img/house6.jpg';
import house7 from '../assets/img/house7.jpg';
import house8 from '../assets/img/house8.jpg';

export const HOUSES = [
    {
        id: 0,
        name: '303 Ottis Street',
        fullAddress: 'NA',
        image: ottisStreetImg,
        available: true,
        beds: 4,
        baths: 2,
        rent: '$2200.00',
        description:
            '.'
    },
    {
        id: 1,
        name: '1900 Broadway',
        fullAddress: '1900 Broadway, Norman, 73255, OK',
        image: broadwayImg,
        available: false,
        beds: 2,
        baths: 2,
        rent: '$2000.00',
        description:
            '.'
    },
    {
        id: 2,
        name: '1015 Philli Lane',
        fullAddress:'1015 Philli Lane, Tulsa, OK, 74116',
        image: house3,
        available: true,
        beds: 3,
        baths: 2,
        rent: '$2500.00',
        description:
            '.'
    },
    {
        id: 3,
        name: '32144 Hornor Avenue',
        fullAddress: 'NA',
        image: house4,
        available: false,
        beds: 5,
        baths: 2,
        rent: '$2800.00',
        description:
            '.'
    },
    {
        id: 4,
        name: '4834 Camel Back Road',
        fullAddress: '4834 Camel Back Road, Tulsa, OK, 74120',
        image: house5,
        available: true,
        beds: 4,
        baths: 2,
        rent: '$2550.00',
        description:
            'A beautiful home that was recently built. Located a short drive from Sand Springs, this 2000sq ft. home could be yours!'
    },
    {
        id: 5,
        name: '4897 Dovetail Estates',
        fullAddress: 'NA',
        image: house6,
        available: false,
        beds: 3,
        baths: 3,
        rent: '$2800.00',
        description:
            'A beautiful home that was recently built. Located a short drive from Sand Springs, this 2000sq ft. home could be yours!'
    },
    {
        id: 6,
        name: '3439 Dovetail Estates',
        fullAddress:'3439 Dovetail Estates, Wright City, OK, 74766',
        image: house7,
        available: true,
        beds: 2,
        baths: 1,
        rent:'$1890.00',
        description:
            'This historic, rustic house is located within walking distance of many local shops and businesses! It is 1200 sq. ft. Discounts may be offered depending on improvements to the building that comply with regulations on historic houses.'
    },
    {
        id: 7,
        name: '4045 Henry Ford Ave.',
        fullAddress:'NA',
        image: house8,
        available: false,
        beds: 3,
        baths: 1,
        rent: '$3000.00',
        description:
            'This 1500 sq. ft. home is located a jump away from Bricktown and the heart of OKC! Designed by the famous Architect Joseph Steinburg, this house has many luxury amenities. Contact us to learn more!'
    },
];
