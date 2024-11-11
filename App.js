import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen =({navigation})=> {
  return (
    <SafeAreaView style={styles.container}>
      <View style ={{flex:1, justifyContent:'center'}}>
        <Text style={styles.textHeader}>A premium online store for sporter and their stylish choice</Text>
      </View>
      <View style ={styles.anh}>
        <Image source ={require('./bifour_-removebg-preview.png')}/>
      </View>
      <View style={styles.power}>
        <Text style={styles.textHeader}>POWER BIKE 
SHOP</Text>
      </View>
      <View style={styles.power}>
        <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Screen2')}>
          <Text style={{color:'while'}}>Get started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const Stack = createNativeStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen2" screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Screen2" component={Screen2}/>
        <Stack.Screen name="Screen3" component={Screen3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Screen2 = ({navigation})=>{
  const data =[
    {
      id:1,
      type:'RoadBike',
      name:'Pinarello',
      image: require('./bitwo-removebg-preview.png'),
      price: 1800,
      discount:'15% OFF',
      description:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
    },
    {
      id:2,
      type:'Mountain',
      name:'Pina Mountain',
      image: require('./bione-removebg-preview.png'),
      price: 1700,
      discount:'15% OFF',
      description:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
    },
    {
      id:3,
      type:'RoadBike',
      name:'Pina Bike',
      image: require('./bitwo-removebg-preview.png'),
      price: 1500,
      discount:'15% OFF',
      description:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
    },
    {
      id:4,
      type:'RoadBike',
      name:'Pinarello',
      image: require('./bithree_removebg-preview.png'),
      price: 1900,
      discount:'15% OFF',
      description:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
    },
    {
      id:5,
      type:'Mountain',
      name:'PinaMountain',
      image: require('./bitwo-removebg-preview.png'),
      price: 2700,
      discount:'15% OFF',
      description:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
    },
    {
      id:6,
      type:'Mountain',
      name:'Pina Mountain2',
      image: require('./bione-removebg-preview.png'),
      price: 1350,
      discount:'15% OFF',
      description:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
    },
    {
      id:7,
      type:'RoadBike',
      name:'Pinarello',
      image: require('./bione-removebg-preview.png'),
      price: 1800,
      discount:'15% OFF',
      description:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
    },
    
  ]



const render =({item})=>{
  return(
    < TouchableOpacity style={{flex:1, backgroundColor:'#F7BA8326', alignItems:'center', justifyContent:'center', borderRadius:20, margin:5, padding:5}} onPress={()=> navigation.navigate('Screen3',{
      image:item.image, name:item.name, dis:item.discount, des:item.description, price:item.price, 
    })}>
      <Image source ={(item.image)}/>
      <Text>{item.name}</Text>
      <Text>${item.price}</Text>
    </TouchableOpacity>
  )
}

const[loc,setLoc] = useState(data);

const danhMuc =(cate)=>{
  if(cate==='All')
    setLoc(data)
  else if(cate==='RoadBike')
    setLoc(data.filter((item) => item.type === cate));
  else if(cate==='Mountain')
    setLoc(data.filter((item) => item.type === cate));
}

  return(
    <View style={{flex:1}}>
      <View style={{flex:1, justifyContent:'center'}}>
      <Text style={styles.textBike}>The world’s Best Bike</Text>
      </View>
      <View style={styles.btnlist}>
      <TouchableOpacity style={styles.btncate} onPress={()=> danhMuc('All')}>
        <Text>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btncate} onPress={()=> danhMuc('RoadBike')}>
        <Text>RoadBike</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btncate} onPress={()=> danhMuc('Mountain')}>
        <Text>Mountain</Text>
      </TouchableOpacity>
      </View>
      <View style={{flex:5, marginTop:-50}}>
        <FlatList
          data={loc}
          renderItem={render}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
      
    </View>
  )
}

const Screen3 =({route,navigation})=>{
  const [gia,setGia] = useState('')

  useEffect(() => {
      const finalPrice = route.params.price * 15/100;
      setGia(finalPrice);
  }, [route.params.price]);

  return(
    <View style={{flex:1}}>
    <View style={{flex:5, backgroundColor:'#E941411A', justifyContent:'center', alignItems:'center', margin:5, borderRadius:10}}>
      <Image style={{height:230, width:250}} source={(route.params.image)}/>
    </View>
      <View style={{flex:2}}>
      <Text style={styles.textPina}>{route.params.name}</Text>
      <Text style={styles.textPina2}>{route.params.dis} {route.params.price}$               {gia}$</Text>
    </View>
    <View style={{flex:2}}>
      <Text style={styles.textPina}>Description</Text>
      <Text style={styles.textPina2}>{route.params.des}</Text>
    </View>
    <View style={{flex:1, alignItems:'flex-end'}}>
        <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Screen2')}>
          <Text style={{color:'while'}}>Add to card</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  textHeader:{
    fontFamily: 'VT323',
fontSize: 26,
fontWeight: 400,
lineHeight: 26,
textAlign: 'center',

  },
  anh:{flex:3, justifyContent:'center', alignItems:'center', backgroundColor: '#E941411A',
  borderRadius:40
  },
  power:{
    flex:1, justifyContent:'center', alignItems:'center',
  },
  btn:{
    height:40,
    width:250,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    backgroundColor:'#E94141',
  },
  textBike:{
    fontFamily: 'Ubuntu',
fontSize: 25,
fontWeight: 700,
lineHeight: 28.73,
color:'#E94141',

  },
  btnlist:
  {flex:1, justifyContent:'space-around' , flexDirection:'row'},
  btncate:{
    height:20,
    width:70,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    borderColor:'#E9414187',
  },
  textPina:{
    fontFamily: 'Voltaire',
fontSize: 35,


  }
});

export default App;