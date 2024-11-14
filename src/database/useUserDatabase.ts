import { useSQLiteContext } from "expo-sqlite"

export type UserDatabase = {
  id: number
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

export function useUserDatabase() {
  const database = useSQLiteContext()

  async function create(data: Omit<UserDatabase, "id">) {
    const statement = await database.prepareAsync(
      "INSERT INTO users (name, phoneNumber, ethnicity, email, cpf, uf, city, street, houseNumber, complemnt, houseType, qttResident, qttChildren, waterSupply, waterDistribution, qttBathroom, qttShower, sinkSpotBathroom, trashSpot, birthRegistration, monthlyIncome) VALUES ($name, $phoneNumber, $ethnicity, $email, $cpf, $uf, $city, $street, $houseNumber, $complemnt, $houseType, $qttResident, $qttChildren, $waterSupply, $waterDistribution, $qttBathroom, $qttShower, $sinkSpotBathroom, $trashSpot, $birthRegistration, $monthlyIncome)"
    )

    try {
      const result = await statement.executeAsync({
        $name: data.name,
        $phoneNumber: data.phoneNumber,
        $ethnicity: data.ethnicity, 
        $email: data.email, 
        $cpf: data.cpf, 
        $uf: data.uf, 
        $city: data.city, 
        $street: data.street, 
        $houseNumber: data.houseNumber, 
        $complemnt: data.complemnt, 
        $houseType: data.houseType, 
        $qttResident: data.qttResident, 
        $qttChildren: data.qttResident, 
        $waterSupply: data.waterSupply, 
        $waterDistribution: data.waterDistribution, 
        $qttBathroom: data.qttBathroom, 
        $qttShower: data.qttShower, 
        $sinkSpotBathroom: data.sinkSpotBathroom, 
        $trashSpot: data.trashSpot, 
        $birthRegistration: data.birthRegistration, 
        $monthlyIncome: data.monthlyIncome,
      })

      const insertedRowId = result.lastInsertRowId.toLocaleString()

      return { insertedRowId }
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  async function searchByName(name: string) {
    try {
      const query = "SELECT * FROM users WHERE name LIKE ?"

      const response = await database.getAllAsync<UserDatabase>(
        query,
        `%${name}%`
      )

      return response
    } catch (error) {
      throw error
    }
  }
  async function show(id: number) {
    try {
      const query = "SELECT * FROM users WHERE id = ?"

      const response = await database.getFirstAsync<UserDatabase>(query, [
        id,
      ])

      return response
    } catch (error) {
      throw error
    }
  }

  return { create, searchByName, show }
}
