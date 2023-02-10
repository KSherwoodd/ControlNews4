import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
} from '@ionic/react';
import React, { useState, useEffect } from 'react';
/*
import {
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuToggle,
} from '@ionic/react';
*/

const API_KEY = 'pub_16416277ab8ea1c57ee4eb5dd06a5ff50014a';
const URL =
  'https://newsdata.io/api/1/news?apiKey=pub_16416277ab8ea1c57ee4eb5dd06a5ff50014a&language=en';

const TEST_KEY =
  'live_E0KoUezJfEHyQdjuzEdJaTonDOU9nu5vaC311377pbvynlqSbVj9zsuC1hNSeieL';
const TEST_URL = 'https://api.thecatapi.com/v1/images/search';

/*class Response extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      status: null,
      results: [],
    };
  }
}*/

function Test() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState({
    status: null,
    results: [
      {
        title: null,
        image_url: '',
        description: null,
        source_id: '',
      },
    ],
  });
  const [articles, setArticles] = useState<JSX.Element[]>([]);

  const generateItems = () => {
    const newArticles = [];
    fetch(URL)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setItem(result);
      });
    for (let x = 0; x < 20; x++) {
      newArticles.push(
        <>
          <IonCardHeader>
            <IonCardTitle>{item.results[x].title}</IonCardTitle>
            <IonCardSubtitle>{item.results[x].description}</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonImg
              src={item.results[x].image_url}
              alt={item.results[x].source_id}
            />
          </IonCardContent>
        </>
      );
    }
    setArticles([...articles, ...newArticles]);
  };

  useEffect(() => {
    generateItems();
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (item.status !== 'success') {
    return <h3>An error occured when processing your request.</h3>;
  } else {
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
}

export default Test;

/*
        {items.map((item) => (
          <li key={item.id}>
            {item.width} {item.height}
          </li>
        ))}
*/

//https://newsapi.org/docs/endpoints/everything
//
//https://reactjs.org/docs/faq-ajax.html
//https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers
//https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t

/*
  , {
      headers: {
        'X-ACCESS-KEY': API_KEY,
      },
  */

/*
      <>
        <h1>{item.results[0].title}</h1>
        <p>{item.results[0].description}</p>
        <img src={item.results[0].image_url} alt={item.results[0].source_id} />
      </>
*/
