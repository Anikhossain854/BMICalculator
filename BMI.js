const reult = document.getElementById('reult')
const button= document.getElementById('btn')
const dark = document.getElementById('dark')
const icon= document.getElementById('icon')
const container = document.getElementById('container')

// for Dark mode
dark.addEventListener('click',function(){
    
    container.classList.toggle('addStyle');
    
});
// Main Logic
button.addEventListener('click',function(){
    
    var height= document.getElementById('height').value;
    var  weight = document.getElementById('weight').value; 

  height= height* 12;
  height= height* 0.025;

  

var bmi = weight / (Math.pow(height,2));
 bmi= Math.round(bmi);
 console.log

 if(height==='' || isNaN(height)){
    reult.innerHTML=`আপনার Height  দিন`;
} else if(weight==='' || isNaN(weight)){
     reult.innerHTML=`আপনার Weight  দিন`;

 } else{
    if(bmi<18.5){
        reult.innerHTML=`BMI: ${bmi} Under Weight আপনি Doctor দেখান`
     } else if(bmi <=25){
        reult.innerHTML=`BMI: ${bmi} আপনি ঠিক আছেন`
     } else{
    
         reult.innerHTML=`BMI: ${bmi} over Weight আপনি ভুঁড়ি কমান`;
     }
    

 }



   


    
})




















