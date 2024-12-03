import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { ScrollView, Image, Text, View , Button} from "react-native";
import { Appbar } from "react-native-paper";
import { MainStackParamList } from "../MainStackScreen";
import { styles } from "./HomeScreen.styles";


import FeedScreen from "../FeedScreen/FeedScreen.main";
import DetailScreen from "../DetailScreen/DetailScreen.main";




interface Props {
    navigation: StackNavigationProp<MainStackParamList, "HomeScreen">;
    route: RouteProp<MainStackParamList, "HomeScreen">;
}


  
export default function HomeScreen({ route, navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the MDB Social App!</Text>
      <Image
        source={{ uri: 'https://mdb.dev/wp-content/uploads/2024/08/436616815_1506057556658932_216010135151664436_n-1-1.png' }}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Feed"
          onPress={() => navigation.navigate('FeedScreen')}
        />
        <Button
          title="Create New Event"
          onPress={() => navigation.navigate('NewSocialScreen')}
        />
      </View>
    </View>
    
  );
}
