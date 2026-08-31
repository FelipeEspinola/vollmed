import { View, Text, TextInput, StyleSheet } from "react-native";

export default function LabeledInput({label, }) {
    return (
        <View>
            <Text>
                {label}
            </Text>
            <TextInput placeholderTextColor = "#B5B5B5" />
            
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        marginBotton: 14,
    }
}   
)