const itis = document.querySelectorAll(".it-is");
const quater = document.querySelectorAll(".quater");
const past = document.querySelectorAll(".past");
const twenty = document.querySelectorAll(".twenty");
const five = document.querySelectorAll(".five");
const half = document.querySelectorAll(".half");
const ten = document.querySelectorAll(".ten");
const one2 = document.querySelectorAll(".one2");
const six = document.querySelectorAll(".six");
const four = document.querySelectorAll(".four");
const five2 = document.querySelectorAll(".five2");
const two = document.querySelectorAll(".two");
const eight = document.querySelectorAll(".eight");
const eleven = document.querySelectorAll(".eleven");
const seven = document.querySelectorAll(".seven");
const twelve = document.querySelectorAll(".twelve");
const ten2 = document.querySelectorAll(".ten2");
const oclock = document.querySelectorAll(".oclock");
const to = document.querySelectorAll(".to");
const three = document.querySelectorAll(".three");
const nine = document.querySelectorAll(".nine");
const num1 = document.querySelectorAll(".num1");
const num0 = document.querySelectorAll(".num0");
const num2 = document.querySelectorAll(".num2");
const num3 = document.querySelectorAll(".num3");
const num4 = document.querySelectorAll(".num4");
const num5 = document.querySelectorAll(".num5");
const num6 = document.querySelectorAll(".num6");
const num7 = document.querySelectorAll(".num7");
const num8 = document.querySelectorAll(".num8");
const num9 = document.querySelectorAll(".num9");
const num00 = document.querySelectorAll(".num00");
const num10 = document.querySelectorAll(".num10");
const num20 = document.querySelectorAll(".num20");
const num30 = document.querySelectorAll(".num30");
const num40 = document.querySelectorAll(".num40");
const num50 = document.querySelectorAll(".num50");
const clear = document.querySelectorAll(".clear");


const today = new Date();
let h = today.getHours();
let x = today.getMinutes();
let s = today.getSeconds();
let m = Math.round(x / 5) * 5;


const today1 = new Date();
let mon = today1.getMonth();
let day = today1.getDate();


//Convert 24 hours to 12 hours
if(h>12) {
h = h-12;
}
// clear function

    function xxx() {
    for (let i = 0; i < clear.length; i++) {
        clear[i].style.color = "#61481C";
     }
    }
// Hour Function

    function clockFunction() {
        xxx();
        switch(h) {
            case 0:
                if(m>=33) {
                    for (let i = 0; i < one2.length; i++) {
                        one2[i].style.color = "#fff";
                    } }
                    else {
                        for (let i = 0; i < twelve.length; i++) {
                            twelve[i].style.color = "#fff";
                        }
                    }
                ilk();
              break;

            case 1:
                if(m>=33) {
                    for (let i = 0; i < two.length; i++) {
                        two[i].style.color = "#fff";
                    } }
                    else {
                        for (let i = 0; i < one2.length; i++) {
                            one2[i].style.color = "#fff";
                        }
                    }
                ilk();
              break;
            case 2:
                if(m>=33) {
                    for (let i = 0; i < three.length; i++) {
                        three[i].style.color = "#fff";
                    } }
                    else {
                        for (let i = 0; i < two.length; i++) {
                            two[i].style.color = "#fff";
                        }
                    }
               
                ilk();
              break;
            case 3:
                if(m>=33) {
                    for (let i = 0; i < four.length; i++) {
                        four[i].style.color = "#fff";
                    } }
                    else {
                        for (let i = 0; i < three.length; i++) {
                            three[i].style.color = "#fff";
                        }
                    }
                ilk();
            break;
            case 4:
                if(m>=33) {
                    for (let i = 0; i < five2.length; i++) {
                        five2[i].style.color = "#fff";
                    } }
                    else {
                        for (let i = 0; i < four.length; i++) {
                            four[i].style.color = "#fff";
                        }
                    }
                ilk();
            break;
            case 5:
                if(m>=33) {
                    for (let i = 0; i < six.length; i++) {
                        six[i].style.color = "#fff";
                    } }
                    else {
                        for (let i = 0; i < five2.length; i++) {
                            five2[i].style.color = "#fff";
                        }
                    }
               
                ilk();
            break;
            case 6:
                if(m>=33) {
                    for (let i = 0; i < seven.length; i++) {
                        seven[i].style.color = "#fff";
                    } }
                    else {
                        for (let i = 0; i < six.length; i++) {
                            six[i].style.color = "#fff";
                        }
                    } 
           
               ilk();
                    
              break;
            case 7:   
            if(m>=33) {
                for (let i = 0; i < eight.length; i++) {
                    eight[i].style.color = "#fff";
                } }
                else {
                    for (let i = 0; i < seven.length; i++) {
                        seven[i].style.color = "#fff";
                    }
                } 
             ilk();
            break;
            case 8:
                if(m>=33) {
                    for (let i = 0; i < nine.length; i++) {
                        nine[i].style.color = "#fff";
                    } }
                    else {
                        for (let i = 0; i < eight.length; i++) {
                            eight[i].style.color = "#fff";
                        }
                    } 
                
                ilk();
            break;  
            case 9:
                if(m>=33) {
                    for (let i = 0; i < ten2.length; i++) {
                        ten2[i].style.color = "#fff";
                    } }
                    else {
                        for (let i = 0; i < nine.length; i++) {
                            nine[i].style.color = "#fff";
                        }
                    } 
             ilk();
                break;
            case 10:
                if(m>=33) {
                    for (let i = 0; i < eleven.length; i++) {
                        eleven[i].style.color = "#fff";
                    } }
                    else {
                        for (let i = 0; i < ten2.length; i++) {
                            ten2[i].style.color = "#fff";
                        }
                    } 
               
              ilk();
            break;
            case 11:
                if(m>=33) {
                    for (let i = 0; i < twelve.length; i++) {
                        twelve[i].style.color = "#fff";
                    } }
                    else {
                        for (let i = 0; i < eleven.length; i++) {
                            eleven[i].style.color = "#fff";
                        }
                    } 
               
                ilk();
            break;
            case 12:
                if(m>=33) {
                    for (let i = 0; i < one2.length; i++) {
                        one2[i].style.color = "#fff";
                    } }
                    else {
                        for (let i = 0; i < twelve.length; i++) {
                            twelve[i].style.color = "#fff";
                        }
                    } 
                
                ilk();
            break;
          }
// Minutes Function

    function ilk() {
        const today = new Date();
        let y = today.getHours();
        let x = today.getMinutes();
        let s = today.getSeconds();
        let m = Math.round(x / 5) * 5;
        switch(m) {
            case 0:
                for (let i = 0; i < itis.length; i++) {
                    itis[i].style.color = "#fff";
                }
                for (let i = 0; i < oclock.length; i++) {
                    oclock[i].style.color = "#fff";
                }
              break;
            case 5:
                for (let i = 0; i < itis.length; i++) {
                    itis[i].style.color = "#fff";
                }
                for (let i = 0; i < past.length; i++) {
                 past[i].style.color = "#fff";
                }
                for (let i = 0; i < five.length; i++) {
                    five[i].style.color = "#fff";
                }
              break;
            case 10:
                for (let i = 0; i < itis.length; i++) {
                    itis[i].style.color = "#fff";
                }
                for (let i = 0; i < past.length; i++) {
                    past[i].style.color = "#fff";
                   }
                   for (let i = 0; i < ten.length; i++) {
                    ten[i].style.color = "#fff";
                }
               
            break;
            case 15:
                for (let i = 0; i < quater.length; i++) {
                    quater[i].style.color = "#fff";
                }
                for (let i = 0; i < past.length; i++) {
                    past[i].style.color = "#fff";
                   }
                   for (let i = 0; i < itis.length; i++) {
                    itis[i].style.color = "#fff";
                }            
            break;
            case 20:
                for (let i = 0; i < itis.length; i++) {
                    itis[i].style.color = "#fff";
                }
                for (let i = 0; i < twenty.length; i++) {
                    twenty[i].style.color = "#fff";
                }
                for (let i = 0; i < past.length; i++) {
                    past[i].style.color = "#fff";
                }

            break;
            case 25:
                for (let i = 0; i < itis.length; i++) {
                    itis[i].style.color = "#fff";
                }
                for (let i = 0; i < five.length; i++) {
                    five[i].style.color = "#fff";
                }
                for (let i = 0; i < twenty.length; i++) {
                    twenty[i].style.color = "#fff";
                }
                for (let i = 0; i < past.length; i++) {
                    past[i].style.color = "#fff";
                }
                break;
            case 30:
                for (let i = 0; i < itis.length; i++) {
                    itis[i].style.color = "#fff";
                }
                for (let i = 0; i < past.length; i++) {
                    past[i].style.color = "#fff";
                }
                for (let i = 0; i < half.length; i++) {
                    half[i].style.color = "#fff";
                }
                break;
            case 35:
                for (let i = 0; i < itis.length; i++) {
                    itis[i].style.color = "#fff";
                }
                for (let i = 0; i < five.length; i++) {
                    five[i].style.color = "#fff";
                }
                for (let i = 0; i < twenty.length; i++) {
                    twenty[i].style.color = "#fff";
                }
                for (let i = 0; i < to.length; i++) {
                    to[i].style.color = "#fff";
                }
                break;
            case 40:
                for (let i = 0; i < twenty.length; i++) {
                    twenty[i].style.color = "#fff";
                }
                for (let i = 0; i < itis.length; i++) {
                    itis[i].style.color = "#fff";
                }
                for (let i = 0; i < to.length; i++) {
                    to[i].style.color = "#fff";
                }
            break;
            case 45:
                for (let i = 0; i < itis.length; i++) {
                    itis[i].style.color = "#fff";
                }
                for (let i = 0; i < quater.length; i++) {
                    quater[i].style.color = "#fff";
                }
                for (let i = 0; i < to.length; i++) {
                    to[i].style.color = "#fff";
                }
                
                break;
            case 50:
                for (let i = 0; i < itis.length; i++) {
                    itis[i].style.color = "#fff";
                }
                for (let i = 0; i < to.length; i++) {
                    to[i].style.color = "#fff";
                }
                for (let i = 0; i < ten.length; i++) {
                    ten[i].style.color = "#fff";
                }
            break;
            case 55:
                for (let i = 0; i < itis.length; i++) {
                    itis[i].style.color = "#fff";
                }
                for (let i = 0; i < to.length; i++) {
                    to[i].style.color = "#fff";
                }
                for (let i = 0; i < five.length; i++) {
                    five[i].style.color = "#fff";
                }

                break;  
        
                case 60:
                    for (let i = 0; i < itis.length; i++) {
                        itis[i].style.color = "#fff";
                    }
                    for (let i = 0; i < oclock.length; i++) {
                        oclock[i].style.color = "#fff";
                    }
                break;  
        
            }
    }
   
   
    }
    

    function Mon() {
        
        xxx();
        switch(mon) {
               
                  case 0:
                    for (let i = 0; i < num00.length; i++) {
                        num00[i].style.color = "#fff";
                    }
                    
                    for (let i = 0; i < num1.length; i++) {
                        num1[i].style.color = "#fff";
                    }
                   
                  break;
                  
                   case 1:
                    
                    for (let i = 0; i < num00.length; i++) {
                        num00[i].style.color = "#fff";
                    }
                    for (let i = 0; i < num2.length; i++) {
                        num2[i].style.color = "#fff";
                    }
                   
                  break;
                  
                  case 2:
                    
                    for (let i = 0; i < num00.length; i++) {
                        num00[i].style.color = "#fff";
                    }
                    for (let i = 0; i < num3.length; i++) {
                        num3[i].style.color = "#fff";
                    }
                   
                  break;
                  
                  case 3:
                    
                  for (let i = 0; i < num00.length; i++) {
                        num00[i].style.color = "#fff";
                    }
                    for (let i = 0; i < num4.length; i++) {
                        num4[i].style.color = "#fff";
                    }
                   
                  break;
                  
                  case 4:
                    
                    for (let i = 0; i < num00.length; i++) {
                        num00[i].style.color = "#fff";
                    }
                    for (let i = 0; i < num5.length; i++) {
                        num5[i].style.color = "#fff";
                    }
                   
                  break;
                  
                  case 5:
                   
                    for (let i = 0; i < num00.length; i++) {
                        num00[i].style.color = "#fff";
                    }
                    for (let i = 0; i < num6.length; i++) {
                        num6[i].style.color = "#fff";
                    }
                   
                  break;
                  
                  case 6:
                   
                   for (let i = 0; i < num00.length; i++) {
                        num00[i].style.color = "#fff";
                    }
                    for (let i = 0; i < num7.length; i++) {
                        num7[i].style.color = "#fff";
                    }
                   
                  break;
                  
                  case 7:
                  
                  for (let i = 0; i < num00.length; i++) {
                        num00[i].style.color = "#fff";
                    }
                    for (let i = 0; i < num8.length; i++) {
                        num8[i].style.color = "#fff";
                    }
                   
                  break;
                  case 8:
                  
                    for (let i = 0; i < num00.length; i++) {
                        num00[i].style.color = "#fff";
                    }
                    for (let i = 0; i < num9.length; i++) {
                        num9[i].style.color = "#fff";
                    }
                   
                  break;
                  case 9:
                  
                    for (let i = 0; i < num10.length; i++) {
                        num10[i].style.color = "#fff";
                    }
                    for (let i = 0; i < num0.length; i++) {
                        num0[i].style.color = "#fff";
                    }
                   
                  break;
                  case 10:
                  
                    for (let i = 0; i < num10.length; i++) {
                        num10[i].style.color = "#fff";
                    }
                    for (let i = 0; i < num1.length; i++) {
                        num1[i].style.color = "#fff";
                    }
                   
                  break;
                  
                  case 11:
                    for (let i = 0; i < num10.length; i++) {
                        num10[i].style.color = "#fff";
                    }
                    for (let i = 0; i < num2.length; i++) {
                        num2[i].style.color = "#fff";
                    }
             }
            }






      
       function Day(){
        xxx();
            switch(day) {
        case 0:
            for (let i = 0; i < num0.length; i++) {
                num0[i].style.color = "#fff";
            }
            for (let i = 0; i < num00.length; i++) {
                num00[i].style.color = "#fff";
            }

           
          break;
          case 1:
            for (let i = 0; i < num00.length; i++) {
                num00[i].style.color = "#fff";
            }
            
            for (let i = 0; i < num1.length; i++) {
                num1[i].style.color = "#fff";
            }
           
          break;
          
           case 2:
            
            for (let i = 0; i < num00.length; i++) {
                num00[i].style.color = "#fff";
            }
            for (let i = 0; i < num2.length; i++) {
                num2[i].style.color = "#fff";
            }
           
          break;
          
          case 3:
            
            for (let i = 0; i < num00.length; i++) {
                num00[i].style.color = "#fff";
            }
            for (let i = 0; i < num3.length; i++) {
                num3[i].style.color = "#fff";
            }
           
          break;
          
          case 4:
            
          for (let i = 0; i < num00.length; i++) {
                num00[i].style.color = "#fff";
            }
            for (let i = 0; i < num4.length; i++) {
                num4[i].style.color = "#fff";
            }
           
          break;
          
          case 5:
            
            for (let i = 0; i < num00.length; i++) {
                num00[i].style.color = "#fff";
            }
            for (let i = 0; i < num5.length; i++) {
                num5[i].style.color = "#fff";
            }
           
          break;
          
          case 6:
           
            for (let i = 0; i < num00.length; i++) {
                num00[i].style.color = "#fff";
            }
            for (let i = 0; i < num6.length; i++) {
                num6[i].style.color = "#fff";
            }
           
          break;
          
          case 7:
           
           for (let i = 0; i < num00.length; i++) {
                num00[i].style.color = "#fff";
            }
            for (let i = 0; i < num7.length; i++) {
                num7[i].style.color = "#fff";
            }
           
          break;
          
          case 8:
          
          for (let i = 0; i < num00.length; i++) {
                num00[i].style.color = "#fff";
            }
            for (let i = 0; i < num8.length; i++) {
                num8[i].style.color = "#fff";
            }
           
          break;
          case 9:
          
            for (let i = 0; i < num00.length; i++) {
                num00[i].style.color = "#fff";
            }
            for (let i = 0; i < num9.length; i++) {
                num9[i].style.color = "#fff";
            }
           
          break;
          case 10:
          
            for (let i = 0; i < num10.length; i++) {
                num10[i].style.color = "#fff";
            }
            for (let i = 0; i < num0.length; i++) {
                num0[i].style.color = "#fff";
            }
           
          break;
          case 11:
          
            for (let i = 0; i < num10.length; i++) {
                num10[i].style.color = "#fff";
            }
            for (let i = 0; i < num1.length; i++) {
                num1[i].style.color = "#fff";
            }
           
          break;
          
          case 12:
            for (let i = 0; i < num10.length; i++) {
                num10[i].style.color = "#fff";
            }
            for (let i = 0; i < num2.length; i++) {
                num2[i].style.color = "#fff";
            }
           
          break;
          
          case 13:
            for (let i = 0; i < num10.length; i++) {
                num10[i].style.color = "#fff";
            }
            for (let i = 0; i < num3.length; i++) {
                num3[i].style.color = "#fff";
            }
           
          break;
          
          case 14:
            for (let i = 0; i < num4.length; i++) {
                num4[i].style.color = "#fff";
            }
            for (let i = 0; i < num10.length; i++) {
                num10[i].style.color = "#fff";
            }
          break;
          
          case 15:
            for (let i = 0; i < num5.length; i++) {
                num5[i].style.color = "#fff";
            }
            for (let i = 0; i < num10.length; i++) {
                num10[i].style.color = "#fff";
            }
          break;
          
          case 16:
            for (let i = 0; i < num6.length; i++) {
                num6[i].style.color = "#fff";
            }
            for (let i = 0; i < num10.length; i++) {
                num10[i].style.color = "#fff";
            }
          break;
          
          case 17:
            for (let i = 0; i < num7.length; i++) {
                num7[i].style.color = "#fff";
            }
            for (let i = 0; i < num10.length; i++) {
                num10[i].style.color = "#fff";
            }
          break;
          
          case 18:
            for (let i = 0; i < num8.length; i++) {
                num8[i].style.color = "#fff";
            }
            for (let i = 0; i < num10.length; i++) {
                num10[i].style.color = "#fff";
            }
          break;
          
          case 19:
            for (let i = 0; i < num9.length; i++) {
                num9[i].style.color = "#fff";
            }
            for (let i = 0; i < num10.length; i++) {
                num10[i].style.color = "#fff";
            }
          break;
           
          case 20:
            
            for (let i = 0; i < num0.length; i++) {
                num0[i].style.color = "#fff";
            }
            for (let i = 0; i < num20.length; i++) {
                num20[i].style.color = "#fff";
            }
          break;
          case 21:
          
            for (let i = 0; i < num1.length; i++) {
                num1[i].style.color = "#fff";
            }
            for (let i = 0; i < num20.length; i++) {
                num20[i].style.color = "#fff";
            }
          break;
          
          case 22:
            for (let i = 0; i < num2.length; i++) {
                num2[i].style.color = "#fff";
            }
            for (let i = 0; i < num20.length; i++) {
                num20[i].style.color = "#fff";
            }
          break;
          
          case 23:
            for (let i = 0; i < num3.length; i++) {
                num3[i].style.color = "#fff";
            }
            for (let i = 0; i < num20.length; i++) {
                num20[i].style.color = "#fff";
            }
          break;
          
          case 24:
            for (let i = 0; i < num4.length; i++) {
                num4[i].style.color = "#fff";
            }
            for (let i = 0; i < num20.length; i++) {
                num20[i].style.color = "#fff";
            }
          break;
          
          case 25:
            for (let i = 0; i < num5.length; i++) {
                num5[i].style.color = "#fff";
            }
            for (let i = 0; i < num20.length; i++) {
                num20[i].style.color = "#fff";
            }
          break;
          
          case 26:
            for (let i = 0; i < num6.length; i++) {
                num6[i].style.color = "#fff";
            }
            for (let i = 0; i < num20.length; i++) {
                num20[i].style.color = "#fff";
            }
          break;
          
          case 27:
            for (let i = 0; i < num7.length; i++) {
                num7[i].style.color = "#fff";
            }
            for (let i = 0; i < num20.length; i++) {
                num20[i].style.color = "#fff";
            }
          break;
          
          case 28:
            for (let i = 0; i < num8.length; i++) {
                num8[i].style.color = "#fff";
            }
            for (let i = 0; i < num20.length; i++) {
                num20[i].style.color = "#fff";
            }
          break;
          
          case 29:
            for (let i = 0; i < num9.length; i++) {
                num9[i].style.color = "#fff";
            }
            for (let i = 0; i < num20.length; i++) {
                num20[i].style.color = "#fff";
            }
          break;
    
          case 30:
          
            for (let i = 0; i < num0.length; i++) {
                num0[i].style.color = "#fff";
            }
            for (let i = 0; i < num30.length; i++) {
                num30[i].style.color = "#fff";
            }
          break;
          case 31:
         
            for (let i = 0; i < num1.length; i++) {
                num1[i].style.color = "#fff";
            }
            for (let i = 0; i < num30.length; i++) {
                num30[i].style.color = "#fff";
            }
          break;
         

       }
    }

    //     switch(seconds) {
    //     case 0:
    //         for (let i = 0; i < num0.length; i++) {
    //             num0[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num00.length; i++) {
    //             num00[i].style.color = "#fff";
    //         }

           
    //       break;
    //       case 1:
    //         for (let i = 0; i < num00.length; i++) {
    //             num00[i].style.color = "#fff";
    //         }
            
    //         for (let i = 0; i < num1.length; i++) {
    //             num1[i].style.color = "#fff";
    //         }
           
    //       break;
          
    //        case 2:
            
    //         for (let i = 0; i < num00.length; i++) {
    //             num00[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num2.length; i++) {
    //             num2[i].style.color = "#fff";
    //         }
           
    //       break;
          
    //       case 3:
            
    //         for (let i = 0; i < num00.length; i++) {
    //             num00[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num3.length; i++) {
    //             num3[i].style.color = "#fff";
    //         }
           
    //       break;
          
    //       case 4:
            
    //       for (let i = 0; i < num00.length; i++) {
    //             num00[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num4.length; i++) {
    //             num4[i].style.color = "#fff";
    //         }
           
    //       break;
          
    //       case 5:
            
    //         for (let i = 0; i < num00.length; i++) {
    //             num00[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num5.length; i++) {
    //             num5[i].style.color = "#fff";
    //         }
           
    //       break;
          
    //       case 6:
           
    //         for (let i = 0; i < num00.length; i++) {
    //             num00[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num6.length; i++) {
    //             num6[i].style.color = "#fff";
    //         }
           
    //       break;
          
    //       case 7:
           
    //        for (let i = 0; i < num00.length; i++) {
    //             num00[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num7.length; i++) {
    //             num7[i].style.color = "#fff";
    //         }
           
    //       break;
          
    //       case 8:
          
    //       for (let i = 0; i < num00.length; i++) {
    //             num00[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num8.length; i++) {
    //             num8[i].style.color = "#fff";
    //         }
           
    //       break;
    //       case 9:
          
    //         for (let i = 0; i < num00.length; i++) {
    //             num00[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num9.length; i++) {
    //             num9[i].style.color = "#fff";
    //         }
           
    //       break;
    //       case 10:
          
    //         for (let i = 0; i < num10.length; i++) {
    //             num10[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num0.length; i++) {
    //             num0[i].style.color = "#fff";
    //         }
           
    //       break;
    //       case 11:
          
    //         for (let i = 0; i < num10.length; i++) {
    //             num10[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num1.length; i++) {
    //             num1[i].style.color = "#fff";
    //         }
           
    //       break;
          
    //       case 12:
    //         for (let i = 0; i < num10.length; i++) {
    //             num10[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num2.length; i++) {
    //             num2[i].style.color = "#fff";
    //         }
           
    //       break;
          
    //       case 13:
    //         for (let i = 0; i < num10.length; i++) {
    //             num10[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num3.length; i++) {
    //             num3[i].style.color = "#fff";
    //         }
           
    //       break;
          
    //       case 14:
    //         for (let i = 0; i < num4.length; i++) {
    //             num4[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num10.length; i++) {
    //             num10[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 15:
    //         for (let i = 0; i < num5.length; i++) {
    //             num5[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num10.length; i++) {
    //             num10[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 16:
    //         for (let i = 0; i < num6.length; i++) {
    //             num6[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num10.length; i++) {
    //             num10[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 17:
    //         for (let i = 0; i < num7.length; i++) {
    //             num7[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num10.length; i++) {
    //             num10[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 18:
    //         for (let i = 0; i < num8.length; i++) {
    //             num8[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num10.length; i++) {
    //             num10[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 19:
    //         for (let i = 0; i < num9.length; i++) {
    //             num9[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num10.length; i++) {
    //             num10[i].style.color = "#fff";
    //         }
    //       break;
           
    //       case 20:
            
    //         for (let i = 0; i < num0.length; i++) {
    //             num0[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num20.length; i++) {
    //             num20[i].style.color = "#fff";
    //         }
    //       break;
    //       case 21:
          
    //         for (let i = 0; i < num1.length; i++) {
    //             num1[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num20.length; i++) {
    //             num20[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 22:
    //         for (let i = 0; i < num2.length; i++) {
    //             num2[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num20.length; i++) {
    //             num20[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 23:
    //         for (let i = 0; i < num3.length; i++) {
    //             num3[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num20.length; i++) {
    //             num20[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 24:
    //         for (let i = 0; i < num4.length; i++) {
    //             num4[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num20.length; i++) {
    //             num20[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 25:
    //         for (let i = 0; i < num5.length; i++) {
    //             num5[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num20.length; i++) {
    //             num20[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 26:
    //         for (let i = 0; i < num6.length; i++) {
    //             num6[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num20.length; i++) {
    //             num20[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 27:
    //         for (let i = 0; i < num7.length; i++) {
    //             num7[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num20.length; i++) {
    //             num20[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 28:
    //         for (let i = 0; i < num8.length; i++) {
    //             num8[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num20.length; i++) {
    //             num20[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 29:
    //         for (let i = 0; i < num9.length; i++) {
    //             num9[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num20.length; i++) {
    //             num20[i].style.color = "#fff";
    //         }
    //       break;
    
    //       case 30:
          
    //         for (let i = 0; i < num0.length; i++) {
    //             num0[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num30.length; i++) {
    //             num30[i].style.color = "#fff";
    //         }
    //       break;
    //       case 31:
         
    //         for (let i = 0; i < num1.length; i++) {
    //             num1[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num30.length; i++) {
    //             num30[i].style.color = "#fff";
    //         }
    //       break;
         
    //       case 32:
    //         for (let i = 0; i < num2.length; i++) {
    //             num2[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num30.length; i++) {
    //             num30[i].style.color = "#fff";
    //         }
    //       break;
         
    //       case 33:
    //         for (let i = 0; i < num3.length; i++) {
    //             num3[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num30.length; i++) {
    //             num30[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 34:
    //         for (let i = 0; i < num4.length; i++) {
    //             num4[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num30.length; i++) {
    //             num30[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 35:
    //         for (let i = 0; i < num5.length; i++) {
    //             num5[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num30.length; i++) {
    //             num30[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 36:
    //         for (let i = 0; i < num6.length; i++) {
    //             num6[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num30.length; i++) {
    //             num30[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 37:
    //         for (let i = 0; i < num7.length; i++) {
    //             num7[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num30.length; i++) {
    //             num30[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 38:
    //         for (let i = 0; i < num8.length; i++) {
    //             num8[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num30.length; i++) {
    //             num30[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 39:
    //         for (let i = 0; i < num9.length; i++) {
    //             num9[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num30.length; i++) {
    //             num30[i].style.color = "#fff";
    //         }
    //       break;
    
    //       case 40:
          
    //         for (let i = 0; i < num0.length; i++) {
    //             num0[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num40.length; i++) {
    //             num40[i].style.color = "#fff";
    //         }
    //       break;
    //       case 41:
          
    //         for (let i = 0; i < num1.length; i++) {
    //             num1[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num40.length; i++) {
    //             num40[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 42:
    //         for (let i = 0; i < num2.length; i++) {
    //             num2[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num40.length; i++) {
    //             num40[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 43:
    //         for (let i = 0; i < num3.length; i++) {
    //             num3[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num40.length; i++) {
    //             num40[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 44:
    //         for (let i = 0; i < num4.length; i++) {
    //             num4[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num40.length; i++) {
    //             num40[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 45:
    //         for (let i = 0; i < num5.length; i++) {
    //             num5[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num40.length; i++) {
    //             num40[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 46:
    //         for (let i = 0; i < num6.length; i++) {
    //             num6[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num40.length; i++) {
    //             num40[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 47:
    //         for (let i = 0; i < num7.length; i++) {
    //             num7[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num40.length; i++) {
    //             num40[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 48:
    //         for (let i = 0; i < num8.length; i++) {
    //             num8[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num40.length; i++) {
    //             num40[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 49:
    //         for (let i = 0; i < num9.length; i++) {
    //             num9[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num40.length; i++) {
    //             num40[i].style.color = "#fff";
    //         }
    //       break;
    
    //       case 50:
          
    //         for (let i = 0; i < num0.length; i++) {
    //             num0[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num50.length; i++) {
    //             num50[i].style.color = "#fff";
    //         }
    //       break;
    //       case 51:
          
    //         for (let i = 0; i < num1.length; i++) {
    //             num1[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num50.length; i++) {
    //             num50[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 52:
    //         for (let i = 0; i < num2.length; i++) {
    //             num2[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num50.length; i++) {
    //             num50[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 53:
    //         for (let i = 0; i < num3.length; i++) {
    //             num3[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num50.length; i++) {
    //             num50[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 54:
    //         for (let i = 0; i < num4.length; i++) {
    //             num4[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num50.length; i++) {
    //             num50[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 55:
    //         for (let i = 0; i < num5.length; i++) {
    //             num5[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num50.length; i++) {
    //             num50[i].style.color = "#fff";
    //         }
    //       break;
          
    //       case 56:
    //         for (let i = 0; i < num6.length; i++) {
    //             num6[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num50.length; i++) {
    //             num50[i].style.color = "#fff";
    //         }
    //       break;
        
    //       case 57:
    //         for (let i = 0; i < num7.length; i++) {
    //             num7[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num50.length; i++) {
    //             num50[i].style.color = "#fff";
    //         }
    //       break;
        
    //       case 58:
    //         for (let i = 0; i < num8.length; i++) {
    //             num8[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num50.length; i++) {
    //             num50[i].style.color = "#fff";
    //         }
    //       break;
        
    //       case 59:
    //         for (let i = 0; i < num9.length; i++) {
    //             num9[i].style.color = "#fff";
    //         }
    //         for (let i = 0; i < num50.length; i++) {
    //             num50[i].style.color = "#fff";
    //         }
    //       break;
    //     }
    // }

    

