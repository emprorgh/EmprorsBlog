var faker = require('faker');
var db = { "testCaseReport":[]};
var myResultArray = ["pass", "fail"];
 

for(var i = 1; i<=100; i++){
    db.testCaseReport.push(
        {
            TestCaseID: i,
            TestCaseTitle : faker.random.words(30) ,
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