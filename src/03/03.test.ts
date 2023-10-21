import {CityType, StudentType} from "../02object/02";
import {addSkill, changeBudget, livesCity, makeIsActive, repairHouse, toFireStaff, toHireStaff} from "./03";

let student: StudentType
let city :CityType
beforeEach(() => {
        city = {
            title: "New Yprk",
            houses: [{
                buildedAt: 2012, repaired: false, address: {number: 100, street: {title: "White street"}}
            }, {buildedAt: 2008, repaired: false, address: {number: 100, street: {title: "Happy street"}}}, {
                buildedAt: 2020, repaired: false, address: {number: 200, street: {title: "Hogwarts street"}}
            }],
            governmentBuildings: [{type:"HOSPITAL",budget:200000,staffCount:200,address:{street:{title:"Central Str"}}},
                {type:"FIRE-STATION",budget:500000,staffCount:1000,address:{street: {title:"Souths park str" }}}],
            citizensNumber: 1000000
        }

    student = {
        id: 1,
        name: "Aleks",
        age: 32,
        isActive: true,
        address: {
            stretеTitle: 'Bogomolova',
            city: {
                title: 'Soligorsk',
                country: 'Belarus'
            }
        },
        tehnologies: [{
            id: 1,
            title: "html"
        },
            {
                id: 2,
                title: "js"
            },
            {
                id: 3,
                title: "css"
            }
        ]
    }

}

)
test('new tech skill should be added to student', () => {
    addSkill(student, "JS")
    expect(student.tehnologies.length).toBe(4)
    expect(student.tehnologies[3].title).toBe("JS")
    expect(student.tehnologies[3].id).toBeDefined()

})
test('student should be active', () => {
    makeIsActive(student)
    expect(student.isActive).toBe(true)
})
test('student lives in city?', () => {
   let rez = livesCity(student,"Moscow")
    let rez2 = livesCity(student,"Soligorsk")
    expect(rez).toBe(false)
    expect(rez2).toBe(true)
})
test('Budget should be changed for HOSPITAL', () => {
    expect(city.governmentBuildings[0].budget).toBe(200000)
    changeBudget(city, 100000)
    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('Budget should be changed for FIRE-STATION', () => {
    expect(city.governmentBuildings[1].budget).toBe(500000)
    changeBudget(city, -100000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('House should be repaired', () => {
    repairHouse(city)
    expect(city.houses[1].repaired).toBeTruthy()
})

test('staff should be increased', () => {
    toFireStaff(city, 20)
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be hire', () => {
    toHireStaff(city, 20)
    expect(city.governmentBuildings[0].staffCount).toBe(220)
})


