import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Card,Colors, IconButton} from "react-native-paper";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';import 'react-native-vector-icons/MaterialCommunityIcons';
import 'react-native-vector-icons/FontAwesome5';
import 'react-native-vector-icons/FontAwesome';

const Cards = ({navigation}) => {
    return(
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{fontWeight:"bold",paddingBottom:10}}>My Cards</Text>
                    <View style={styles.secondBox}>
                        <Text style={{marginBottom:10,fontWeight:"bold"}}>Asif Karim</Text>
                        <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:10}}>
                            <IconButton
                                icon="close"
                                        size={40} />
                            <View style={{flexDirection:"column"}}>
                                <Text style={{fontWeight:"bold"}}>Visa****1679</Text>
                                <Text>Card expires at 09/24</Text>
                            </View></View>
                        <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
                            <TouchableOpacity><Text style={{padding:10,backgroundColor:"#f4f0fa",borderRadius:10,marginRight:10}}>Delete</Text></TouchableOpacity>
                            <TouchableOpacity onPress={()=> navigation.navigate("AddCard")}><Text style={{padding:10,backgroundColor:"#f4f0fa",borderRadius:10}}>Edit</Text></TouchableOpacity>
                        </View>
                    </View>

                    {/*<View style={styles.secondBox}>*/}
                    {/*    <Text style={{marginBottom:10,fontWeight:"bold"}}>Asif Karim</Text>*/}
                    {/*    <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:10}}>*/}
                    {/*        <IconButton icon="credit-card-marker"*/}
                    {/*                    color={Colors.red500}*/}
                    {/*                    size={25} />*/}
                    {/*        <View style={{flexDirection:"column"}}>*/}
                    {/*            <Text style={{fontWeight:"bold"}}>Mastercard****1679</Text>*/}
                    {/*            <Text>Card expires at 09/24</Text>*/}
                    {/*        </View></View>*/}
                    {/*    <View style={{flexDirection:"row",justifyContent:"flex-end"}}>*/}
                    {/*        <TouchableOpacity><Text style={{padding:10,backgroundColor:"#f3f1f8",borderRadius:10,marginRight:10}}>Delete</Text></TouchableOpacity>*/}
                    {/*        <TouchableOpacity onPress={()=> navigation.navigate("AddCard")}><Text style={{padding:10,backgroundColor:"#f4f0fa",borderRadius:10}}>Edit</Text></TouchableOpacity>*/}
                    {/*    </View>*/}
                    {/*</View>*/}

                    {/*<View style={styles.secondBox}>*/}
                    {/*    <Text style={{marginBottom:10,fontWeight:"bold"}}>Asif Karim</Text>*/}
                    {/*    <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:10}}>*/}
                    {/*        <IconButton icon="credit-card-marker"*/}
                    {/*                    color={Colors.red500}*/}
                    {/*                    size={25} />*/}
                    {/*        <View style={{flexDirection:"column"}}>*/}
                    {/*            <Text style={{fontWeight:"bold"}}>Mastercard****1679</Text>*/}
                    {/*            <Text>Card expires at 09/24</Text>*/}
                    {/*        </View></View>*/}
                    {/*    <View style={{flexDirection:"row",justifyContent:"flex-end"}}>*/}
                    {/*        <TouchableOpacity><Text style={{padding:10,backgroundColor:"#f4f0fa",borderRadius:10,marginRight:10}}>Delete</Text></TouchableOpacity>*/}
                    {/*        <TouchableOpacity onPress={()=> navigation.navigate("AddCard")}><Text style={{padding:10,backgroundColor:"#f4f0fa",borderRadius:10}}>Edit</Text></TouchableOpacity>*/}
                    {/*    </View>*/}
                    {/*</View>*/}

                    <View style={styles.noteBox}>
                        <Text style={{fontWeight:"bold",marginBottom:10}}>Important Note!</Text>
                        <Text style={{marginBottom:10}}>Please carefully read <Text style={{fontWeight:"bold",color:"#4287f5"}} onPress={()=> {alert("you pressed")}}>Metronic Terms</Text> adding your new payment card</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate("AddCard")}><Text style={styles.btn}>Add Card</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
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
    },
    btn: {
        padding:15,
        borderRadius: 30,
        backgroundColor:"#4287f5",
        alignSelf: "flex-start",
        color:"white"
    },

});

export default Cards;
