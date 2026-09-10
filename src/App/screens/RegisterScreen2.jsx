import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import LabeledInput from "../components/LabeledInput";
    

export default function RegisterScreen2() {   
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Insira alguns dados básicos:</Text>
           <LabeledInput
            label ="CEP:"
            placeholder = "Insira seu CEP:"
            />
          
          <LabeledInput 
            label="Endereço:"
            placeholder = "Insira seu endereço:"
            />

          <LabeledInput 
            label="Número:"
            placeholder = "Insira sua número:"
            />

            <LabeledInput 
            label="Complemento:"
            placeholder = "Insira sua complemento:"
            />

             <LabeledInput 
            label="Telefone:"
            placeholder = "(00) 00000-0000:"
            />
          
          <Button textButton="Voltar"/>
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
