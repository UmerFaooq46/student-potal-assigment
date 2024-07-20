document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('attendance-form');
    const tableBody = document.getElementById('attendance-table').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const studentName = document.getElementById('student-name').value;
        const studentId = document.getElementById('student-id').value;
        const date = document.getElementById('date').value;
        const status = document.getElementById('status').value;

        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <td>${studentName}</td>
            <td>${studentId}</td>
            <td>${date}</td>
            <td>${status}</td>
        `;

        form.reset();
    });
});
