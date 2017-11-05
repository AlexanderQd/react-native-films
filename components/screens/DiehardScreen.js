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
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
  {label: '1', value: 1 },
  {label: '2', value: 2 },
  {label: '3', value: 3 },
  {label: '4', value: 4 },
  {label: '5', value: 5 },
  {label: '6', value: 6 },
  {label: '7', value: 7 },
  {label: '8', value: 8 },
  {label: '9', value: 9 },
  {label: '10', value: 10 },
];

export default class DiehardScreen extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
        sinopsis: "",
        description: "",
        button: "Más información",
        stateButton: true,
        value: 0      
    }
    this.onButtonPress = this.onButtonPress.bind(this);
  }
    static navigationOptions = {
      title: 'Die Hard',
    };
    onButtonPress() {
      if(this.state.stateButton)
      {
        this.setState({
          sinopsis: "Sinopsis",
          description: "En lo alto de la ciudad de Los Ángeles, un grupo terrorista se ha apoderado de un edificio tomando a un grupo de personas como rehenes. Sólo un hombre, el policía de Nueva York John McClane (Bruce Willis), ha conseguido escapar del acoso terrorista. Aunque está solo y fuera de servicio, McClane se enfrentará a los secuestradores. Él es la única esperanza para los rehenes.",
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
        <View style={styles.container}>
          <View style={styles.head}>
            <Image  style={styles.image} source={require('../assets/img/diehard.jpg')}/>   
          </View>
          <View style={styles.head}>
            <Text style={styles.headtext}>{this.state.value}</Text>            
          </View>
        </View>
        <Text style={{padding: 10}}>Valorar pelicula</Text>
        <View style={styles.radio}>
        <RadioForm
                radio_props={radio_props}
                initial={0}
                formHorizontal={true}
                labelHorizontal={false}
                buttonSize={15}
                onPress={(value) => {this.setState({value:value})}}
          />
          </View>                 
                 
          <Grid
              style={styles.list}
              renderItem={this._renderItem}
              data={[{
                      col1: "Titulo original",
                  },
                  {
                    col1: "Die Hard",
                  },
                  {
                    col1: "Año",
                    
                  },
                  {
                    col1: "1988",
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
                    col1: "John McTiernan",
                  },
                  {
                    col1: "Guion",                   
                  },
                  {
                    col1: "Jeb Stuart, Steven E. de Souza (Novela: Roderick Thorp)",
                  },
                  {
                    col1: "Música",                    
                  },
                  {
                    col1: "Michael Kamen",
                  },
                  {
                    col1: "Fotografía",                    
                  },
                  {
                    col1: "Jan De Bont",
                  },
                  {
                    col1: "Reparto",                    
                  },
                  {
                    col1: "Bruce Willis,  Bonnie Bedelia,  Alan Rickman,  Alexander Godunov, Reginald Veljohnson,  Paul Gleason,  William Atherton,  Hart Bochner, De'voreaux White,  Robert Davi,  Grand L. Bush,  Wilhelm von Homburg",
                  },
                  {
                    col1: "Productora",                    
                  },
                  {
                    col1: "20th Century Fox",
                  },
                  {
                    col1: "Género",
                    
                  },
                  {
                    col1: "Acción. Thriller | Terrorismo. Secuestros / Desapariciones. Película de culto",
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
    head: {     
      margin: 2,      
      height: 200,
      width: Dimensions.get('window').width / 2 -15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headtext: {
      fontWeight: 'bold',
      fontSize: 100,
      color: "#841584"
    },
    radio: {
      marginBottom: 20,
      marginTop: 20
    }
  });