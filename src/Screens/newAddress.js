import React,{useState} from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, Switch} from 'react-native';
import {Card, IconButton, ProgressBar, Colors, } from "react-native-paper";
import CountrySelectDropdown from "react-native-searchable-country-dropdown"

const newAddress = ({navigation}) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View>
            <ScrollView>
                <Card style={styles.card}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:20}}>
                        <Text style={{fontWeight:"bold",fontSize:20,}}>Add New Address</Text>
                        <IconButton icon="cancel" size={10} color={"grey"}/>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 1,
                            marginBottom:20,

                        }}
                    />
                    <View style={styles.redBox}>
                        <Text style={{fontWeight:"bold",marginBottom:10}}>Warning</Text>
                        <Text>
                            Updating address may affter to your <Text style={{fontWeight:"bold",color:"#4287f5"}}>Tax Location</Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={{fontWeight:"bold",marginBottom:10}}>First name *</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:"bold",marginBottom:10}}>Last name *</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:"bold"}}>Country *</Text>
                        {/*npm install react-native-searchable-country-dropdown*/}
                        <CountrySelectDropdown  textColor={"grey"}/>
                        <View style={{marginBottom:10}}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:"bold",marginBottom:10}}>Address Line 1 *</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:"bold",marginBottom:10}}>Address Line 2 *</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:"bold",marginBottom:10}}>Town</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:"bold",marginBottom:10}}>State/Province</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:"bold",marginBottom:10}}>Post Code</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:"space-between",marginBottom:30}}>
                        <View>
                            <Text style={{fontWeight:"bold"}}>Use as a billing addresses?</Text>
                            <Text>If you need more info, please check budget{"\n"}palining</Text>
                        </View>
                        <View>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <Text>Yes</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 1,
                            marginBottom:20,

                        }}
                    />
                    <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                        <TouchableOpacity><Text style={{padding:15,backgroundColor:'#d0caca',borderRadius:15}}>Discard</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={{padding:15,backgroundColor:"#4287f5",borderRadius:15}}>Submit</Text></TouchableOpacity>
                    </View>

                </Card>
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
        borderRadius:3,
        marginBottom:20,
    },
    btn: {
        padding:15,
        borderRadius: 30,
        backgroundColor:"#4287f5"
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
        borderRadius:3,
        padding:20,
        marginBottom:10,
        backgroundColor:"#c1f5f3"
    },
    input: {
        marginBottom:20,
        backgroundColor: '#d0caca',
        padding: 8,
        color:"grey",
        borderRadius: 12,
        fontSize: 18,

    },
});

export default newAddress;

//
//
//     <CountrySelectDropdown
//         countrySelect={setCountryCode}
//         error={errorMsg}
//         fontFamily={"Nunito-Regular"}
//         textColor={"#f3f3f3"}
//     />