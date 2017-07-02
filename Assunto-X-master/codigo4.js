let botao1 = document.querySelector('#botaofot1');
    botaofot1.addEventListener('click', function () {
    let e1 = document.querySelector('#E1').value,
        e2 = document.querySelector('#E2').value;
        ΔE = (-2.18/Math.pow(e1,2)) - (-2.18/Math.pow(e2,2)) ;
        ΔE = parseFloat(ΔE.toFixed(3));
        document.querySelector('#ΔE').value = ΔE + '* 10-¹⁸ J';
    })

let botao2 = document.querySelector('#botaofo2');
    botaofot2.addEventListener('click', function () {
    let e1 = document.querySelector('#E1c').value,
        e2 = document.querySelector('#E2c').value;
        ΔE = (-2.18/Math.pow(e1,2)) - (-2.18/Math.pow(e2,2)) ;
        ΔE = parseFloat(ΔE.toFixed(3));
        lamb = 19.86/ΔE;
        lamb = lamb*Math.pow(10,1)
        lamb = parseFloat(lamb.toFixed(2));
        document.querySelector('#Co').value = lamb + '* 10-⁹ m';
    })
