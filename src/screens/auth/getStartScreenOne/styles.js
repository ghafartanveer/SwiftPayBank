import { StyleSheet } from 'react-native';
import { rwp, rhp, rfs } from '../../../constants/dimensions';
import fonts from '../../../constants/fonts';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: rfs(32),
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    color: 'black',
    marginTop: rhp(20),
    lineHeight: 33.6,
    letterSpacing: 1,
  },
  btnStyle: isButtonEnabled => ({
    marginTop: rhp(24),
    width: rwp(335),
    marginBottom: rhp(35),
    backgroundColor: isButtonEnabled ? colors.primary : colors.secondary,
  }),
  inputText: { marginTop: 0 },
  iconStyle: { width: 24, height: 26.4 },
  flexStyle: { flex: 1 },
  checkBoxView: { paddingRight: 9 },
});
