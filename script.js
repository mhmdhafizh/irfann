// Animasi Scroll

window.addEventListener("scroll", reveal);

function reveal(){
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(item=>{
        let windowHeight = window.innerHeight;
        let top = item.getBoundingClientRect().top;
        let visible = 100;

        if(top < windowHeight - visible){
            item.classList.add("active");
        }
    });
}

reveal();

// Counter Statistik

function counter(id,target,speed){
    let count = 0;
    let element = document.getElementById(id);

    let interval = setInterval(()=>{
        count++;
        element.textContent = count;

        if(count >= target){
            clearInterval(interval);
        }
    },speed);
}

counter("num1",3,200);
counter("num2",20,80);
counter("num3",8,150);