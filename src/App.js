import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from 'react-router-dom';

import Home from './components/routes/home/home';
import Navigation from './components/routes/navigation/navigation';
import Authentication from './components/routes/authentication/authentication';
import Shop from './components/routes/shop/shop';
import CheckOut from './components/routes/check-out/check-out';
import { checkUserSession } from './store/user/user.action';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch]);
  
  return (
    <Routes>
      <Route path='/' element={<Navigation/>} >
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop/>} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  )
}

export default App;
