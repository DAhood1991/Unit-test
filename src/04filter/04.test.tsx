import {coursseType} from "./04.ts";

test('should test old man older then 90',()=>{
    const age = [
        10, 29, 42, 55, 78, 101
    ]
    const predicate = (age: number) => {
        return age > 91
    }
    const oldAges =age.filter(predicate)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(101)

})

test('should test  courses cheaper > 50 ',()=>{
    const courses = [
        {title: 'CSS', price: 100},
        {title: 'HTML', price: 78},
        {title: 'REACR', price: 89},
    ]
    const couresPredicate = (courses:coursseType) => {
        return courses.price >50
    }
    const coursesCheaper =courses.filter(couresPredicate)
    expect(coursesCheaper.length).toBe(3)
    expect(coursesCheaper[0].title).toBe("CSS")
    expect(coursesCheaper[1].title).toBe("HTML")
    expect(coursesCheaper[2].title).toBe("REACR")

})