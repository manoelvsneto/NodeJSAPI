const sql = require('mssql');
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    enableArithAbort: true
  }
};

async function getAllPersons() {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query('SELECT * FROM Persons');
    return result.recordset;
  } catch (err) {
    console.error(err);
  }
}

async function getPersonById(id) {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request()
      .input('id', sql.Int, id)
      .query('SELECT * FROM Persons WHERE Id = @id');
    return result.recordset[0];
  } catch (err) {
    console.error(err);
  }
}

async function createPerson(person) {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request()
      .input('name', sql.VarChar, person.name)
      .input('age', sql.Int, person.age)
      .input('email', sql.VarChar, person.email)
      .query('INSERT INTO Persons (Name, Age, Email) VALUES (@name, @age, @Email)');
    return result;
  } catch (err) {
    console.error(err);
  }
}

async function updatePerson(id, person) {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request()
      .input('id', sql.Int, id)
      .input('name', sql.VarChar, person.name)
      .input('age', sql.Int, person.age)
      .input('email', sql.VarChar, person.email)
      .query('UPDATE Persons SET Name = @name, Age = @age, Email = @Email WHERE Id = @id');
    return result;
  } catch (err) {
    console.error(err);
  }
}

async function deletePerson(id) {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request()
      .input('id', sql.Int, id)
      .query('DELETE FROM Persons WHERE Id = @id');
    return result;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  getAllPersons,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson
};
