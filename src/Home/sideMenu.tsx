import React from 'react';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/react';

import { home, person, cog } from 'ionicons/icons';

import './main.css';
import { IonReactRouter } from '@ionic/react-router';

function SideMenu() {
  return (
    <IonReactRouter>
      <IonMenu content-id="main-content">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList>
            <IonListHeader>Navigate</IonListHeader>
            <IonMenuToggle auto-hide="false">
              <IonItem href="/feed" button>
                <IonIcon icon={home} />
                <IonLabel> Feed</IonLabel>
              </IonItem>

              <IonItem href="/profile" button>
                <IonIcon icon={person} />
                <IonLabel> Profile</IonLabel>
              </IonItem>

              <IonItem href="/settings" button>
                <IonIcon icon={cog} />
                <IonLabel> Settings</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    </IonReactRouter>
  );
}

export default SideMenu;
