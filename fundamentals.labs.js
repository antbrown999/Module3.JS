// PEMDAS - Please Excuse My Dear Aunt Sally 
// console.log("" + 1 + 0)
// console,log("" -1 + 0)
// console.log(true + false)
// console.log(!true)
// console.log(6/"3")
// console.log("2"*"3")
// console.log(4 + 5 + "px")
// console.log("$" + 4 + 5)
// console.log("4" - 2)
// console.log("   -9    " + 5)
// console.log("  -9  "  -  5)
// console.log(null + 1)
// console.log(undefined + 1)
// console.log(undefined == null)
// console.log(undefined == null)
// console.log(" \t \n" -2)

// 2.
// let three = "3"
// let four = "4"
// let thirty = "30"

// let addition = three + four
// console.log(addition)
// false

// let multiplication = three * four
// console.log(multiplication)
// true

// let division = three / four
// console.log(division)
// true

// let subtraction = three - four
// console.log(subtraction)
// true 

// let lessThan1 = three < four
// console.log(lessThan1)
// true

// let lessThan2 = thirty - four 
//vconsole.log(lessThan2)
// wrong

// 3.
// if (0) console.log('#1 zero is true') zero is false
// if ("0") console.log('#2 Zero is true') string make it true
// if (null) console.log('null is true') - non-zero is true
// if (-1)  console.log('negative is true') -non-zero is true
// if (1) console.log('positive is true')

//4.
// let a = 7, b = 18 
// let result = `${a} + ${b} is`

// result += (a+b < 10) ? 'less than 10' : 'greater than 10'

// console.log(result)

// 5.

// function getGreeting(name) {
//    return 'Hello ' + name + '!' 
// }

//A - Function Expression
// const getGreetingA = function(name) {
//    return 'Hello' + name + '!';
// }

// B - Arrow Function
// const getGreetingB = (name) => 'Hello' + name + '!'

// console.log(getGreetiing('BOB))
// console.log(getGreetingA('BOB'))
// console.log(getGreetingB('BOB'))

// const westley = {
//    name: 'Westley'
//    numFingers: 5
// }

// const rugen = {
//    name:'Rugen',
//    numFingers: 6
// }

// const inigo = {
//    firstName: 'Inigo',
//    last name: 'Montoya',
//    greeting(person)  {
//        let greeting = `Hello ${person.name},
//        my name is ${this.firstName} ${this.lastName},`
//        console.log(greeting + this.getCatchPhrase(person))
//    },
//    getCatchPhrase(person) {
//        return 'Nice to meet you.'
//    },
//    getCatchPhrase: (person) => person.numFingers == 6 ?
//    'Not Nice to meet you' : 'Nice to meet you'
// }

// inigo.greeting(westley)
// inigo.greeting(rugen)

// const basketballGame = {
//    score: 0,
//    fouls: 0,
//    freeThrow() {
//        this.score++
//        return this 
//        },
//    basket() {
//        this.score += 2
//        return this
//    },
//    threePointer() {
//        this.score +=3
//        return this 
//    },
//    foul() {
//        this.fouls++
//        return this
//    },
//    halfTime() {
//        console.log('Halftime score is '+this.score+' ('+this.fouls+' fouls).')
//        return this
//    },
//    fullTime() {
//        console.log('Final score is ' +this.score+'('+this.fouls+' fouls)')
//    }
// }

// basketballGame,basket(),freeThrow(),basket(),threePointer(),halfTime(),
// fullTime()

// 8.

// const sydney = {
//    name:'Sydney',
//    population: 5_121_000,
//    state: 'NSW';
//    founded: '26 January 1788',
//    timezone: 'Austrailia/Sydney'
// }

// const melbourne = {
//    name: 'Melbourne',
//    population: 86_441,
//    state: 'Vic',
//    Age: 135
// }

// function printCityProps(cityObj) {
//    for (cityProp in cityObject) {
//        console.log(cityProp + '=' + cityObj[cityProp])
//    }
// }

// printCityProps(sydney)
//printCityProps(melbourne)

// 9.

// let teamsports = ['Hockey', 'Cricket', 'Volleyball']
// let moreSports = teamsports
// moreSports.push('Basketball')
// moreSports.unshift('Football')

// let dog1 = 'Bingo'
// let dog2 = dog1
// dog2 = 'Lucky'

// let cat1 = {name: 'Fluffy', breed: 'Siberian'}
// let cat2 = cat1
// cat2.name = 'Sunggles'

// console.log(teamsports)
// console.log(dog1)
// console.log(cat1)

// let moreSports2 = [...teamSports]
// moreSports2.push('pingpong')
// console.log(teamSports2)

// let cat3 = {...cat1}
// cat3.name = 'baldy'
// console.log(cat1)