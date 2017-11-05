import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions, 
} from 'react-native';
import Grid from 'react-native-grid-component';


export default class GladiatorScreen extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
        sinopsis: "",
        description: "",
        button: "Más información",
        stateButton: true      
    }
    this.onButtonPress = this.onButtonPress.bind(this);
  }
    static navigationOptions = {
      title: 'Gladiator',
    };
    onButtonPress() {
      if(this.state.stateButton)
      {
        this.setState({
          sinopsis: "Sinopsis",
          description: "En el año 180, el Imperio Romano domina todo el mundo conocido. Tras una gran victoria sobre los bárbaros del norte, el anciano emperador Marco Aurelio (Richard Harris) decide transferir el poder a Máximo (Russell Crowe), bravo general de sus ejércitos y hombre de inquebrantable lealtad al imperio. Pero su hijo Cómodo (Joaquin Phoenix), que aspiraba al trono, no lo acepta y trata de asesinar a Máximo. ",
          button: "Menos información",
          stateButton: false
        });
      }else{
        this.setState({
          sinopsis: "",
          description: "",
          button: "Más información",
          stateButton: true
        });
      }
    }
    _renderItem = (data, i) => <View style={styles.item} key={i}> 
        <View style={styles.box}> 
          <Text>{data.col1} </Text>
        </View>        
    </View>
    render() {
      const { navigate } = this.props.navigation;
      return (          
        <View style={ {flex: 1}}>          
          <Image  style={styles.image} source={require('../assets/img/gladiator.jpg')}/>          
          <Grid
              style={styles.list}
              renderItem={this._renderItem}
              data={[{
                      col1: "Titulo original",
                  },
                  {
                    col1: "Gladiator",
                  },
                  {
                    col1: "Año",
                    
                  },
                  {
                    col1: "2000",
                  },
                  {
                    col1: "Pais",                    
                  },
                  {
                    col1: "Estados Unidos",
                  },
                  {
                    col1: "Director",                   
                  },
                  {
                    col1: "Ridley Scott",
                  },
                  {
                    col1: "Guion",                   
                  },
                  {
                    col1: "David Franzoni, John Logan, William Nicholson",
                  },
                  {
                    col1: "Música",                    
                  },
                  {
                    col1: "Hans Zimmer, Lisa Gerrard",
                  },
                  {
                    col1: "Fotografía",                    
                  },
                  {
                    col1: "John Mathieson",
                  },
                  {
                    col1: "Reparto",                    
                  },
                  {
                    col1: "Russell Crowe,  Joaquin Phoenix,  Connie Nielsen,  Oliver Reed,  Richard Harris, Ralf Moeller,  Derek Jacobi,  Djimon Hounsou,  David Schofield,  John Shrapnel, Spencer Treat Clark,  Tomas Arana,  David Hemmings,  Tommy Flanagan, Sven-Ole Thorsen,  Tony Curran,  Giorgio Cantarini,  Omid Djalili,  Giannina Facio",
                  },
                  {
                    col1: "Productora",                    
                  },
                  {
                    col1: "Coproducción Estados Unidos-Reino Unido; Universal Pictures / DreamWorks SKG / Scott Free Productions / Mill Film / C&L / Red Wagon Entertainment",
                  },
                  {
                    col1: "Género",
                    
                  },
                  {
                    col1: "Acción. Aventuras. Drama | Antigua Roma. Esclavitud. Venganza. Cine épico",
                  },
                  {
                    col1: ""
                  },
                  {
                      col1: ""
                  },     
                  {
                    col1: this.state.sinopsis,                    
                  },
                  {
                    col1: this.state.description,
                  },                 
                  ]}
              itemsPerRow={2}
            />
            <View>
              <Button
                    onPress={this.onButtonPress}
                    title= {this.state.button}
                    color="#841584"
                    accessibilityLabel="Mas info"
              /> 
            </View>
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    scrollContainer:{ 
      flex: 1,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
    },
     item: {
      flex: 1,
      height: 160,
      margin: 1
    },
    list: {
      flex: 1
    },  
    image: {     
      margin: 2,
      height: 200,
      width: Dimensions.get('window').width / 2 -15,
      justifyContent: 'center',
      alignItems: 'center',         
    },
    box: {     
      margin: 2,      
      height: 10,
      width: Dimensions.get('window').width / 2 -15,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });