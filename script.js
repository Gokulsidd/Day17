var head=document.createElement('h1')
head.innerText="TIC TAC TOE"
head.style.fontFamily="monospace"
head.style.fontSize="35px"
head.style.Color="white"
head.style.filter= "drop-shadow(2px 2px 5px black)"
head.style.paddingLeft="537px"
head.style.paddingTop="2%"
head.style.paddingBottom="2%"
document.body.appendChild(head)



function game(){
    var state = "X"
    
    var template = document.createElement('div')
    template.style.width ="300px"
    template.style.display ="flex"
    template.style.flexDirection ="row"
    template.style.flexWrap ="wrap"
    template.style.marginTop ="100px"
    template.style.marginLeft ="500px"

    document.body.appendChild(template)

    for(i=0;i<9;i++){
        var box = document.createElement('div')
        box.setAttribute("id",i)
        box.style.height ="100px"
        box.style.filter= "drop-shadow(5px 5px 8px black)";
        box.style.width ="32%"
        box.style.borderRadius="4px"
        box.style.margin ="1px"
        box.style.backgroundColor ="lightblue"
        template.appendChild(box)
        box.addEventListener('click',function(){
              if(state =="X"){
                  this.innerText =state;
                  state ="O"
              }
              else{
                  this.innerText =state;
                  state ="X"
              }
        })

    }

}

game()
