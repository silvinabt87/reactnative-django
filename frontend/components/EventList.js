import { Text, View } from 'react-native';
import { EventItem } from './EventItem';

export const EventList = ({ data }) => {
  return (
    <View>
      <Text>Event List</Text>
      {data.map((item) => (
        <EventItem key={item.id} item={item} />
      ))}
    </View>
  );
};
