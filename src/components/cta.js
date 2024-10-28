import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import fonts from '../constants/fonts';
import {rhp, rwp} from '../constants/dimensions';
import { colors } from '../constants/colors';

export const GradientButton = ({onPress, buttonText, style}) => {
  return (
    <TouchableOpacity
      style={[styles.gradientBtn, style]}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.btnGrdntTxt}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export const PlainButton = ({onPress, buttonText, style}) => {
  return (
    <TouchableOpacity
      style={[styles.plainBtn, style]}
      onPress={onPress}
      activeOpacity={0.4}>
      <Text style={styles.btnPlnTxt}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradientBtn: {
    width: rwp(204),
    height: rhp(58),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: colors.primary,
  },
  btnGrdntTxt: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
  },
  plainBtn: {
    width: rwp(119),
    height: rhp(58),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  btnPlnTxt: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
  },
});
