import { useState, useEffect } from "react"
import { Button, Text, View, TextInput, TouchableOpacity, StyleSheet, FlatList, Keyboard, Alert, Platform  } from "react-native"
import uuid from "react-native-uuid";
import Agendados from "./Agendados"

import * as Calendar from 'expo-calendar';

export default function Agenda( { navigation } ) {

    const [ agenda, setAgenda ] = useState();
    const [ inicio, setInicio ] = useState();
    const [ final, setFinal ] = useState();
    const [ dados, setDados ] = useState([]);


    async function getPermissions() {
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status === 'granted') 
        {
            const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        }
    }

    useEffect(() => {
        getPermissions();
    }, [])


    async function Salvar()
    {
        
        if(agenda != undefined && inicio != undefined && final != undefined)
        {
            Keyboard.dismiss()
            const evento = {
                id: uuid.v4(),
                nome: agenda,
                inicio: inicio,
                final: final
            };
            const novoEvento = [...dados , evento]
            setDados( novoEvento );
            setAgenda("");
            setInicio("");
            setFinal("");

            const defaultCalendarSource =
            Platform.OS === 'ios'
              ? await Calendar.getDefaultCalendarAsync()
              : { isLocalAccount: true, name: 'Expo Calendar' };

              const newCalendarID = await Calendar.createCalendarAsync({
                title: 'Expo Calendar',
                color: 'blue',
                entityType: Calendar.EntityTypes.EVENT,
                sourceId: defaultCalendarSource.id,
                source: defaultCalendarSource,
                name: 'internalCalendarName',
                ownerAccount: 'personal',
                accessLevel: Calendar.CalendarAccessLevel.OWNER,
              });


              let inicioDataHora = inicio.split(" ");
              let inicioData = inicioDataHora[0].split("-");
              let inicioHora = inicioDataHora[1].split(".");

              let finalDataHora = final.split(" ");
              let finalData = finalDataHora[0].split("-");
              let finalHora = finalDataHora[1].split(".");



              const newEvent = {
                title: agenda,
                startDate: new Date(inicioData[2], inicioData[1] -1 , inicioData[0], inicioHora[0], inicioHora[1]),
                endDate: new Date(finalData[2], finalData[1] -1 , finalData[0], finalHora[0], finalHora[1]),
                localtion: 'Sesi',
                notes: 'Meteoro da Paixão',
              };

              try {
                await Calendar.createEventAsync(newCalendarID, newEvent);
                alert('Evento criado com sucesso!')
              } catch(error) {
                alert(`Erro ao criar evento! ${error}`);
              }

        }       
        else
        {
            Alert.alert('Campos Incompletos', 'Por favor, preencha todos os campos.');
        }
    }

    function Limpar(){
        setDados("")
    }


    return(
        <View>
            <View style={styles.container}>
                <TextInput 
                placeholder="Nome Evento" 
                style={styles.input}
                textInput={agenda}    
                onChangeText={ (digitado) => setAgenda(digitado)}
                value={agenda}
                > 
                </TextInput>

                <TextInput 
                placeholder="Data de Início" 
                style={styles.input}
                textInput={inicio}  
                onChangeText={ (digitado) => setInicio(digitado)}
                value={inicio}
                >                   
                </TextInput>

                <TextInput 
                placeholder="Data de Término"  
                style={styles.input}
                textInput={final} 
                onChangeText={ (digitado) => setFinal(digitado)}
                value={final}
                >                   
                </TextInput>

                <TouchableOpacity 
                style={styles.btn} 
                onPress={Salvar}
                disabled={!agenda || !inicio || !final}
                >
                    <Text style={styles.btnText}>Salvar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.cls} 
                onPress={Limpar}
                >
                    <Text style={styles.btnText}>Limpar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
            style={styles.eventos}
            data={dados}
            renderItem={ ({item}) =>
                <Agendados
                nome={item.nome} 
                inicio={item.inicio} 
                final={item.final} />}
                contentContainerStyle={styles.container}   
                keyExtractor={ item => item.id}  
                />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 10,
    },
    input: {
        width: "100%",
        height: 60,
        borderWidth: 1,
        borderRadius: 8,
        padding: 15,
        marginVertical: 15,
    },
    btn: {
        backgroundColor: "gray",
        color: "white",
        width: "100%",
        padding: 15,
        borderRadius: 10,
    },
    btnText: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
    },
    lista: {
        fontSize: 20,
        marginTop: 15,
        textAlign: "center",
        display: "flex",
        margin: "auto",
    },
    cls: {
        backgroundColor: "gray",
        color: "white",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
    },

})