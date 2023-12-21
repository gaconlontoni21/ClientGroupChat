$(document).ready(function() {
    container.on("click", "#sign-in-now-btn", function() {
        getTemplate(templateURL + "sign_in.html", function(template) {
            const context = {};
            const html = template(context);
            render(container, html);
            container.html(html);
        });
    });
});