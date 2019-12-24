import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import {NativeModules} from 'react-native';

const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

if (__DEV__) {
  const tron = Reactotron.configure({host})
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}
