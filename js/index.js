const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')


$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$forward.addEventListener('click', handleForward)
$backward.addEventListener('click', handleBackward)

function handlePlay(){
  $video.play()
  $play.hidden=true
  $pause.hidden=false
  console.log('le di play')
}

function handlePause(){
  $video.pause()
  $play.hidden=false
  $pause.hidden=true
  console.log('le di pause')
}

function handleBackward(){
  $video.currentTime=$video.currentTime-10
  console.log('atras 10 segundos')
}

function handleForward(){
  $video.currentTime=$video.currentTime+10
  console.log('adelante 10 segundos',$video.currentTime)
}

const $progress=document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded(){
  $progress.max=$video.duration
  // console.log('ha cargado',$video.duration)
}

function handleTimeUpdate(){
  $progress.value=$video.currentTime
  // console.log('hola',$video.currentTime)
}

$progress.addEventListener('input',handleInput)

function handleInput(){
  $video.currentTime=$progress.value
  // console.log($progress.value)
}