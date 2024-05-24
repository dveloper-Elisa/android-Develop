
import {View,Text,TextInput,Button} from "react-native"
import { useNavigation } from "@react-navigation/native"
import tw from "twrnc"

const InputFunction = ()=>{

    const navigate = useNavigation()
    const navigation = ()=>{
        return  navigate.navigate("BootomNavigation")

    }

    return <View style={tw`flex justify-center items-center`}>

        <Text>Let's Start!!</Text>

        <View>
            <View style={tw`flex-col gap-4`}>
                <TextInput style={tw`border p-2 w-90 rounded-md`} placeholder="Enter your name"/>
                <TextInput
                keyboardType="email-address"
                secureTextEntry={true}
                style={tw`border p-2 w-90 rounded-md`} placeholder="Enter your email"/>
            </View>

            
        </View>
<Button onPress={navigation} title="Home" style={tw`max-w-10`}/>
    </View>

}


export default InputFunction;