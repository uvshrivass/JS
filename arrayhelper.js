//Example on forEach array method
var a = [1,2,3,4,5]

function forEach(){
    a.forEach(i=>{
        console.log(i)
    })
}

forEach();


//Example on map array method
var b = [{"name":"ujjwal"},{"name":"amit"},{"name":"aditya"}]

var c =   b.map(j=>{
        return (j.name)
    })


console.log(c)
