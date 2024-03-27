import { useEffect, useState } from "react"
import { Button, Text, StyleSheet, Switch, View } from "react-native"
import { useBatteryLevel } from 'expo-battery';
import * as Network from 'expo-network';

export default function Home( { navigation } )
{

    const [ativado, setAtivado] = useState(false);
    const [ cor, setCor ] = useState("white")
    const [ bateria, setBateria ] = useState();
    const [ rede, setRede ] = useState( false );

    const batteryLevel = useBatteryLevel();

    async function getStatus()
    {
        const status = await Network.getNetworkStateAsync();
        if( status.type =="Wifi" )
        {
            setRede( true )
        }
    }

    useEffect( () => {
        getStatus();
    } , []);

    useEffect( () => {
        getStatus();
    } , [rede]);


    useEffect( () => {
        Network.getNetworkStateAsync
        setBateria( (batteryLevel * 100).toFixed(0));
    }, [batteryLevel])


    function CliqueSwitch()
    {
        setAtivado( !ativado );
        if( !ativado )
        {
            setCor('black');
        }
        else(
            setCor('white')
        )

    }


    return(
        <>
            <View style={[css.container, {backgroundColor: cor}]}>
                { bateria > 20 ? 
                <Switch
                    trackColor={{false: 'gray', true: 'blue'}}
                    thumbColor={ativado ? 'green' : 'red'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={CliqueSwitch}
                    value={ativado}
                />
                : <Text>Bateria menor que 20%, recarregue!</Text>
                }
                { rede ?  <Text>Recursos premium</Text> : <Text>Conecte na WIFI</Text>}
                <Text>{bateria}</Text>
            </View>
        </>
    )
}


const css = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})