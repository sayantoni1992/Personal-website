// FOR ACCORDION MENU

var accordionItem = document.getElementsByClassName("accordion-item");
var i;

for (i = 0; i < accordionItem.length; i++) {

    accordionItem[i].addEventListener("click", function () {
        var icon = this.getElementsByClassName("plus-icon");
        var panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";

            icon[0].classList.remove('fa-minus-circle');
            icon[0].classList.add('fa-plus-circle')
        } else {
            panel.style.display = "block";

            icon[0].classList.add('fa-minus-circle');
            icon[0].classList.remove('fa-plus-circle');
        }
    });
}