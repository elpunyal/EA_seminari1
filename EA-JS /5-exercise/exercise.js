// AI assistance used for this exercise
// Model: GPT-4o
// Prompts used:
// 1. "Explícame cómo filtrar un array de usuarios para quedarme con los que tienen un id par usando filter."
// 2. "Ayúdame a transformar los usuarios de una API con map para conservar solo id, name y la ciudad de address."
// 3. "¿Cómo puedo añadir un objeto al principio de un array usando spread sin modificar el array original?"
// 4. "¿Dónde se coloca reduce dentro de una cadena de operaciones con filter y map, y para qué sirve en este ejercicio?"
// 5. "Revisa este ejercicio de JavaScript y dime si estoy usando correctamente filter, map, spread y reduce."
//
// Objective: Practice array manipulation using functional patterns (filter, map, reduce, and destructuring) by processing real data from an API.
// Filter: Only include users whose id is an even number.
// Transform: Create a new array of objects containing only the id, name, and the city (extracted from the nested address object).
// Add: Insert a "Guest User" at the beginning of the list without mutating the original result.
// Statistics: Calculate the total number of characters in all usernames combined using reduce.

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(users => {
      // YOUR CODE STARTS HERE
      console.log("--- Processed Users ---");
      const result = users

      // 1. Filter even IDs
        .filter(user => user.id % 2 === 0)

      // 2. Map to clean objects {id, name, city}
        .map(user => {
          return {
            id: user.id,
            name: user.name,
            city: user.address.city,
          };
        });

      console.log(result);
        
      // 3. Add Guest User at the start using Spread (...)
      const guestUser = {
        id: 0,
        name: "Guest User",
        city: "Barcelona",
      };

      const resultWithGuest = [guestUser, ...result];
      console.log(resultWithGuest);

      // 4. Reduce to count total characters in names
      const totalNameCharacters = resultWithGuest.reduce((total, user) => {
        return total + user.name.length;
      }, 0);

      console.log("Total characters in names:", totalNameCharacters);

    });

