import React from 'react';
import {
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuToggle,
} from '@ionic/react';
import { home, person, cog } from 'ionicons/icons';

const Settings = () => {
  return (
    <IonList>
      <IonListHeader>Navigate</IonListHeader>
      <IonMenuToggle auto-hide="false">
        <IonItem href="/" button>
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
  );
};

export default Settings;
