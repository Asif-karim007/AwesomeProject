import React from 'react';
import {Text, View, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';


const Billing = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{fontWeight:"bold",fontSize:18,marginBottom:10}}>Billing Address</Text>
                <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1,
                        marginBottom:20
                    }}
                />
                <View style={styles.secondBox}>
                    <Text style={{fontWeight:"bold",marginBottom:10}}>Address 1</Text>
                    <Text style={{marginBottom:10}}>House#46,Shah Makhdum Avenue{"\n"}
                        Uttara,Dhaka{"\n"}
                        Bangladesh</Text>
                    <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
                        <TouchableOpacity><Text style={{padding:10,backgroundColor:"#f4f0fa",borderRadius:10,marginRight:10}}>Delete</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate('Address')}><Text style={{padding:10,backgroundColor:"#f4f0fa",borderRadius:10}}>Edit</Text></TouchableOpacity>
                    </View>
                </View>

                {/*<View style={styles.secondBox}>*/}
                {/*    <Text style={{fontWeight:"bold",marginBottom:10}}>Address 2</Text>*/}
                {/*    <Text style={{marginBottom:10}}>House#46,Shah Makhdum Avenue{"\n"}*/}
                {/*        Uttara,Dhaka{"\n"}*/}
                {/*        Bangladesh</Text>*/}
                {/*    <View style={{flexDirection:"row",justifyContent:"flex-end"}}>*/}
                {/*        <TouchableOpacity><Text style={{padding:10,backgroundColor:"#f4f0fa",borderRadius:10,marginRight:10}}>Delete</Text></TouchableOpacity>*/}
                {/*        <TouchableOpacity onPress={()=> navigation.navigate('Address')}><Text style={{padding:10,backgroundColor:"#f4f0fa",borderRadius:10}}>Edit</Text></TouchableOpacity>*/}
                {/*    </View>*/}
                {/*</View>*/}

                {/*<View style={styles.secondBox}>*/}
                {/*    <Text style={{fontWeight:"bold",marginBottom:10}}>Address 3</Text>*/}
                {/*    <Text style={{marginBottom:10}}>House#46,Shah Makhdum Avenue{"\n"}*/}
                {/*        Uttara,Dhaka{"\n"}*/}
                {/*        Bangladesh</Text>*/}
                {/*    <View style={{flexDirection:"row",justifyContent:"flex-end"}}>*/}
                {/*        <TouchableOpacity><Text style={{padding:10,backgroundColor:"#f4f0fa",borderRadius:10,marginRight:10}}>Delete</Text></TouchableOpacity>*/}
                {/*        <TouchableOpacity onPress={()=> navigation.navigate('Address')}><Text style={{padding:10,backgroundColor:"#f4f0fa",borderRadius:10}}>Edit</Text></TouchableOpacity>*/}
                {/*    </View>*/}
                {/*</View>*/}

                <View style={styles.noteBox}>
                    <Text style={{fontWeight:"bold",marginBottom:10}}>This is a very important note!</Text>
                    <Text style={{marginBottom:10}}>Writing headlines for blog post is mush science and probably cool audience</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Address')}><Text style={styles.btn}>New Address</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f4f0fa",
        flexDirection: "column"

    },
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection:"column",
        padding: 20,
        marginBottom: 10
    },
    redBox: {
        padding:20,
        backgroundColor:"#ffc370",
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor:"red",
        borderRadius:5,
        marginBottom:20,
    },
    btn: {
        padding:15,
        borderRadius: 30,
        backgroundColor:"#4287f5",
        alignSelf: "flex-start",
        color:"white"
    },
    secondBox:{
        borderWidth:1,
        borderColor: "grey",
        borderStyle: "dashed",
        borderRadius:3,
        padding:20,
        marginBottom:20
    },
    noteBox:{
        borderWidth:1,
        borderColor: "grey",
        borderStyle: "dashed",
        borderRadius:5,
        padding:20,
        marginBottom:10,
        backgroundColor:"#c1f5f3"
    }
});

export default Billing;

