
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


export default class RushScreen extends Component {
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
      title: 'Rush',
    };
    onButtonPress() {
      if(this.state.stateButton)
      {
        this.setState({
          sinopsis: "Sinopsis",
          description: "Narra la rivalidad que mantuvieron dos grandes pilotos de Fórmula 1, el británico James Hunt y el austriaco Niki Lauda, sobre todo en 1976, año en el que Lauda sufrió un gravísimo accidente que casi le costó la vida.",
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
          <Image  style={styles.image} source={require('../assets/img/rush.jpg')}/>          
          <Grid
              style={styles.list}
              renderItem={this._renderItem}
              data={[{
                      col1: "Titulo original",
                  },
                  {
                    col1: "Rush",
                  },
                  {
                    col1: "Año",
                    
                  },
                  {
                    col1: "2013",
                  },
                  {
                    col1: "Pais",                    
                  },
                  {
                    col1: "Estados unidos",
                  },
                  {
                    col1: "Director",                   
                  },
                  {
                    col1: "Ron Howard",
                  },
                  {
                    col1: "Guion",                   
                  },
                  {
                    col1: "Peter Morgan",
                  },
                  {
                    col1: "Música",                    
                  },
                  {
                    col1: "Hans Zimmer",
                  },
                  {
                    col1: "Fotografía",                    
                  },
                  {
                    col1: "Anthony Dod Mantle",
                  },
                  {
                    col1: "Reparto",                    
                  },
                  {
                    col1: "Chris Hemsworth,  Daniel Brühl,  Alexandra Maria Lara,  Olivia Wilde, Pierfrancesco Favino,  Natalie Dormer,  Christian McKay,  Stephen Mangan, David Calder,  Alistair Petrie,  Julian Rhind-Tutt,  Colin Stinton,  Jamie Sives, Joséphine de La Baume,  Jay Simpson,  Lee Asquith-Coe,  Alessandro De Marco",
                  },
                  {
                    col1: "Productora",                    
                  },
                  {
                    col1: "Universal Pictures / Exclusive Media Group / Cross Creek Pictures / Imagine Entertainment",
                  },
                  {
                    col1: "Género",
                    
                  },
                  {
                    col1: "Acción. Drama | Coches / Automovilismo. Biográfico. Amistad. Años 70",
                  },          
                  {
                    col1: this.state.sinopsis,                    
                  },
                  {
                    col1: this.state.description,
                  },
                  {
                    col1: ""
                  }
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
      height: 400,
      width: Dimensions.get('window').width / 2 -15,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });