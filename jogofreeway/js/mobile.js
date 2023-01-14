let up = document.querySelector('.arrow__up');
let right = document.querySelector('.arrow__right');
let down = document.querySelector('.arrow__down');
let left = document.querySelector('.arrow__left');


up.addEventListener('click', () => 
  yPersonagem -= 20 

)
right.addEventListener('click', () => {
  if (podeSeMoverRigth(400)) {
	  xPersonagem += 20 
	}
})
down.addEventListener('click', () => {
  if(podeSeMover()) {
    yPersonagem += 20 
  }
})

left.addEventListener('click', () => {
  if(podeSeMoverLeft()) {
    xPersonagem -= 20 
  }
})