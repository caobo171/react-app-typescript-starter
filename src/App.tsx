import React from 'react'
import Test from '@pages/Test'
import { Provider } from 'react-redux';
import store from '@store/store';


const App = () => {



  return (
    <Provider store={store}>
<Test/>
    </Provider>
    
  );

}

export default App;
