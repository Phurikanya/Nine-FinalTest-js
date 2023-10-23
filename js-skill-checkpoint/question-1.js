// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้

// แก้ข้อมูล
inventory.apple.quantity = 200
console.log(inventory.apple) // { price: 35, quantity: 200 }

// เพิ่ม object ใหม่
Object.assign(inventory, {orange: {price: 20, quantity: 300}})
console.log(inventory)


// หาผลรวม
let total = 0
for (let all in inventory){
  total += inventory[all].price * inventory[all].quantity
}

console.log(`Total inventory value: ${total} bath`) // Total inventory value: 13500 bath 
