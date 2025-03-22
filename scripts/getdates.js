let year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;


document.addEventListener("DOMContentLoaded", function() {
    let lastModifiedDate = new Date(document.lastModified);
    let formattedDate = lastModifiedDate.toLocaleString('en-US', {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });

    document.getElementById("lastModified").textContent = formattedDate;
});