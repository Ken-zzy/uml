class AlarmSystem {
    static alarms = []; // Static list to store all alarms

    static setAlarm(alarmID, time, label) {
        const alarm = { alarmID, time, label };
        AlarmSystem.alarms.push(alarm);
        console.log(`Alarm set for ${label} at ${time}.`);
    }

    static disableAlarm(alarmID) {
        AlarmSystem.alarms = AlarmSystem.alarms.filter(alarm => alarm.alarmID !== alarmID);
        console.log(`Alarm with ID ${alarmID} has been disabled.`);
    }
}

class ClassSchedule {
    constructor(classID, subject, time) {
        this.classID = classID;
        this.subject = subject;
        this.time = time;
    }

    getScheduleDetails() {
        return `${this.subject} at ${this.time}`;
    }
}

class Student {
    constructor(studentID, name) {
        this.studentID = studentID;
        this.name = name;
        this.timetable = [];
    }

    addClass(classSchedule) {
        this.timetable.push(classSchedule);
        console.log(`Class ${classSchedule.subject} added to ${this.name}'s timetable.`);
    }

    viewTimetable() {
        console.log(`Timetable for ${this.name}:`);
        this.timetable.forEach(schedule => console.log(schedule.getScheduleDetails()));
    }
}

// Example Usage
const student = new Student("S001", "Alice");

// Adding classes to the timetable
const class1 = new ClassSchedule("C001", "Math 101", "9:00 AM");
const class2 = new ClassSchedule("C002", "History 202", "11:00 AM");
student.addClass(class1);
student.addClass(class2);

// Viewing timetable
student.viewTimetable();

// Setting alarms
AlarmSystem.setAlarm("A001", "8:50 AM", "Math 101");
AlarmSystem.setAlarm("A002", "10:50 AM", "History 202");

// Disabling an alarm
AlarmSystem.disableAlarm("A001");
