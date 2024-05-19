import { ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { removeTudo } from '../../redux/slices/TudoSlice'

const Home = () => {

  const navigation = useNavigation()
  const DATA = useSelector(state => state.TUDO.data);

  // const dispatch = useDispatch()
  // console.log('DATA', DATA, navigation)
  const handleClick = () => {
    console.log('click handle button ')
    navigation.navigate('Tudo', { type: 'add' })
  }
  const removeItem = (index) => {
    console.log('remvoe item funciton call', index)
    // dispatch(removeTudo(index))
  }
  const editItem = (index) => {
    console.log('edint item funcitin call', index)
    // navigation.navigate('Tudo', { type: 'edit', data: index })
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ width: '100%', flex: 1 }}>
          <View style={{ alignSelf: 'center', margin: 10, width: '100%' }}>
            {DATA.map((item, index) => {
              return (
                <View
                  key={index}
                  style={styles.tableView}>
                  <TouchableOpacity
                    style={{ position: 'absolute', right: 0, margin: 5 }}
                    onPress={() => removeItem(index)}>
                    <Text style={{ fontSize: 18, fontWeight: '900', borderBottomWidth: 1 }}>Remove</Text>
                  </TouchableOpacity>
                  <View>
                    <Text style={{ padding: 10 }}>user Name = </Text>
                    <Text style={{ padding: 10 }}>Email = </Text>
                    <Text style={{ padding: 10 }}>Phone Number = </Text>
                    <Text style={{ padding: 10 }}>Address = </Text>
                  </View>
                  <View>
                    <Text style={{ padding: 10 }}>{item.name}</Text>
                    <Text style={{ padding: 10 }}>{item.email}</Text>
                    <Text style={{ padding: 10 }}>{item.phone}</Text>
                    <Text style={{ padding: 10 }}>{item.address}</Text>
                  </View>
                  <TouchableOpacity
                    style={{ position: 'absolute', right: 0, bottom: 0, margin: 10 }}
                    onPress={() => editItem(index)}>
                    <Text style={{ fontSize: 18, fontWeight: '900', borderBottomWidth: 1 }}>Edit</Text>
                  </TouchableOpacity>

                </View>
              )
            })}
          </View>
        </View>
      </ScrollView >
      <View style={styles.bottomStyle}>
        <CustomButton name={"add More item"} onPress={handleClick} />
      </View>
    </View >
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  bottomStyle: {
    // alignSelf:'flex-start'
    height: 50,
    width: '90%',
    margin: 10,
    alignSelf: 'center'
  },
  tableView: {
    margin: 10,
    borderWidth: 1,
    // alignItems: 'center',
    width: '90%',
    borderRadius: 10,
    flexDirection: 'row'
  }
})