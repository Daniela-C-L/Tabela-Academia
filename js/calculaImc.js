//Mudando titulo dinamicamente
let titulo = document.querySelector('.titulo')

titulo.textContent = 'Aparecida Nutricionista'
//------------------------------------------------------------------------------------------

//selecionando todos os pacientes
let pacientes = document.querySelectorAll('.paciente')

// console.log(pacientes)

for (var i = 0; i <= pacientes.length; i++) {
    //percorrendo a lista de pacientes
    let paciente = pacientes[i]

    //recebendo o peso do paciente
    let pesoTd = paciente.querySelector('.info-peso')
    let peso = pesoTd.textContent

    //recebendo a altura do paciente
    let alturaTd = paciente.querySelector('.info-altura')
    let altura = alturaTd.textContent

    //toFixed para ajustar as casas decimais
    let imcTd = paciente.querySelector('.info-imc')


    let pesoEhValido = validaPeso(peso)
    let alturaEhValida = validaAltura(altura)

    if(!pesoEhValido){
        console.log('Peso invalida0')
        pesoEhValido = false
        imcTd.textContent = 'Peso inválido'
        paciente.classList.add = 'Nome inválido'
    }

    if(!alturaEhValida){
        console.log('Altura invalida')
        alturaEhValida = false
        imcTd.textContent = 'Altura inválido'
        paciente.classList.add = 'Nome inválido'
    }

    if(pesoEhValido && alturaEhValida){
        let imc = calculaImc (peso, altura)
        imcTd.textContent = imc
    }
}

function calculaImc(peso, altura) {
    let imc = 0
    //calculando imc do paciente
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 600) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true
    } else {
        return false
    }
}

// function validaGordura(gordura) {
//     if (gordura >= 0 && altura <= 3.00) {
//         return true
//     } else {
//         return false
//     }
// }
