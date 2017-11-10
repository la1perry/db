
const mysql=require('mysql');

let connection=mysql.createConnection({
    host: 'wmdd4920.cmwfjedpl1zq.us-west-2.rds.amazonaws.com',
    user:'root',
    password:'wmdd4920',
    database:'Ecommerce_Platform',
    port:'3306',
    charset:'utf8'
});

connection.connect();

let createDonors='create table donors (id int(11)not null, name varchar(50),sex varchar(1),age int(2), address varchar(50), phone_num varchar(20), PRIMARY KEY (id))';
let createBank='create table banks (bno int(11) not null, blood_type varchar(3), units int(11), PRIMARY KEY (bno))';
let createBloodDonations='create table donations(bno int(11), blood_type varchar(3), code varchar(50), id int(11), cost int(11), amount int(11), PRIMARY KEY (code))';
let createHospital='create table hospitals(name varchar(50), address varchar (50), phone_num varchar(20) PRIMARY KEY(name))';
let createOrders='create table orders(order_num int(11), hospital varchar(50), bno int(11), blood_type varchar(3), amount int(11), PRIMARY KEY(order_num))';
let createIssues='create table issues(issue_num int(11), order_num int(11), bno int(11), hospital varchar(50), blood_type varchar(3), amount int(11), PRIMARY KEY (issue_num))';
let createEmployees='create table employees(emp_num int(11), bno int(11), name varchar(50), phone_num varchar(20), address varchar(50), email varchar(50), position varchar(50), PRIMARY KEY (emp_num)';

let donors="insert into donors values((1, 'john smith','m', 33, '102 Greens Way', '660-404-9440'),(2, 'jane king','f', 41, '12-322 Richard st.', '460-412-5560'),(3, 'Arthur Knight','m', 29, '14 Moon Cres.', '430-564-4442'),(4,'karen phillips','f',30,'192 Inglewood Dr.', '303-434-2443'))";
let banks="insert into banks values((1, 'AB-', 55),(1, 'A+', 90),(1, 'B-', 40),(2, 'O', 23),(2, 'B+', 31),(2, 'A-', 16))"
let donations="insert into donations values((1, 'A','1-1',1, 11, .5),(1, 'B-','2-1',1, 2, 0.8),(1, 'O','3-1',3, 15, 1),(1, 'A','1-2',1, 11, 0.5),(1, 'B-','2-2',2, 11, 0.5),(1, 'O','3-2',3, 15, 1),(1, 'B+','4-1',4, 10, 1))";
let hospitals="insert into hospitals values(('St. Mary','447 Aberdine Rd', '849-443-4335'),('St. Augustine,'447 Cordova St.', '449-673-2735'))";
let employees="insert into employees values ((2, 1,'Jason lee','434-678-1567', '445 Nice st', null, 'receptionist'),(1, 1,'Jennifer Casey','444-343-6787', null, 'jcasey@outlook.com', 'manager'),(3, 2,'Harvey Cruz','933-243-5687', null, 'hcruz@gmail.com', 'manager'),(4, 2,'Grace Samson','444-343-6787', '456 Arbutis st', null, 'receptionist'))";
let issues="insert into issues values ((1, 'St. Mary', 1,'A',3),(2, 'St. Mary', 1,'B-',5),(3, 'St. Mary', 1,'O',1),(4, 'St. Augustine', 1,'A+',3),(5, 'St. Augustine', 1,'AB-',3))";
let orders="insert into order values ((1,3,1,'St Mary','O', 1),(2,1,1,'St Mary','A', 3),(3,4,1,'St Mary','A+', 3))";


connection.query(createDonors, function(err, rows){
    if(err)throw err;
    console.log(rows);
})