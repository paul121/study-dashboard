import React from 'react';
import { List, Datagrid, TextField, NumberField, ReferenceField } from 'react-admin';

export const CoopList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <ReferenceField label="Treatment Type" source="treatmentID" reference="treatments">
                <TextField source="treatment-type" />
            </ReferenceField>
            <TextField source="location" />
        </Datagrid>
    </List>
);
