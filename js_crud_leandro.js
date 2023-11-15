var TbItens = []; // Defina TbItens no escopo global como uma matriz vazia

function variaveis() {
  var itens = localStorage.getItem("TbItens");
  TbItens = JSON.parse(itens);
  if (TbItens == null) {
    TbItens = [];
    
  }
}

function cadastrar(form) {
  var diferenciaisSelecionados = "";
 
  for (var i = 0; i < form.diferenciais.length; i++) {
    if (form.diferenciais[i].checked) {
      diferenciaisSelecionados += form.diferenciais[i].value + ",";
    }
  }

  if (diferenciaisSelecionados !== "")
    diferenciaisSelecionados = diferenciaisSelecionados.slice(0, -1);

  if(form.modelo.value == "" || form.marca.value=="" || form.quantidade.value=="" || form.tipo.value=="" || form.condicao.value == "" || diferenciaisSelecionados ==""){
    alert("informe os dados!");
  }
  else{
   
  
    var novoItem = {
      modelo: form.modelo.value,
      marca: form.marca.value,
      quantidade: form.quantidade.value,
      tipo: form.tipo.value,
      condicao: form.condicao.value,
      diferenciais: diferenciaisSelecionados,
    };
  
    TbItens.push(novoItem); // Adicione o novo item à matriz TbItens
    localStorage.setItem("TbItens", JSON.stringify(TbItens));
    alert("Registro inserido.");
  }
}

function lista(){
    // let tbody=document.getElementById("tbody");
    // for(var i =0; i<= TbItens.length; i++){
    //   let tr=tbody.insertrow();
    //   let td_modelo=tr.insertcell();
    //   let td_marca=tr.insertcell();
    //   var ListaItens = JSON.parse(localStorage.getItem[1]));
    //   var ListaItens2 = JSON.parse(localStorage.getItem[2]));
    //   td_modelo.innertext =  ListaItens;
    //   td_marca.innertext= ListaItens[2];
        
    //  }
    //  return true;
    //let lst= 
    for(var i =0; i<= localStorage.length; i++){
        alert(JSON.parse(localStorage.getItem("Tbitems")));
    }  
  }
