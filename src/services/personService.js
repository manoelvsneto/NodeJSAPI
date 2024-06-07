const personRepository = require('../repositories/personRepository');
const Person = require('../models/personModel');

async function getAllPersons() {
  return await personRepository.getAllPersons();
}

async function getPersonById(id) {
  return await personRepository.getPersonById(id);
}

async function createPerson(person) {
  const newPerson = new Person(null, person.name, person.age, person.email);
  return await personRepository.createPerson(newPerson);
}

async function updatePerson(id, person) {
  const updatedPerson = new Person(id, person.name, person.age, person.email);
  return await personRepository.updatePerson(id, updatedPerson);
}

async function deletePerson(id) {
  return await personRepository.deletePerson(id);
}

module.exports = {
  getAllPersons,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson
};
