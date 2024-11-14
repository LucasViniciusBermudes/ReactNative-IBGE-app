import { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { useLocalSearchParams } from "expo-router"

import { useUserDatabase } from "@/database/useUserDatabase"

export default function Details() {
  const [data, setData] = useState({
    name: "",
    phoneNumber: 0,
    ethnicity: "",
    email: "",
    cpf: 0,
    uf: "",
    city: "",
    street: "",
    houseNumber: 0,
    complemnt: "",
    houseType: "",
    qttResident: 0,
    qttChildren: 0,
    waterSupply: "",
    waterDistribution: "",
    qttBathroom: 0,
    qttShower: 0,
    sinkSpotBathroom: "",
    trashSpot: "",
    birthRegistration: "",
    monthlyIncome: 0,
  })

  const userDatabase = useUserDatabase()
  const params = useLocalSearchParams<{ id: string }>()

  useEffect(() => {
    if (params.id) {
      userDatabase.show(Number(params.id)).then((response) => {
        if (response) {
          setData({
            name: response.name,
            phoneNumber: response.phoneNumber,
            ethnicity: response.ethnicity,
            email: response.email,
            cpf: response.cpf,
            uf: response.uf,
            city: response.city,
            street: response.street,
            houseNumber: response.houseNumber,
            complemnt: response.complemnt,
            houseType: response.houseType,
            qttResident: response.qttResident,
            qttChildren: response.qttChildren,
            waterSupply: response.waterSupply,
            waterDistribution: response.waterDistribution,
            qttBathroom: response.qttBathroom,
            qttShower: response.qttShower,
            sinkSpotBathroom: response.sinkSpotBathroom,
            trashSpot: response.trashSpot,
            birthRegistration: response.birthRegistration,
            monthlyIncome: response.monthlyIncome,
          })
        }
      })
    }
  }, [params.id])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 15}}>
      <Text style={{ fontSize: 30, fontWeight: "bold"}}>Informações do usuário</Text>

      <Text style={{ fontSize: 20 }}>ID: {params.id} </Text>

      <Text style={{ fontSize: 20 }}>Nome: {data.name}</Text> 

      <Text style={{ fontSize: 20 }}>Telefone: {data.phoneNumber}</Text>

      <Text style={{ fontSize: 20 }}>Email: {data.email}</Text>

      <Text style={{ fontSize: 20 }}>CPF: {data.cpf}</Text>

      <Text style={{ fontSize: 20 }}>Estado: {data.uf}</Text>

      <Text style={{ fontSize: 20 }}>Cidade: {data.city}</Text>

      <Text style={{ fontSize: 20 }}>Rua: {data.street}</Text>

    </View>
  )
}
