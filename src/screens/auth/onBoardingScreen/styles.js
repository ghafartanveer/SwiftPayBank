import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';
import { hp, rfs, rhp, rwp, wp } from '../../../constants/dimensions';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImageStyle: {
    resizeMode: 'contain',
    height: rhp(375),
    width: wp(100),
    marginHorizontal: 10,
    marginTop: hp(12),
  },
  logoImage: {
    width: rwp(170),
    height: rhp(40),
    alignSelf: 'center',
    resizeMode: 'contain',
    top: rhp(70),
  },
  bottomContainer: {
    backgroundColor: 'white',
    height: rhp(375),
    width: '100%',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    color: 'black',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    fontWeight: '700',
    fontSize: rfs(32),
    marginTop: rhp(32),
  },
  subHeading: {
    textAlign: 'center',
    color: colors.grey,
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    fontWeight: '400',
    fontSize: rfs(17),
    marginTop: rhp(15),
  },
  btnContainer: {
    flexDirection: 'row',
    height: rhp(53),
    width: wp(90),
    marginTop: rhp(70),
    justifyContent: 'space-around',
  },
  gradientView: { flex: 1, alignItems: 'center' },
  flexStyle: { flex: 1 },
});
