import {CityType, StudentType} from "../02object/02";


export const addSkill = (student: StudentType, skill: string) => {
    student.tehnologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export const makeIsActive = (s: StudentType) => {
    s.isActive = true
}

export const livesCity = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}

export const changeBudget = (city: CityType, budget: number) => {
    return city.governmentBuildings.map((b) => {
        b.budget += budget
    })
}
export const repairHouse = (city: CityType) => {
    return city.houses.map((r) => {
        r.repaired = true
    })
}

export const toFireStaff = (city:CityType,count:number) => {
  city.governmentBuildings.map((g)=>{g.staffCount-=count})
}
export const toHireStaff = (city:CityType,count:number) => {
  city.governmentBuildings.map((g)=>{g.staffCount+=count})
}
