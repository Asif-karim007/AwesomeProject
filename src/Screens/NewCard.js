import React,{useState,useCallback} from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, Switch} from 'react-native';
import {Card, IconButton, ProgressBar, Colors, } from "react-native-paper";
import MonthPicker from 'react-native-month-year-picker';

const NewCard = ({navigation}) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const showPicker = useCallback((value) => setShow(value), []);

    const onValueChange = useCallback(
        (event, newDate) => {
            const selectedDate = newDate || date;

            showPicker(false);
            setDate(selectedDate);
        },
        [date, showPicker],
    );
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View>
            <ScrollView>
                <Card style={styles.card}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:20}}>
                        <Text style={{fontWeight:"bold",fontSize:20,}}>Add New Card</Text>
                        <IconButton icon="cancel" size={10} color={"grey"}/>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 1,
                            marginBottom:20,

                        }}
                    />

                    <View>
                        <Text style={{fontWeight:"bold",marginBottom:10}}>Name on Card *</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View>
                        <Text style={{fontWeight:"bold",marginBottom:10}}>Card Number *</Text>
                        <TextInput style={styles.input}/>
                    </View>

                    <View>
                        <Text style={{fontWeight:"bold",marginBottom:10}}>Expiration Date *</Text>
                            <View style={styles.searchSection}>
                                <IconButton  onPress={() => showPicker(true)} icon="cancel" size={20} color={"red"}
                                />{show && (
                                <MonthPicker
                                    onChange={onValueChange}
                                    value={date}
                                    minimumDate={new Date()}
                                    maximumDate={new Date(2025, 5)}
                                    locale="ko"
                                />
                                )}
                                <TextInput style={styles.input1}  />
                            </View>
                    </View>

                    <View>
                        <Text style={{fontWeight:"bold",marginBottom:10}}>CCV *</Text>
                        <TextInput placeholder={"CCV"} style={styles.input}/>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:"space-between",marginBottom:30}}>
                        <View>
                            <Text style={{fontWeight:"bold"}}>Save card for further billing?</Text>
                            <Text>If you need more info,{"\n"} please check budget planning</Text>
                        </View>
                        <View>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <Text>Save Card</Text>
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

    btn: {
        padding:15,
        borderRadius: 30,
        backgroundColor:"#4287f5"
    },
    input: {
        marginBottom:20,
        backgroundColor: '#d0caca',
        padding: 8,
        color:"grey",
        borderRadius: 12,
        fontSize: 18,

    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d0caca',
        borderRadius: 12,
        marginBottom:20,
        color:"blue",

        fontSize: 18,
    },
    searchIcon: {
        padding: 10,
        justifyContent: "flex-end"
    },
    input1: {
        flex: 1,
        padding: 8,
        color:"grey",
        fontSize: 18,
    },
});

export default NewCard;
