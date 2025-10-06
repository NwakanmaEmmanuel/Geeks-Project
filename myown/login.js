const signUp = document.querySelector('#signUp')

 function opentab(tabname){

    const newList  

    // if(tabname.id == "signUp"){
    //     signUp.classList.remove(".open")
    // }
    // else{

    // }
 }


// addBtn.addEventListener('click', () => {
//     const newList = document.createElement("li")
//     newList.textContent = input.value
//     listContainer.appendChild(newList);
//     input.value = ""
// // })











// var tablinks = document.getElementsByClassName("tab-links");
//         var tabcontents = document.getElementsByClassName("tab-contents");

//         function opentab(tabname){

//             for(tablink of tablinks){
//                 tablink.classList.remove("active-link");

//             }
//             for(tabcontent of tabcontents){
//                 tabcontent.classList.remove("active-tab");

//             }
//             event.currentTarget.classList.add("active-link");
//             document.getElementById(tabname).classList.add("active-tab");
//         }




// const faqs = document.querySelectorAll('.grid-space');
// faqs.forEach(faq => {

// faq.addEventListener('click', () => {

// faq.classList.toggle('soon');


// //change icon 

// const icon = faq.querySelector('.grid-space h4');
// const query = icon.textContent
    
// if (query.includes('+')) {

// query.replace('+', '-');
// console.log(query)

// } else {

// query = '-';


// }

// })
// });



// const input = document.querySelector('.int-box')
// const addBtn = document.querySelector("button")
// const listContainer = document.querySelector("#list-container")
// // const had = document.querySelector(".put")

// addBtn.addEventListener('click', () => {
//     const newList = document.createElement("li")
//     newList.textContent = input.value
//     listContainer.appendChild(newList);
//     input.value = ""
// // })
// // had.addEventListener('click', () => {
//     const myList = document.createElement("button")
//     myList.textContent = "Delete"
//     newList.appendChild(myList);
//     myList.style.marginLeft = "50px"
//     newList.style.marginBottom = "20px"
//     myList.addEventListener ('click',() => {
//         newList.remove()
//     })
//     input.focus()
// })



// const display = document.querySelector('#display');
// const buttons = document.querySelectorAll('button');

// buttons.forEach((item) => {
//     item.onclick = () => {
//         if (item.id == 'clear') {
//             display.innerText = '';
//         } else if (item.id == 'backspace') {
//             let string = display.innerText;
//             display.innerText = string.substr(0, string.length -1);
//         } else if (display.innerText != '' && item.id == 'equal'){
//             display.innerText = eval(display.innerText);
//         } else if (display.innerText == '' && item.id == 'equal'){
//             display.innerText = 'Empty!';
//             setTimeout(() => (display.innerText = ''), 2000);
//         } else {
//             display.innerText += item.id;
//         }    
//     }   
// })

// const themeToggleBtn = document.querySelector('.theme-toggler');
// const calculator = document.querySelector('.calculator');
// const toggleIcon = document.querySelector('.toggler-icon');
// let isDark = true;
// themeToggleBtn.onclick = () => {
//     calculator.classList.toggle('dark');
//     themeToggleIcon = document.querySelector('active')
//     isDark = !isDark;
// }