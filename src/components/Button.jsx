// componente reutilizavel do botão principal
import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";

const BG_BUTTON = "#00213D";
const TEXT_PRIMARY = "#FFFFFF"

export default function Button() {
    return (
        <Pressable style={styles.button}>
            <Text style={style.title}>Enviar</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: BG_BUTTON,
    },

    title: {
        color: TEXT_PRIMARY,
    }
})