
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag',drag)
    card.addEventListener('dragend',dragend)
})



function dragstart(){
  console.log('> CARD: START Dragging')

  //alterando a cor de fundo dos dropzones
  dropzones.forEach(dropzone => dropzone.classList.add('highlight'))
  
  this.classList.add('is-dragging')
  
}

function drag(){
  console.log('> CARD: Is Dragging')
  // this.classList.add('is-dragging')
}

function dragend(){
  console.log('> CARD: end Dragging')
  dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
  this.classList.remove('is-dragging')
}


dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover',dragover)
  dropzone.addEventListener('dragleave',dragleave)
  dropzone.addEventListener('drop',drop)
})

function dragenter(){
  // console.log('> Dropzone: Entrou')
  this.classList.add('over')
}

function dragleave(){
  // console.log('> Dropzone: Saiu')
  this.classList.remove('over')
}

function dragover(){
  this.classList.add('over')
  // console.log('> Dropzone: Esta em cima')

  // pegar o cartao que esta sendo arrastado
  const cardBeInDragged = document.querySelector('.is-dragging')

  this.appendChild(cardBeInDragged)
}
function drop(){
  // console.log('> Dropzone: Soltou')
  this.classList.remove('over')
}