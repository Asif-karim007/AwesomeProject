import React from 'react';
import {Text, View, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import {Card,ProgressBar} from "react-native-paper";
import newAddress from "../Screens/newAddress";


const Plan = ({navigation}) => {
    return(
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.redBox}>
                        <Text style={{fontWeight:"bold",fontSize:20,marginBottom:8}}>We need your attention</Text>
                        <Text>
                            Your payment was declined. To start using tools,please <Text style={{fontWeight:"bold",color:"#4287f5"}} onPress={()=> navigation.navigate('Plan')}>Add Payment Method.</Text>
                        </Text>
                    </View>
                    <Text style={{fontWeight:"bold",fontSize:17,marginBottom:10}}>Active until Dec 09,2021</Text>
                    <Text style={{marginBottom:12}}>We will send you a notification upon{"\n"}Subscription Expiration</Text>
                    <Text style={{marginBottom:10}}><Text style={{fontWeight:"bold"}}>$29.94 </Text> Per Month</Text>
                    <Text style={{marginBottom:5}}>Extended Pro Package. Up to 100 Agents & 25 Projects</Text>
                    <View style={{flexDirection:"row",justifyContent:"space-between",}}>
                        <Text style={{fontWeight:"bold",}}>Users</Text>
                        <Text style={{fontWeight:"bold",}}>86 of 100 used</Text>
                    </View>
                    <ProgressBar progress={0.7} color={'#4287f5'}/>
                    <Text style={{marginBottom:20}}>14 Users remaining until your plan requires update</Text>
                    <View style={{flexDirection:"row",justifyContent:"space-between",}}>
                        <TouchableOpacity ><Text style={styles.btn}>Cancel Subscription</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Plan')}><Text style={styles.btn}>Upgrade Plan</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
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

});

export default Plan;