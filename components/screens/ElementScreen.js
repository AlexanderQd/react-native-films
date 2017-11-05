
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


export default class ElementScreen extends Component {
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
      title: 'The Fifth Element',
    };
    onButtonPress() {
      if(this.state.stateButton)
      {
        this.setState({
          sinopsis: "Sinopsis",
          description: "Cada 5.000 años se abre una puerta entre dos dimensiones. En una dimensión existe el Universo y la vida. En la otra dimensión existe un elemento que no está hecho ni de tierra, ni de fuego, ni de aire, ni de agua, sino que es una anti-energía, la anti-vida: es el quinto elemento.",
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
          <Image  style={styles.image} source={require('../assets/img/5element.jpg')}/>          
          <Grid
              style={styles.list}
              renderItem={this._renderItem}
              data={[{
                      col1: "Titulo original",
                  },
                  {
                    col1: "The Fifth Element (Le cinquième élément)",
                  },
                  {
                    col1: "Año",
                    
                  },
                  {
                    col1: "1997",
                  },
                  {
                    col1: "Pais",                    
                  },
                  {
                    col1: "Francia",
                  },
                  {
                    col1: "Director",                   
                  },
                  {
                    col1: "Luc Besson",
                  },
                  {
                    col1: "Guion",                   
                  },
                  {
                    col1: "Luc Besson, Robert Mark Kamen (Argumento: Luc Besson)",
                  },
                  {
                    col1: "Música",                    
                  },
                  {
                    col1: "Eric Serra",
                  },
                  {
                    col1: "Fotografía",                    
                  },
                  {
                    col1: "Thierry Arbogast",
                  },
                  {
                    col1: "Reparto",                    
                  },
                  {
                    col1: "Bruce Willis,  Gary Oldman,  Milla Jovovich,  Luke Perry,  Ian Holm,  Chris Tucker, Brion James,  Maïwenn Le Besco,  Tommy 'Tiny' Lister,  Hon Ping Tang",
                  },
                  {
                    col1: "Productora",                    
                  },
                  {
                    col1: "Gaumont",
                  },
                  {
                    col1: "Género",
                    
                  },
                  {
                    col1: "Ciencia ficción. Acción | Cyberpunk. Película de culto",
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