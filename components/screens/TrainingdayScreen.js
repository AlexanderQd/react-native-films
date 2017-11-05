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


export default class TrainingdayScreen extends Component {
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
      title: 'Training Day',
    };
    onButtonPress() {
      if(this.state.stateButton)
      {
        this.setState({
          sinopsis: "Sinopsis",
          description: "Todos los días, en las calles de las zonas urbanas deprimidas de los Estados Unidos se libra una guerra; una guerra entre residentes, traficantes de droga y los que han jurado proteger a unos de los otros. Esta guerra tiene sus víctimas y sus verdugos, y una de sus figuras más importantes es el sargento Alonzo Harris, un agente de narcóticos con 13 años de experiencia cuyos discutibles métodos hacen difusa la línea entre la legalidad y la corrupción. Jake Hoyt, un joven policía recién asignado a narcóticos, comienza sus rondas a las órdenes de Alonzo para aprender de él. ",
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
            <Image  style={styles.image} source={require('../assets/img/training-day.jpg')}/>        
          <Grid
              style={styles.list}
              renderItem={this._renderItem}
              data={[{
                      col1: "Titulo original",
                  },
                  {
                    col1: "Training Day",
                  },
                  {
                    col1: "Año",
                    
                  },
                  {
                    col1: "2001",
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
                    col1: "David Ayer",
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
                    col1: "Mauro Fiore",
                  },
                  {
                    col1: "Reparto",                    
                  },
                  {
                    col1: "Denzel Washington,  Ethan Hawke,  Scott Glenn,  Tom Berenger,  Harris Yulin, Raymond J. Barry,  Cliff Curtis,  Dr. Dre,  Snoop Dogg,  Macy Gray,  Charlotte Ayanna, Eva Mendes,  Nick Chinlund,  Jaime Gomez,  Raymond Cruz,  Noel Gugliemi, Samantha Esteban,  Garland Whitt",
                  },
                  {
                    col1: "Productora",                    
                  },
                  {
                    col1: "Warner Bros. Pictures / Village Roadshow Pictures / NPV Entertainmen",
                  },
                  {
                    col1: "Género",
                    
                  },
                  {
                    col1: "Thriller. Acción | Crimen. Policíaco. Drogas. Buddy Film",
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
                  {
                      col1: ""
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