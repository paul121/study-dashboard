import React from 'react';

import { Admin, Resource } from 'react-admin';
import { HenList } from './hens';
import { CoopList } from './coops';
import { TreatmentList } from './treatments';

import InvertColorsIcon from '@material-ui/icons/InvertColors';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';

import fakeDataProvider from 'ra-data-fakerest';

const dataProvider = fakeDataProvider(require('./data/data.js'));
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="treatments" list={TreatmentList} icon={InvertColorsIcon}/>
        <Resource name="coops" list={CoopList} icon={HomeIcon}/>
        <Resource name="hens" list={HenList} icon={PeopleIcon}/>
    </Admin>
);

export default App;
