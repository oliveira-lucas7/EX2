import { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import * as Contacts from 'expo-contacts'

export default function Contatos()
{

    const [ contatos, setContatos ] = useState();

    async function getContatos()
    {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails],
          });
          setContatos( data )
        }
    }

    useEffect( () => {
        getContatos();
    }, [])

    return(
        <View>
            <Text>Contatos</Text>
            <FlatList
                data={contatos}
                renderItem={ ({item}) => <Text>{item.firstName}</Text>}
                keyExtractor={ (item) => item.FirstName}
            />
        </View>
    )
}