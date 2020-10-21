import {changeLogorythmScale} from "../../../pages/sketch";

document.addEventListener("DOMContentLoaded", () => {
    let slider = document.getElementById("logorythmSlider");
    let selector = document.getElementById("logorythmSliderSelector");
    let text = document.getElementById("logorythmSliderText");
    let marks = document.getElementsByClassName("logorythm__mark");

    slider.oninput = function () {
        selector.style.left = (this.value - 1) * 25 + "%";
        selector.style.transform = `translateX(${50 - (this.value - 1) * 50 + "%"}) translateY(5px)`;
        for (let mark of marks) {
            mark.classList.remove("logorythm__mark_active")
        }
        marks[this.value - 1].classList.toggle("logorythm__mark_active");
        changeLogorythmScale(this.value);
        switch ("" + this.value) {
            case "1":
                text.innerHTML = "1e-2";
                break;
            case "2":
                text.innerHTML = "1e-1";
                break;
            case "4":
                text.innerHTML = "1e1";
                break;
            case "5":
                text.innerHTML = "1e2";
                break;
            default:
                text.innerHTML = "1";
        }
    }
});