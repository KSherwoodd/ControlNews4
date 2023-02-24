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

const API_KEY = 'oqzL2SHzWCS1XxwXs-J87zvBCU8be3wJ0COmGajmmxk';
const URL = 'https://api.newscatcherapi.com/v2/search?q=Elon%20Musk&lang=en';

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
    articles: [
      {
        title: null,
        media: '',
        excerpt: null,
        link: '',
      },
      {
        title: null,
        media: '',
        excerpt: null,
        link: '',
      },
      {
        title: null,
        media: '',
        excerpt: null,
        link: '',
      },
      {
        title: null,
        media: '',
        excerpt: null,
        link: '',
      },
      {
        title: null,
        media: '',
        excerpt: null,
        link: '',
      },
    ],
  });
  const [articles, setArticles] = useState<JSX.Element[]>([]);

  const generateItems = () => {
    const newArticles = [];

    fetch(URL, {
      headers: { 'x-api-key': API_KEY },
    })
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setItem(result);
      });

    console.log('API return: ');
    console.log(item);

    for (let x = 0; x < 5; x++) {
      newArticles.push(
        <>
          <IonCardHeader>
            <IonCardTitle>{item.articles[x].title}</IonCardTitle>
            <IonCardSubtitle>{item.articles[x].excerpt}</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonImg src={item.articles[x].media} alt={item.articles[x].link} />
          </IonCardContent>
        </>
      );
      setArticles([...articles, ...newArticles]);
    }
  };

  useEffect(() => {
    //generateItems();
    const genItems = setTimeout(() => {
      generateItems();
    }, 2000);
    return () => clearTimeout(genItems);
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (item.status !== 'ok') {
    return <h3>An error occured when processing your request.</h3>;
  } else {
    console.log(item);
    console.log(articles);
    return (
      <IonContent>
        <IonList>
          {articles.map((article, index) => (
            <li key={index}>
              <IonCard>{article}</IonCard>
            </li>
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
