const green = "#32FF40";
const gray = "#555";
const warning = "#FFF3CD";

var resultados = []
function bissect(){

    if(resultados.length != 0){
        resultados.forEach(element => {
            element.remove();
        });
    }


    var mathfunc = document.getElementById('mathfunc').value;
    var episilon = document.getElementById('episilon').value;
    var betZero = false    
    var vetores = []
    
    let i = -10;
    let x1 = {val: eval(mathfunc.replaceAll('x',i)), k: null};
    for( i; i <= 10; i++ ){
        x = eval(mathfunc.replaceAll('x',i)) 

        if((x1.val < 0 != x < 0 ) || x == 0){
            if(x == 0){
                x1.val = x;
                x1.k = i;
                
                vetores.push({x:i, y:0, cor: green})
                
                var p = document.createElement('P');
                p.innerHTML = `F(${i}) = <i>${0}</i>`
                p.style = "background-color: #D1E7DD"
                p.classList.add("text-center")
                
                resultados.push(p)
                document.body.appendChild(p);
                continue;
            }

            let a;
            let b;

            if(x < 0){
                a = i;
                b = x1.k;
            }else{
                a = x1.k;
                b = i;
            }

            let media = 0;
            var founded = false;
            for( j = 0; j<100; j++ ){
                media = (a + b)/2;

                
                let xj = eval(mathfunc.replaceAll('x',media))
                
                if( Math.abs(xj) < episilon){
                    vetores.push({x:media, y: xj,cor:green})

                    var p = document.createElement('P');
                    p.innerHTML = `F(${media.toFixed(4)}) = <i>${0}</i>`
                    p.style = "background-color: #D1E7DD"
                    p.classList.add("text-center")

                    resultados.push(p)
                    document.body.appendChild(p);

                    founded = true;
                    j = 100;
                }
                
                if(xj < 0 ){
                    a = media
                }else{
                    b = media
                }
            }
            if(!founded){
                var p = document.createElement('P');
                p.innerHTML = `numero de iterações execedido F(${media}), diminua a precisão.</i>`
                p.style = "background-color: #932B28; color: white"
                p.classList.add("text-center")

                resultados.push(p)
                document.body.appendChild(p);
            }

            betZero = true;
        }

        x1.val = x
        x1.k = i

        
        var p = document.createElement('P');
        p.innerHTML = `F(${i}) = <i>${x}</i>`
        p.classList.add("text-center")
        if(betZero){
          betZero=false;
          p.style = "background-color: #FFF3CD"
        }

        resultados.push(p)
		document.body.appendChild(p);

        vetores.push({x:i, y: x,cor: gray})

    }

        GraphPlot(vetores);
}