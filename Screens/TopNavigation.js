import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react';
import { MaterialCommunityIcons, SimpleLineIcons , AntDesign } from '@expo/vector-icons';
import {NewsContext} from '../Api/ContextApi';
const TopNavigation = ({ index, setIndex }
) => {
    const { darkTheme, setDarkTheme, fetchNews , setindex} = useContext(NewsContext);
    return (
        <View style={{ ...styles.container, backgroundColor: darkTheme ? "#282C35" : "white" }}>
            {index == 0 ?
                (<TouchableOpacity  onPress={() => setDarkTheme(!darkTheme)} style={styles.left}>
                    <Text style={{ ...styles.text, color: darkTheme ? "lightgrey" : "black"  }}>
                        <MaterialCommunityIcons
                            name='theme-light-dark'
                            size={24}
                            color="#007FFF"
                        />
                    </Text>
                </TouchableOpacity>) : (
                    <TouchableOpacity style={styles.left} onPress={() => { setindex(0) }}>
                        <SimpleLineIcons name='arrow-left' size={15} color="#007FFF" />
                        <Text style={{ ...styles.text, color: darkTheme ? "lightgrey" : "black" }}>Discover</Text>
                    </TouchableOpacity>
                )
            }

            <Text style={{...styles.center , color: darkTheme ? "white" : "black" }}>
               {index ? "All News" : "Discover"}
            </Text>

            {
                index ? (
                  <TouchableOpacity style={styles.right} onPress={() => fetchNews("general")}>
                    <Text style={styles.text}>
                        <AntDesign name='reload1' size={24} color="#007FFF" />
                    </Text>
                  </TouchableOpacity>
                ) : (
                   <TouchableOpacity style={styles.left} onPress={()=>setindex(1)}>
                    <Text style={{...styles.text , color: darkTheme ? "white" : "black" }}>All News</Text>
                    <SimpleLineIcons name='arrow-right' size={15} color="#007FFF" />
                   </TouchableOpacity>
                )
            }
        </View>
    )
}

export default TopNavigation

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth: 0.5
    },
    left: {
      flexDirection: "row",
      alignItems: "center",
      width: 80,
      justifyContent: "space-between"
    },
    text: {
        fontSize: 16,
    },
    center:{
        fontSize: 18,
        paddingBottom: 7,
        borderBottomWidth: 5,
        borderRadius: 10,
        borderBottomColor: "#007FFF",
        fontWeight: "700"
    },
    right:{
      width:80,
      alignItems: "flex-end"
    }
})