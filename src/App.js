import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './components/0. Home Page/HomePage'
import LoginPage from './components/1. Login Page/LoginPage'
import SignupPage from './components/2. Signup Page/SignupPage'
import ProfilePage from './components/3. Profile Page/ProfilePage'
import AddImagePage from './components/4. Add Image Page/AddImagePage'
import ImageDetailsPage from './components/5.Image Details Page/ImageDetailsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/">
          <HomePage />
        </Route>
        <Route exact path ="/login">
          <LoginPage />
        </Route>
        <Route exact path ="/signup">
          <SignupPage />
        </Route>
        <Route exact path ="/profile">
          <ProfilePage />
        </Route>
        <Route exact path ="/addimage">
          <AddImagePage />
        </Route>
        <Route exact path ="/image/:id">
          <ImageDetailsPage />
        </Route>
        <Route path ="/">
          <h1>Erro 404 - Página não encontrada 😢</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
