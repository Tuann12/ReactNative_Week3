import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Lock from '../assets/lock.png'
import Email from '../assets/email.png'
function Ui1b() {
    return (
        <View style={styles.container}>
        <LinearGradient colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]} style={styles.container}>
          <View style={styles.ui}>
        <View>
            <Image style={styles.imgLock} source={Lock}/>
        </View>
        <View>
          <Text style={styles.title}>FORGET <br/> PASSWORD</Text>
        </View>
        <View>
          <Text style={styles.content}>Provide your account’s email for which you <br/> want to reset your password</Text>
        </View>
        <View style={styles.boxEmail}>
            <Pressable style={styles.emailWrap}>
            <Image style={styles.iconEmail} source={Email}/>
            <Text style={styles.textEmail}>Email</Text>
          </Pressable>
        </View>
        <View style={styles.btnWrap}>
          <Pressable style={styles.btnNext}>
            <Text style={styles.btnTitle}>NEXT</Text>
          </Pressable>
        </View>
        </View>
         </LinearGradient>
      </View>
    )
}

export default Ui1b

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
    boxEmail: {
        paddingTop: '30px',
        width: '305px',
        height: '45px',
    },
    emailWrap: {
        backgroundColor: '#C4C4C4',
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center"

    },
    iconEmail: {
        width: '48px',
        height: '45px',
    },
    textEmail: {

    },
    imgLock: {
      marginTop: '130px',
      width: '105px',
      height: '117px'
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
      marginTop: '70px',
      width: '119px',
      height: '48px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnNext: {
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