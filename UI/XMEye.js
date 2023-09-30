import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import EyeImg from '../assets/EyeImg.png';
import UserIcon from '../assets/UserIcon.png';
import LockIcon from '../assets/LockIcon.png';
import UserPlus from '../assets/userPlus.png';
import WifiIcon from '../assets/wifiIcon.png';
import Facebook from '../assets/facebook.png';
function XMEye() {
    return (
        <View style={styles.container}>
            <View style={styles.ui}>
                <View>
                    <Image style={styles.imgEye} source={EyeImg} />
                </View>

                <View style={styles.inpName}>
                    <Image style={styles.userIcon} source={UserIcon} />
                    <View style={styles.txtUser}>Please input your name</View>
                </View>

                <View style={styles.inpPassword}>
                    <Image style={styles.lockIcon} source={LockIcon} />
                    <View style={styles.txtPassword}>Please input password</View>
                </View>

                <View style={styles.btnWrap}>
                    <Pressable style={styles.btnLogin}>
                        <Text style={styles.btnTitleLogin}>LOGIN</Text>
                    </Pressable>
                </View>

                <View style={styles.option}>
                    <Text style={styles.optionRes}> Register</Text>
                    <Text style={styles.optionForgot}> Forgot Password</Text>
                </View>

                <View style={styles.wrapLine}>
                    <hr style={styles.line}></hr>
                    <Text style={styles.titleLine}>Other Login Methods</Text>
                </View>

                <View style={styles.wrapToggle}>
                    <Image style={styles.Toggle} source={UserPlus} />
                    <Image style={styles.Toggle} source={WifiIcon} />
                    <Image style={styles.Toggle} source={Facebook} />
                </View>
            </View>
        </View>
    );
}

export default XMEye;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    ui: {
        width: '360px',
        height: '480px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgEye: {
        marginTop: '150px',
        width: '150px',
        height: '150px',
    },

    inpName: {
        width: '330px',
        height: '34px',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingBottom: 20,
        borderBottomColor: 'black',
    },
    userIcon: {
        width: '32px',
        height: '32px',
    },
    txtUser: {
        fontSize: '22px',
        opacity: 0.3,
        paddingLeft: '20px',
    },
    inpPassword: {
        width: '330px',
        height: '34px',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingBottom: 20,
        borderBottomColor: 'black',
    },
    lockIcon: {
        width: '32px',
        height: '32px',
    },
    txtPassword: {
        fontSize: '22px',
        opacity: 0.3,
        paddingLeft: '20px',
    },
    btnWrap: {
        marginTop: '50px',
    },
    btnLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '330px',
        height: '55px',
        backgroundColor: 'rgb(16 131 198)',
        borderRadius: '10px',
    },
    btnTitleLogin: {
        fontWeight: '300',
        fontSize: '20px',
        color: 'white',
    },

    option: {
        width: '330px',
        height: '54px',
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    optionRes: {
        fontSize: 20,
    },
    optionForgot: {
        fontSize: 20,
    },

    wrapLine: {
        position: 'relative',
        marginTop: 60,
    },
    line: {
        width: '330px',
        height: '1px',
        backgroundColor: 'blue',
    },
    titleLine: {
        width: '200px',
        height: '45px',
        position: 'absolute',
        top: -6,
        left: 67,
        backgroundColor: 'white',
        fontWeight: 500,
        fontSize: 20,
    },
    wrapToggle: {
        width: 330,
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Toggle: {
        width: 80,
        height: 80,
        marginRight: 50,
    },
});
