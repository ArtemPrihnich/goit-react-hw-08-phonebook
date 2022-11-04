import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import './index.css';
import { ThemeProvider } from '@emotion/react'
import { theme } from './utils/theme'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename='/goit-react-hw-08-phonebook'>
              <App />
            </BrowserRouter>  
        </PersistGate>
        </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
