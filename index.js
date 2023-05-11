const team = [ 

  { name: "Josh" , surname: "Adams" , job :"developer" , age :30 },
  { name: "Mary" , surname: "Bary" , job :"tester" , age :22 },
  { name: "Hazel" , surname: "Nut" , job :"developer" , age :20 }
]


/*  name and surname i birlesetirip uppercase yap ve bunu fullnamekey olarak sakla 
age i de 5 artirip age key olarak saklayan diziyi donduren kodu yaziniz 
*/

// const teamFullName = team.map( (p) => ({ 
//  fullName : p.name.toLocaleUpperCase()+" "+ p.surname.toLocaleUpperCase(),
//  age: p.age +5 , 
// }) )

// console.log(teamFullName);

const teamFullName = team.map((p) => { 
  return {
    fullName : p.name.toLocaleUpperCase()+" "+ p.surname.toLocaleUpperCase(),
    age: p.age +5 ,
  }
} ) 
console.log(teamFullName);