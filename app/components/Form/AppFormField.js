import {useFormikContext} from 'formik';
import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormField = ({name, width, ...othreProps}) => {
  const {setFieldTouched, handleChange, touched, errors} = useFormikContext();
  return (
    <>
      <AppTextInput
        {...othreProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
