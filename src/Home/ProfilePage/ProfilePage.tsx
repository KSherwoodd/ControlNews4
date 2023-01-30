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
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            eu egestas neque. Duis quam augue, tempor at lacinia ut, porttitor
            id purus. Sed venenatis id felis et tincidunt. Ut semper felis ut
            lorem ultricies, sed posuere tortor ultricies. Maecenas facilisis
            odio et magna tempus, sed gravida purus mattis. Aliquam erat
            volutpat. Vestibulum et quam eget nibh egestas feugiat. Quisque
            ullamcorper, enim quis ultricies facilisis, augue felis dignissim
            justo, at luctus nulla mauris a nibh. Sed auctor enim id laoreet
            pharetra. Mauris massa ante, congue sit amet facilisis a, cursus non
            libero. Suspendisse id arcu et magna rhoncus condimentum sit amet
            non nunc. Vestibulum finibus sed urna sed viverra. Ut commodo, urna
            et placerat dapibus, erat risus commodo risus, a vulputate elit nisl
            at elit. Quisque sit amet ultricies lacus. Vestibulum sed
            scelerisque lacus, non dictum nulla. In commodo nulla eu libero
            porta semper. Etiam ornare, odio ac auctor ultricies, enim justo
            mattis nibh, et laoreet turpis neque sit amet leo. Nunc venenatis
            bibendum ex, id maximus ipsum maximus ut. Duis tristique nulla id
            ullamcorper cursus. Nunc nulla nisl, interdum ut libero non, auctor
            mollis eros. Donec placerat quam metus, in commodo velit vehicula
            eget. Nullam in dui metus. Aliquam vel risus elit. Vivamus ultrices,
            nulla ac suscipit vestibulum, libero elit vulputate dolor, quis
            iaculis odio felis id ipsum. Phasellus aliquam neque quis eleifend
            porta. Mauris ultricies sit amet tortor in posuere. Nulla facilisi.
            Morbi tincidunt, nunc in sodales congue, tellus velit tempus turpis,
            eget iaculis odio lectus quis dui. Nunc auctor massa vel dui
            faucibus varius. Ut sed pulvinar purus, vitae tempor tortor. Aenean
            ut ligula odio. Nam varius sapien quis molestie faucibus. Praesent
            in aliquam dolor. Donec elementum mauris eget dui vestibulum, id
            efficitur risus ullamcorper. Vivamus et est ac dui maximus lobortis.
            Quisque ullamcorper pulvinar metus id consectetur. Aliquam congue
            purus eget imperdiet molestie. Aenean vitae arcu elementum ex
            egestas semper. Sed non magna congue, ultricies leo sit amet,
            tristique libero. Donec fermentum tortor ac ante ullamcorper tempor.
            Proin non ipsum eu mauris commodo aliquam et elementum diam. Fusce
            convallis quam vel eros pharetra efficitur in ut ligula. Phasellus
            sit amet erat ac ipsum faucibus convallis. Morbi tincidunt tellus
            vitae dictum pretium. Vivamus auctor congue pretium. Mauris id nisl
            imperdiet, venenatis augue ut, accumsan justo. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Cras sit amet tellus a leo ultrices dictum sit amet a
            nisl. Proin facilisis turpis ac turpis fringilla, eget imperdiet
            diam faucibus. Phasellus mattis condimentum dui a aliquet. Duis
            dignissim dui lacus, nec lobortis sapien pulvinar vitae. Ut placerat
            molestie imperdiet. Morbi at nibh in ex dictum lobortis pretium non
            odio. Vivamus et nulla tellus. Praesent pretium orci non turpis
            tempor eleifend. Aenean vehicula gravida tempor. In hac habitasse
            platea dictumst. Suspendisse potenti. Donec sagittis leo urna, eget
            egestas diam mollis aliquet. In vehicula bibendum nulla tincidunt
            laoreet. Integer vel congue tortor. Suspendisse nec accumsan velit.
            Suspendisse venenatis dui purus, at tempor magna faucibus sed.
          </p>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Profile;
