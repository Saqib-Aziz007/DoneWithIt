import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {icons, Images} from '../../constants';
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton} from '../../components/Form';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.redlogo} style={styles.logo} />
      <AppForm
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          name="email"
          placeholder="Email"
          icon={icons.emailgrey}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
          placeholder="Password"
          name="password"
          icon={icons.lock}
        />
        <SubmitButton title="Login" />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flex: 1,
  },
  logo: {
    height: 80,
    width: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export default LoginScreen;
