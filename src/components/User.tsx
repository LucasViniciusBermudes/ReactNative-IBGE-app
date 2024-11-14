import { Pressable, PressableProps, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

type Props = PressableProps & {
  data: {
    name: string
    phoneNumber: number
    ethnicity: string
    email: string
    cpf: number
    uf: string
    city: string
    street: string
    houseNumber: number
    complemnt: string
    houseType: string
    qttResident: number
    qttChildren: number
    waterSupply: string
    waterDistribution: string
    qttBathroom: number
    qttShower: number
    sinkSpotBathroom: string
    trashSpot: string
    birthRegistration: string
    monthlyIncome: number
  }
  onOpen: () => void
}

export function User({ data, onOpen, ...rest }: Props) {
  return (
    <Pressable
      style={{
        backgroundColor: "#CECECE",
        padding: 24,
        borderRadius: 5,
        gap: 12,
        flexDirection: "row",
      }}
      {...rest}
    >
      <Text style={{ flex: 1 }}>
        {data.phoneNumber} - {data.name}
      </Text> 

      <TouchableOpacity onPress={onOpen}>
        <MaterialIcons name="visibility" size={24} color="blue" />
      </TouchableOpacity>
    </Pressable>
  )
}
