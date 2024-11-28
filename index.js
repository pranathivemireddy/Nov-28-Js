//Question-1
var book = {
    'title': 'Things Fall Apart',
    author: 'chinua Achiba',
    'yearpublished': '1958'
}
console.log(book.author);
book['yearpublished'] = 2022
console.log(book['yearpublished'])
book['genre'] = 'fiction'
console.log(book['genre']);
console.log(book);
delete book.title;
console.log(book);

//Question-2
var employee = {
    'name': 'Preetam',
    age: 23,
    'position': 'developer',
    salary: 50000,
}
console.log(employee.position);
console.log(employee);
employee['department'] = 'HR';
console.log(employee);
delete employee.age;
console.log(employee);

//Question-3
var product = {
    id: 123,
    name: 'Cherith',
    price: 3400,
    category: 'A',
}
console.log(product.price);
console.log(product);
product['category'] = 'Electronics';
console.log(product);
product['inStock'] = 'true'
console.log(product);
delete product.id;
console.log(product);

//Question-4
var car = {
    make: 'petrol',
    model: 'i10',
    year: 2000,
    color: 'red',
}
console.log(car.make);
console.log(car);
product['color'] = 'Black';
console.log(car);
product['engineType'] = 'v6'
console.log(car);
delete car.year;
console.log(car);

//Question-5
var student = {
    name: 'Cherith',
    age: 10,
    grade: 'A',
    school: 'ABC'
}
console.log(student.school);
console.log(student);
product['grade'] = '95';
console.log(student);
student['hobbies'] = ['reading', 'sports']
console.log(student);
delete student.age;
console.log(student);

//Question-6
const user = {
    username: "john_doe",
    profile: {
        firstName: "John",
        lastName: "Doe",
        age: 28,
        address: {
            street: "456 Elm St",
            city: "Gotham",
            zip: "54321"
        }
    },
    preferences: {
        theme: "dark",
        notifications: true
    }
};
console.log(user.profile.address.city);
user.preferences['theme'] = 'light'
console.log(user)
user['profile'].phone = '555-9876';
console.log(user.profile);
delete user.profile.address.zip;
console.log(user);

//Question-7
const company = {
    name: "Tech Solutions",
    employees: [
        {
            name: "Alice",
            position: "Developer",
            contact: {
                email: "alice@tech.com",
                phone: "555-2345"
            }
        },
        {
            name: "Bob",
            position: "Manager",
            contact: {
                email: "bob@tech.com",
                phone: "555-6789"
            }
        }
    ],
    location: "New York"
};
console.log(company.employees[1].contact['email']);
company.employees[0].contact['phone'] = '555-1111';
console.log(company.employees[0]);
company.employees[0]['department'] = 'Engineering';
console.log(company.employees[0]);
delete company.location;
console.log(company);