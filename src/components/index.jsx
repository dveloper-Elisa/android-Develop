import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import tw from "twrnc";

const Index = () => {
  const navigation = useNavigation();

  const Login = () => {
    return navigation.navigate("Login");
  };
  

  return (
    <View style={tw`flex-1 items-center flex-col justify-center`}>
      <View style={tw`items-center gap-10`}>
        
          <Text style={tw`text-4 capitalize text-5`}>
            Welcome to car parcking tracking Syatem
          </Text>
        

        <Text style={tw`text-center `}>
          This is the car pack tracking System where the Driver packes easly and
          know where there is good space for packig
        </Text>

        <Button title={"Go To Login"} onPress={Login} />
      </View>
    </View>
  );
};

export default Index;
