var hematies = document.getElementById("hematies_value");
var hemoglobina = document.getElementById("hemoglobina_value");
var hematocrito = document.getElementById("hematocrito_value");
var VCM = document.getElementById("VCM_value");
var HCM = document.getElementById("HCM_value");
var linfocitos = document.getElementById("linfocitos_value");
var neutrofilos = document.getElementById("neutrofilos_value");
var eosinofilos = document.getElementById("eosinofilos_value");
var plaquetas = document.getElementById("plaquetas_value");
var VSG = document.getElementById("VSG_value");
var glucosa = document.getElementById("glucosa_value");
var urea = document.getElementById("urea_value");
var acidourico = document.getElementById("acidourico_value");
var creatinina = document.getElementById("creatinina_value");
var colesterol = document.getElementById("colesterol_value");
var trigliceridos = document.getElementById("trigliceridos_value");
var transaminasas = document.getElementById("transaminasas_value");
var fosfataalcalina = document.getElementById("fosfataalcalina_value");
var calcio = document.getElementById("calcio_value");
var hierro = document.getElementById("hierro_value");
var potasio = document.getElementById("potasio_value");
var sodio = document.getElementById("sodio_value");
var bilirrubina = document.getElementById("bilirrubina_value");


function CalcHematies(){
  if(parseInt(hematies.value) >= 4) {
    if(parseInt(hematies.value) <= 6) {
      alert("Tu nivel de Hematies es adecuado")
    }
    else {
      alert("Tu nivel de Hematies es alto")
    }
  }
  else {
    alert("Tu nivel de Hematies es bajo")
  }
}

function CalcHemoglobina(){
  if(parseInt(hemoglobina.value) >= 12) {
    if(parseInt(hemoglobina.value) <= 16) {
      alert("Tu nivel de Hemoglobina es adecuado")
    }
    else {
      alert("Tu nivel de Hemoglobina es alto")
    }
  }
  else {
    alert("Tu nivel de Hemoglobina es bajo")
  }
}

function CalcHematocrito(){
  if(parseInt(hematocrito.value) >= 36) {
    if(parseInt(hematocrito.value) <= 53) {
      alert("Tu nivel de Hematocrito es adecuado")
    }
    else {
      alert("Tu nivel de Hematocrito es alto")
    }
  }
  else {
    alert("Tu nivel de Hematocrito es bajo")
  }
}

function CalcVCM(){
  if(parseInt(VCM.value) >= 88) {
    if(parseInt(VCM.value) <= 100) {
      alert("Tu nivel de VCM es adecuado")
    }
    else {
      alert("Tu nivel de VCM es alto")
    }
  }
  else {
    alert("Tu nivel de VCM es bajo")
  }
}

function CalcHCM(){
  if(parseInt(HCM.value) >= 27) {
    if(parseInt(HCM.value) <= 33) {
      alert("Tu nivel de HCM es adecuado")
    }
    else {
      alert("Tu nivel de HCM es alto")
    }
  }
  else {
    alert("Tu nivel de HCM es bajo")
  }
}

function CalcLinfocitos(){
  if(parseInt(linfocitos.value) >= 1300) {
    if(parseInt(linfocitos.value) <= 4000) {
      alert("Tu nivel de Linfocitos es adecuado")
    }
    else {
      alert("Tu nivel de Linfocitos es alto")
    }
  }
  else {
    alert("Tu nivel de Linfocitos es bajo")
  }
}

function CalcNeutrofilos(){
  if(parseInt(neutrofilos.value) >= 2000) {
    if(parseInt(neutrofilos.value) <= 7500) {
      alert("Tu nivel de Neutrofilos es adecuado")
    }
    else {
      alert("Tu nivel de Neutrofilos es alto")
    }
  }
  else {
    alert("Tu nivel de Neutrofilos es bajo")
  }
}

function CalcEosinofilos(){
  if(parseInt(eosinofilos.value) >= 50) {
    if(parseInt(eosinofilos.value) <= 500) {
      alert("Tu nivel de Eosinofilos es adecuado")
    }
    else {
      alert("Tu nivel de Eosinofilos es alto")
    }
  }
  else {
    alert("Tu nivel de Eosinofilos es bajo")
  }
}

function CalcPlaquetas(){
  if(parseInt(plaquetas.value) >= 150000) {
    if(parseInt(plaquetas.value) <= 400000) {
      alert("Tu nivel de Plaquetas es adecuado")
    }
    else {
      alert("Tu nivel de Plaquetas es alto")
    }
  }
  else {
    alert("Tu nivel de Plaquetas es bajo")
  }
}

function CalcVSG(){
  if(parseInt(VSG.value) >= 0) {
    if(parseInt(VSG.value) <= 20) {
      alert("Tu nivel de VSG es adecuado")
    }
    else {
      alert("Tu nivel de VSG es alto")
    }
  }
  else {
    alert("Tu nivel de VSG es bajo")
  }
}

function CalcGlucosa(){
  if(parseInt(glucosa.value) >= 70) {
    if(parseInt(glucosa.value) <= 110) {
      alert("Tu nivel de Glucosa es adecuado")
    }
    else {
      alert("Tu nivel de Glucosa es alto")
    }
  }
  else {
    alert("Tu nivel de Glucosa es bajo")
  }
}

function CalcUrea(){
  if(parseInt(urea.value) >= 1) {
    if(parseInt(urea.value) <= 1.5) {
      alert("Tu nivel de Urea es adecuado")
    }
    else {
      alert("Tu nivel de Urea es alto")
    }
  }
  else {
    alert("Tu nivel de Urea es bajo")
  }
}

function CalcAcidoUrico(){
  if(parseInt(acidourico.value) >= 2) {
    if(parseInt(acidourico.value) <= 7) {
      alert("Tu nivel de Acido Urico es adecuado")
    }
    else {
      alert("Tu nivel de Acido Urico es alto")
    }
  }
  else {
    alert("Tu nivel de Acido Urico es bajo")
  }
}

function CalcCreatinina(){
  if(parseInt(creatinina.value) >= 70) {
    if(parseInt(creatinina.value) <= 110) {
      alert("Tu nivel de Creatinina es adecuado")
    }
    else {
      alert("Tu nivel de Creatinina es alto")
    }
  }
  else {
    alert("Tu nivel de Creatinina es bajo")
  }
}

function CalcColesterol(){
  if(parseInt(colesterol.value) >= 120) {
    if(parseInt(colesterol.value) <= 200) {
      alert("Tu nivel de Colesterol es adecuado")
    }
    else {
      alert("Tu nivel de Colesterol es alto")
    }
  }
  else {
    alert("Tu nivel de Colesterol es bajo")
  }
}

function CalcTrigliceridos(){
  if(parseInt(trigliceridos.value) >= 30) {
    if(parseInt(trigliceridos.value) <= 280) {
      alert("Tu nivel de Trigliceridos es adecuado")
    }
    else {
      alert("Tu nivel de Trigliceridos es alto")
    }
  }
  else {
    alert("Tu nivel de Trigliceridos es bajo")
  }
}

function CalcTransaminasas(){
  if(parseInt(transaminasas.value) >= 7) {
    if(parseInt(transaminasas.value) <= 40) {
      alert("Tu nivel de Transaminasas es adecuado")
    }
    else {
      alert("Tu nivel de Transaminasas es alto")
    }
  }
  else {
    alert("Tu nivel de Transaminasas es bajo")
  }
}

function CalcFosfataAlcalina(){
  if(parseInt(fosfataalcalina.value) >= 89) {
    if(parseInt(fosfataalcalina.value) <= 280) {
      alert("Tu nivel de Fosfata Alcalina es adecuado")
    }
    else {
      alert("Tu nivel de Fosfata Alcalina es alto")
    }
  }
  else {
    alert("Tu nivel de Fosfata Alcalina es bajo")
  }
}

function CalcCalcio(){
  if(parseInt(calcio.value) >= 9) {
    if(parseInt(calcio.value) <= 11) {
      alert("Tu nivel de Calcio es adecuado")
    }
    else {
      alert("Tu nivel de Calcio es alto")
    }
  }
  else {
    alert("Tu nivel de Calcio es bajo")
  }
}

function CalcHierro(){
  if(parseInt(hierro.value) >= 50) {
    if(parseInt(hierro.value) <= 150) {
      alert("Tu nivel de Hierro es adecuado")
    }
    else {
      alert("Tu nivel de Hierro es alto")
    }
  }
  else {
    alert("Tu nivel de Hierro es bajo")
  }
}

function CalcPotasio(){
  if(parseInt(potasio.value) >= 4) {
    if(parseInt(potasio.value) <= 5) {
      alert("Tu nivel de Potasio es adecuado")
    }
    else {
      alert("Tu nivel de Potasio es alto")
    }
  }
  else {
    alert("Tu nivel de Potasio es bajo")
  }
}

function CalcSodio(){
  if(parseInt(sodio.value) >= 135) {
    if(parseInt(sodio.value) <= 145) {
      alert("Tu nivel de Sodio es adecuado")
    }
    else {
      alert("Tu nivel de Sodio es alto")
    }
  }
  else {
    alert("Tu nivel de Sodio es bajo")
  }
}

function CalcBilirrubina(){
  if(parseInt(bilirrubina.value) >= 0) {
    if(parseInt(bilirrubina.value) <= 1) {
      alert("Tu nivel de Bilirrubina es adecuado")
    }
    else {
      alert("Tu nivel de Bilirrubina es alto")
    }
  }
  else {
    alert("Tu nivel de Bilirrubina es bajo")
  }
}

