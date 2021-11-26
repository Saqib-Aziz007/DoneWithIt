import {useFormikContext} from 'formik';
import React from 'react';
import {ErrorMessage} from '.';
import ImageInputList from '../ImageInputList';

const FormImagePicker = ({name}) => {
  const {errors, values, setFieldValue, touched} = useFormikContext();
  const imageUris = values[name];

  const handleRemove = uri => {
    return setFieldValue(
      name,
      imageUris.filter(imageuri => imageuri !== uri),
    );
  };

  const handleAdd = uri => {
    return setFieldValue(name, [...imageUris, uri]);
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        AddUri={handleAdd}
        RemoveUri={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
