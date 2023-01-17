import React from 'react';
import {
  IonContent,
  IonPage,
  IonAvatar,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonItem,
  IonLabel,
  IonImg,
} from '@ionic/react';

import SideMenu from '../../Home/sideMenu';
import Header from '../../Home/mainHeader';

import './ProfileCSS.css';

import { archive, heart, trashBin } from 'ionicons/icons';

const Profile = () => {
  return (
    <>
      <SideMenu />
      <IonPage className="ion-page" id="main-content">
        <Header />
        <IonContent>
          <IonAvatar>
            <IonImg
              alt="pfp"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>

          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption color="success">
                <IonIcon slot="end" icon={archive}></IonIcon>
                Archive
              </IonItemOption>
            </IonItemOptions>

            <IonItem>
              <IonLabel>Sliding Item with End Icons</IonLabel>
            </IonItem>

            <IonItemOptions>
              <IonItemOption>
                <IonIcon slot="end" icon={heart}></IonIcon>
                Favorite
              </IonItemOption>
              <IonItemOption color="danger">
                <IonIcon slot="end" icon={trashBin}></IonIcon>
                Delete
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Profile;
