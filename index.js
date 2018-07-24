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
  let tmpDrivers = drivers

  tmpDrivers.push(name)
    console.log(drivers)
  return tmpDrivers
}
function prependDriver(name){

}
function removeLastDriver(){

}
function removeFirstDriver(){

}
