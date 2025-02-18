import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("little_lemon.db");

// Function to initialize the database
export const initializeDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
      );`,
      [],
      () => console.log("Customers table created successfully"),
      (_, error) => console.error("Error creating customers table:", error)
    );
  });
};

initializeDatabase();

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

export const createCustomer = (name) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "INSERT INTO customers (name) VALUES (?);",
          [name],
          (_, result) => resolve(result),
          (_, error) => reject(error)
        );
      },
      (error) => reject(error),
      () => console.log("Customer create success")
    );
  });
};

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

/*
const updateDish = async (dishId, newName) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(`update menu set name=? where uid=${dishId}`, [newName]);
      },
      reject,
      resolve
    );
  });
};

const deleteDish = async (dishId) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("delete from menu where id = ?", [dishId]);
      },
      reject,
      resolve
    );
  });
};
 */
