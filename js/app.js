var foto1 = document.querySelector('.foto_1');
var foto2 = document.querySelector('.foto_2');
var text1 = foto1.firstElementChild;
var text2 = foto2.firstElementChild;


foto1.addEventListener('mouseover', function () {
    text1.style.display = "none";
});
foto1.addEventListener('mouseout', function () {
    text1.style.display = "block";
});

foto2.addEventListener('mouseover', function () {
    text2.style.display = "none";
});
foto2.addEventListener('mouseout', function () {
    text2.style.display = "block";
});


var arrow_left = document.querySelector(".arrow_left");
var arrow_right = document.querySelector(".arrow_right");
var slides = document.querySelectorAll(".slider")[0].children;
var index = 0;

slides[index].classList.add('visible');

arrow_left.addEventListener("click", function () {
    slides[index].classList.remove("visible");
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }

    slides[index].classList.add("visible");

});

arrow_right.addEventListener("click", function () {
    slides[index].classList.remove('visible');
    index++;

    if (index > slides.length - 1) {
        index = 0;
    }

    slides[index].classList.add('visible');
});

var li = document.querySelectorAll(".list_panel  li");
var arrow = document.querySelectorAll(".list_arrow");
var dropList = document.querySelectorAll(".drop_down_list")

for (var i = 0; i < dropList.length; i++) {
    dropList[i].addEventListener("click", function (e) {
        var ul = this.children[2];
        ul.classList.toggle("display_block");

        });



}
var sum = document.querySelector(".sum");
sum.innerText = 0;
var sum_value = 0;
var price1 = 0;
var price2 = 0;
var price3 = 0;
var price4 = 0;

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function (e) {
        var label = this.parentElement.previousElementSibling.previousElementSibling;
        label.innerText = this.innerText;
        // var panel = this.parentElement;
        // panel.style.display = "none";

        var title = document.querySelector(".panel_left > .title");
        var color = document.querySelector(".panel_left > .color");
        var pattern = document.querySelector(".panel_left > .pattern");
        var title_value = document.querySelector(".panel_right > .title");
        var color_value = document.querySelector(".panel_right > .color");
        var pattern_value = document.querySelector(".panel_right > .pattern");



        if (this.classList == "title_chair") {
            title.innerText = this.innerText;
            title_value.innerText = this.dataset.chairPrice;
            price1 = parseInt(this.dataset.chairPrice, 10);
        } else if (this.classList == "color_chair") {
            color.innerText = this.innerText;
            color_value.innerText = this.dataset.colorPrice;
            price2 = parseInt(this.dataset.colorPrice, 10);
        } else if (this.classList = "pattern_chair") {
            pattern.innerText = this.innerText;
            pattern_value.innerText = this.dataset.patternPrice;
            price3 = parseInt(this.dataset.patternPrice, 10);
        }
        sum_value = price1 + price2 + price3 + price4;
        sum.innerText = sum_value;

    });
}
var transport = document.querySelector("#transport");
var transport_text = document.querySelector(".panel_left > .transport");
var transport_value = document.querySelector(".panel_right > .transport");


transport.addEventListener("click", function(){
    price4 = parseInt(transport.dataset.transportPrice);
    if (transport.checked) {
        transport_text.innerText = "Transport";
        transport_value.innerText = transport.dataset.transportPrice;
        sum_value += price4;
        sum.innerText = sum_value;
    } else {
        transport_text.innerText = "";
        transport_value.innerText = "";
        sum_value -= price4;
        price4 = 0;
        sum.innerText = sum_value;
    }
});




