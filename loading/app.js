const loadingText = document.querySelector('.loading_text');
const bg = document.querySelector('.bg');

let loading = 0;

 const interVal = setInterval(Loading,30)


function Loading(){
    loading++;
    if(loading > 99){
        clearInterval(interVal);
    }
    loadingText.innerHTML = `${loading}%`

    loadingText.style.opacity = scale(loading, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`
}

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  }