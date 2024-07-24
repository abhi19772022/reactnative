import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [A, setA] = useState('');
  const [B, setB] = useState('');
  const [C, setC] = useState('');
  const [sortedValues, setSortedValues] = useState('');

  const sortValues = () => {
    const a = parseInt(A);
    const b = parseInt(B);
    const c = parseInt(C);

    let first, second, third;
      if (a <= b && a <= c) {
      first = a;
      if (b <= c) {
        second = b;
        third = c;
      } else {
        second = c;
        third = b;
      }
    } else if (b <= a && b <= c) {
      first = b;
      if (a <= c) {
        second = a;
        third = c;
      } else {
        second = c;
        third = a;
      }
    } else {
      first = c;
      if (a <= b) {
        second = a;
        third = b;
      } else {
        second = b;
        third = a;
      }
    }

    setSortedValues(`${first}, ${second}, ${third}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter value for A:</Text>
      <TextInput
        style={styles.input}
        value={A}
        onChangeText={setA}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Enter value for B:</Text>
      <TextInput
        style={styles.input}
        value={B}
        onChangeText={setB}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Enter value for C:</Text>
      <TextInput
        style={styles.input}
        value={C}
        onChangeText={setC}
        keyboardType="numeric"
      />
      <Button title="Sort" onPress={sortValues} />
      {sortedValues !== '' && (
        <Text style={styles.result}>Sorted values: {sortedValues}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default App;
