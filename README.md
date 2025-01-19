# Title of the System
University Timetable Alarm System

## Description:
This system helps university students manage their timetable by setting alarms for their classes. It enables students to input their class schedules, set reminders, and receive notifications when it's time for their next class.

## Class Diagram

Class: Student
* studentID : String
* name : String
* timetable : List<lectureSchedule>
* addlecture(schedule: lectureSchedule)
* viewTimetable()

Class: ClassSchedule
* classID : String
* course : String
* time : String
* getScheduleDetails()

Class: AlarmSystem
* alarms : List<Alarm>
* setAlarm(alarmID: String, time: String, label: String)
* disableAlarm(alarmID: String)

## UML diagram
[Image of the UML diagram](https://www.plantuml.com/plantuml/uml/SoWkIImgAStDuKfCBialKWWkAKr9pIlXWj8Akhfs2XgEAIaApZc9nSKA9VaA8PcvgIM9IJcfcgYAmZ9Jot5A1gUMA3Zc91RbAgJb5q7CGbFXabaCqWTHfSdba9gN0dGL0000)
