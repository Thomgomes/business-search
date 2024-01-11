import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "../screens/SearchScreen";
import ResultsShowScreen from "../screens/ResultsShowScreen";


const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='SearchScreen'
                component={SearchScreen}
                // options={{ headerShown: false }}
            />        
            <Stack.Screen
                name='ResultsShowScreen'
                component={ResultsShowScreen}
                // options={{ headerShown: false }}
            />        
        </Stack.Navigator>
    )
}