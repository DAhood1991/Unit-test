import {mutltiplae, sentance, sum} from "./01";

test('sum should be corrected',()=>{
    //data
    const a =10
    const b =20
    const c =14
//action
    const rezult =sum(a,b)
    const rezult2 =sum(a,c)

    //expect rezult
    expect(rezult).toBe(30)
    expect(rezult2).toBe(24)

})
test('sum should be corrected',()=>{
    //data
    const a =10
    const b =20
    const c =14
//action
    const rezult =mutltiplae(a,b)
    const rezult2 =mutltiplae(a,c)

    //expect rezult
    expect(rezult).toBe(200)
    expect(rezult2).toBe(140)

})
test('corect words',()=>{
    //data
    const cla = "sam sebe rezisior"
    const bb ="Hellp my bbyZ"

//action
    const rere =sentance(cla)
    const re =sentance(bb)

    //expect rezult
    expect(rere.length).toBe(3)
    expect(rere[0]).toBe('sam')
    expect(rere[1]).toBe('sebe')
    expect(rere[2]).toBe('rezisior')
    expect(rere.length).toBe(3)
    expect(re[0]).toBe('hellp')
    expect(re[1]).toBe('my')
    expect(re[2]).toBe('bbyz')

})