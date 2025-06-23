
  const form = document.getElementById('movieForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // default form submit rok diya

    const title = document.getElementById('title').value.trim();
    const genre = document.getElementById('genre').value.trim();
    const year = document.getElementById('year').value.trim();

    if (title === "" || genre === "" || year === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all required fields!',
        confirmButtonColor: '#e60000'
      });
      return;
    }

    Swal.fire({
      title: 'Add this movie?',
      text: "Movie will be saved to the dashboard!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#00c2ff',
      cancelButtonColor: '#999',
      confirmButtonText: 'Yes, save it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Movie Added!',
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          form.submit(); // form ab submit hoga
        }, 1500);
      }
    });
  });
