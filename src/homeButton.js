import React from 'react';
import {Text, View, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import {Card , IconButton,ProgressBar,Colors} from "react-native-paper";
import Cards from "./Components/Cards"
import Billing from "./Components/Billing";
import Plan from "./Components/Plan";
import BillingHistory from "./Components/BillingHistory";

const homeButton = ({navigation}) => {
    return (
        <View>
            <ScrollView>
                <Card style={styles.card}>
                    <Plan navigation={navigation}/>
                    <Cards navigation={navigation} />
                    <Billing navigation={navigation} />
                    <BillingHistory navigation={navigation} />
                </Card>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f4f0fa",
        flexDirection: "column"

    },
}
)

export default homeButton;

