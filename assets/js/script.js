
document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let table = document.querySelector("#userTable tbody");

    let row = table.insertRow();

    row.innerHTML = `
      <td>${fname.value}</td>
      <td>${lname.value}</td>
      <td>${userid.value}</td>
      <td>${email.value}</td>
      <td>${mobile.value}</td>
      <td>${address.value}</td>
      <td>${description.value}</td>
      <td>
  <button class="btn btn-sm btn-delete" onclick="deleteRow(this)">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6H21" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" />
      <path d="M8 6V4H16V6" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" />
      <path d="M6 6L7 20H17L18 6" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" />
      <path d="M10 11V17" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" />
      <path d="M14 11V17" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" />
    </svg>
  </button>
</td>

    `;

    // Reset form
    this.reset();

    // Close offcanvas
    let canvas = bootstrap.Offcanvas.getInstance(
        document.getElementById("userFormCanvas")
    );
    canvas.hide();
});

function deleteRow(btn) {
    if (confirm("Are you sure you want to delete this user?")) {
        let row = btn.closest("tr");
        row.remove();
    }
}