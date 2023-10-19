export const sentance = (sentance:string) => {
    const word=sentance.toLowerCase().split(' ')
return word.filter(w=>w !='' && w !=' ').map(w=>w.replace('!',''))

}

export const sum = (a:number,b:number) => a+b
export const mutltiplae = (a:number,b:number) => a*b