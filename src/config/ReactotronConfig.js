import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure() // controls connection & communication settings
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!
  console.tron = tron;
  tron.clear();
}
