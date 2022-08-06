
const addName = prompt('Oyunçu 1- Adinizi girin','');
const addName2 = prompt('Oyunçu 2 - adinizi girin','');
const setName1 = document.getElementById('set-1stName');
const setName2 = document.getElementById('set-2ndName');
const getstart = document.getElementById('start-1Button');
const getstart2 = document.getElementById('start-2Button');
const player1 = document.getElementById('player-1Screen');
const player2 = document.getElementById('player-2Screen');
const play1count = document.getElementById('player-1Name');
const play2count = document.getElementById('player-2Name');

let counttext = 'Player is:',
count1 = 3,
count2 = 3,
base1 = [],
base2 = [];




// count ekranda gostermek ucun
play1count.textContent += count1;
play2count.textContent += count2;


// css 
play1count.classList.add('count')
play2count.classList.add('count')



// click events
getstart.addEventListener('click',gamer1Start)
getstart2.addEventListener('click',gamer2Start)


// oyun baslamadan once aparilan controller

gameControls()

 function gameControls(){

    let Name1 = setName1.textContent;
    let Name2 = setName2.textContent;
    
    setName1.textContent +=`${addName}`
    setName2.textContent +=`${addName2}`
        
    if (Name1.length > 0 & Name2.length > 0){
        getstart.disabled = false;
        getstart2.disabled = false;
    }

   if(addName == '' && addName2 != '' ){
       getstart.disabled = true
       getstart2.disabled = true
   }

   if(addName2 == '' && addName != ''){
       getstart.disabled = true
       getstart2.disabled = true
   }

   if(addName == '' && addName2 == ''){
       getstart.disabled = true
       getstart2.disabled = true
   }





 }  


//  birinci oyuncu

    function gamer1Start (){

        const rnd1 = Math.floor(Math.random() * 50) + 1
        count1 -=1;
        play1count.textContent = `${counttext +'  '+ count1}`;
        if(count1 == 0 ){
            getstart.disabled = true
        }
            player1.textContent = rnd1  
          
           base1.push(rnd1)
           console.log(base1)
      Counters()
    
     }


// ikinci oyuncu
    function gamer2Start (){

        // random ededler
const rnd2 = Math.floor(Math.random() * 50) + 1
 
        player2.textContent = rnd2
        count2 -=1;
        play2count.textContent = `${counttext +'  '+ count2}`;
        if(count2 == 0){
         getstart2.disabled = true
        
        }

        base2.push(rnd2)
        console.log(base2)
      Counters()
        
    }





    function Counters(){
        if (count1 === 0 && count2 === 0){

            // Toplam can sifira beraber olduqda calisacaq
            finish()
        }
    }
 
    Counters()


    // Toplam can sifira beraber olduqda rnd eded muqayisesi

function finish (){
    
   if(base1 > base2) {
       player1.textContent = `Qalib: ${addName}`
       player1.style.color = 'yellow'
   }
   else if(base2 > base1){
       player2.textContent = `Qalib: ${addName2}`
       player2.style.color = 'yellow'
   }
   else {
       alert('Oyun beraberlik ile sonlandi')
   }
}

   
  
    
    

    
  


