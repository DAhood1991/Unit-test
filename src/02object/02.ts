export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildings>
    citizensNumber: number
}
type HousesType = {
    buildedAt:number
    repaired:boolean
    address:AdressType
}
type AdressType ={
    number?:number
    street:StreetType

}
type StreetType ={
    title:string
}
export type GovernmentBuildings ={
    type:string
    budget:number
    staffCount:number
    address:AdressType
}


export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AdresssType
    tehnologies: Array<TehnologiesType>

}
type AdresssType = {
    stretеTitle: string
    city: CityTypep
}
type CityTypep = {
    title: string
    country: string
}
type TehnologiesType = {
    id: number
    title: string
}
export const student: StudentType = {
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
    ]}

