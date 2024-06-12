document.addEventListener('DOMContentLoaded', function() {
    let reports = localStorage.getItem('reports');
    reports = reports ? JSON.parse(reports) : [];

    const reportsTableBody = document.querySelector('#reportsTable tbody');
    if (reports.length === 0) {
        reportsTableBody.innerHTML = '<tr><td colspan="9">No reports found.</td></tr>';
    } else {
        reports.forEach(report => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${report.date}</td>
                <td>${report.time}</td>
                <td>${report.state}</td>
                <td>${report.district}</td>
                <td>${report.location}</td>
                <td>${report.vehicleType}</td>
                <td>${report.vehicleNumber}</td>
                <td><img src="${report.photo}" alt="Photo"></td>
                <td>${report.description}</td>
            `;

            reportsTableBody.appendChild(row);
        });
    }
});
