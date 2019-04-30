import React from 'react';

import { Admin, Resource } from 'react-admin';
import { HenList } from './hens';
import { CoopList } from './coops';
import { TreatmentList } from './treatments';

import fakeDataProvider from 'ra-data-fakerest';

const dataProvider = fakeDataProvider(require('./data/data.js'));
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="treatments" list={TreatmentList} />
        <Resource name="coops" list={CoopList} />
        <Resource name="hens" list={HenList} />
    </Admin>
);

export default App;
