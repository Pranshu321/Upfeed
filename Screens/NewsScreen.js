import { StyleSheet, ScrollView , Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from '../Api/ContextApi'
// import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';

const NewsScreen = () => {

  const { News: { articles }, darkTheme } = useContext(NewsContext);
  console.log(articles);
  return (
    <ScrollView style={{ ...styles.carousel, backgroundColor: darkTheme ? "black" : "white" }}>
      {articles != null ? (
        articles.map((item, i) => (
          <View key={i} style={{...styles.blog_post , backgroundColor: darkTheme ? "white" : "black"}} >
            <View style={styles.img} >
            <TouchableOpacity onPress={()=>Linking.openURL(articles[i].url)}>
              <Image style={styles.img_main} source={{ uri: articles[i].urlToImage }} alt="random image" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.container_copy}>
              <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: "800" , color: darkTheme ? "#999" : "white" }}>{articles[i].source.name}</Text>
              <Text style={{  fontSize: 16, letterSpacing: 2, color: darkTheme ? "#333" : "white", fontWeight: "700", paddingVertical: 9 }}>{articles[i].title}</Text>
              <View style={styles.para}>
              <Text style={{paddingLeft: 10 , paddingVertical: 15 , fontWeight: "600" , marginHorizontal: -4, marginBottom: -3, fontSize: 16, color: "#333", backgroundColor: "#B3CDD1" }}>{articles[i].description}</Text>
              </View>
              <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: "800" , color: darkTheme ? "#999" : "white" }}>{articles[i].publishedAt.slice(0,10)}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text>Loading...</Text>
      )
      }
    </ScrollView>

  )
}

export default NewsScreen

const styles = StyleSheet.create({
  carousel: {
    flex: 1
  },
  blog_post: {
    maxWidth: 500,
    marginHorizontal: 20,
    marginTop: 30,
    maxHeight: 600,
    borderRadius: 10,
    position: "relative"
  },
  container_copy: {
    marginTop: 110,
    paddingHorizontal: 4,
    borderRadius: 10,
    paddingVertical: 10
  },
  img: {
    height: 100,
    width: 100,
    zIndex: 10,
    borderRadius: 100,
    position: "absolute",
    left: 3,
    top: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  img_main: {
    height: 80,
    width: 80,
    position: "relative",
    borderRadius: 100,
    zIndex: 1
  },
  para: {
    paddingVertical: 20
  }
})