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

const API_KEY = 'afdae3b6eaf54376885b92a07d946d26';
const url =
  'https://newsapi.org/v2/everything?q=Apple&from=2023-01-17&sortBy=popularity';

const TEST_KEY =
  'live_E0KoUezJfEHyQdjuzEdJaTonDOU9nu5vaC311377pbvynlqSbVj9zsuC1hNSeieL';
const TEST_URL = 'https://api.thecatapi.com/v1/images/search';

function Test() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([
    {
      id: null,
      width: null,
      height: null,
    },
  ]);

  useEffect(() => {
    fetch(TEST_URL, {
      headers: {
        'x-api-key': TEST_KEY,
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
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.width} {item.height}
          </li>
        ))}
      </ul>
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
