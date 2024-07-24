import { Text, StyleSheet, View, Button } from 'react-native';
import React from 'react';

const Pageone = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Pageone</Text>
      <Button onPress={() => navigation.navigate('Pagetwo')} title="Pageone" />
      <Button onPress={() => navigation.navigate('Pagethree')} title="Pagethree" />
    </View>
  );
};

export default Pageone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
