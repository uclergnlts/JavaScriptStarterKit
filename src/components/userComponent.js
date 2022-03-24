import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Üçler", "Gönültaş" , "Ankara", 27)
let user2 = new User(2,"Aynur", "Aydın" , "Ankara", 25)
userService.add(user1)
userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))

console.log("------------------------------")
userService.load()

let customerToAdd = new Customer(1,"Ali", "Bektaş" , "Ankara", 25)
customerToAdd.type = "customer"
userService.add(customerToAdd)
console.log(userService.costumers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())
