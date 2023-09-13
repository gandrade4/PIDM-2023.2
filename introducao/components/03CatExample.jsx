import { View, Text } from "react-native";

const MyCat = () => {
    //let catName = "Garfield"

    const getFullName = (firstName, lastName) =>{
        return firstName + " " + lastName
    }

    return(
        <View>
            <Text style={{fontSize: 20}}>
                My cat name is {getFullName("Morena", "Andrade")}
            </Text>
        </View>
    )
}

export default MyCat