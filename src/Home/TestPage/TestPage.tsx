import React, { useState, useEffect } from 'react';
import {
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuToggle,
} from '@ionic/react';

const API_KEY = 'afdae3b6eaf54376885b92a07d946d26';
const url =
  'https://newsapi.org/v2/everything?q=Apple&from=2023-01-17&sortBy=popularity';

const TEST_KEY =
  'live_E0KoUezJfEHyQdjuzEdJaTonDOU9nu5vaC311377pbvynlqSbVj9zsuC1hNSeieL';
const TEST_URL = 'https://api.thecatapi.com/v1/images/search';

function Test() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

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

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <ul>{items}</ul>;
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
