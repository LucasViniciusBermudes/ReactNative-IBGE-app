import { type SQLiteDatabase } from "expo-sqlite"

export async function initializeDatabase(database: SQLiteDatabase) {
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phoneNumber INTEGER NOT NULL,
      ethnicity TEXT NOT NULL,
      email TEXT NOT NULL,
      cpf INTEGER NOT NULL,
      uf TEXT NOT NULL,
      city TEXT NOT NULL,
      street TEXT NOT NULL,
      houseNumber INTEGER NOT NULL,
      complemnt TEXT NOT NULL,
      houseType TEXT NOT NULL,
      qttResident INTEGER NOT NULL,
      qttChildren INTEGER NOT NULL,
      waterSupply TEXT NOT NULL,
      waterDistribution TEXT NOT NULL,
      qttBathroom INTEGER NOT NULL,
      qttShower INTEGER NOT NULL,
      sinkSpotBathroom TEXT NOT NULL,
      trashSpot TEXT NOT NULL,
      birthRegistration TEXT NOT NULL,
      monthlyIncome INTEGER NOT NULL
    );
  `)
}
