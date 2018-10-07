import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { LinearGradient } from "expo"; //배경 그라데이션, 두가지 property가 필요 1.색상 2.스타일 
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import Icon from 'expo/src/Icon';

//리액트 컴포넌트 생성
// export default class Weather extends Component {

//     render() {
//         return (
//         <LinearGradient
//         colors={["#D6EAF8", "#3498DB"]}
//         style={styles.container}>
//         <StatusBar hidden={true}/>
//         <View style={styles.upper}>
//             <Ionicons color="white" size={144} name="ios-rainy" />
//             <Text style={styles.temp}>35</Text>
//         </View>
//         <View style={styles.lower}>
//             <Text style={styles.title}>Raining</Text>
//             <Text style={styles.subtitle}>For more info look outside</Text>
//         </View>
//         </LinearGradient>

//         );
//     }
// }

const WeatherCases = {

    Rain: {
        colors: ["#00C6FB", "#005B3A"],
        title: "Raining",
        subtitle: "For more info, look outside",
        icon: 'ios-rainy'
    },

    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny",
        subtitle: "Sunny outside ",
        icon: 'ios-sunny'

    },

    Thunderstorms: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm",
        subtitle: "Thunder",
        icon: 'ios-thunderstorm'

    },

    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Cloudy",
        subtitle: "Cloudsssss",
        icon: 'ios-cloudy'

    },

    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Snowy",
        subtitle: "Do you want to build a snowman?",
        icon: 'ios-snow'

    },

    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "It's like rain",
        icon: 'ios-rainy-outline'

    },

    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "It's like rain",
        icon: 'ios-rainy-outline'

    }
}

function Weather({ weatherName, temp }) { //app.js에서는 name을 내보내고, 여기선 이를 weather case로 내보냄
    console.log(weatherName);
    return (
        <LinearGradient
        colors={WeatherCases[weatherName].colors}
        style={styles.container}>
        <Sta tusBar hidden={true}/>
        <View style={styles.upper}>
            <Ionicons color="white" size={144} name={WeatherCases[weatherName].icon} />
            <Text style={styles.temp}>{temp}</Text>
        </View>
        <View style={styles.lower}>
            <Text style={styles.title}>{WeatherCases[weatherName].title}</Text>
            <Text style={styles.subtitle}>{WeatherCases[weatherName].subtitle}</Text>
        </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
}
export default Weather;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 40, 
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10   
    },
    lower: { 
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 35,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 35,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 25, 
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 35
    }

})


