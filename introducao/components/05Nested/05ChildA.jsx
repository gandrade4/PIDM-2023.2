import {View, Image} from "react-native"

const ChildA = () => {
    return(
        <View>
            <Image source={{uri:"https://www.shutterstock.com/shutterstock/photos/1865153395/display_1500/stock-photo-portrait-of-young-smiling-woman-looking-at-camera-with-crossed-arms-happy-girl-standing-in-1865153395.jpg"}} style={{height: 200, width:200}}/>
        </View>
    )
}

export default ChildA