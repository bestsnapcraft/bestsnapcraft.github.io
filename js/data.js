const scriptURL = 'https://script.google.com/macros/s/AKfycbwLHtKuuZkvSmjecOGpj4qVMtWE-9FEmiP6gkhLfYhBPFHwy8woX18PBdUkOAP7ax4uGA/exec';
const form = document.forms['contact-from'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //   ketika tombol submit di klik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      //   tampilkan alert
      myAlert.classList.toggle('d-none');
      //   reset from
      form.reset();

      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
