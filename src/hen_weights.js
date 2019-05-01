import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export const HenWeightList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <NumberField label="Hen ID" source="henID" />
            <NumberField source="period" />
            <NumberField source="baseWeight" />
            <NumberField source="observedWeight" />
        </Datagrid>
    </List>
);
