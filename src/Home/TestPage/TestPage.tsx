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
const URL = 'https://newsdata.io/api/1/news?language=en';

const TEST_KEY =
  'live_E0KoUezJfEHyQdjuzEdJaTonDOU9nu5vaC311377pbvynlqSbVj9zsuC1hNSeieL';
const TEST_URL = 'https://api.thecatapi.com/v1/images/search';

function Test() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([
    {
      title: null,
      image_url: '',
      description: null,
      source_id: '',
    },
  ]);

  useEffect(() => {
    fetch(URL, {
      headers: {
        'X-ACCESS-KEY': API_KEY,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setItems(result);
      });
  }, []);

  console.log(items);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <h1>{items[0].title}</h1>
        <p>{items[0].description}</p>
        <img src={items[0].image_url} alt={items[0].source_id} />
      </>
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
//https://reactjs.org/docs/faq-ajax.html
//https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers
//https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
