import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Input } from 'react-native-elements/dist/input/Input';
import styles from '../style/Mainstyle';


export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, SetPassword] = useState(null)

  const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Principal"}]
        })
  }

  return (
    <View style={styles.container}>
      <Text h1>WIGGA.beta</Text>
        <Input
          placeholder="E-mail"
           leftIcon={{ type: 'font-awesome', name: 'envelope' }}
           style={styles}
           onChangeText={value => setEmail(value)}
           keyboardType="email-address"
  />   
        <Input
          placeholder="Sua Senha"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}          
          onChangeText={value => SetPassword(value)}
          secureTextEntry={true}
  />  
          <Button
          icon={
            <Icon
              name="check"
              size={15}
              color="white"
            />
          }
          title="Entrar"
          onPress={() => entrar() }
        />
        
        

    </View>
  );
}

