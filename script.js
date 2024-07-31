document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const marks = parseInt(document.getElementById('marks').value);
    let grade, passStatus;

    if (marks >= 90) {
        grade = 'A+';
    } else if (marks >= 80) {
        grade = 'A';
    } else if (marks >= 70) {
        grade = 'B+';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C+';
    } else if (marks >= 40) {
        grade = 'C';
    } else if (marks >= 30) {
        grade = 'D+';
    } else if (marks >= 20) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    passStatus = (marks >= 30) ? 'Passed' : 'Failed';

    document.getElementById('result').textContent = `Grade: ${grade} - ${passStatus}`;
});
