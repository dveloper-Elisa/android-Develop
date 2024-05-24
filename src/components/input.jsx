
import {View,Text,TextInput,Button} from "react-native"
import { useNavigation } from "@react-navigation/native"
import tw from "twrnc"

const InputFunction = ()=>{

    const navigate = useNavigation()
    const navigation = ()=>{
        return  navigate.navigate("BootomNavigation")
    }

    const SignUpFunction = () => {
        return navigate.navigate("Home")
    }

    return <View style={tw`flex-1 justify-center gap-10 items-center`}>

        <Text style={tw`bg-black min-w-90 rounded-md mb-3 text-white text-center text-10`}>Let's Start!!</Text>

        <View>
            <View style={tw`flex-col gap-4`}>
                <TextInput style={tw`border p-2 w-90 rounded-md`} placeholder="Enter your name"/>
                <TextInput
                keyboardType="email-address"
                secureTextEntry={true}
                style={tw`border p-2 w-90 rounded-md`}
                 placeholder="Enter your email"/>
            </View>

            
        </View>

        <Button onPress={navigation} title="Home" style={tw``}/>
        <Text style={tw`flex justify-center items-center`}>If have no account Signup <Text style={tw`text-blue-600 `} onPress={SignUpFunction}>Here</Text> </Text>
    </View>

}




export default InputFunction;