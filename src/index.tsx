import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import Routerpage from './Routerpage';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <Provider store={store}>
  <Routerpage/>
 </Provider>
);
