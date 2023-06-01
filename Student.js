class Student {
    id
    fullName
    day
    month
    year
    gender
    grade
    phoneNumber
    gmail
    img

    constructor(id, fullName, day, month, year, gender, grade, phoneNumber, gmail, img) {
        this.id = id;
        this.fullName = fullName;
        this.day = day;
        this.month = month;
        this.year = year;
        this.gender = gender;
        this.grade = grade;
        this.phoneNumber = phoneNumber;
        this.gmail = gmail;
        this.img = img;
    }


    save(id, fullName, day, month, year, gender, grade, phoneNumber, gmail, img) {
        this.id = id;
        this.fullName = fullName;
        this.day = day;
        this.month = month;
        this.year = year;
        this.gender = gender;
        this.grade = grade;
        this.phoneNumber = phoneNumber;
        this.gmail = gmail;
        this.img = img
    }
}