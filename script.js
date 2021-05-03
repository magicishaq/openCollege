
const URL = 'http://leads.beta.openstudycollege.info/getTopLeads'

var promise = fetch(URL)

promise.then((response, reject) => response.json())
.then(data => {
console.log(data)
var random = Math.floor(Math.random() * data.length); 
var user = data[random]; 

console.log(user); 
})
