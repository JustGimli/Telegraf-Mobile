import React, { useState } from "react"
import { View, Text, Button ,Image} from "react-native"

const Main = () => {
    const [color, setColor] = useState(false)
    
    return (
        <View >    
            <Text>Anton Reika PIDORASSSSS</Text>
            <Button
            // disabled={!color} 
            onPress={() => {
                setColor(!color)
            }} title={color? "click me": "goodbue"}/>

            {!color? <Image source={{
                uri: 'https://avatars.githubusercontent.com/u/96629619?v=4'
            }} 
            style={{
                width: 200,
                height: 300
            }}
            />: <Text>HEllo</Text>}
        </View>
    )
}

export default Main