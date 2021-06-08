function interpretar(){
  var hematies = document.getElementById("hematies_value").value;

  if(hematies < 4)
  {
    alert("Tienes Hematíes bajos")
  }
  else if(hematies >= 4 || hematies <= 6)
  {
    alert("Tienes Hematíes adecuados")
  }
  else if(hematies > 6)
  {
    alert("Tienes Hematíes altos")
  }
}
