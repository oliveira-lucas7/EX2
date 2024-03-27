import { View, Text, StyleSheet, Image } from "react-native"

export default function Produto({titulo, preco, categoria, data, image}){
    return(
        <View style={styles.item}>
            <Image source={{uri: image}} style={styles.img}/>
            <Text style={styles.title}>{titulo}</Text>
            <Text style={styles.price}>{preco}</Text>
            <Text style={styles.category}>{categoria}</Text>
            <Text style={styles.date}>{data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: "45%",
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
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
      },
      category: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#666',
        marginBottom: 10,
        textAlign: 'center',
      },
      price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007bff',
        marginBottom: 10,
        textAlign: 'center',
        backgroundColor: "lightgray",
        paddingHorizontal: 32,
        paddingVertical: 7,
        borderRadius: 8,
      },
      date: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
      },
})

