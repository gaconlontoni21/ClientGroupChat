$(document).ready(function() {
    container.on("click", "#sign-up-now-btn", function() {
        getTemplate(templateURL + "sign_up.html", function(template) {
            const context = {};
            const html = template(context);
            container.html(html);
        });
    });
});