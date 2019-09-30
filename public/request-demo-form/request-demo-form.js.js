jQuery(document).ready(function ($) {
  "use strict";
  $('#requestDemoForm').validate({
    rules: {
      firstName: {
        required: true,
        minlength: 2,
        maxlength: 30
      },
      lastName: {
        minlength: 2,
        maxlength: 30
      },
      email: {
        required: true,
        email: true,
        minlength: 4,
        maxlength: 40
      },
      phone: {
        minlength: 5,
        maxlength: 13
      },
      message: {
        minlength: 10,
        maxlength: 500
      }

    },
    messages: {
      firstName: {
        required: "Required",
        minlength: jQuery.validator.format("At least {0} characters required!"),
        maxlength: jQuery.validator.format("Maximum {0} characters!"),
      },
      lastName: {
        required: "Required",
        minlength: jQuery.validator.format("At least {0} characters required!"),
        maxlength: jQuery.validator.format("Maximum {0} characters!"),
      },
      email: {
        required: "Required",
        minlength: jQuery.validator.format("At least {0} characters required!"),
        maxlength: jQuery.validator.format("Maximum {0} characters!"),
        email: "Email not valid"
      },
      phone: {
        required: "Required",
        minlength: jQuery.validator.format("At least {0} numbers required!"),
        maxlength: jQuery.validator.format("Maximum {0} numbers!"),
      },
      message: {
        required: "Required",
        minlength: jQuery.validator.format("At least {0} characters required!"),
        maxlength: jQuery.validator.format("Maximum {0} characters!"),
      },

    }
  });

});
