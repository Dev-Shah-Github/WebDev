
var D = new Date()
var secondHandAngle = `${((D.getSeconds()*6))+90}deg`
var minuteHandAngle = `${(D.getMinutes()*6)+(D.getSeconds()/120) +90}deg`
var hourHandAngle = `${((D.getHours()*30)+(D.getMinutes()/2)+(D.getSeconds()/120))+90}deg`

console.log(hourHandAngle)
console.log(minuteHandAngle)
console.log(secondHandAngle)
// console.log(secondHandAngle)

var r = document.querySelector(':root')
// console.log(r)


r.style.setProperty('--hourStartDEG',hourHandAngle)
r.style.setProperty('--minuteStartDEG',minuteHandAngle)
r.style.setProperty('--secondStartDEG',secondHandAngle)