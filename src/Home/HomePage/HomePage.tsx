import React, { useState, useEffect } from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonContent,
  IonList,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonDatetime,
} from '@ionic/react';

const API_KEY = 'afdae3b6eaf54376885b92a07d946d26';

function Feed() {
  const [articles, setArticles] = useState<JSX.Element[]>([]);

  const generateItems = () => {
    const newArticles = [];
    for (let i = 0; i < 20; i++) {
      newArticles.push(
        <>
          <IonCardHeader>
            <IonCardTitle>News Title {articles.length + i + 1}</IonCardTitle>
            <IonCardSubtitle>News Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            The article here would be very important, if there was one to show.
            <IonDatetime></IonDatetime>
            <IonButton fill="outline">Start</IonButton>
          </IonCardContent>
        </>
      );
    }
    setArticles([...articles, ...newArticles]);
  };

  useEffect(() => {
    generateItems();
    // eslint-disable-next-line
  }, []);

  return (
    <IonContent>
      <IonList>
        {articles.map((article, index) => (
          <IonCard>{article}</IonCard>
        ))}
      </IonList>
      <IonInfiniteScroll
        onIonInfinite={(event) => {
          generateItems();
          setTimeout(() => event.target.complete(), 500);
        }}
      >
        <IonInfiniteScrollContent loadingSpinner="bubbles" />
      </IonInfiniteScroll>
    </IonContent>
  );
}
export default Feed;