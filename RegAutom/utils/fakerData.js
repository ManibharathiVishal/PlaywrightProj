const { faker } = require('@faker-js/faker');

class FakerData {

  static userData(){

    const date = faker.date.birthdate();

    const formattedDate = date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit'
    });

    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      gender: faker.person.gender(),
      email: faker.internet.email(),
      phone: faker.string.numeric(10),
      streetAddress: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
      password: faker.internet.password(),
      dob: formattedDate,
      query: faker.string.sample()
    };

  }

}

module.exports = { FakerData };