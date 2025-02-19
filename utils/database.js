import * as SQLite from "expo-sqlite";
import { asyncAlert } from "../shared/asyncAlert";

const db = SQLite.openDatabase("little_lemon.db");

// RESET DB
export const resetDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "DROP TABLE IF EXISTS customers;",
      [],
      () => console.log("Tabella eliminata"),
      (_, error) => console.error("Errore eliminando la tabella:", error)
    );
    tx.executeSql(
      `CREATE TABLE customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        uid TEXT,
        name TEXT
      );`,
      [],
      () => console.log("Tabella ricreata con successo"),
      (_, error) => console.error("Errore creando la tabella:", error)
    );
    tx.executeSql(
      "INSERT INTO customers (uid, name) VALUES (?, ?);",
      [Date.now().toString(), "Test User"],
      () => console.log("Customer di test aggiunto"),
      (_, error) =>
        console.error("Errore inserendo il customer di test:", error)
    );
  });
};

// INITIALIZE DB
export const initializeDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT, uid TEXT,
        name TEXT
      );`,
      [],
      () => console.log("Customers table created successfully"),
      (_, error) => console.error("Error creating customers table:", error)
    );
  });
};

initializeDatabase();

// GET CUSTOMERS
export const getCustomers = (successCallback) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM customers",
      [],
      (_, { rows: { _array } }) => successCallback(_array),
      (_, error) => console.error("Error fetching customers:", error)
    );
  });
};

// CREATE CUSTOMER
export const createCustomer = (name) => {
  const newValue = {
    uid: Date.now().toString(),
    name,
  };
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "INSERT INTO customers (uid, name) VALUES (?, ?);",
          [newValue.uid, newValue.name],
          (_, result) => resolve(result),
          (_, error) => reject(error)
        );
      },
      (error) => reject(error),
      () => console.log("Customer create success")
    );
  });
};

// EDIT CUSTOMER
export const editCustomer = (id, name) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "UPDATE customers SET name = ? WHERE id = ?",
          [id, name],
          (_, result) => resolve(result),
          (_, error) => reject(error)
        );
      },
      (error) => reject(error),
      () => console.log("Customer edit success")
    );
  });
};

// DELETE CUSTOMER
export const deleteCustomer = async (customer, setCustomers) => {
  try {
    const shouldDelete = await asyncAlert({
      title: "Delete customer",
      message: `Are you sure you want to delete the customer named "${customer.name}"?`,
    });

    if (!shouldDelete) {
      return;
    }

    await new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "DELETE FROM customers WHERE uid = ?",
            [customer.uid],
            (_, result) => resolve(result),
            (_, error) => reject(error)
          );
        },
        (error) => reject(error)
      );
    });

    getCustomers(setCustomers);
  } catch (err) {
    console.error(err);
  }
};

// DROP CUSTOMERS TABLE
export const emptyCustomersTable = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM customers;",
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};
