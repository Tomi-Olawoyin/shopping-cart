const plusBtn = document.querySelectorAll(".plus-btn")
const minusBtn = document.querySelectorAll(".minus-btn")
console.log(typeof plusBtn)
plusBtn.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            const btnSib = btn.nextElementSibling
            const btnSibVal = btnSib.textContent
             
             btnSib.textContent =   Number(btnSibVal) + 1 
        })
})


minusBtn.forEach((btn)=>{
            btn.addEventListener("click",()=>{
               const btnSib = btn.previousElementSibling
               const btnSibVal = btnSib.textContent
               if(btnSibVal > 0){
                btnSib.textContent = Number(btnSibVal) - 1 
               }
              
            
            })

})
