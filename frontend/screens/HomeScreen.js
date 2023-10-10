import { useEffect, useState } from 'react';
import { EventList } from '../components/EventList';
import { View } from 'react-native';

const API_URL = 'http://0.0.0.0:8000/api/events/';
const HomeScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(API_URL, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    });
    const data = await response.json();
    setData(data);
  };
  return (
    <View>
      <EventList data={data} />
    </View>
  );
};

export default HomeScreen;
