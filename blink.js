            function blinktext(ele,col) {
            var tmpColCheck = document.getElementById( ele ).style.color;

              if (tmpColCheck === 'white') {
                document.getElementById( ele ).style.color = col;
              } else {
                document.getElementById( ele ).style.color = 'white';
              }
            }

            setInterval(function() {
                blinktext('blink-1','#d2c19a');
            }, 500 ); //set an interval timer up to repeat the function