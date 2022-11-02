import "./style.scss";
import Typed from 'typed.js';
import ScrollReveal from "scrollreveal";
import "waypoints/lib/noframework.waypoints.min";
import * as bootstrap from "bootstrap";

let options = {
    strings: ['Food...', 'Drink'],
    typeSpeed: 30,
    backSpeed:30,
    loop:true,
    backDelay:3000

};

let typed = new Typed('.element', options);

let down= {
    distance: '50px',
    origin: 'top',
    interval:300,
    duration:800,
};

ScrollReveal().reveal('.to-down',down);

let right= {
    distance: '50px',
    origin: 'left',
    interval:300,
    duration:800,
};

ScrollReveal().reveal('.to-right',right);

let left= {
    distance: '50px',
    origin: 'right',
    interval:300,
    duration:800,
};

ScrollReveal().reveal('.to-left',left);

new Waypoint({
    element: document.getElementById('home-content'),
    handler: function(direction) {
        let oldnav=document.querySelector(".nav-link.active");
        if(oldnav !=null){
            oldnav.classList.remove('active');
        }

            let curnav=document.querySelector(`[href='#home']`);
            curnav.classList.add('active');

    }
        ,
    offset: "10%"
})

let section=['about','service','menu','contact'];
section.forEach((section)=>{
    new Waypoint({
        element: document.getElementById(section),
        handler: function(direction) {


            let oldnav=document.querySelector(".nav-link.active");
            oldnav.classList.remove('active');
            let curnav=document.querySelector(`[href='#${section}']`);
            curnav.classList.add('active');


        },
        offset: "75%"
    })

})

// let menuList=[
//     {
//         id:1,
//         img:"public/img/plate1.png",
//         title:"Barbecue Salad",
//         description:"Special Delicious Dish",
//         cost:22.2,
//         currency:"$"
//     },
//     {
//         id:2,
//         img:"public/img/plate2.png",
//         title:"Salad with fish",
//         description:"Special Delicious Dish",
//         cost:32.2,
//         currency:"$"
//     },
//     {
//         id:3,
//         img:"public/img/plate3.png",
//         title:"Spinach Salad",
//         description:"Special Delicious Dish",
//         cost:12.2,
//         currency:"$"
//     }
// ]
//
// let menuRow=document.querySelector('.menu-row');
//
// menuList.forEach(function (menuList){
//
//     let div=document.createElement('div');
//
//     div.classList.add("col-8","col-md-3","col-lg-3");
//
//     div.innerHTML=`
//                   <div class="card plate-card to-down border mb-5">
//                         <img src="${menuList.img}" alt="" class="w-75 d-block mx-auto my-4">
//                         <div class="card-body">
//                             <p class="fw-bold ">${menuList.title}</p>
//                             <p class="text-black-50 small">${menuList.description}</p>
//                             <div class="d-flex justify-content-between align-items-center">
//                                 <p class="mb-0">${menuList.currency}${menuList.cost}</p>
//                                 <a href="#" class="btn btn-primary">
//                                     <i class="bi bi-cart-plus fs-6"></i>
//                                 </a>
//                             </div>
//                         </div>
//
//                     </div>
//
//
//
//
//     `;
//
// menuRow.append(div);
//
// })
