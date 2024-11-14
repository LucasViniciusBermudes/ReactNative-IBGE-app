import { useEffect, useState } from "react"
import { View, Button, Alert, FlatList, ScrollView, SafeAreaView, Text, Image, StyleSheet } from "react-native"
import { router } from "expo-router"

import { Input } from "@/components/Input"
import { User } from "@/components/User"

import {
  useUserDatabase,
  UserDatabase,
} from "@/database/useUserDatabase"


export default function Index() {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [ethnicity, setEthnicity] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [uf, setUF] = useState("")
  const [city, setCity] = useState("")
  const [street, setStreet] = useState("")
  const [houseNumber, setHouseNumber] = useState("")
  const [complemnt, setComplemnt] = useState("")
  const [houseType, setHouseType] = useState("")
  const [qttResident, setQttResident] = useState("")
  const [qttChildren, setQttChildren] = useState("")
  const [waterSupply, setWaterSupply] = useState("")
  const [waterDistribution, setWaterDistribution] = useState("")
  const [qttBathroom, setQttBathroom] = useState("")
  const [qttShower, setQttShower] = useState("")
  const [sinkSpotBathroom, setSinkSpotBathroom] = useState("")
  const [trashSpot, setTrashSpot] = useState("")
  const [birthRegistration, setBirthRegistration] = useState("")
  const [monthlyIncome, setMonthlyIncome] = useState("")
  const [search, setSearch] = useState("")
  const [users, setUsers] = useState<UserDatabase[]>([])

  const userDatabase = useUserDatabase()

  async function create() {
    try {
      if (isNaN(Number(phoneNumber))) {
        return Alert.alert("Telefone", "O telefone precisa ser um número!")
      } else if (isNaN(Number(cpf))){
        return Alert.alert("CPF", "O CPF precisa ser um número!")
      } else if (isNaN(Number(houseNumber))){
        return Alert.alert("Número da residencia", "O número da residencia precisa ser um número!")
      } else if (isNaN(Number(qttResident))){
        return Alert.alert("Quantidade de moradores", "A quantidade de moradores precisa ser um número!")
      } else if (isNaN(Number(qttChildren))){
        return Alert.alert("Quantidade de crianças", "A quantidade crianças precisa ser um número!")
      }
      else if (isNaN(Number(qttBathroom))){
        return Alert.alert("Quantidade de Banheiros", "A quantidade de banheiros precisa ser um número!")
      }
      else if (isNaN(Number(qttShower))){
        return Alert.alert("Quantidade de banheiros com chuveiro", "A quantidade de banheiros com chuveiro precisa ser um número!")
      }
      else if (isNaN(Number(monthlyIncome))){
        return Alert.alert("Renda bruta mensal", "A renda bruta mensal precisa ser um número!")
      }

      const response = await userDatabase.create({
        name,
        phoneNumber: Number(phoneNumber),
        ethnicity,
        email,
        cpf: Number(cpf),
        uf,
        city,
        street,
        houseNumber: Number(houseNumber),
        complemnt,
        houseType,
        qttResident: Number(qttResident),
        qttChildren: Number(qttChildren),
        waterSupply,
        waterDistribution,
        qttBathroom: Number(qttBathroom),
        qttShower: Number(qttShower),
        sinkSpotBathroom,
        trashSpot,
        birthRegistration,
        monthlyIncome: Number(monthlyIncome),
      })

      Alert.alert("Formulário enviado com o ID: " + response.insertedRowId)
    } catch (error) {
      console.log(error)
    }
  }

  async function list() {
    try {
      const response = await userDatabase.searchByName(search)
      setUsers(response)
    } catch (error) {
      console.log(error)
    }
  }
  async function handleSave() {
    if (!id) {
      create()
    }

    setId("")
    setName("")
    setPhoneNumber("")
    setEthnicity("")
    setEmail("")
    setCpf("")
    setUF("")
    setCity("")
    setStreet("")
    setHouseNumber("")
    setComplemnt("")
    setHouseType("")
    setQttResident("")
    setQttChildren("")
    setWaterSupply("")
    setWaterDistribution("")
    setQttBathroom("")
    setQttShower("")
    setSinkSpotBathroom("")
    setTrashSpot("")
    setBirthRegistration("")
    setMonthlyIncome("")

    await list()
  }

  useEffect(() => {
    list()
  }, [search])

  return (
    <SafeAreaView style={{ flex: 1, padding: 15, marginTop: 25}}>
      <ScrollView style={{ marginBottom: 16 }}>
        <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', gap: 10}}>

          <Text style={{ fontWeight: 'bold', fontSize: 25 , paddingTop: 15}}>Censo Demográfico</Text>
          <Image source={require('../../assets/images/ibgeLogo.png')} style = {{ width: 425, height: 150}}/>
          {/*nome completo */}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Nome Completo</Text>
            <Input placeholder="Digite seu nome completo" onChangeText={setName} value={name} style={styles.input}/>
          {/*telefone*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Telefone</Text>
            <Input placeholder="Digite seu telefone" keyboardType='numeric' onChangeText={setPhoneNumber} value={phoneNumber} style={styles.input}/>
          {/*etnia*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Étnia</Text>
            <Input placeholder="Digite sua etnia" onChangeText={setEthnicity} value={ethnicity} style={styles.input}/>
          {/*email*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>E-mail</Text>
            <Input placeholder="Digite seu email" onChangeText={setEmail} value={email} style={styles.input}/>
          {/*cpf*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>CPF</Text>
            <Input placeholder="Digite seu CPF sem pontuação" keyboardType='numeric' onChangeText={setCpf} value={cpf} style={styles.input}/>
          {/*estado*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Estado</Text>
            <Input placeholder="Insira a sigla do seu estado" maxLength={2} onChangeText={setUF} value={uf} style={styles.input}/>
          {/*cidade*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Cidade</Text>
            <Input placeholder="Digite o nome da sua cidade" onChangeText={setCity} value={city} style={styles.input}/>
          {/*rua*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Rua</Text>
            <Input placeholder="Digite o nome da sua rua" onChangeText={setStreet} value={street} style={styles.input}/>
          {/*numero*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Número da Casa</Text>
            <Input placeholder="Digite o número da sua cidade" keyboardType='numeric' onChangeText={setHouseNumber} value={houseNumber} style={styles.input}/>
          {/*complemento*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Complemento</Text>
            <Input placeholder="Insira um complemento se necessário" onChangeText={setComplemnt} value={complemnt} style={styles.input}/>
          {/*tipo*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Tipo de Casa</Text>
            <Input placeholder="Digite o tipo do seu domicilio" onChangeText={setHouseType} value={houseType} style={styles.input}/>
          {/*quantidade moradores*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Quantidade de Residentes</Text>
            <Input placeholder="Insira a quantidade de moradoress" maxLength={2} keyboardType='numeric' onChangeText={setQttResident} value={qttResident} style={styles.input}/>
          {/*quantidade crianças*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Quantidade de Crianças</Text>
            <Input placeholder="Insira a forma de abastecimento" maxLength={2} keyboardType='numeric' onChangeText={setQttChildren} value={qttChildren} style={styles.input}/>
          {/*abastecimento água*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Qual a principal forma de abastecimento de água usada no domicilio?</Text>
            <Input placeholder="Insira a forma de abastecimento" onChangeText={setWaterSupply} value={waterSupply} style={styles.input}/>
          {/*acesso água encanada*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Tem acesso a água encanada?</Text>
            <Input placeholder="Insira SIM ou NÃO" maxLength={3} onChangeText={setWaterDistribution} value={waterDistribution} style={styles.input}/>
          {/*quantidade banheiros*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Quantos banheiros possui na sua residencia?</Text>
            <Input placeholder="Insira a quantidade de banheiros" keyboardType='numeric' maxLength={2} onChangeText={setQttBathroom} value={qttBathroom} style={styles.input}/>
          {/*quantidade banheiros com chuveiro*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Quantos banheiros com chuveiro possui na sua residencia?</Text>
            <Input placeholder="Insira a quantidade de banheiros com chuveiro" keyboardType='numeric' maxLength={2} onChangeText={setQttShower} value={qttShower} style={styles.input}/>
          {/*destino esgoto*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Para onde vai o esgoto do banheiro?</Text>
            <Input placeholder="Insira o lugar para onde vai o esgoto" onChangeText={setSinkSpotBathroom} value={sinkSpotBathroom} style={styles.input}/>
          {/*destino do lixo*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Para onde vai o lixo da residencia?</Text>
            <Input placeholder="Insira o lugar para onde vai o lixo" keyboardType='default' onChangeText={setTrashSpot} value={trashSpot} style={styles.input}/>
          {/*registro de nascimento*/}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Possui  registro de nascimento?</Text>
            <Input placeholder="Insira SIM ou NÃO" keyboardType='default' maxLength={3} onChangeText={setBirthRegistration} value={birthRegistration} style={styles.input}/>
          {/*renda mensal */}
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>Qual sua renda bruta mensal?</Text>
            <Input placeholder="Insira o valor da renda bruta mensal" keyboardType='numeric' onChangeText={setMonthlyIncome} value={monthlyIncome} style={styles.input}/>
          <Button title="Enviar Formulário" onPress={handleSave}/>

        </View>
      </ScrollView>
      <View style={{maxHeight: 200, backgroundColor: "#FAF9F6"}}> 
        <Text style={{padding: 10, fontSize: 15 , textAlign: "center", fontWeight: 'bold', textTransform: "uppercase", backgroundColor: "#3535", width: "50%", alignSelf: 'center', borderRadius: 15, marginBottom: 10}}>Pesquisar</Text>

        <Input placeholder="Insira o NOME do usuário que deseja encontrar" onChangeText={setSearch} style={{width: '100%', borderColor: '#000', borderWidth: 1, padding: 5, borderRadius: 5, marginBottom: 10}} />
        <FlatList data={users}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
          <User data={item}
            onOpen={() => router.navigate("/details/" + item.id)} />
        )}
        contentContainerStyle={{ gap: 16 }}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5
  }
});