import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {StyleSheet ,View, Text, Button} from 'react-native'


const Home = () => {

    const navigation = useNavigation()
    return(
        <View>
            <Text>
                Sou home
            </Text>
            <Button
            style={styles.button}
            title="click me"
            onPress={() => navigation.navigate('Car')}
            ></Button>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    button: {
        backgroundColor:'#504DB6',
        color: '#FFFFFF',
        width: '317px',
        height: '50px',
        textAlign: 'center',

    },
})