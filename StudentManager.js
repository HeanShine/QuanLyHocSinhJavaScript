class StudentManager {
    students
    constructor(arr) {
        this.students = arr;
    }
    showList() {
        let showTable = '';
        for (let i = 0; i < this.students.length; i++) {


            showTable += '<tr>';
            showTable += '<td>';
            showTable += this.students[i].id;
            showTable += '</td>';

            showTable += '<td>';
            showTable += this.students[i].fullName;
            showTable += '</td>';

            showTable += '<td>';
            showTable += this.students[i].day + "/" + this.students[i].month + "/" + this.students[i].year;
            showTable += '</td>';

            showTable += '<td>';
            showTable += this.students[i].gender;
            showTable += '</td>';

            showTable += '<td>';
            showTable += this.students[i].grade;
            showTable += '</td>';

            showTable += '<td>';
            showTable += this.students[i].phoneNumber;
            showTable += '</td>';

            showTable += '<td>';
            showTable += this.students[i].gmail;
            showTable += '</td>';

            showTable += '<td>';
            showTable += '<img width="100px" height="100px" src=" ' + this.students[i].img + '">';
            showTable += '</td>';

            showTable += '<td>' +
                '<button style="background-color: red; color: white "  type="button" onclick="deleteStudent(' + i + ')">Delete</button> ' +
                ' <button  style="background-color: orange ; color: white" type="button" onclick="editStudent(' + i + ')">Edit</button>' +
                '</td>';

            showTable += '</tr>';
        }
        document.getElementById('list-student').innerHTML = showTable;
    }

    add(student) {
        this.students.push(student);
    }

    delete(id) {
        this.students.splice(id, 1);
    }

    findStudentById(id) {
        return this.students[id];
    }

    edit(student, id, fullName, day, month, year, gender, grade, phoneNumber,gmail, img) {
        student.save(id, fullName, day, month, year, gender, grade,phoneNumber,gmail ,img);
    }
}

