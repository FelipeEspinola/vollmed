import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import LabeledInput from "../components/LabeledInput";
    

export default function RegisterScreen1() {   
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Insira alguns dados básicos:</Text>
           <LabeledInput
            label ="Nome:"
            placeholder = "Insira seu nome:"
            />
          
          <LabeledInput 
            label="Email:"
            placeholder = "Insira seu endereço de email:"
            />

          <LabeledInput 
            label="Crie sua senha:"
            placeholder = "Insira sua senha:"
            />

            <LabeledInput 
            label="Repita a senha:"
            placeholder = "Insira sua senha:"
            />
          
          <Button textButton="Avançar"/>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
        container:{
          flex: 1,
          backgroundColor: "#FFFFFF",
          paddingTop: 62,
        },
        title:{
          fontSize: 20,
          fontWeight: 700,
          textAlign: "center",
          color:"#6B6E71",
          marginBottom: 26,
        },
       
        
      
    })
