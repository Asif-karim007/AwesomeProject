import {Button, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Card,Colors, IconButton,DataTable} from "react-native-paper";
import React from "react";

const BillingHistory = ({}) => {
    return(
        <View style={styles.container}>
            <Text style={{fontWeight:"bold"}}>Billing History</Text>
            <ScrollView horizontal={true}
            >
            <DataTable>
                <DataTable.Header >
                    <DataTable.Title style={styles.block}>Date</DataTable.Title>
                    <DataTable.Title style={styles.block}>Description</DataTable.Title>
                    <DataTable.Title style={styles.block}>Amount</DataTable.Title>
                    <DataTable.Title style={styles.block}></DataTable.Title>
                    <DataTable.Title style={styles.block}>View</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row >
                    <DataTable.Cell style={styles.block}>Nov 07,2020</DataTable.Cell>
                    <DataTable.Cell  style={styles.block}>
                        <TouchableOpacity onPress={()=>alert("pressed")}>
                            <Text style={{fontWeight:"bold",color:"#4287f5"}}>Invoice for Oct 2021</Text>
                        </TouchableOpacity></DataTable.Cell>
                    <DataTable.Cell style={styles.block}>$123.79</DataTable.Cell>
                    <DataTable.Cell style={styles.block}> <Button title={"pdf"}/> </DataTable.Cell>
                    <DataTable.Cell style={styles.block}> <Button title={"View"}/> </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row >
                    <DataTable.Cell style={styles.block}>Dec 01,2021</DataTable.Cell>
                    <DataTable.Cell  style={styles.block}>
                        <TouchableOpacity onPress={()=>alert("pressed")}>
                            <Text style={{fontWeight:"bold",color:"#4287f5"}}>Invoice for Oct 2021</Text>
                        </TouchableOpacity></DataTable.Cell>
                    <DataTable.Cell  style={styles.block}>$123.79</DataTable.Cell>
                    <DataTable.Cell style={styles.block}> <Button title={"pdf"}/> </DataTable.Cell>
                    <DataTable.Cell style={styles.block}> <Button title={"View"}/> </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row >
                    <DataTable.Cell style={styles.block}>Jan 01,2020</DataTable.Cell>
                    <DataTable.Cell  style={styles.block}>
                        <TouchableOpacity onPress={()=>alert("pressed")}>
                            <Text style={{fontWeight:"bold",color:"#4287f5"}}>Invoice for Oct 2021</Text>
                        </TouchableOpacity></DataTable.Cell>
                    <DataTable.Cell  style={styles.block}>$123.79</DataTable.Cell>
                    <DataTable.Cell style={styles.block}> <Button title={"pdf"}/> </DataTable.Cell>
                    <DataTable.Cell style={styles.block}> <Button title={"View"}/> </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row >
                    <DataTable.Cell style={styles.block}>Feb 17,2020</DataTable.Cell>
                    <DataTable.Cell  style={styles.block}>
                        <TouchableOpacity onPress={()=>alert("pressed")}>
                            <Text style={{fontWeight:"bold",color:"#4287f5"}}>Invoice for Oct 2021</Text>
                        </TouchableOpacity></DataTable.Cell>
                    <DataTable.Cell  style={styles.block}>$123.79</DataTable.Cell>
                    <DataTable.Cell style={styles.block}> <Button title={"pdf"}/> </DataTable.Cell>
                    <DataTable.Cell style={styles.block}> <Button title={"View"}/> </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row >
                    <DataTable.Cell style={styles.block}>Nov 01,2021</DataTable.Cell>
                    <DataTable.Cell  style={styles.block}>
                        <TouchableOpacity onPress={()=>alert("pressed")}>
                            <Text style={{fontWeight:"bold",color:"#4287f5"}}>Invoice for Oct 2021</Text>
                        </TouchableOpacity></DataTable.Cell>
                    <DataTable.Cell  style={styles.block}>$123.79</DataTable.Cell>
                    <DataTable.Cell style={styles.block}> <Button title={"pdf"}/> </DataTable.Cell>
                    <DataTable.Cell style={styles.block}> <Button title={"View"}/> </DataTable.Cell>
                </DataTable.Row>
            </DataTable>
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
    cell:{
        fontWeight:"bold",
        backgroundColor: "blue",
        justifyContent:"flex-start",
        textAlign:"center",

    },
    row:{
        padding:10,
        justifyContent: "space-between"

    },
    block:{
        width:150,
    },
    linkText:{
        fontWeight: "bold",
        backgroundColor:"#4287f5",
    }
});

export default BillingHistory;
