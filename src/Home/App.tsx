import React, { useState } from 'react';
import {
  setupIonicReact,
  IonApp,
  IonPage,
  IonRouterOutlet,
} from '@ionic/react';

import { Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Feed from './HomePage/HomePage';
import Profile from './ProfilePage/ProfilePage';
import Settings from './SettingsPage/SettingsPage';
import SignIn from './SignInPage/SignInPage';

//import Test from './TestPage/TestPage';

import SideMenu from './sideMenu';
import Header from './mainHeader';
import { IonReactRouter } from '@ionic/react-router';

setupIonicReact({
  mode: 'ios',
});

/*
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/Home" component={Feed} exact={true} />
        <Route path="/Profile" component={Profile} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
*/

/*
    <Router>
      <Switch>
        <Route path="/">
          <MainFeed />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
*/

const MainFeed = () => {
  return (
    <>
      <SideMenu />

      <IonPage className="ion-page" id="main-content">
        <Header />
        <Feed />
      </IonPage>
    </>
  );
};

//https://stackblitz.com/edit/ionic-react-menu-hfudwc?file=src%2FApp.tsx,src%2Ftheme%2Fvariables.css
const App: React.FunctionComponent = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  //Conditional routing, the setLoggedIn state modifier is sent to the SignIn component
  //So that when setLoginTrue is run in SignIn, it will update the state in App (here)

  //It's kind of elegant
  //Kind of disgusting

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" component={SignIn} exact={true} />

          <Route
            path="/Feed"
            render={() => (loggedIn ? <MainFeed /> : <SignIn />)}
            exact={true}
          />

          <Route path="/Profile" component={Profile} exact={true} />
          <Route path="/Settings" component={Settings} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

//          <Route path="/Test" component={Test} exact={true} />
