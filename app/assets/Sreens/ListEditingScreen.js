import React, {useEffect, useState} from 'react';
import {AppForm, AppFormField, SubmitButton} from '../../components/Form';
import * as Yup from 'yup';
import AppFormPicker from '../../components/Form/AppFormPicker';
import {categories} from '../../constants';
import {StyleSheet, View} from 'react-native';
import CategoryPickerComponent from '../../components/CategoryPickerComponent';
import FormImagePicker from '../../components/Form/FormImagePicker';
import useLocation from '../../hooks/useLocation';

const ValidateionSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image'),
});

const ListEditingScreen = () => {
  const location = useLocation();
  return (
    <View style={styles.form}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        validationSchema={ValidateionSchema}
        onSubmit={values => console.log(location)}>
        <FormImagePicker name="images" />
        <AppFormField name="title" placeholder="Title" maxLength={255} />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
          width={120}
        />
        <AppFormPicker
          name="category"
          placeholder="Category"
          numberOfColumns={3}
          items={categories}
          width="50%"
          PickerItemComponent={CategoryPickerComponent}
        />
        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          maxLength={255}
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },
});
export default ListEditingScreen;
