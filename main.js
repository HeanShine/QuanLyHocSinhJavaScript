let student = new Student('11', "Hean Xinh Gái", '15', '12', '2000', 'Nữ', 'C0423-H1', ' 0392291324', 'hean@gmail.com', 'https://scontent.fhan2-5.fna.fbcdn.net/v/t1.6435-9/97042504_2593386017645439_9136926804886421504_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Gnt2VDTDhK8AX-9Wbls&_nc_ht=scontent.fhan2-5.fna&oh=00_AfAeFVdnBYc99anWeQLdiem7Tq8VjC4hWS24fpRiw-gqjw&oe=649E4409');
let student1 = new Student('12', 'Girl So Cool', '15', '12', '2000', 'Nữ', 'C0423-H1', ' 0392291324', 'hean@gmail.com', 'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/335077514_733511744904629_7844445509851399034_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oJnjNd9f-HUAX8mlmIa&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAhYrxamFUaAP9xrjIKOJunaeRkyTzhjSQlNT34jggEwQ&oe=647B86EA');
let student2 = new Student('23', 'Vũ Hương', '25', '12', '2001', 'Nữ', 'C0423-H1', ' 0392291324', 'hean@gmail.com', 'https://scontent.fhan2-5.fna.fbcdn.net/v/t1.6435-9/79801099_2466574596993249_7897284391540359168_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RhrVebg9T8MAX8nc2vT&_nc_ht=scontent.fhan2-5.fna&oh=00_AfDKAlhizzYQeK3VCqHbP5WGbNJPnH8DLrfR6f9NeVS-8Q&oe=649E3456');

let arr = [student, student1, student2];

let studentManagement = new StudentManager(arr);

let studentCheckId = new Student();

function checkId(id) {
    for (let i = 0; i < arr.length; i++) {
        if (id === arr[i].id){
            return false;
        }
    }
    return true;
}

function addStudent() {

    let id = document.getElementById('id').value;

    if (!checkId(id)){
        document.getElementById("id").focus();
        alert("Id đã tồn tại! ")
        return;
    }

    let name = document.getElementById('fullName').value;

    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    let gender = document.getElementById('gender').value;

    let grade = document.getElementById('grade').value;
    let regexGrade = /^C0+[0-9]+[0-9]+-H1$/;

    let phoneNumber = document.getElementById('phoneNumber').value;
    let regexPhone = /^(0|\+84)\d{9}$/;

    let gmail = document.getElementById('gmail').value;
    let regexGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    let img = document.getElementById('img').value;


    let convertIntYear = parseInt(document.getElementById('year').value)
    let isLeapYear = false

    if (convertIntYear % 4 === 0) {
        if (year % 100 === 0) {
            if (convertIntYear % 400 === 0) {
                isLeapYear = true;
            } else {
                isLeapYear = false;
            }
        } else {
            isLeapYear = true;
        }
    } else {
        isLeapYear = false;
    }


    if (!regexGmail.test(gmail)) {
        document.getElementById("gmail").focus();
        alert("nhập lại gmail !")

    } else if (!regexPhone.test(phoneNumber)) {
        document.getElementById("phoneNumber").focus();
        alert("nhập lại số điện thoại !")

    } else if (month === "2" && day === "30") {
        document.getElementById("day").focus();
        alert("tháng 2 không có 30 ngày!")

    } else if ((month === "2" || month === "4" || month === "6" || month === "9" || month === "11") && day === "31") {
        document.getElementById("month").focus();
        alert("tháng này không có 31 ngày !")

    } else if (!regexGrade.test(grade)) {
        document.getElementById("grade").focus();
        alert("nhập đúng tên lớp !");

    } else if (month === "2" && day === "29" && isLeapYear === false) {
        document.getElementById("day").focus();
        alert("Không phải năm nhuận !");


    } else {
        let student = new Student(id, name, day, month, year, gender, grade, phoneNumber, gmail, img);

        studentManagement.add(student);
        studentManagement.showList();
        clear();
    }

}

function clear() {
    document.getElementById('id').value = '';
    document.getElementById('fullName').value = '';

    document.getElementById('month').value = '';
    document.getElementById('day').value = '';
    document.getElementById('year').value = '';

    document.getElementById('gender').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('gmail').value = '';

    document.getElementById('img').value = '';
}

function deleteStudent(id) {
    studentManagement.delete(id);
    studentManagement.showList();
}

function editStudent(id) {
    let student = studentManagement.findStudentById(id);
    document.getElementById('id').value = student.id;
    document.getElementById('fullName').value = student.fullName;

    document.getElementById('month').value = student.month;
    document.getElementById('day').value = student.day;
    document.getElementById('year').value = student.year;

    document.getElementById('gender').value = student.gender;
    document.getElementById('grade').value = student.grade;

    document.getElementById('phoneNumber').value = student.phoneNumber;
    document.getElementById('gmail').value = student.gmail;

    document.getElementById('img').value = student.img;

    studentId = id;
}

function updateStudent() {

    let id = document.getElementById('id').value;

    let fullName = document.getElementById('fullName').value;
    console.log(fullName)

    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    let gender = document.getElementById('gender').value;

    let grade = document.getElementById('grade').value;
    let regexGrade = /^C0+[0-9]+[0-9]+-H1$/;

    let phoneNumber = document.getElementById('phoneNumber').value;
    let regexPhone = /^(0|\+84)\d{9}$/;

    let gmail = document.getElementById('gmail').value;
    let regexGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    let img = document.getElementById('img').value;


    let convertIntYear = parseInt(document.getElementById('year').value)
    let isLeapYear = false

    if (convertIntYear % 4 === 0) {
        if (year % 100 === 0) {
            if (convertIntYear % 400 === 0) {
                isLeapYear = true;
            } else {
                isLeapYear = false;
            }
        } else {
            isLeapYear = true;
        }
    } else {
        isLeapYear = false;
    }


    if (!regexGmail.test(gmail)) {
        document.getElementById("gmail").focus();
        alert("nhập lại gmail !")

    } else if (!regexPhone.test(phoneNumber)) {
        document.getElementById("phoneNumber").focus();
        alert("nhập lại số điện thoại !")

    } else if ((month === "4" || month === "6" || month === "9" || month === "11") && day === "31") {
        document.getElementById("month").focus();
        alert("tháng này không có 31 ngày !")

    } else if (!regexGrade.test(grade)) {
        document.getElementById("grade").focus();
        alert("nhập đúng tên lớp !");

    } else if (month === "2" && day === "29" && isLeapYear === false) {
        document.getElementById("day").focus();
        alert("Không phải năm nhuận !");

    } else {
        let student = studentManagement.findStudentById(studentId);
        console.log(student)
        studentManagement.edit(student, id, fullName, day, month, year, gender, grade, phoneNumber, gmail, img);
        console.log(fullName)
        console.log(studentManagement)
        studentManagement.showList();
        clear();
    }

}
studentManagement.showList();

