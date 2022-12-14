// var student = {
//     name : 'Hamza',
//     id: 234,
//    rollNo: 5,
// }
// student.name='XYZ'
// student.subject='english'
// delete student.name // property name will be deleted

// console.log(student)


var student1 = {
    name: 'Ali',
    id: 235,
    rollNo: 6,
}

var student2 = {
    name: 'Basit',
    id: 236,
    rollNo: 7,
}

var student3 = {
    name: 'Babar',
    id: 237,
    rollNo: 8,
}

var student4 = {
    name: 'Dan',
    id: 238,
    rollNo: 9,
}

// delete student4.id;
// var a = 237 in student4
// student4.id=237
// console.log(student4)

var student5 = {
    name: 'Dan',
    id: 238,
    rollNo: 9,
}


var student6 = {
    name: 'Lio',
    id: 239,
    rollNo: 10,
}


var student7 = {
    name: 'gigi',
    id: 240,
    rollNo: 11,
}

var student8 = {
    name: 'haded',
    id: 241,
    rollNo: 12,
}

var student9 = {
    name: 'hameed',
    id: 242,
    rollNo: 13,
}

var student10 = {
    name: 'faiz',
    id: 243,
    rollNo: 14,
}


var a = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10]
// console.log(a)

var b = document.getElementById("big")
// var Rollno= 14;
// for(var i=0; i<a.length;i++){
//     if(Rollno==a[i].rollNo)
// console.log(a[i])} // running by given roll no value


function cut() {

    var c = b.value;
    for (var i = 0; i < a.length; i++) {
        if (c == a[i].rollNo) {
            // console.log(a[i])

            var you = document.getElementById("pop")
            // you.innerHTML = 'NAME : '+ a[i].name + '<br/>' + 'ID : '+ a[i].id
           you.innerHTML+='Name : '+ a[i].name + '<br/>' +  'ID :'+ a[i].id


        }
        big.value = ""

    }
}

// var you = document.getElementById("pop")
// you.innerHTML=(a[i])
