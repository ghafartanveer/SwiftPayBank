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
  barBackground: {
    marginTop: rhp(12),
    height: rhp(4),
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
  },
  barFront: {
    width: rwp(134),
    height: rhp(4),
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#4681AA',
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
  phnText: {
    fontSize: rfs(17),
    fontWeight: '400',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    color: colors.grey,
  },
  editText: {
    color: colors.primary,
    fontSize: rfs(17),
    fontWeight: '600',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
    marginLeft: rwp(8),
  },
  otpContainer: {
    marginTop: rhp(24),
  },
  cell: {
    borderRadius: 8,
    borderWidth: 0,
    backgroundColor: colors.bgColor,
    borderBottomWidth: 0,
    width: rwp(49),
    height: rhp(50),
  },
  cellText: {
    color: 'black',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    fontSize: rfs(28),
    textAlign: 'center',
    paddingTop: rhp(8),
  },
  bottomTextRow: {
    flexDirection: 'row',
    marginTop: rhp(20),
    justifyContent: 'center',
  },
  codeText: {
    fontSize: rfs(15),
    fontWeight: '600',
    color: colors.grey,
    fontFamily: fonts.SF_PRO_TEXT.PlusJakartaSans.Medium,
  },
  flexStyle: { flex: 1 },
  countryCodeStyle: { flexDirection: 'row', alignItems: 'center' },
  btnStyle: {
    width: wp(90),
    marginBottom: rhp(35),
    backgroundColor: colors.secondary,
  },
});
