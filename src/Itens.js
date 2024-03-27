import { View, Text, FlatList, StyleSheet } from "react-native"
import Produto from "./Produto"

const dados = [
    {
        id: "01",
        titulo: "Tênis Nike",
        preco: 39.99,
        categoria: "Tênis esportivo",
        data: "22/07/2004",
        image: "https://imgnike-a.akamaihd.net/1920x1920/019385ID.jpg"
    },
    {
        id: "02",
        titulo: "Tênis Adidas",
        preco: 59.99,
        categoria: "Tênis de moda",
        data: "14/04/2012",
        image: "https://cdn.dooca.store/28377/products/tenis-adidas-court-base-20-preto-feminino-e-masculino-gw9251-e-gw9262-a_640x640+fill_ffffff.jpg?v=1669992498&webp=0"
    },
    {
        id: "03",
        titulo: "Tênis Puma",
        preco: 109.99,
        categoria: "Tênis para ciclismo",
        data: "29/05/2024",
        image: "https://images.tcdn.com.br/img/img_prod/752803/tenis_puma_x_ray_2_square_368651_masculino_softfoam_12208615_1_f9d76f21e0fe292be3f985500833398f_20231213214705.jpg"
    },
    {
        id: "04",
        titulo: "Tênis Mizuno",
        preco: 299.99,
        categoria: "Tênis de trilha",
        data: "05/09/2002",
        image: "https://lojasdalu.com/cdn/shop/files/tenis-mizuno-wave-creation-lojas-dalu-01_1024x.webp?v=1685112087",
    },
    {
        id: "05",
        titulo: "Chinelo da Havianas",
        preco: 19.99,
        categoria: "Tênis esportivo",
        data: "17/06/2013",
        image: "https://d87n9o45kphpy.cloudfront.net/Custom/Content/Products/27/34/2734027_chinelo-havaianas-glitter-flourish-lilas-5187045_l2_638097480803091734.jpg"
    },
    {
        id: "06",
        titulo: "Chinelo Kenner",
        preco: 529.99,
        categoria: "Tênis de moda",
        data: "10/12/2021",
        image: "https://imgcentauro-a.akamaihd.net/1366x1366/M0X66R02.jpg"
    },
    {
        id: "07",
        titulo: "Chuteiro Umbro",
        preco: 219.99,
        categoria: "Tênis para ciclismo",
        data: "31/07/2016",
        image: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/mgsports/media/uploads/produtos/foto/miyjaxoa/chuteira-futsal-az-frame-1.jpg"
    },
    {
        id: "08",
        titulo: "Chuteira Penalty",
        preco: 349.99,
        categoria: "Tênis de trilha",
        data: "02/11/2011",
        image: "https://cambuci.vtexassets.com/arquivos/ids/1033666/chuteira_society_penalty_matis_kids_xxi_246241_2200_1.jpg?v=638379105314670000",
    }
]

    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Text style={{ flex: 1 }}>{item.nome}</Text>
        <TouchableOpacity style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
            <Text style={{ color: 'white' }}>Botão</Text>
        </TouchableOpacity>
        </View>
    );

export default function Itens( { navigation } )


{
    return(
        <View>
            <FlatList
                data={dados}
                renderItem={ ({item}) => 
                <Produto titulo={item.titulo} 
                preco={item.preco} 
                categoria={item.categoria} 
                data={item.data} 
                img={item.img}/>}
                keyExtractor={ item => item.id}   
                contentContainerStyle={styles.container}   
                horizontal={false}  
                numColumns={2}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    }
})