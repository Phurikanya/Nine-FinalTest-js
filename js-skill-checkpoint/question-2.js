// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
userTaskList.push ({id: 5, task: "Walk to dog"}) // เพิ่ม Task ล่างสุด
userTaskList[3] = { id: 4, task: "Go to the gym"} // แก้ข้อมูล Task

userTaskList.pop([4]) // ลบ Task สุดท้ายทิ้ง
console.log(userTaskList)
