import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenuToggle,
  IonIcon,
  IonButtons,
  IonButton,
} from '@ionic/react';

import { menuOutline } from 'ionicons/icons';

import './main.css';

function Header() {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuToggle>
            <IonButton>
              <IonIcon icon={menuOutline} />
            </IonButton>
          </IonMenuToggle>
        </IonButtons>
        <IonTitle>Title</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}

export default Header;
