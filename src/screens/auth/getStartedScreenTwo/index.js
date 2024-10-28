import { View, Text } from 'react-native';
import React, { useState } from 'react';
import AppBar from '../../../components/appBar';
import { styles } from './styles';
import { ScreenNames, Strings } from '../../../constants/strings';
import CountryPicker from 'react-native-country-picker-modal';
import CustomTextInput from '../../../components/customTextInput';
import { GradientButton } from '../../../components/cta';
import { rhp } from '../../../constants/dimensions';
import { navigate } from '../../../navigator/navigationRef';
import ProgressBar from '../../../components/progressBar';

const GetStartedScreenTwo = ({ navigation }) => {
  const [country, setCountry] = useState({
    cca2: 'NG',
    callingCode: ['234'],
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  const onSelectCountry = country => {
    setCountry(country);
  };
  const isPhoneNumberFilled = phoneNumber.length > 0;
  return (
    <View style={styles.container}>
      <AppBar start={2} end={5} onPress={() => navigation.goBack()} />
      <ProgressBar progress={60.6} />
      <Text style={styles.title}>{Strings.yourMobileNum} </Text>
      <Text style={styles.subTitle}>{Strings.useAsAccNum} </Text>
      <View style={styles.countryCodePhnRow}>
        <View style={styles.countryCol}>
          <Text style={styles.countryHeading}>{Strings.country}</Text>
          <View style={styles.countryInsideRow}>
            <CountryPicker
              countryCode={country.cca2}
              onSelect={onSelectCountry}
              withFlag
              hideCountryName
              withFilter
              withCountryNameButton={false}
              containerButtonStyle={styles.containerBtnStyle}
            />
            <View>
              <Text style={styles.countryCode}>{`+${country.callingCode ? country.callingCode[0] : ''
                }`}</Text>
            </View>
          </View>
        </View>
        <CustomTextInput
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={[styles.inputStyle, { marginTop: rhp(2) }]}
        />
      </View>
      <View style={styles.flex} />
      <Text style={styles.agreementText}>{Strings.agreementMsg}</Text>
      <GradientButton
        buttonText={Strings.submit}
        style={styles.btnStyle(isPhoneNumberFilled)}
        onPress={() => {
          if (isPhoneNumberFilled) {
            navigate(ScreenNames.StartScreenThree, {
              phoneNumber,
              countryCode: country.callingCode[0],
            });
          }
        }}
      />
    </View>
  );
};

export default GetStartedScreenTwo;
