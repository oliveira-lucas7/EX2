import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Modal } from "react-native";
import { Image } from "react-native";

export default function TelaCamera()
{

    const[ permission, setPermission ] = useState( false );
    // const [type, setType] = useState(CameraType.back);
    // const [permission, requestPermission] = Camera.useCameraPermissions();

    const[ tipo, setTipo ] = useState( CameraType.back );
    const cameraRef = useRef();
    const [foto, setFoto] = useState("");
    const [ qrcode, setQrcode ] = useState("")

    async function PermissionCamera()
    {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if( status == "granted")
        {
            setPermission( true );
        }
    }


    function TrocaTipoCamera()
    {
        setTipo(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    async function TirarFoto()
    {
        const foto = await cameraRef.current.takePictureAsync();
        setFoto( foto.uri );
    }

    useEffect( () => {
        PermissionCamera();
    }, [])
    return(
        <View style={styles.container}>
            { permission ? 
            <Camera 
                ref={cameraRef}
                ratio="16:9"
                type={tipo}
                style={styles.camera}
                onBarCodeScanned={ scaned => {
                    if( scaned.data )
                    {
                        setQrcode( scaned.data );
                    }
                }
            }
            >
                <View style={styles.alternar}>
                    <TouchableOpacity onPress={TrocaTipoCamera}>
                        <MaterialCommunityIcons name="camera-flip-outline" style={styles.changeIconReverter} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={TirarFoto}>
                        <MaterialCommunityIcons name="checkbox-blank-circle" style={styles.changeIcon} />
                    </TouchableOpacity>
                </View>
            </Camera>          
            : <Text>Deu errado</Text>}
            {(foto && permission ) && 
                <Modal
                    animationType="slide"
                    transparent={true}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Image
                            style={styles.image}
                            source={{ uri: foto}}
                            // width={300}
                            // height={300}
                        />

                        <TouchableOpacity onPress={ () => setFoto( "" )}>
                            <MaterialCommunityIcons name="cancel" style={styles.changeIconCancel} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>}
            { qrcode &&
                <Modal
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>{qrcode}</Text>
                        <TouchableOpacity onPress={ () => setQrcode( "" )}>
                            <MaterialCommunityIcons name="cancel" style={styles.changeIconCancel} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            }
        </View>


    )
}


const styles = StyleSheet.create({
    camera: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
        // resizeMode: "center"
    },
    changeIcon: {
        fontSize: 40,
        color: "white",
    },
    changeIconReverter: {
        fontSize: 40,
        color: "white",
    },
    alternar: {
        marginTop: "138%",
        marginLeft: 10,
        width: "51%",
        height: "60%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 200, // Ajuste conforme necessário
        height: 300, // Ajuste conforme necessário
        borderRadius: 10,
        resizeMode: "contain"
      },
      changeIconCancel: {
        color: "black",
        fontSize: 40,
        marginTop: "5%"
      },
      modalContentLink: {

      }
})