import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';

import RootNavigation from './navigation';
import {store} from './redux/store';

LogBox.ignoreAllLogs(); // Ignore all log notifications

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RootNavigation />
      </Provider>

      <Toast />
    </>
  );
};

export default App;
