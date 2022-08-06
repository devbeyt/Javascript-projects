
let start_btn = document.getElementById("btn"),
input_number = document.getElementById("number"),
message_aria = document.getElementById("message"),
life_aria = document.getElementById("life"),
reset_btn = document.getElementById("reset");
rnd_number = Math.floor(Math.random() * 10) + 1,
count = 3;
life_aria.textContent = count;


start_btn.addEventListener("click",()=>{

    // Daxil olunan ededin value-sin alib int cevirdikden sonra input_number_changed elave etmisem
    let input_number_changed = Number(input_number.value);

    try{
        
        if (input_number.value === '') throw 'Xanani bos buraxmaq olmaz';
        if (isNaN(input_number_changed)) throw 'Yalniz regem daxil edin';
        if (input_number_changed < 1) throw '1-den boyuk regem daxil edin';
        if (input_number_changed > 10) throw '10-den kicik regem daxil edin';
       
        // Yuxardaki sertler tamamlandiqdan sonra oyun baslayir
         start_game (input_number_changed);
        
    }catch (err){
        message_aria.textContent = err;
    }
    finally{

        // Burada her number daxil edildikden sonra value ve message.are silinir
      input_number.value = '';
      setInterval(()=>{
          message_aria.textContent = ''
      },3000)
    }

   
    life_aria.textContent = count; 
})

// reset button 
reset_btn.addEventListener("click",() =>{
    window.location.reload();    
}
);

// consolda gorsenir random
console.log(rnd_number);

  start_game = (input_number_changed)=>{
    
      game_control();

    // Oyunun sertleri
    if (rnd_number < input_number_changed && count >= 1) throw 'Asagi';
    if (rnd_number > input_number_changed && count >= 1) throw 'Yuxari'
    if (rnd_number == input_number_changed) {
        message_aria.textContent = `Tebrikler cavab ${input_number_changed}`;
        // burada oyunu qazandiqda  buttona css elave etmisem
        start_btn.setAttribute('disabled','true');
        start_btn.style.background="red";
        start_btn.style.color='white';
        start_btn.textContent = 'disabled';
     }
   
 }

   game_control = () =>{
             // 3 oyundan sonra disabled olacaq
    count -=1;
    if(count === 0 ) {
        start_btn.setAttribute('disabled','true');
        message_aria.textContent = 'Oyun bitti'
    }
   
   }

