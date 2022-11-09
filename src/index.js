import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import './index.css';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@chakra-ui/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename='/goit-react-hw-08-phonebook'>
              <App />
            </BrowserRouter>  
        </PersistGate>
        </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
