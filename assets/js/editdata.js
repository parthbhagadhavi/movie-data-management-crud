
  const editForm = document.getElementById('editForm');

  editForm.addEventListener('submit', function (e) {
    e.preventDefault(); // form submit roka

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update this movie?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#00c2ff",
      cancelButtonColor: "#999",
      confirmButtonText: "Yes, update it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Movie details updated successfully.",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          editForm.submit(); 
        }, 1500);
      }
    });
  });
