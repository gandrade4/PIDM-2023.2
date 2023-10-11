import {View, Text} from "react-native"
import ChildA from "./05ChildA"


const Parent = () => {
    return (
        <View>
            <Text style={{fontSize: 25, fontWeight:"bold"}}> Eu sou componente Pai</Text>
            <ChildA />
        </View>
    )
}

export default Parent

// text>style> you have to put two braces because youre coding js and bc it is a object