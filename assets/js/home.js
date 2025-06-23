
   function handleEdit(event, id) {
    event.preventDefault(); 

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to edit this movie?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#00c2ff",
      cancelButtonColor: "#999",
      confirmButtonText: "Yes, edit it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Redirecting...",
          text: "Opening edit page...",
          icon: "info",
          showConfirmButton: false,
          timer: 1500
        });

        setTimeout(() => {
          window.location.href = `/editdata?id=${id}`;
        }, 1500);
      }
    });
  }
  function handleDelete(event,id) {
     event.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e60000",
      cancelButtonColor: "#00c2ff",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Movie has been deleted.",
          icon: "success",
          timer: 3000,
          showConfirmButton: false
        });

        setTimeout(() => {
          window.location.href = `/deletedata?id=${id}`;
        }, 3000);
      }
    });
  }