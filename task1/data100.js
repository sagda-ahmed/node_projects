// const fs = require( "fs")
// const addPerson = (fname , lname) =>{

//     const allData = loadInfo ()


//     allData.push ({
//     fname : fname,
//     lname 
// })
// saveData (allData)

// }


// /////////////////////////////////////////////////////////
// const loadInfo = () => {
//     try{
//     const dataJson = fs.readFileSync("data15.json".toString())
//     return JSON.parse (dataJson)}
//     catch{
//         return[]
//     }

// }
// //////////////////////////////////////////////////
// const saveData =(allData) =>{
// const allDataJson = JSON.stringify(allData)
// fs.writeFileSync("data15.json" , allDataJson)
// }
// module.exports = {
//     addPerson
// }
///////////////////////////////////////////////////////////////
// اول تاسك

const fs = require("fs")
const loadInfo= () => {
    try {
        const dataJson = fs.readFileSync("data15.json" .toString())
        return JSON.parse(dataJson)
    } catch {
        return []
    }
}

//////////////////////////////////////////////////////
const saveData = (allData) => {
    const allDataJson = JSON.stringify(allData)
    fs.writeFileSync("data15.json", allDataJson)
    
}

//////////////////////////////////////////////////////
const addPerson = (id, fname, lname, age, city) => {

    const allData = loadInfo()

    allData.push({
        id,
        fname,
        lname,
        age,
        city
    })

    saveData(allData)
    console.log(" Person added")
}

//////////////////////////////////////////////////////
const viewAll = () => {
    console.log(loadData())
}

//////////////////////////////////////////////////////
const viewPerson = (id) => {

    const allData = loadData()
    const person = allData.find(person=> person.id == id)

    if (!person) {
        console.log("Person not found")
    } else {
        console.log(person)
    }
}

//////////////////////////////////////////////////////
const deletePerson = (id) => {

    const allData = loadData()
    const newData = allData.filter(person => person.id != id)

    saveData(newData)
    console.log(" Deleted if existed")
}

//////////////////////////////////////////////////////
const deleteAll = () => {
    saveData([])
    console.log("All deleted")
}

//////////////////////////////////////////////////////
module.exports = {
    addPerson,
    viewAll,
    viewPerson,
    deletePerson,
    deleteAll,
}