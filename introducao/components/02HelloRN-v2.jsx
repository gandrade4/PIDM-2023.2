import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { View, Text, Image, TextInput, ScrollView} from "react-native";


const HelloRN_v2 = () =>{
    return(
        <ScrollView>
            <Text>React Native 4 Cats</Text>
            <Image 
                source={{uri:'https://reactnative.dev/docs/assets/p_cat1.png'}}
                style={{width:200, height:200}}
            />
            <TextInput
                style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        fontSize: 22,
                        paddingLeft: 10
                }}
            />
            
        </ScrollView>
    )
}

export default HelloRN_v2