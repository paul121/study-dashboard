import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export const TreatmentList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="treatment-type" />
            <TextField source="treatment-description" />
        </Datagrid>
    </List>
);
