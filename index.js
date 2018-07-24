// Write your solution here!
'use strict'

const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name){
  drivers.push(name)
}
function destructivelyPrependDriver(name){
  drivers.unshift(name)
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
    drivers.shift()
}
function appendDriver(name){
  return drivers
}
function prependDriver(name){

}
function removeLastDriver(){

}
function removeFirstDriver(){

}
