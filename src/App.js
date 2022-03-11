import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {BreadProvider} from 'material-bread';
import RootStack from './navigation';
import configureStore from './store';
import {NavigationContainer} from '@react-navigation/native';

const {store} = configureStore();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <BreadProvider>
        <RootStack />
      </BreadProvider>
    </NavigationContainer>
  </Provider>
);

export default App;
