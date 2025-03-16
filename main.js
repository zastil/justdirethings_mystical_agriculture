// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')


/* 
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
    // You can replace `event` with any name you like, as
    // long as you change it inside the callback too!
  
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.
  
    console.log('Hello! The recipe event has fired!')


    event.shaped(
        Item.of('mysticalagriculture:prosperity_block', 1), // arg 1: output
        [
          'AAA',
          'A A', // arg 2: the shape (array of strings)
          'AAA'
        ],
        {
          A: 'mysticalagriculture:prosperity_essence'
        }
      )
    event.shaped(
        Item.of('justdirethings:ferricore_ingot', 8), // arg 1: output
        [
          'AAA',
          'A A', // arg 2: the shape (array of strings)
          'AAA'
        ],
        {
          A: 'mysticalagriculture:ferricore_essence'
        }
      )
      event.shaped(
        Item.of('justdirethings:blazegold_ingot', 8), // arg 1: output
        [
          'AAA',
          'A A', // arg 2: the shape (array of strings)
          'AAA'
        ],
        {
          A: 'mysticalagriculture:blazegold_essence'
        }
      )
      event.shaped(
        Item.of('justdirethings:celestigem', 8), // arg 1: output
        [
          'AAA',
          'A A', // arg 2: the shape (array of strings)
          'AAA'
        ],
        {
          A: 'mysticalagriculture:celestigem_essence'
        }
      )
      event.shaped(
        Item.of('justdirethings:eclipsealloy_ingot', 8), // arg 1: output
        [
          'AAA',
          'A A', // arg 2: the shape (array of strings)
          'AAA'
        ],
        {
          A: 'mysticalagriculture:eclipsealloy_essence'
        }
      )
    })


