const age = [
    10, 29, 42, 55, 78, 101
]
const allAges = [100]
const predicate = (age: number) => age > 91

export type coursseType={
    title:string
    price:number
}
const courses = [
    {title: 'CSS', proce: 100},
    {title: 'HTML', proce: 78},
    {title: 'REACR', proce: 89},
]
const couresPredicate = (courses:coursseType) => {
    return courses.price >50

}
const chipCorses =[

]