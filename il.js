// - Intermediate - Lab 1

// function ucFirstLetters(str) {
//    let newString = '';
//    let words = str.split(' ')

//    for(let word of words) {
//        if (newString.length !=0) newString += ' '
//        newString += word.charAt(0).toUpperCase() + word.substring(1)
//    }
//    return newString;
//}

// console.log(ucFirstLetters("los angeles"))
// console.log(ucFirstLetters("chicago windy city")
// console.log(ucFirstLetters("Texas"))

// - Intermediate - Lab 2

// function truncate(str, max) {
//    if(str.length > max) {
//        return String.substring(0, max) + '...'
//    }
//    else {
//        return str
//    }
// }

// function truncate2(str, max) {
//     return (str.length > max) ? str.substring(0, max) + '...' :str
// }

// console.log(truncate('This text eill be truncated if it is too long', 25))
// console.log(truncate2('This text will be truncated if it is too long', 25))

// Intermediate - Lab 3

// const animals = ['Tiger', 'Giraffe']
// console.log(animals)

// animals.push('Hippo')
// animals.push('Lion')

// console.log(animals)

// animals.unshift('squirrel')
// animals.unshift('Bird') 

// console.log(animals)

// animals.sort()
// console.log(animals)

// function replaceMiddleAnimal(newValue) {
//    let halfway = animals.length / 2;
//    animals[halfway] = newValue
// }

// replaceMiddleAnimal('cat')
// console.log(animals)

// function findMatchingAnimals(beginsWith) {
//    return animals.filter(animal => 
//        animal.toLowerCase().startsWith(beginsWith.toLowerCase())
//    )
// }

// console.log(findMatchingAnimals('b'))

// Intermediate - Lab 4

// function camelCase(cssProp) {
//    let words = cssProp.split('-');
//    let camelString = '';

//    words.forEach(word => {
//        if (camelString.length == 0) {
//            camelString = word
//        }
//        else {
//           camelString += word.charAt(0).toUpperCase() + word.substring(1)
//        }
//    })

//    return camelString

// }

// const camelCase2 = (cssProp) => {
//    let camelString = ''

//    for (let word of cssProp.split('-')) {
//        camelString += (camelString.length == 0) ? word : word.charAt(0).toUpperCase() + word.substring(1)
//    }

//    return camelString

// }

// console.log(camelCase('margin-left'))
// console.log(camelCase2('background-image'))
// console.log(camelCase('Display'))

// Intermediate - Lab 5 
// A - tofixed when adding + concatentes and returns as string

// let twentyCents = 0.20
// let twerntyCents = let tenCents = 0.10

// console.log(`${twentyCents} + ${tenCents} =${twentyCents + tenCents}`)
// let fixedTwenty = twentyCents.toFixed(2)
// let fixedTen = tenCents.toFixed(2)

// console.log(fixed.Twenty + fixedTen)

// function currencyAddition(float1, float2) {
//  let wholeNumber1 = float1 * 100;
//  let wholeNumber2 = float2 * 100;

// return(wholeNumber1 + wholeNumber2)
// }

// function currencyOperation(float1, float2, operation)
//    let wholeNumber1 = float * 100
//    let wholeNumber2 = float * 100
//    let wholeResult = 0

//    switch (operation) {
//        case '+' :
//            wholeResult = wholeNumber1 + wholeNumber2; break case '*':
//            wholeResult = wholeNumber1 * wholeNumber2; break case '_':
//            wholeResult = wholeNumber1 - wholeNumber2; break case '/':
//            wholeResult = wholeNumber1 / wholeNumber2; break default :
//            wholeResult = wholeNumber1 + wholeNumber2; break
//    }

//    return wholeResult /100

// }

// function currencyOperation2(float1, float2, operation, numDecimals) {
//    let factor = 10** numDecimals
    
//   let wholeNumber1 = float1 * factor
//  let wholeNumber2 = float2 * factor
//  let wholeResult = 0 
// 
//    switch (operation) {
// case '+';
//    wholeResult = wholeNumber1 + wholeNumber2; break case '*': 
//    wholeResult = wholeNumber1 * wholeNumber2; break case '-':
//    wholeResult = wholeNumber1 - wholeNumber2; break case '/':
//    wholeResult = wholeNumber1 / wholeNumber2; break default: 
//    wholeResult = wholeNumber1 + wholeNumber2; break
// }  

// return Math.round(wholeResult / factor)

// }

// console.log(0.3 == currencyAddition(0.1, 0.2))
// console.log(0.3 == currencyOperation(0.1, 0.2))

// console.log(currencyOperation2(0.2, 0.1, '+', 2))

// Lab 6 - Intermediate 

// const colors = ['Red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

// function unique(duplicatesArray) {
//    const uniques = [];

//    duplicatesArray.forEach(element => {
//        if (!uniques.includes(element)) {
//            uniques.push(element)
//        }
//    }
//    )
//    return uniques
// }

// console.log(unique(colors))
// console.log(unique(testScores))

// Lab 7 - Intermediate

// const books = [
//    {id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//    {id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//    {id: 3, title: '1984', author: 'George Orwell', year: 1949 },
//    {id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932},
//    {id: 5, title: 'The Catcher in the Rye', author: 'J.D Salinger', year: 1951 },
// ]

// function getBookTitle(bookId) {
//    let matchBook = books.find(book => book.id == bookId)
//    return matchBook.title
// }

// console.log(getBookTitle(3)) 

// function getOldBooks() {
//    return books.filter(book => book.year < 1950)
// }

// console.log(getOldBooks())

// function addGenre() {
//    books.map(book => book.genre = 'classic')
//}

// addGenre()

// console.log(books)

// function getTitles(authorInitial) {
//     return books 
//    .filter(book => book.author.startsWith(authorInitial))
//    .map(book => book.title)
// }

// console.log(getTitles('G'))

// function latestBook() {
//    let latestYear = 0;
//    books.forEach(book => {
//        if(book.year > latestYear) {
//            latestYear = book.year
//        }
//    })

//    return books.find(book => book.year === latestYear)
// }

// console.log(latestBook())

// Lab 8 Intermediate

// const phoneBookABC = new Map()
// phoneBookABC.set('Annabelle', '01412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')

// const phoneBookDEF = new Map([
//    ['Dave', '0123456789'],
//    ['Elizabeth', '012345678'],
//    ['Fred', '0123456987']
//])

// phoneBookABC.set('Caroline', '0123459876')

// function printPhoneBooks(contacts) {
//    contacts.forEach((phone, name) =>{
//        console.log( `${name}: ${phone}`)
//    })
// }

// printPhoneBooks(phoneBookABC) 

// const phoneBooks = new Map([...phoneBookABC, ...phoneBookDEF])
// console.log([...phoneBooks.keys()])

// Lab 9 - Intermediate

// let salaries = {
//    "Timothy" : 35000,
//    "David" : 55000,
//    "Christina" : 75000,
//    "James" : 43000
// }

// function sumSalaries(salaries) {
//    let total = 0;
//    for(let salary of Object.values(salaries)) {
//        total += salary 
//    }

//    return total
// }

// console.log(sumSalaries(salaries))

// function topEarner(salaries) {
//    let highestSalaries = 0;
//    let highestEarner = 0;
//    for( let [name, salary] of Object.entries(salaries)) {
//        if(salary > highestSalary) {
//            highestSalary = salary
//            highestEarner = name
//        }
//    }
// return `${highestEarner} earns the most of everyone`
// }

// console.log(topEarner(salaries))

// const today = new Date()
// console.log(`Current time is` + today.toLocaleTimeString())

// console.log(today.getHours() + 'hours that have passed so far today')

// const today2 = new Date()
// console.log(`${today.getHours() * 60 + today.getMinutes()} minutes that have passed today)

// const today = new Date()
// console.log(`${today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds()}`)

// const birthday = new Date('1993-01-01');
// let years = today.getFullYear() - birthday.getFullYear();
// let months = today.getMonth() - birthday.getMonth();
// let days = today.getDate() - birthday.getDate();

// if (days < 0) {months -=1; days += 30}
// if (months < 0) (years -=1; months += 12)

 
// console.log(`i am ${years} years, ${months}, and ${days} days old` )