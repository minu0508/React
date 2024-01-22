import React from "react";

const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {/* key를 포맷팅 된 문자열로 변경
            {students.map((student) => {
                return <li key={`student-id-${student.id}`}>{student.name}</li> */}
                
            {/* key를 index로 변경 */}
            {students.map((student, index) => {
                return <li key={index}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;