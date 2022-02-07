
document.addEventListener('DOMContentLoaded', function() {
  var signUpViewSpace = {
    formValidate: function formValidate() {
      const sign_in_form = document.querySelector('.sign-in__form');
      const register_form = document.querySelector('.register__form');

      sign_in_form.addEventListener('submit', signInFormSend);
      register_form.addEventListener('submit', registerFormSend);

      const sign_in_form_inputs = sign_in_form.querySelectorAll('.form-field__input-required');
      const register_form_inputs = register_form.querySelectorAll('.form-field__input-required');

      sign_in_form_inputs.forEach(input_form => {
        input_form.addEventListener('change', fieldValidate);
        input_form.addEventListener('keydown', fieldValidate);
        input_form.addEventListener('keyup', fieldValidate);
      })

      register_form_inputs.forEach(input_form => {
        input_form.addEventListener('change', fieldValidate);
        input_form.addEventListener('keydown', fieldValidate);
        input_form.addEventListener('keyup', fieldValidate);
      })

      function signInFormSend(event) {
        event.preventDefault();

        let error = formValidate(sign_in_form);

        if (error === 0) {
          alert('Your data has been sent');
          sign_in_form.reset();
          sign_in_form.querySelectorAll('.form-field__input-required').forEach(input => input.classList.remove('form-field__input-valid'));
        } else {
          alert('Your data is incorrect');
        }
      }

      function registerFormSend(event) {
        event.preventDefault();

        let error = formValidate(register_form);

        if (error === 0) {
          alert('Your data has been sent');
          register_form.reset();
          register_form.querySelectorAll('.form-field__input-required').forEach(input => input.classList.remove('form-field__input-valid'));
        } else {
          alert('Your data is incorrect');
        }
      }

      function fieldValidate (event){
        const input = event.currentTarget;
        const strongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
        const minLength = 8;
        const maxLength = 20;

        formRemoveError(input);

        if (input.type === 'email') {
          if (emailTest(input)){
            if(input.closest('.form-field').querySelector('.form-field__message')){
              input.closest('.form-field').removeChild(input.nextSibling);
            }
            formAddError(input);
            const error = '<p class="form-field__message">Enter correct email</p>';
            input.insertAdjacentHTML('afterend', error);
          } else {
            formRemoveError(input);
            if(input.closest('.form-field').querySelector('.form-field__message')){
              input.closest('.form-field').removeChild(input.nextSibling);
            }
          }
        }

        else if (input.dataset.validateField === 'sign-in__password') {
          if (input.value.match(strongPassword)) {
            if(input.value.length >= minLength && input.value.length <= maxLength) {
              if(input.closest('.form-field').querySelector('.form-field__message')){
                input.closest('.form-field').removeChild(input.nextSibling);
              }
              formRemoveError(input);
            }
          } else {
            if(input.value.length < minLength) {
              if(input.closest('.form-field').querySelector('.form-field__message')){
                input.closest('.form-field').removeChild(input.nextSibling);
              }
              const error = '<p class="form-field__message">Minimum length is 8 characters</p>';
              input.insertAdjacentHTML('afterend', error);
              formAddError(input);
            } else if(input.value.length >= minLength && input.value.length <= maxLength) {
              if(input.closest('.form-field').querySelector('.form-field__message')){
                input.closest('.form-field').removeChild(input.nextSibling);
              }
              const error = '<p class="form-field__message">Invalid password</p>';
              input.insertAdjacentHTML('afterend', error);
              formAddError(input);
            } else if(input.value.length > maxLength) {
              if(input.closest('.form-field').querySelector('.form-field__message')){
                input.closest('.form-field').removeChild(input.nextSibling);
              }
              const error = '<p class="form-field__message">Maximum length is 20 characters</p>';
              input.insertAdjacentHTML('afterend', error);
              formAddError(input);
            }
          }
        }

        else if (input.dataset.validateField === 'register__password') {
          let confirmPassword = input.closest('.form-field').nextElementSibling.querySelector('.form-field__input-password--confirm');

          if (input.value.match(strongPassword)) {
            if(input.value.length >= minLength && input.value.length <= maxLength) {
              if(input.closest('.form-field').querySelector('.form-field__message')){
                input.closest('.form-field').removeChild(input.nextSibling);
              }
              formRemoveError(input);
            }
          } else {
            if(input.value.length < minLength) {
              if(input.closest('.form-field').querySelector('.form-field__message')){
                input.closest('.form-field').removeChild(input.nextSibling);
              }
              const error = '<p class="form-field__message">Minimum length is 8 characters</p>';
              input.insertAdjacentHTML('afterend', error);
              formAddError(input);
            } else if(input.value.length >= minLength && input.value.length <= maxLength) {
              if(input.closest('.form-field').querySelector('.form-field__message')){
                input.closest('.form-field').removeChild(input.nextSibling);
              }
              const error = '<p class="form-field__message">Invalid password</p>';
              input.insertAdjacentHTML('afterend', error);
              formAddError(input);
            } else if(input.value.length > maxLength) {
              if(input.closest('.form-field').querySelector('.form-field__message')){
                input.closest('.form-field').removeChild(input.nextSibling);
              }
              const error = '<p class="form-field__message">Maximum length is 20 characters</p>';
              input.insertAdjacentHTML('afterend', error);
              formAddError(input);
            }
          }

          if (input.value != confirmPassword.value) {
            if(confirmPassword.closest('.form-field').querySelector('.form-field__message')){
              confirmPassword.closest('.form-field').removeChild(confirmPassword.nextSibling);
            }
            const error = '<p class="form-field__message">Passwords don\'t match</p>';
            confirmPassword.insertAdjacentHTML('afterend', error);
            formAddError(confirmPassword);
          } else if (confirmPassword.value.match(strongPassword)) {
            if(confirmPassword.closest('.form-field').querySelector('.form-field__message')){
              confirmPassword.closest('.form-field').removeChild(confirmPassword.nextSibling);
            }
            formRemoveError(confirmPassword);
          }
        }

        else if(input.dataset.validateField === 'register__password--confirm') {
          let password = input.closest('.form-field').previousElementSibling.querySelector('.form-field__input-password');

          if (input.value.match(strongPassword)) {
            if (input.value == password.value) {
              if(input.closest('.form-field').querySelector('.form-field__message')){
                input.closest('.form-field').removeChild(input.nextSibling);
              }
              formRemoveError(input);
            } else if (input.value != password.value) {
              if(input.closest('.form-field').querySelector('.form-field__message')){
                input.closest('.form-field').removeChild(input.nextSibling);
              }
              const error = '<p class="form-field__message">Passwords don\'t match</p>';
              input.insertAdjacentHTML('afterend', error);
              formAddError(input);
            }
          } else {
            formAddError(input);
          }
        }

        else {

        }
      }

      function formValidate(form) {
        let error = 0;
        let formFields = form.querySelectorAll('.form-field__input-required');

        formFields.forEach(input => {
          if (input.classList.contains('form-field__input-invalid') || input.value === '') {
            console.log(error)
            console.log(input)
            error++;
            console.log('ERROR');
          }
        })

        return error;
      }

      function formAddError(input) {
        input.classList.remove('form-field__input-valid');
        input.classList.add('form-field__input-invalid');
      }

      function formRemoveError(input) {
        input.classList.remove('form-field__input-invalid');
        input.classList.add('form-field__input-valid');
      }

      function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
      }
    }
  }

  signUpViewSpace.formValidate();
});
