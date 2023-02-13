import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Favorites } from "../../screens/Favorites"
import { Home } from "../../screens/Home"
import theme from "../theme"
import Header from "../../components/Header"
import { AntDesign } from "@expo/vector-icons"
import { useRepositoryContext } from "../context/RepositoryContext"
import { Entypo } from "@expo/vector-icons"
import {useWindowDimensions } from "react-native";

const Tab = createBottomTabNavigator()

export default function BottomRouter() {
  const { toggleUserSelectionModal } = useRepositoryContext()
  const window = useWindowDimensions();
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => (
          <Header title="WeFit" onPress={toggleUserSelectionModal} />
        ),
        tabBarStyle: {
          height: window.height * 0.10,
        },
        tabBarLabelStyle: {
          fontFamily: theme.fonts.REGULAR,
          fontSize: 14,
          paddingBottom: 10
        },
        tabBarIconStyle:{
          marginTop: 8,

        },
        tabBarActiveTintColor: theme.colors.BLUE,
        tabBarInactiveTintColor: theme.colors.GRAY,
      }}
    >
      <Tab.Screen
        name="Repositórios"
        component={Home}
        options={{
          tabBarIcon: (props) => (
            <AntDesign name="github" size={20} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon: (props) => (
            <Entypo name="star" size={20} color={props.color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
