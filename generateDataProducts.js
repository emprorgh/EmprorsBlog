var faker = require('faker');
var db = { "products":[]};
var myResultArray = ["pass", "fail"];
 

for(var i = 1; i<=30; i++){
    db.products.push(
        {
            ProductID: i,
            ProductName: faker.commerce.productName(),
            AutomationStatus : faker.random.boolean(),
            AutomatedTestName : faker.random.words(70),
            AutomatedBy: faker.name.firstName() + " " + faker.name.lastName(),
            AuthoredBy:faker.name.firstName() + " " + faker.name.lastName(),
            Priority: faker.random.number(5),
            tags:faker.random.number(1),
            TestResult: myResultArray[Math.floor(Math.random()*myResultArray.length)],
            TestUser: faker.name.firstName() + faker.name.lastName(),
            TestDate: faker.time.recent()

    
        }
    )
}
console.log(JSON.stringify(db));