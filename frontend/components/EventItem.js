import { Text, View } from 'react-native';

export const EventItem = ({ item }) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};
