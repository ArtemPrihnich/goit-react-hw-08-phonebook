// import ContactsForm from '../ContactsForm/ContactsForm';
// import ContactsList from '../ContactsList/ContactsList';
// import ContactsFilter from '../ContactsFilter/ContactsFilter';
// import { Box } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';

export default function App() {
  return (
    // <Box>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
      </Route>
    </Routes>
    // </Box >
  )
}
