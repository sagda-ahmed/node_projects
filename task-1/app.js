
// const fs = require("fs")
// const {constrainedMemory} = require("process")
// fs.writeFileSync("data.txt", "Mrs Sagda")
// console.log(fs.readFileSync("data.txt") .toString())
// fs.appendFileSync("data.txt" , " ahmed")
// console.log(fs.readFileSync("data.txt" ).toString() )
/////////////////////////////////////////////////////////////////////////////
// const x = require ("./data1")
// console.log(x.fname)
// console.log(x.lname)
// console.log(x.age)
// console.log(x.city)
// console.log(x.function1(16 ,8))
/////////////////////////////////////////////////////////////
// const validator = require("validator")
// console.log(validator.isEmail('sagda@gmail.com'))
///////////////////////////////////////////////////////////////////////
//console.log(process.argv[2])
// const command = process.argv[2]
// if (command ==="add") {
//     console.log("adding a new task")
// }
// else if (command ==="delete"){
//     console.log("you deleted a task")
// }else {
//     console.log("error")
// }
//console.log(process.argv[2])
// const data100 = require ("./data100")
// const yargs = require ("yargs")

// yargs.command(
//     {
//         command : "add" ,
//         discribe : " to add a item" ,
// builder :{
//     fname :{
// discribe : "this is the first name",
// demandOption : true ,
// type : "string"
//     },
//     lname :{
//         discribe : "this is the last name",
//          demondOption : true,
//          type : "string"
//     }
// },
// handler : (x) =>{
//     //console.log("to add a new item")
//    //  console.log(x.fname , x.lname)
//    data100.addPerson(x.fname , x.lname)
// },
//     })
//     console.log(yargs.argv)

// yargs.command(
//     {
//         command : "delete",
//         discribe : "to delet an item",
//         builder : {
//             id : {
//                 discribe : "this is an id",
//                 demondOption :true,
//                 type : "string"
//             },
//         },
//         handler : () => {
//            console.log( "this is to delete an item")
//                },
            
//             })
//             console.log(yargs.argv)
            ///////////////////////////////////////////////////////////////////////////////
//  const person1 = {
//     fname :"sagda",
//     lnme :"ahmed",
//     city : 'giza'
//  }           
//  console.log(person1)
//  const person1Json = JSON.stringify(person1)
//  console.log(person1Json)
// person1Object = JSON.parse(person1Json)
// console.log(person1Object)
// fs.writeFileSync("data20.json", person1Json)
//////////////////////////////////////////////////////////////////
// اول تاسك
const yargs = require("yargs")
const data = require("./data100")

//////////////////////////////////////////////////////
yargs.command({
    command: "add",
    describe: "Add new person",
    builder: {
        id: {
            demandOption: true,
            type: "string"
        },
        fname: {
            demandOption: true,
            type: "string"
        },
        lname: {
            demandOption: true,
            type: "string"
        },
        age: {
            demandOption: true,
            type: "number"
        },
        city: {
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data.addPerson(x.id, x.fname, x.lname, x.age, x.city)
    }
})

//////////////////////////////////////////////////////
yargs.command({
    command: "list",
    describe: "View all people",
    handler: () => {
        data.viewAll()
    }
})

//////////////////////////////////////////////////////
yargs.command({
    command: "read",
    describe: "View specific person",
    builder: {
        id: {
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data.viewPerson(x.id)
    }
})

//////////////////////////////////////////////////////
yargs.command({
    command: "delete",
    describe: "Delete specific person",
    builder: {
        id: {
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data.deletePerson(x.id)
    }
})

//////////////////////////////////////////////////////
yargs.command({
    command: "deleteAll",
    describe: "Delete all people",
    handler: () => {
        data.deleteAll()
    }
})

//////////////////////////////////////////////////////

yargs.command({
    command: "names",
    describe: "Show full name and city",
    handler: () => {
        data.showNames()
    }
})

yargs.parse()
