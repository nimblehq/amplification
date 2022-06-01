import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <TextInput label="UserId" source="userId" type="email" />
      </SimpleForm>
    </Create>
  );
};
