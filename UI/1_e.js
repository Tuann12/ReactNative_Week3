import { StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native';
import Eye from '../assets/eye.png';
function Ui1e() {
    return (
        <View style={styles.container}>
            <View style={styles.ui}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>REGISTER</Text>
                </View>

                <View style={styles.wrapInp}>
                    <TextInput placeholder="Name" style={styles.inp} />
                    <TextInput placeholder="Phone" style={styles.inp} />
                    <TextInput placeholder="Email" style={styles.inp} />
                    <TextInput placeholder="Password" style={styles.inp} />
                    <TextInput placeholder="Birthday" style={styles.inp} />
                    <Image style={styles.iconEye} source={Eye} />
                </View>
                <View style={styles.radioWrapper}>
                    <View style={styles.circle}></View>
                    <Text style={styles.sex}>Male</Text>
                    <View style={styles.circle}></View>
                    <Text style={styles.sex}>Female</Text>`
                </View>

                <View style={styles.btnWrap}>
                    <Pressable style={styles.btnVerifyCode}>
                        <Text style={styles.btnTitle}>LOGIN</Text>
                    </Pressable>
                </View>

                <Text style={styles.textToggle}>When you agree to terms and conditions</Text>
            </View>
        </View>
    );
}

export default Ui1e;

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
        width: '100%',
        height: '23px',
    },
    headerTitle: {
        fontSize: '20px',
        fontWeight: '700',
        textAlign: 'center',
    },
    wrapInp: {
        marginTop: 40,
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
        top: 260,
        top: 260,
    },

    btnWrap: {
        marginTop: '15px',
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
    radioWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: -150,
        marginTop: -30,
    },
    circle: {
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        width: 20,
        height: 20,
        marginTop: 20,
        marginLeft: 20,
    },
    sex: {
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        marginTop: 20,
        marginLeft: 10,
    },
    textToggle: {
        marginTop: 10,
        textAlign: 'center',
    },
});
