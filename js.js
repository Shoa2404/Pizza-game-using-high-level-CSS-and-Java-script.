alert("Thanks For Visit");
alert("Touch the rolling pin");

window.onload = function() {


    let rollingPin = document.getElementById("rolling_pin");
    let dough = document.getElementById("dough");
    let ingredients = document.getElementById("ingredients");
    let tomato = document.getElementById("tomato");
    let mushrooms = document.getElementById("mushrooms");
    let colormush = document.getElementById("colormush");
    let strawberry = document.getElementById("strawberry");
    let leaf = document.getElementById("leaf");
    let donut = document.getElementById("donut");
    let oven = document.getElementById("oven");
    let pizza = document.getElementById("pizza");
    let dough2 = document.getElementById("dough2");
    let plate1 = document.getElementById("plate1");
    let plate2 = document.getElementById("plate2");
    let plate3 = document.getElementById("plate3");
    let plate4 = document.getElementById("plate4");
    let plate5 = document.getElementById("plate5");
    let plate6 = document.getElementById("plate6");
    let top = document.getElementById("top");
    let js = document.getElementById("js");
    let button = document.querySelector("button");
    let bear = document.getElementById("deliverybear");
    let virat = document.getElementById("virat");


    rollingPin.onclick = function() {




        button.onclick = function() {
            js.setAttribute('style', 'animation:js 3s linear 0.1s 1;animation-fill-mode:forwards;')

            bear.setAttribute('style', 'animation:bear 3s linear 1s 1;animation-fill-mode:forwards;')

            virat.setAttribute('style', 'background:#87CEFA;')

            /* js.ss
             bear.style.opacity="1";
             */
        }




        oven.onclick = function() {

            tomato.onclick = false;
            mushrooms.onclick = false;
            colormush.onclick = false;
            strawberry.onclick = false;
            leaf.onclick = false;
            donut.onclick = false;
            rollingPin.style.display = "none";
            top.setAttribute('style', 'animation:top 1s linear 2s 1;animation-fill-mode:forwards')

            dough.removeAttribute('style');
            oven.setAttribute('style', 'animation:ovenmove 5s ease-out 0.1s 1;animation-fill-mode:forwards;transition: all 1s ease-in-out;');


            setTimeout(function() {

                dough2.setAttribute("style", "background-image:url(https://image.flaticon.com/icons/svg/135/135647.svg);width:140px;height:140px;z-index:100;background-size:cover;background-repeat:no-repeat;top:-10px;left:0px;position:absolute");


            }, 1000);

        }


        //  oven.setAttribute('style','animation:ovenmove1 1s linear 30s 1;animation-fill-mode:forwards;position:absolute');

        rollingPin.setAttribute('style', 'animation:rollingpin1 1s linear 1s 1,rollingpin2 0.7s alternate 2s 11,rollingpin3 1s linear 13s 1;animation-fill-mode:forwards;position:absolute');

        dough.setAttribute('style', 'animation:dough 5s linear 5s 1;animation-fill-mode:forwards');

        ingredients.setAttribute('style', 'animation:ingredients 1s linear 14s 1;animation-fill-mode:forwards');

        tomato.onclick = function() {

            tomato.setAttribute('style', 'animation:tomato 1s ease-out 0.1s 1;animation-fill-mode:forwards;transition: all 1s ease-in-out;')
            oven.setAttribute('style', 'animation:ovenmove1 1s linear 1s 1;animation-fill-mode:forwards;position:absolute');

            /* tomato.removeAttribute('style');
            mushrooms.removeAttribute('style');
          colormush.removeAttribute('style');
        strawberry.removeAttribute('style');
       leaf.removeAttribute('style');
        donut.removeAttribute('style');
        */



        }




        mushrooms.onclick = function() {

            mushrooms.setAttribute('style', 'animation:mushrooms 1s ease-out 0.1s 1;animation-fill-mode:forwards;transition: all 1s ease-in-out;');
            oven.setAttribute('style', 'animation:ovenmove1 1s linear 1s 1;animation-fill-mode:forwards;position:absolute');
            /* tomato.removeAttribute('style');
            mushrooms.removeAttribute('style');
          colormush.removeAttribute('style');
        strawberry.removeAttribute('style');
       leaf.removeAttribute('style');
        donut.removeAttribute('style');
        */




        }


        colormush.onclick = function() {

            colormush.setAttribute('style', 'animation:colormush 1s ease-out 0.1s 1;animation-fill-mode:forwards;transition: all 1s ease-in-out;');
            oven.setAttribute('style', 'animation:ovenmove1 1s linear 1s 1;animation-fill-mode:forwards;position:absolute');
            /* tomato.removeAttribute('style');
                 mushrooms.removeAttribute('style');
               colormush.removeAttribute('style');
             strawberry.removeAttribute('style');
            leaf.removeAttribute('style');
             donut.removeAttribute('style');
             */



        }



        strawberry.onclick = function() {

            strawberry.setAttribute('style', 'animation:strawberry 1s ease-out 0.1s 1;animation-fill-mode:forwards;transition: all 1s ease-in-out;');

            oven.setAttribute('style', 'animation:ovenmove1 1s linear 1s 1;animation-fill-mode:forwards;position:absolute');

            /* tomato.removeAttribute('style');
                      mushrooms.removeAttribute('style');
                    colormush.removeAttribute('style');
                  strawberry.removeAttribute('style');
                 leaf.removeAttribute('style');
                  donut.removeAttribute('style');
                  */



        }




        leaf.onclick = function() {

            leaf.setAttribute('style', 'animation:leaf 1s ease-out 0.1s 1;animation-fill-mode:forwards;transition: all 1s ease-in-out;');
            oven.setAttribute('style', 'animation:ovenmove1 1s linear 1s 1;animation-fill-mode:forwards;position:absolute');
            /* tomato.removeAttribute('style');
                      mushrooms.removeAttribute('style');
                    colormush.removeAttribute('style');
                  strawberry.removeAttribute('style');
                 leaf.removeAttribute('style');
                  donut.removeAttribute('style');
                  */




        }
        donut.onclick = function() {

            donut.setAttribute('style', 'animation:donut 1s ease-out 0.1s 1;animation-fill-mode:forwards;transition: all 1s ease-in-out;');

            oven.setAttribute('style', 'animation:ovenmove1 1s linear 1s 1;animation-fill-mode:forwards;position:absolute');


        }




    }




}
