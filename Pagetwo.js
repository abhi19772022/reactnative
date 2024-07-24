
import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'

const Pagetwo = ({navigation}) => {
    return (
     <View style={styles.container}>
<Text>Pagetwo</Text>
<Button  onPress={()=> navigation.navigate('Pageone') } title='page2'/>
  <Button onPress={()=> navigation.navigate('Pagethree') } title='page3'/>




     </View>
    )
  }
export default Pagetwo

const styles = StyleSheet.create({})