import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonPage,
  IonLabel,
  IonList,
  IonBadge,
  IonIcon,
} from '@ionic/react';

import './SignInCSS.css';

import {
  checkmarkCircleOutline as tick,
  closeCircleOutline as cross,
} from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

function checkLogin(username: string, password: string) {
  //This function will access the database and check login details
  //Then it will compare the entered data with the provided ones
  //Then return either a successful login with a userID or a failure

  //For now it will return a bool for testing purposes
  if (username === '' || password === '') {
    return false;
  }
  console.log(username);
  console.log(password);
  return true;
}

//{setLoginTrue?: any}
//setLoginTrue

//I think I want to convert this either to a class (yuck) or a function (ugh fine)
//Either way I need to pass in the setLoginTrue function as a parameter but the RouteComponentProps on the FunctionComponent type are getting distinctly in the way
//This is a problem for another time...

//That time is now I guess :(

//That time was not then, and it is not now, I have no idea
//Starting to think I'm out of my depth with react
//Oh well, it makes the colours change according to Regex now so that's something...

function SignIn() {
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [usernameCheck, setUsernameCheck] = useState(false);
  const autoFocus = true;
  const inputReq = true;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const userInfo: [username: string, password: string] = [username, password];

  const passwordRegex = new RegExp(
    '(?=(.*[0-9]))(?=.*[\\!@#$%^&*()\\[\\]{}\\-_+=~`|:;"\'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,29}'
  );

  const usernameRegex = new RegExp(
    '^(?!.*\\.\\.)(?!.*\\.$)[^\\W][\\w.]{0,29}$'
  );

  return (
    <>
      <IonPage className="ion-page" id="main-content">
        <IonContent>
          <IonList>
            <IonItem fill="outline" id="username-input">
              <IonLabel position="floating">Username</IonLabel>
              <IonInput
                className="detail-input"
                placeholder="Username"
                autocomplete="username"
                autofocus={autoFocus}
                enterkeyhint="next"
                mode="ios"
                required={inputReq}
                onIonChange={(u: any) => {
                  if (usernameRegex.test(u.target.value)) {
                    setUsernameCheck(true);
                    setUsername(u.target.value);
                  } else {
                    setUsernameCheck(false);
                  }
                }}
              >
                <IonBadge
                  slot="end"
                  color={!usernameCheck ? 'danger' : 'success'}
                >
                  <IonIcon icon={!usernameCheck ? cross : tick} />
                </IonBadge>
              </IonInput>
            </IonItem>

            <IonItem fill="outline" id="password-input">
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                className="detail-input"
                type="password"
                placeholder="Please include 8 characters, a capital / lowercase letter, a number and a symbol"
                autocomplete="current-password"
                enterkeyhint="enter"
                mode="ios"
                required={inputReq}
                onIonChange={(p: any) => {
                  if (passwordRegex.test(p.target.value)) {
                    setPasswordCheck(true);
                    setPassword(p.target.value);
                  } else {
                    setPasswordCheck(false);
                  }
                }}
              >
                <IonBadge
                  slot="end"
                  color={!passwordCheck ? 'danger' : 'success'}
                >
                  <IonIcon icon={!passwordCheck ? cross : tick} />
                </IonBadge>
              </IonInput>
            </IonItem>
          </IonList>

          <IonButton
            onClick={() => {
              if (
                checkLogin(username, password) &&
                usernameCheck &&
                passwordCheck
              ) {
                //redirect to feed page
                return history.push('/feed');
              }
            }}
          >
            Click Me
          </IonButton>
        </IonContent>
      </IonPage>
    </>
  );
}

export default SignIn;

//  next step:
//
//https://ionicframework.com/docs/api/input#helper--error-text
//
//

//
//
//https://reactjs.org/docs/lifting-state-up.html
//https://reactjs.org/docs/thinking-in-react.html
//
//
