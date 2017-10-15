import { Dimensions } from 'react-native'

const CENTER = 'center'
const PRIMARY_COLOR = '#dc9642'
const SECONDARY_COLOR = '#dc5fd5'
const SUCCESS_COLOR = '#40dc6b'
const TERTIARY_COLOR = '#35abdc'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default {
  black: '#000000',
  center: CENTER,
  container: (backgroundColor) => ({
    alignItems: CENTER,
    backgroundColor,
    flex: 1,
    justifyContent: CENTER,
  }),
  fontSize: 18,
  primaryColor: PRIMARY_COLOR,
  screenHeight: HEIGHT,
  screenWidth: WIDTH,
  secondaryColor: SECONDARY_COLOR,
  successColor: SUCCESS_COLOR,
  tertiaryColor: TERTIARY_COLOR,
  white: '#ffffff',
}
