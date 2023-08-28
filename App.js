import { StyleSheet, Text } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ModalPortal } from 'react-native-modals';
import { UserContext } from './context/UserContext';

export default function App() {
  return (
    <Provider store={store}>
      <UserContext>
        <StackNavigator />
        <ModalPortal />
      </UserContext>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
