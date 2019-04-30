import React from 'react';
import { List, Datagrid, TextField, NumberField, ReferenceField } from 'react-admin';

export const HenList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <ReferenceField label="Coop" source="coopID" reference="coops">
                <TextField source="name" />
            </ReferenceField>
            <NumberField source="alive" />
        </Datagrid>
    </List>
);
