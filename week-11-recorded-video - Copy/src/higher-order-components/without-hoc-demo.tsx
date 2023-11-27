import React from 'react';
import FruitsList from './components/FruitsList';
import PhonesList from './components/PhonesList';

const fruits = [
    { id: 1, name: 'Apples' },
    { id: 2, name: 'Oranges' },
    { id: 3, name: 'Bananas' }
];

const phones = [
    { id: 1, name: 'iPhone 12', platform: 'iOS' },
    { id: 3, name: 'One Plus Nord', platform: 'Android' },
    { id: 2, name: 'iPhone X', platform: 'iOS' },
    { id: 4, name: 'Samsung Galaxy Note 10', platform: 'Android' }
];

export
default (
    <>
        <FruitsList items={fruits} />
        <PhonesList items={phones} title="List of phones" />
    </>
);