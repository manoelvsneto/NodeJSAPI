const personService = require('../services/personService');

async function getAllPersons(req, res) {
  try {
    const persons = await personService.getAllPersons();
    res.json(persons);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getPersonById(req, res) {
  try {
    const person = await personService.getPersonById(req.params.id);
    res.json(person);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function createPerson(req, res) {
  try {
    const newPerson = await personService.createPerson(req.body);
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function updatePerson(req, res) {
  try {
    const updatedPerson = await personService.updatePerson(req.params.id, req.body);
    res.json(updatedPerson);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function deletePerson(req, res) {
  try {
    await personService.deletePerson(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
  getAllPersons,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson
};
