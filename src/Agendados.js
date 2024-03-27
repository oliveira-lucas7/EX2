import { View, Text, StyleSheet, Image } from "react-native"

export default function Agendados({nome, inicio, final}){
    return(
        <View style={styles.item}>
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.inicio}>Início: {inicio}</Text>
            <Text style={styles.final}>Final: {final}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'lightgray',
        borderRadius: 20,
        padding: 20,
        width: 500,
        margin: 10,
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        alignItems: "center",
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
      },
      inicio: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#666',
        marginBottom: 10,
        textAlign: 'center',
      },
      final: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007bff',
        marginBottom: 10,
        textAlign: 'center',
        borderRadius: 8,
      }
})
