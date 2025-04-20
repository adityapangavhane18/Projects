function showStudentForm() {
    hideAllForms();
    document.getElementById("student-form").classList.add("active-form");
}

function showFacultyForm() {
    hideAllForms();
    document.getElementById("faculty-form").classList.add("active-form");
}

function showAnnouncements() {
    hideAllForms();
    document.getElementById("announcements").classList.add("active-form");
}

function showAssignForm() {
    hideAllForms();
    document.getElementById("assign-form").classList.add("active-form");
}

function hideAllForms() {
    document.querySelectorAll('.form-container').forEach(form => {
        form.classList.remove('active-form');
    });
}

