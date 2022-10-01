import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from '../Api/ContextApi'

const NewsScreen = () => {

  const { news: { articles } } = useContext(NewsContext);

  return (
    <View>
      <Text>NewsScreen</Text>
    </View>
  )
}

export default NewsScreen

const styles = StyleSheet.create({})