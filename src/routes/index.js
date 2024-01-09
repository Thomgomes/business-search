import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "../screens/SearchScreen";


const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='SearchScreen'
                component={SearchScreen}
                // options={{ headerShown: false }}
            />        
        </Stack.Navigator>
    )
}