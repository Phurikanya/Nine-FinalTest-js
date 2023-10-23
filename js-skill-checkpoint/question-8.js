// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้

const list = ()=>{
    return fetch("https://jsonplaceholder.typicode.com/users")
}

const array = (response) => {
    return response.json()
}

const final = (data) => {
    let newList = Array.from(data)
console.log(newList)
 }






list().then(array).then(final)













