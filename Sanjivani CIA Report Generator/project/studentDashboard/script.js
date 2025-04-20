document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const prn = document.getElementById('prn').value;
    const motherName = document.getElementById('motherName').value;

    // Simulate validation (in real case, validate with the server or database)
    if (prn === 'UCS22M1066' && motherName.toLowerCase() === 'indumati') {
        document.getElementById('resultSection').classList.remove('hidden');
    } else {
        alert('Invalid PRN or Mother\'s Name. Please try again.');
    }
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const resultTable = document.querySelector('table');
    const pdfContent = resultTable.outerHTML;

    // Create a PDF document from the table content
    const newWindow = window.open();
    newWindow.document.write('<html><head><title>Result</title></head><body>');
    newWindow.document.write(pdfContent);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.print();
});