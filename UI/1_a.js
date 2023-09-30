import { StyleSheet, Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
function Ui1a() {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']} style={styles.container}>
                <View style={styles.ui}>
                    <View>
                        <svg
                            style={styles.circle}
                            width="142"
                            height="142"
                            viewBox="0 0 142 142"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="71" cy="71" r="63.5" stroke="black" stroke-width="15" />
                        </svg>
                    </View>
                    <View>
                        <Text style={styles.title}>
                            GROW <br /> YOUR BUSINESS
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.content}>We will help you to grow you business using online server</Text>
                    </View>
                    <View style={styles.btnWrap}>
                        <Pressable style={styles.btnLogin}>
                            <Text style={styles.btnTitle}>LOGIN</Text>
                        </Pressable>
                        <Pressable style={styles.btnSignUp}>
                            <Text style={styles.btnTitle}>SIGN UP</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Text style={styles.toggle}>HOW WE WORK?</Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}

export default Ui1a;

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
    circle: {
        marginTop: '130px',
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
        marginTop: '60px',
        width: '119px',
        height: '48px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnLogin: {
        width: '119px',
        height: '48px',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnSignUp: {
        marginLeft: '80px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '119px',
        height: '48px',
        backgroundColor: 'yellow',
    },
    btnTitle: {
        fontWeight: '700',
        fontSize: '15px',
    },
    toggle: {
        marginTop: '50px',
        fontWeight: '700',
        fontSize: '15px',
    },
});
