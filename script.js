let startButton= document.getElementById('start');
let stopButton= document.getElementById('stop');
let resetButton= document.getElementById('reset');
let minElement= document.getElementById('minutes');
let secElement= document.getElementById('seconds');
let min= 00;
let sec=00;
//console.log(minutesElement, secondsElement);

let interval;//to store timer variable value

function startTimer(){
  sec++;
  if(sec<10){
    secElement.innerHTML= '0'+sec;
  }
  if(sec>=10){
    secElement.innerHTML= sec;
  }
  if(sec>59){
    min++;
    if(min<10){
      minElement.innerHTML= '0'+min;
    }
    sec=0;
    secElement.innerHTML='0'+0;
  }
  if(min>=10){
      minElement.innerHTML= min;
    }
    if(min>59){
      windows.alert("Time's up..!!");
      clearInterval(interval);
    }
}

startButton.addEventListener('click',function(){
    startButton.disabled= true;
    interval=setInterval(startTimer,1000);
});

stopButton.addEventListener('click',function(){
    startButton.disabled= false;
  clearInterval(interval);
});

resetButton.addEventListener('click',function(){
    startButton.disabled= false;
  clearInterval(interval);
  min= '00';
  sec= '00';
  minElement.innerHTML= min;
  secElement.innerHTML= sec;
});