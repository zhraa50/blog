const successAlert = async (message) => {
    await Swal.fire({
      title: message,
      icon: 'success',
      showConfirmButton: false,
      timer: 1000,
      heightAuto: false,
    });
  };
  
  const errorAlert = (message) => {
    Swal.fire({
      title: message,
      icon: 'error',
      heightAuto: false,
    });
  };