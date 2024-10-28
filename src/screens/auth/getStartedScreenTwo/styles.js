import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';
import { rfs, rhp, rwp, wp } from '../../../constants/dimensions';
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
  subTitle: {
    fontSize: rfs(18),
    fontWeight: '500',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    color: colors.grey,
    marginTop: rhp(10),
  },
  countryCodePhnRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: rhp(26),
  },
  countryCol: {
    flexDirection: 'column',
    height: rhp(50),
    width: rwp(64),
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    justifyContent: 'center',
    paddingBottom: rhp(18),
  },
  countryHeading: {
    color: colors.grey,
    fontSize: rfs(15),
    fontWeight: '400',
  },
  countryInsideRow: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  inputStyle: {
    marginLeft: rwp(12),
    width: rwp(261),
    borderRadius: 4,
    borderBottomWidth: 1,
    textAlignVertical: 'bottom',
  },
  countryCode: {
    fontSize: rfs(16),
    color: '#373F46',
    marginBottom: rhp(4),
    fontWeight: '400',
  },
  agreementText: {
    fontSize: rfs(14),
    fontWeight: '500',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    color: colors.grey,
    textAlign: 'auto',
    marginBottom: rhp(24),
  },
  flex: { flex: 1 },
  containerBtnStyle: { width: 30 },
  btnStyle: isPhoneNumberFilled => ({
    width: wp(90),
    marginBottom: rhp(35),
    backgroundColor: isPhoneNumberFilled ? colors.primary : colors.secondary,
  }),
});
