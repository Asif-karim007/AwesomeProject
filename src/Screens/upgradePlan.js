import React,{useState} from 'react';
import {Text, View, StyleSheet, ScrollView, Button, TouchableOpacity} from 'react-native';
import {Card, IconButton, ProgressBar, Colors, RadioButton,} from "react-native-paper";
import homeButton from "../homeButton";

const upgradePlan = ({navigation}) => {
    const [buttonAEnabled, setButtonAEnabled] = useState(false);
    const [buttonBEnabled, setButtonBEnabled] = useState(true);
    const [checked, setChecked] = React.useState('first');



    const handleButtonAPressed = () => {
        setButtonAEnabled(true);
        setButtonBEnabled(false);
    };
    const handleButtonBPressed = () => {
        setButtonAEnabled(false);
        setButtonBEnabled(true);
    };
    return(
        <View>
            <ScrollView>
                <Card style={styles.card}>
                    <View style={{alignSelf:"flex-end"}}>
                    <IconButton icon="cancel" size={10} color={"grey"} /></View>
                    <View style={{marginBottom:20}}>
                        <Text style={{textAlign:"center",fontWeight:"bold",marginBottom:10}}>Upgrade a plan</Text>
                        <Text>If you need more info, please check
                            <Text style={{fontWeight:"bold",color:"#4287f5",marginBottom:20}} onPress={()=> navigation.navigate('Plan')}> Pricing Guidelines</Text></Text>
                    </View>

                    <View style={styles.btnBox}>
                        <TouchableOpacity onPress={handleButtonAPressed}><Text style={buttonAEnabled?styles.btn:styles.disableBtn}>Monthly</Text></TouchableOpacity>
                        <TouchableOpacity onPress={handleButtonBPressed}><Text style={buttonBEnabled?styles.btn:styles.disableBtn}>Annual</Text></TouchableOpacity>
                    </View>

                    <View style={styles.secondBox}>
                        <View >
                            <TouchableOpacity style={{flexDirection:"row"}}>
                                <View style={{flexDirection:"column",justifyContent:"center"}}>
                                <RadioButton
                                    value="first"
                                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('first')}
                                /></View>
                                <View style={{flex:0.7}}>
                                    <Text style={{fontWeight:"bold",marginBottom:2}}>Startup</Text>
                                    <Text>Best for startups</Text>
                                </View>
                                <View style={{flex:0.2}}>
                                    <Text>$<Text style={{fontWeight:"bold",fontSize:25}}>39</Text> /mon</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.secondBox}>
                        <View >
                            <TouchableOpacity style={{flexDirection:"row"}}>
                                <View style={{flexDirection:"column",justifyContent:"center"}}>
                                <RadioButton
                                    value="second"
                                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('second')}
                                /></View>
                                <View style={{flex:0.7}}>
                                    <Text style={{fontWeight:"bold",marginBottom:2}}>Advanced</Text>
                                    <Text>Best for 1000+ team{"\n"}size</Text>
                                </View>
                                <View style={{flex:0.3}}>
                                    <Text>$<Text style={{fontWeight:"bold",fontSize:25}}>399</Text> /mon</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.secondBox}>
                        <View >
                            <TouchableOpacity style={{flexDirection:"row"}}>
                                <View style={{flexDirection:"column",justifyContent:"center"}}>
                                <RadioButton
                                    value="third"
                                    status={ checked === 'third' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('third')}
                                /></View>
                                <View style={{flex:0.7}}>
                                    <Text style={{fontWeight:"bold",marginBottom:2}}>Enterprise</Text>
                                    <Text style={{backgroundColor:"#4287f5",width:90,borderRadius:3}}>Most popular</Text>
                                    <Text>Best value for 1000+ teams</Text>
                                </View>
                                <View style={{flex:0.3}}>
                                    <Text>$<Text style={{fontWeight:"bold",fontSize:25}}>999</Text> /mon</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.secondBox}>
                        <View >
                            <TouchableOpacity style={{flexDirection:"row"}}>
                                <View style={{flexDirection:"column",justifyContent:"center"}}>
                                    <RadioButton
                                        value="four"
                                        status={ checked === 'four' ? 'checked' : 'unchecked' }
                                        onPress={() => setChecked('four')}
                                    /></View>
                                <View style={{flex:0.7}}>
                                    <Text style={{fontWeight:"bold",marginBottom:2}}>Custom</Text>
                                    <Text>Request a custom license</Text>
                                </View>
                                <View style={{flex:0.3}}>
                                    <Text style={styles.btn}>Contact us</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.noteBox}>
                        <Text style={{fontWeight:"bold"}}>What's in Startup Plan?</Text>
                        <Text style={{marginBottom:20}}>Optional for 10+ team size and new startup</Text>
                        <View style={styles.iconList}>
                            <Text>Up to 10 Active Users</Text>
                            <IconButton icon="cancel" size={10} color={"grey"}/>
                        </View>
                        <View style={styles.iconList}>
                            <Text>Up to 30 Project Integration</Text>
                            <IconButton icon="cancel" size={10} color={"grey"}/>
                        </View>
                        <View style={styles.iconList}>
                            <Text>Analytic Module</Text>
                            <IconButton icon="cancel" size={10} color={"grey"}/>
                        </View>
                        <View style={styles.iconList}>
                            <Text>Finance Module</Text>
                            <IconButton icon="cancel" size={10} color={"grey"}/>
                        </View>
                        <View style={styles.iconList}>
                            <Text>Accounting Module</Text>
                            <IconButton icon="cancel" size={10} color={"grey"}/>
                        </View>
                        <View style={styles.iconList}>
                            <Text>Network Platform</Text>
                            <IconButton icon="cancel" size={10} color={"grey"}/>
                        </View>
                        <View style={styles.iconList}>
                            <Text>Unlimited Cloud Space</Text>
                            <IconButton icon="cancel" size={10} color={"grey"}/>
                        </View>
                    </View>


                    <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                        <TouchableOpacity><Text style={{padding:15,backgroundColor:'#d0caca',borderRadius:15}}>Cancel</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={{padding:15,backgroundColor:"#4287f5",borderRadius:15}}>Upgrade Plan</Text></TouchableOpacity>
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
        padding:5,
        borderRadius: 5,
        backgroundColor:"#4287f5"
    },
    secondBox:{
        borderWidth:1,
        borderColor: "grey",
        borderStyle: "dashed",
        borderRadius:5,
        padding:10,
        marginBottom:20,
        backgroundColor:"rgba(198,214,245,0.7)"
    },
    btnBox:{
        flexDirection: "row",
        justifyContent:"center",
        marginBottom:20

    },
    disableBtn:{
        padding:5,
        borderRadius: 5,
        backgroundColor:"#eeeff6"
    },
    noteBox:{
        borderRadius:5,
        padding:20,
        marginBottom:10,
        backgroundColor:"#e6f5f4"
    },
    iconList:{
        marginBottom:10,
        flexDirection:"row",
        justifyContent:"space-between",
    }
});

export default upgradePlan;