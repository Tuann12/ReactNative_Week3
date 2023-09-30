import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Lock from '../assets/lock.png'
import Email from '../assets/email.png'
function Ui1c() {
    return (
        <View style={styles.container}>
        <LinearGradient colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]} style={styles.container}>
          <View style={styles.ui}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>CODE</Text>
        </View>
        <View>
          <Text style={styles.title}>VERIFICATION</Text>
        </View>
        <View>
          <Text style={styles.content}>Enter ontime password sent on <br/> ++849092605798</Text>
        </View>
        <View style={styles.wrapBox}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        </View>
        <View style={styles.btnWrap}>
          <Pressable style={styles.btnVerifyCode}>
            <Text style={styles.btnTitle}>VERIFY CODE</Text>
          </Pressable>
        </View>
        </View>
         </LinearGradient>
      </View>
    )
}

export default Ui1c

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center'
    },
    ui: {
      width: "360px",
      height: "480px",
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapBox: {
      display: 'flex',
      flexDirection: 'row'
    },
    box:{ 
      marginTop: '50px',
      width: '50px',
      height: '50px',
      borderColor: '#000',
      borderStyle: 'solid',
      borderWidth: 1,
    },
    header: {
      marginTop: '130px',
      width: '154px',
      height: '70px',
    },
    headerTitle: {
      fontSize: '50px',
      fontWeight: '700',
      textAlign: 'center',
      lineHeight: '70.31px',
    },
    
    title: {
      marginTop: '50px',
      fontWeight: '700',
      fontSize: '25px',
      lineHeight: '29.3px',
      textAlign: 'center',
    },
    content: {
      fontWeight: '700',
      fontSize: '15px',
      lineHeight: '17.58px',
      textAlign: 'center',
      marginTop: '70px',
    },
    btnWrap: {
      marginTop: '50px',
      width: '119px',
      height: '48px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnVerifyCode: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '305px',
      height: '45px',
      backgroundColor: '#E3C000',
    },
    btnTitle: {
      fontWeight: '700',
      fontSize: '15px',
    },
    toggle: {
        marginTop: '50px',
      fontWeight: '700',
      fontSize: '15px',
    }
  });