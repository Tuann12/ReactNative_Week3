import { StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native';
import Eye from '../assets/eye.png';
import Facebook from '../assets/fb.png';
import Google from '../assets/gg.png';
import Zalo from '../assets/zalo.png';
function Ui1d() {
    return (
        <View style={styles.container}>
            <View style={styles.ui}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>LOGIN</Text>
                </View>

                <View style={styles.wrapInp}>
                    <TextInput placeholder="Email" style={styles.inp} />
                    <TextInput placeholder="Password" style={styles.inp} />
                    <Image style={styles.iconEye} source={Eye} />
                </View>

                <View style={styles.btnWrap}>
                    <Pressable style={styles.btnVerifyCode}>
                        <Text style={styles.btnTitle}>LOGIN</Text>
                    </Pressable>
                </View>

                <View>
                    <Text style={styles.txt}>When you agree to terms and conditions</Text>
                    <Text style={[styles.txt, { color: 'rgba(93, 37, 250, 1)' }]}>For got your password?</Text>
                    <Text style={styles.txt}>Or login with</Text>
                </View>

                <View style={styles.btnWrapper2}>
                    <Pressable style={[styles.btnSocial, { backgroundColor: '#4267B2' }]}>
                        <Image style={styles.btnImage1} source={Facebook} />
                    </Pressable>

                    <Pressable style={[styles.btnSocial, { backgroundColor: '#0058d9' }]}>
                        <Image style={styles.btnImage2} source={Zalo} />
                    </Pressable>

                    <Pressable style={[styles.btnSocial, styles.btnBorder]}>
                        <Image style={styles.btnImage2} source={Google} />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default Ui1d;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(49, 170, 82, 0.19)',
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
    header: {
        marginTop: '150px',
        width: '65px',
        height: '23px',
    },
    headerTitle: {
        fontSize: '20px',
        fontWeight: '700',
        textAlign: 'center',
    },
    txt: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20,
    },

    wrapInp: {
        marginTop: 60,
    },

    inp: {
        width: '330px',
        height: '54px',
        backgroundColor: 'rgba(196, 196, 196, 0.3)',
        paddingLeft: '20px',
        marginBottom: '30px',
    },
    iconEye: {
        width: '38px',
        height: '36px',
        position: 'absolute',
        right: 20,
        top: 95,
    },

    btnWrap: {
        marginTop: '50px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnVerifyCode: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '330px',
        height: '54px',
        backgroundColor: 'rgba(229, 57, 53, 1)',
    },
    btnTitle: {
        color: 'rgba(255, 255, 255, 1)',
        fontWeight: '700',
        fontSize: '15px',
    },
    btnWrapper2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 60,
    },
    btnSocial: {
        width: '127%',
        height: '130%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnImage1: {
        width: 35,
        height: 35,
    },
    btnImage2: {
        width: 25,
        height: 25,
    },
    btnBorder: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#0058d9',
    },
});
