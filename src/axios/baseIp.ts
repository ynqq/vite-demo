interface Im2 extends ImportMeta{
    env?: any
}
let baseIp:string = ""
let newImportMeta:Im2 = import.meta
if(newImportMeta && newImportMeta.env){
    baseIp = newImportMeta.env.BASE_URL
}

export const fetchIp = baseIp + ``