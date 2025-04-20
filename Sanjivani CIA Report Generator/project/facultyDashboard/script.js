const departmentClasses = {
    "comp-dept": {
        "First Year": ["FY-A", "FY-B"],
        "Second Year": ["SY-A", "SY-B"],
        "Third Year": ["TY-A", "TY-B"],
        "B-Tech": ["B-Tech A", "B-Tech B"]
    },
    "it-dept": {
        "First Year": ["FY-IT-A", "FY-IT-B"],
        "Second Year": ["SY-IT-A", "SY-IT-B"],
        "Third Year": ["TY-IT-A", "TY-IT-B"],
        "B-Tech": ["B-Tech IT A", "B-Tech IT B"]
    },
    "ece-dept": {
        "First Year": ["FY-ECE-A", "FY-ECE-B"],
        "Second Year": ["SY-ECE-A", "SY-ECE-B"],
        "Third Year": ["TY-ECE-A", "TY-ECE-B"],
        "B-Tech": ["B-Tech ECE A", "B-Tech ECE B"]
    },
    "mech-dept": {
        "First Year": ["FY-MECH-A", "FY-MECH-B"],
        "Second Year": ["SY-MECH-A", "SY-MECH-B"],
        "Third Year": ["TY-MECH-A", "TY-MECH-B"],
        "B-Tech": ["B-Tech MECH A", "B-Tech MECH B"]
    },
    "mechatronics-dept": {
        "First Year": ["FY-MECHATRONICS-A", "FY-MECHATRONICS-B"],
        "Second Year": ["SY-MECHATRONICS-A", "SY-MECHATRONICS-B"],
        "Third Year": ["TY-MECHATRONICS-A", "TY-MECHATRONICS-B"],
        "B-Tech": ["B-Tech MECHATRONICS A", "B-Tech MECHATRONICS B"]
    },
    "electrical-dept": {
        "First Year": ["FY-EE-A", "FY-EE-B"],
        "Second Year": ["SY-EE-A", "SY-EE-B"],
        "Third Year": ["TY-EE-A", "TY-EE-B"],
        "B-Tech": ["B-Tech EE A", "B-Tech EE B"]
    },
    "civil-dept": {
        "First Year": ["FY-CIVIL-A", "FY-CIVIL-B"],
        "Second Year": ["SY-CIVIL-A", "SY-CIVIL-B"],
        "Third Year": ["TY-CIVIL-A", "TY-CIVIL-B"],
        "B-Tech": ["B-Tech CIVIL A", "B-Tech CIVIL B"]
    },
    "structural-dept": {
        "First Year": ["FY-STRUCT-A", "FY-STRUCT-B"],
        "Second Year": ["SY-STRUCT-A", "SY-STRUCT-B"],
        "Third Year": ["TY-STRUCT-A", "TY-STRUCT-B"],
        "B-Tech": ["B-Tech STRUCT A", "B-Tech STRUCT B"]
    }
};

const studentsData = {
    // Computer Department
    "FY-A": [
        { prn: "1001", roll: "1", name: "Kunal Pathak", cia1: 80, cia2: 85, cia3: 90 },
        { prn: "1002", roll: "2", name: "Kartik Kale", cia1: 78, cia2: 88, cia3: 85 }
    ],
    "FY-B": [
        { prn: "1003", roll: "1", name: "Aditya More", cia1: 75, cia2: 79, cia3: 84 }
    ],
    // Information Technology Department
    "FY-IT-A": [
        { prn: "2001", roll: "1", name: "Aditya Pangavahane", cia1: 75, cia2: 80, cia3: 70 },
        { prn: "2002", roll: "2", name: "Akash Shinde", cia1: 82, cia2: 90, cia3: 88 }
    ],
    "FY-IT-B": [
        { prn: "2003", roll: "1", name: "Prasad Sanap", cia1: 67, cia2: 76, cia3: 79 }
    ],
    // Electronics and Communication Engineering Department
    "FY-ECE-A": [
        { prn: "3001", roll: "1", name: "Prasad Parjane", cia1: 70, cia2: 78, cia3: 80 },
        { prn: "3002", roll: "2", name: "Sachin Pachore", cia1: 85, cia2: 85, cia3: 90 }
    ],
    "FY-ECE-B": [
        { prn: "3003", roll: "1", name: "Krishna Shelar", cia1: 74, cia2: 82, cia3: 88 }
    ],
    // Mechanical Department
    "FY-MECH-A": [
        { prn: "4001", roll: "1", name: "Sahil Chavan", cia1: 68, cia2: 73, cia3: 77 }
    ],
    "FY-MECH-B": [
        { prn: "4002", roll: "2", name: "Rohan Deshmukh", cia1: 81, cia2: 84, cia3: 85 }
    ],
    // Mechatronics Department
    "FY-MECHATRONICS-A": [
        { prn: "5001", roll: "1", name: "Manoj Patil", cia1: 72, cia2: 77, cia3: 80 }
    ],
    "FY-MECHATRONICS-B": [
        { prn: "5002", roll: "2", name: "Nikhil Kulkarni", cia1: 75, cia2: 80, cia3: 78 }
    ],
    // Electrical Department
    "FY-EE-A": [
        { prn: "6001", roll: "1", name: "Tanmay Jadhav", cia1: 78, cia2: 81, cia3: 83 }
    ],
    "FY-EE-B": [
        { prn: "6002", roll: "2", name: "Ankit Gaikwad", cia1: 85, cia2: 87, cia3: 89 }
    ],
    // Civil Department
    "FY-CIVIL-A": [
        { prn: "7001", roll: "1", name: "Sagar Pawar", cia1: 79, cia2: 82, cia3: 80 }
    ],
    "FY-CIVIL-B": [
        { prn: "7002", roll: "2", name: "Rajesh Patil", cia1: 70, cia2: 75, cia3: 78 }
    ],
    // Structural Department
    "FY-STRUCT-A": [
        { prn: "8001", roll: "1", name: "Amit Desai", cia1: 68, cia2: 72, cia3: 74 }
    ],
    "FY-STRUCT-B": [
        { prn: "8002", roll: "2", name: "Vikas Mahajan", cia1: 82, cia2: 85, cia3: 87 }
    ]
};



function showClasses(departmentId, element) {
    const classCardsContainer = document.getElementById('class-cards');
    classCardsContainer.innerHTML = '';

    const departments = document.querySelectorAll('.department');
    departments.forEach(dept => dept.classList.remove('active'));
    element.classList.add('active');

    const classes = departmentClasses[departmentId];
    for (const [groupName, groupClasses] of Object.entries(classes)) {
        const groupCard = document.createElement('div');
        groupCard.classList.add('group-card');

        const groupHeading = document.createElement('h4');
        groupHeading.textContent = groupName;
        groupCard.appendChild(groupHeading);

        groupClasses.forEach(cls => {
            const classCard = document.createElement('div');
            classCard.classList.add('class-card');
            classCard.textContent = cls;
            classCard.onclick = () => showStudentTable(cls);
            groupCard.appendChild(classCard);
        });

        classCardsContainer.appendChild(groupCard);
    }

    classCardsContainer.style.display = 'grid';
    document.getElementById('table-container').style.display = 'none';
}

function showStudentTable(className) {
    const tableContainer = document.getElementById('table-container');
    const tbody = document.getElementById('student-table').querySelector('tbody');
    tbody.innerHTML = '';

    const students = studentsData[className] || [];
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.prn}</td>
            <td>${student.roll}</td>
            <td>${student.name}</td>
            <td>${student.cia1}</td>
            <td>${student.cia2}</td>
            <td>${student.cia3}</td>
            <td>
                <button class="action-button" onclick="editMarks('${student.prn}', '${className}')">Edit</button>
                <button class="action-button" onclick="viewMarks('${student.prn}', '${className}')">View</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    document.querySelector('.class-cards').style.display = 'none';
    tableContainer.style.display = 'block';
}

function editMarks(prn, className) {
    const student = studentsData[className].find(s => s.prn === prn);
    if (student) {
        const newMarks = prompt(
            "Enter new marks (CIA1,CIA2,CIA3) separated by commas:",
            `${student.cia1},${student.cia2},${student.cia3}`
        );

        if (newMarks) {
            const [cia1, cia2, cia3] = newMarks.split(',').map(Number);
            student.cia1 = cia1;
            student.cia2 = cia2;
            student.cia3 = cia3;

            alert('Marks updated successfully!');
            showStudentTable(className);
        }
    }
}

function viewMarks(prn, className) {
    const student = studentsData[className].find(s => s.prn === prn);
    if (student) {
        alert(`
            PRN: ${student.prn}
            Name: ${student.name}
            CIA1: ${student.cia1}
            CIA2: ${student.cia2}
            CIA3: ${student.cia3}
        `);
    }
}

function goBack() {
    document.getElementById('table-container').style.display = 'none';
    document.querySelector('.class-cards').style.display = 'grid';
}