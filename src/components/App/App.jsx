
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { refreshCurrentUser } from 'redux/auth/auth-operations';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshCurrentUser())
  }, [dispatch])

  return (
    // <Box>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path='/contacts' element={<Contacts />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
        </Route>
      </Route>
    </Routes>
    // </Box >
  )
}

// {/* <Routes>
//   <Route path='/' element={<Layout />}>
//     <Route index element={<Home />} />
//     <Route element={<PrivateRoute />}>
//       <Route path='/contacts' element={<Contacts />} />
//     </Route>
//     {/* <Route path='/contacts' element={<Contacts />} /> */}
//     <Route element={<PublicRoute />}>
//       <Route path='/login' element={<LoginForm />} />
//       <Route path='/register' element={<RegisterForm />} />
//     </Route>
//     {/* <Route path='/login' element={<LoginForm />} />
//         <Route path='/register' element={<RegisterForm />} /> */}
//   </Route>
// </Routes> */}
