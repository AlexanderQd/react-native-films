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


export default class ShooterScreen extends Component {
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
      title: 'Shoote',
    };
    onButtonPress() {
      if(this.state.stateButton)
      {
        this.setState({
          sinopsis: "Sinopsis",
          description: "Bob Lee Swagger (Mark Whalberg) es un ex-tirador de élite del ejército de los Estados Unidos que abandona las fuerzas armadas después del fracaso de una misión extraoficial. Cuando le piden que se reincorpore, regresa al servicio a regañadientes, pero vuelven a engañarlo. A pesar de llevar dos balas en el cuerpo y de ser el objetivo de una caza a nivel nacional, Swagger planea su venganza... ",
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
          <Image  style={styles.image} source={require('../assets/img/shooter.jpg')}/>          
          <Grid
              style={styles.list}
              renderItem={this._renderItem}
              data={[{
                      col1: "Titulo original",
                  },
                  {
                    col1: "Shoote",
                  },
                  {
                    col1: "Año",
                    
                  },
                  {
                    col1: "2007",
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
                    col1: "Antoine Fuqua",
                  },
                  {
                    col1: "Guion",                   
                  },
                  {
                    col1: "Jonathan Lemkin (Novela: Stephen Hunter)",
                  },
                  {
                    col1: "Música",                    
                  },
                  {
                    col1: "Mark Mancina",
                  },
                  {
                    col1: "Fotografía",                    
                  },
                  {
                    col1: "Peter Menzies Jr.",
                  },
                  {
                    col1: "Reparto",                    
                  },
                  {
                    col1: "Mark Wahlberg,  Michael Peña,  Danny Glover,  Kate Mara,  Elias Koteas,  Rhona Mitra, Tate Donovan,  Jonathan Walker,  Justin Louis,  Rade Serbedzija,  Alan C. Peterson, Ned Beatty,  Lane Garrison,  Zak Santiago,  Michael-Ann Connor",
                  },
                  {
                    col1: "Productora",                    
                  },
                  {
                    col1: "Paramount Pictures",
                  },
                  {
                    col1: "Género",
                    
                  },
                  {
                    col1: "Acción. Thriller. Drama. Bélico | Crimen. Venganza",
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