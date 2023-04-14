

async function getPeople (){
    const response = await fetch('https://swapi.dev/api/people/', 
                                    { method: 'GET' });
    const data = await response.json();
    const persons = data.results;
    const newArray = persons.map((person) => ({ name: person.name, 
                                                    gender: person.gender,
                                                    birthYear: person['birth_year'], 
                                                    mass: person.mass, 
                                                    height: person.height }));
    return newArray;
}


async function newArrayPersons() {
    const infoPersons = await getPeople();
    const filterHeightPersons = infoPersons.filter((person ) => person.height < 170);
    console.log(filterHeightPersons);
}

newArrayPersons();


async function getVehicles() {
    const response = await fetch('https://swapi.dev/api/vehicles/', 
                                    { method: 'GET' });
    const data = await response.json();
    const vehicles = data.results;
    const newArray = vehicles.map((vehicle) => ({ name: vehicle.name, 
                                                    model: vehicle.model,
                                                    length: vehicle.length, 
                                                    crew: vehicle.crew, 
                                                    passengers: vehicle.passengers }));
    return newArray;
}


async function newArrayVehicles() {
    const infoPersons = await getVehicles();
    const filterHeightPersons = infoPersons.filter((vehicle ) => vehicle.passengers <= 1);
    console.log(filterHeightPersons);
}

newArrayVehicles()