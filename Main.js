let rightpush = false;
let leftpush  = false;
let time = 0;
let r_time = 0;
let l_time = 0;
let id ;
let end = false;

const leftCicle = document.getElementById('LeftCircle');
const rightCicle = document.getElementById('RightCircle');
const centerText = document.getElementById('centerText');
const leftBttn = [
  'q','w','e',
  'a','s','d',
  'z','x','c'
];
const rightBttn = [
  '7','8','9',
  '4','5','6',
  '1','2','3'
];




const keyup = e =>{
  keyCheak(e.key);
  if(time == 0 & leftpush & rightpush & !end){
    start();
  }

  if(leftpush){
    oneSideOnly(leftCicle,'l')
  }

  if(rightpush){
    oneSideOnly(rightCicle,'r')
  }

}
const keydown = e =>{
  keyCheak(e.key);
  if(time !== 0 & leftpush & rightpush){
    finish();
  } 
}
document.addEventListener('keyup',keyup);
document.addEventListener('keydown',keydown);


const keyCheak = e => {
  for( i = 0 ; i < leftBttn.length ; i++) {
    if(e === leftBttn[i] ){
      leftpush =  true ; 
      return ;
    }
    if(e === rightBttn[i] ){
      rightpush =  true ;
      return;
    }
  }
  
}

const start = () =>{
  id = setInterval(() => {
    time++;
    centerText.textContent = time;
  }, 1);
}
const finish = () =>{
  end = true;
  clearInterval(id);
  centerText.textContent = time;
  const result = confirm(`【OK】リトライ / 【キャンセル】終了`);

  if(result == true) {
    window.location.reload();
  }
}
const oneSideOnly = (sideOnly,side) => {
  sideOnly.classList.add('push');
  setTimeout(() => {
    sideOnly.classList.remove('push');
    if(side = 'r') rightpush = false;
    if(side = 'l') leftpush  = false;
  }, 100);

}

