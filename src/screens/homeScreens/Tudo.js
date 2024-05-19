import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomStyle from '../../staticFeature/CustomStyle'
import CustomButton from '../../components/CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { addTudo, editTudo } from '../../redux/slices/TudoSlice'

const Tudo = (props) => {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })
  const prop = props.route.params;
  const DATA = useSelector(state => state.TUDO.data)
  console.log('tudo props', props, DATA)
  const dispatch = useDispatch()
  const handleInput = (value, key) => {
    setInputValue({ ...inputValue, [key]: value })
  }

  useEffect(() => {
    if (prop?.type === 'edit') {
      let data = DATA[prop.data]
      console.log('particular index data', data)
      setInputValue(data)
      for (let i in data) {

      }
    }
  }, [])
  console.log('input value', inputValue)
  
  const handleAdd = () => {
    if (prop.type === 'edit') {
      let index = prop.data;
      console.log('edit condition ', index, inputValue)
      dispatch(editTudo({ index: index, inputValue: inputValue }))
    } else {
      dispatch(addTudo(inputValue))
    }
    props.navigation.goBack()
  }
  return (
    <View style={CustomStyle.constainer}>
      <View style={styles.heading}>
        <Text style={CustomStyle.text}>Add new item</Text>
      </View>
      <ScrollView>
        <View style={styles.card}>
          <CustomInput
            name="Name"
            onChangeText={(t) => handleInput(t, 'name')}
            value={inputValue.name}
            placeholder='Enter your name'
          />
          <CustomInput
            name="Email"
            onChangeText={(t) => handleInput(t, 'email')}
            value={inputValue.email}
            placeholder='Enter your email'
          />
          <CustomInput
            name="Phone"
            onChangeText={(t) => handleInput(t, 'phone')}
            value={inputValue.phone}
            placeholder='Enter your phone'
          />
          {/* <CustomInput
            name="Adress"
            onChangeText={(t) => handleInput(t, 'address')}
            value={inputValue.address}
            placeholder='Enter your address'
          /> */}
          <View style={{ marginTop: 20 }}>

            <CustomButton
              name={'add'}
              onPress={handleAdd}
              backGroundColor="blue"
              color='white'
            />
          </View>

        </View>
      </ScrollView>
    </View>
  )
}

export default Tudo

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: 5
  },
  card: {
    alignSelf: 'center',
    width: '100%'

  }
})