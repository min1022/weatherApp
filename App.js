import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native'; 
import Weather from "./Weather";
//시트, 텍스트, 뷰같은 특정한 컴포넌트를 불러옴
//모바일 환경에 따라 맞춰 네이티브하게 변화함  

const API_KEY = "0d4afc550bc71dde7aa5156165e268e1";

export default class App extends React.Component {
  state = {

    isLoaded: false, //데이터api를 불러오게되면 이 값은 true가 됨
    //날씨데이터 외에도 정보를 받았는지 안받았는지 알려주는 indicator가 필요 
    error: null,
    temperature: null,
    name: null
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }//이후 위치 정보를 api로 보내어 진짜 날씨정보를 얻어와야함 

    _getWeather = (lat, lon) => { //position에서 오는 정보
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
      ) .then(response => response.json()) //response를 json으로 
      .then(json => {
        console.log(json);
        this.setState({
          temperature:json.main.temp,//api에서 받아온 json object
          name:json.weather[0].main,
          isLoaded: true
        });//날씨이름, 온도에 대한 json데이터를 얻어와 state에 저장 
      });
  };
  render() {
    const { isLoaded, error, temperature, name } = this.state; //render 펑션에 error 추가 
    return (
      <View style={styles.container}>
        {isLoaded ? (
           <Weather weatherName = {name} temp = {Math.floor(temperature - 273.15)} /> 
        ) : ( <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the Weather</Text>
          { error ? <Text style={styles.errorText}>{error}</Text> : null } 
            </View>
        )}
      </View>
    );//로딩 여부를 확인하여 안되었다면 로딩 중이라는 화면을 출력해줌 
    //에러가 발생하면 null(로딩)화면에 위의 텍스트가 출력, 아니면 null(유저 위치정보를 확인 못했을 경우)
  }//47번째 줄 온도 변환 (켈빈 -> 섭씨)
}

//스타일 설정해주는 부분 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
   },
   errorText: {
     color:"red",
     backgroundColor:"transparent",
     marginBottom: 50
   },
   loading: {
     flex: 1,
     backgroundColor: '#45D3EC',
     justifyContent: "flex-end",
     paddingLeft: 43
   },
   loadingText: {
     fontSize: 30,
     marginBottom: 100
   }
});
