var botaoIniciar = document.getElementById('btnBegin')
var botaoPausar = document.getElementById('btnStop')
var botaZerar = document.getElementById('btnClean')
var visHours = document.getElementById('horas')
var visMinutes = document.getElementById('minutos')
var visSeconds = document.getElementById('segundos')
var visMiliseconds = document.getElementById('milisegundos')


var intervaloIncremento

hours = Number(visHours.value)
minutes = Number(visMinutes.value)
seconds = Number(visSeconds.value)
milisegundos = Number(visMiliseconds.value)




hours = 0
minutes = 0
seconds = 0
milisegundos = 0




const alteraVisor = () => {

    visHours.innerHTML = `0${hours}`.slice(-2)
    visMinutes.innerHTML = `0${minutes}`.slice(-2)
    visSeconds.innerHTML = `0${seconds}`.slice(-2)
    visMiliseconds.innerHTML = `00${milisegundos}`.slice(-3)

    

}
const comecarIncremento = () => {
    intervaloIncremento = setInterval(disparaCronometro, 10)
}
const disparaCronometro = () => {
         milisegundos +=10
        if (milisegundos == 1000) {
            seconds += 1
            milisegundos = 0 
           

        }
           
        if (seconds == 60) {
            minutes += 1
            seconds = 0      
        }
        if (minutes == 60) {
        hours += 1
        minutes = 0
        }
        if (hours == 100){
        pausaCronometro()
        }

        alteraVisor()


}

function iniciaCronometro () {
    botaoIniciar.disabled = true
    comecarIncremento()

}

function pausaCronometro () {
    botaoIniciar.disabled = false
    clearInterval(intervaloIncremento)
}

function zeraCronometro () {
    botaoIniciar.disabled = false
    clearInterval(intervaloIncremento)
    hours = 0
    minutes = 0
    seconds = 0
    milisegundos = 0

    alteraVisor()
   

}



