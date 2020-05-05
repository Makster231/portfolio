(function ($, window, document) {
  function name(name) {
    return /^(([a-zA-ZÀ-ÿ`']{0,}([.]{1})?[ |.\s|`|'|-][a-zA-ZÀ-ÿ]{1,}){1,})([.]?|[']?|[`]?)[ ]?$/.test(
      name
    );
  }

  function email(email) {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email
    );
  }

  jQuery.validator.setDefaults({
    errorElement: "label",
    errorClass: "error",
    focusInvalid: false,

    errorPlacement: function (error, element) {
      $(element).closest(".form-group").append(error);
    },

    highlight: function (element, errorClass, validClass) {
      let fieldWrap = $(element).closest(".form-group");

      fieldWrap.addClass("has-error");
      $(element).addClass("error");
    },

    unhighlight: function (element, errorClass, validClass) {
      $(element).closest(".form-group").removeClass("has-error");
      $(element).removeClass("error");
    },
  });

  function formValidate(form) {
    form.validate({
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
        },
        textarea: {
          required: false,
          minlength: 20,
        },
      },

      messages: {
        name: {
          required: "Введите Ваше Имя",
        },
        email: {
          required: "Введите Валидный E-mail",
        },
        textarea: {
          minlength: "Введите Как Минимум 20 Знаков",
        },
      },
    });
  }

  function formSubmit() {
    $(".js_form").on("submit", function (e) {
      e.preventDefault();
      let $form = $(this);
      let $form_btn = $(this).find("button");

      formValidate($form);

      let isValid = $form.valid();

      if (!isValid) {
        return;
      }

      $form_btn.addClass("js_loader").attr("disabled", true);

      var data = $form.serialize();

      $.ajax({
        type: "POST",
        url: "./mail.php",
        data: data,
        success: function (msg) {
          if (msg == "OK") {
            setTimeout(function () {
              $form.addClass("js_form-success");
              $form_btn.removeClass("js_loader").attr("disabled", false);
            }, 1000);
          } else {
            alert("Произошла какая-то ошибка, пожалуйста, попробуйте позже");
            $form_btn.removeClass("js_loader").attr("disabled", false);
          }
        },
      });
    });
  }

  $(() => {
    formSubmit();
  });
})(window.jQuery, window, document);
