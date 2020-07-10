
    let tdsValores = document.querySelectorAll('.info-valor')
    let total = 0 

    for (let i = 0; i < tdsValores.length; i++) {
        let valor = parseFloat(tdsValores[i].textContent)
        total = total + valor 
    }

    console.log(total)