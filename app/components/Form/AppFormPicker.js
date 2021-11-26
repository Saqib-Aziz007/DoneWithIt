import {useFormikContext} from 'formik';
import React from 'react';
import {ErrorMessage} from '.';
import AppPicker from '../AppPicker';

const AppFormPicker = ({
  items,
  name,
  width,
  placeholder,
  numberOfColumns,
  PickerItemComponent,
}) => {
  const {values, setFieldValue, errors, touched} = useFormikContext();
  return (
    <>
      <AppPicker
        PickerItemComponent={PickerItemComponent}
        items={items}
        numberOfCoumns={numberOfColumns}
        placeholder={placeholder}
        selectedItem={values[name]}
        onSelectItem={item => setFieldValue(name, item)}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
