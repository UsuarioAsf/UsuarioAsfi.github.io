
function verificarPanel1() {
   let x = document.querySelector('#monto').value;
   
   if (x == '') {

      document.getElementById('monto').style.borderColor = '#FF5733';
      alert("Debes introducir un monto");
      return false;
   }else{
      document.getElementById('monto').style.borderColor = '#2ECC71';
      document.getElementById('sp1').innerHTML = "Ok";
      document.getElementById('sp1').style.color = '#2ECC71';
      //document.getElementById('monto').style.borderColor = '#CCD1D1';
      return true;
   }
   
}