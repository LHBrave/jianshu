import React from 'react';
import HeaderComponent from './common/header';
import { GlobalInfontStyle } from './statics/iconfont/iconfont';
import store from './store';
import { BrowserRouter ,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
      <Provider store={store}>
          <React.Fragment>
              <GlobalInfontStyle />
              <HeaderComponent />
              <BrowserRouter>
                  <React.Fragment>
                      <Route path = '/' exact component = {Home}></Route>
                      <Route path = '/detail' exact component = {Detail}></Route>
                  </React.Fragment>
              </BrowserRouter>
          </React.Fragment>
      </Provider>
  );
}

export default App;
