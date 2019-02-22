const AutoComplete = function () {
    const inputSearch = document.getElementById('searchEvent')
    inputSearch.focus()

    inputSearch.addEventListener('input',function(){
        limparOption()
        if (this.value.length>=2) {
            getEvents(this.value).then(responses=>{
                if (responses.arrayBusca.length!==0) {              
                    for (const event of responses.arrayBusca) {
                       const Option = document.createElement('OPTION')
                       Option.setAttribute('value',event)
                       getDataList().appendChild(Option)
                    }
                }else{

                }
            })
        }
    })
}

/**  datalist atual */
const getDataList = function () {
    return document.getElementById('events')
}
/** remove os option da tag datalist  */
const limparOption=function(){
   
let Child = getDataList().firstChild;

    while(Child){
        getDataList().removeChild(Child)
        Child =  getDataList().firstChild
    }
    console.log(getDataList().childNodes);
    
}
/** Faz uma requisição ajax com retorno dos eventos */
const getEvents= async function (param){
    try {
         const response =  await fetch(`http://localhost:8080/api/${param}`);
        const json = await response.json()
        return json;

    } catch (error) {
        
    }
}

AutoComplete()