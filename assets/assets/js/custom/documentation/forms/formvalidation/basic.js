"use strict";

var KTFormValidationDemoBasic = {
    init: function () {
        !function () {
            const t = document.getElementById("kt_docs_formvalidation_text");

            var e = FormValidation.formValidation(t, { fields: { text_input: { validators: { notEmpty: { message: "Este campo é requerido" } } } }, plugins: { trigger: new FormValidation.plugins.Trigger, bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row", eleInvalidClass: "", eleValidClass: "" }) } });
            const i = document.getElementById("kt_docs_formvalidation_text_submit");
            i.addEventListener("click", (function (t) { t.preventDefault(), e && e.validate().then((function (t) { console.log("validated!"), "Valid" == t && (i.setAttribute("data-kt-indicator", "on"), i.disabled = !0, setTimeout((function () { i.removeAttribute("data-kt-indicator"), i.disabled = !1, Swal.fire({ text: "O formulário foi enviado com sucesso!", icon: "success", buttonsStyling: !1, confirmButtonText: "OK, entendi!", customClass: { confirmButton: "btn btn-primary" } }) }), 2e3)) })) }))
        }(), function () {
            const t = document.getElementById("kt_docs_formvalidation_email");
            var e = FormValidation.formValidation(t, { fields: { email_input: { validators: { emailAddress: { message: "The value is not a valid email address" }, notEmpty: { message: "Email address is required" } } } }, plugins: { trigger: new FormValidation.plugins.Trigger, bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row", eleInvalidClass: "", eleValidClass: "" }) } });
            const i = document.getElementById("kt_docs_formvalidation_email_submit");
            i.addEventListener("click", (function (t) { t.preventDefault(), e && e.validate().then((function (t) { console.log("validated!"), "Valid" == t && (i.setAttribute("data-kt-indicator", "on"), i.disabled = !0, setTimeout((function () { i.removeAttribute("data-kt-indicator"), i.disabled = !1, Swal.fire({ text: "Form has been successfully submitted!", icon: "success", buttonsStyling: !1, confirmButtonText: "Ok, got it!", customClass: { confirmButton: "btn btn-primary" } }) }), 2e3)) })) }))
        }(), function () {
            const t = document.getElementById("kt_docs_formvalidation_textarea");
            var e = FormValidation.formValidation(t, { fields: { textarea_input: { validators: { notEmpty: { message: "Textarea input is required" } } } }, plugins: { trigger: new FormValidation.plugins.Trigger, bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row", eleInvalidClass: "", eleValidClass: "" }) } });
            const i = document.getElementById("kt_docs_formvalidation_textarea_submit");
            i.addEventListener("click", (function (t) { t.preventDefault(), e && e.validate().then((function (t) { console.log("validated!"), "Valid" == t && (i.setAttribute("data-kt-indicator", "on"), i.disabled = !0, setTimeout((function () { i.removeAttribute("data-kt-indicator"), i.disabled = !1, Swal.fire({ text: "Form has been successfully submitted!", icon: "success", buttonsStyling: !1, confirmButtonText: "Ok, got it!", customClass: { confirmButton: "btn btn-primary" } }) }), 2e3)) })) }))
        }(), function () {
            const t = document.getElementById("kt_docs_formvalidation_radio");
            var e = FormValidation.formValidation(t, { fields: { radio_input: { validators: { notEmpty: { message: "Radio input is required" } } } }, plugins: { trigger: new FormValidation.plugins.Trigger, bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row", eleInvalidClass: "", eleValidClass: "" }) } });
            const i = document.getElementById("kt_docs_formvalidation_radio_submit");
            i.addEventListener("click", (function (t) { t.preventDefault(), e && e.validate().then((function (t) { console.log("validated!"), "Valid" == t && (i.setAttribute("data-kt-indicator", "on"), i.disabled = !0, setTimeout((function () { i.removeAttribute("data-kt-indicator"), i.disabled = !1, Swal.fire({ text: "Form has been successfully submitted!", icon: "success", buttonsStyling: !1, confirmButtonText: "Ok, got it!", customClass: { confirmButton: "btn btn-primary" } }) }), 2e3)) })) }))
        }(), function () {
            const t = document.getElementById("kt_docs_formvalidation_password");

            var e = FormValidation.formValidation(t, { fields: { current_password: { validators: { notEmpty: { message: "Current password is required" } } }, new_password: { validators: { notEmpty: { message: "The password is required" }, callback: { message: "Please enter valid password", callback: function (t) { if (t.value.length > 0) return validatePassword() } } } }, confirm_password: { validators: { notEmpty: { message: "The password confirmation is required" }, identical: { compare: function () { return t.querySelector('[name="new_password"]').value }, message: "The password and its confirm are not the same" } } } }, plugins: { trigger: new FormValidation.plugins.Trigger, bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row", eleInvalidClass: "", eleValidClass: "" }) } });

            const i = document.getElementById("kt_docs_formvalidation_password_submit");

            i.addEventListener("click", (function (t) { t.preventDefault(), e && e.validate().then((function (t) { console.log("validated!"), "Valid" == t && (i.setAttribute("data-kt-indicator", "on"), i.disabled = !0, setTimeout((function () { i.removeAttribute("data-kt-indicator"), i.disabled = !1, Swal.fire({ text: "Form has been successfully submitted!", icon: "success", buttonsStyling: !1, confirmButtonText: "Ok, got it!", customClass: { confirmButton: "btn btn-primary" } }) }), 2e3)) })) }))
        }(), function () {
            const t = document.getElementById("kt_docs_formvalidation_checkbox");
            var e = FormValidation.formValidation(t, { fields: { checkbox_input: { validators: { notEmpty: { message: "Checkbox input is required" } } } }, plugins: { trigger: new FormValidation.plugins.Trigger, bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row", eleInvalidClass: "", eleValidClass: "" }) } });

            const i = document.getElementById("kt_docs_formvalidation_checkbox_submit");
            i.addEventListener("click", (function (t) { t.preventDefault(), e && e.validate().then((function (t) { console.log("validated!"), "Valid" == t && (i.setAttribute("data-kt-indicator", "on"), i.disabled = !0, setTimeout((function () { i.removeAttribute("data-kt-indicator"), i.disabled = !1, Swal.fire({ text: "Form has been successfully submitted!", icon: "success", buttonsStyling: !1, confirmButtonText: "Ok, got it!", customClass: { confirmButton: "btn btn-primary" } }) }), 2e3)) })) }))
        }()
    }
};
KTUtil.onDOMContentLoaded((function () { KTFormValidationDemoBasic.init() }));


