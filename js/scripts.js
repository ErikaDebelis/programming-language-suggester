$(document).ready(function() {
  $("#suggester").submit(function(event) {
    event.preventDefault();
    //the submitted answers to each of the 5 questions below//
    const spend = $("input:radio[name=spend]:checked").val();
    const color = $("input:radio[name=color]:checked").val();
    const vacation = $("input:radio[name=vacation]:checked").val();
    const animal = $("input:radio[name=animal]:checked").val();
    const entertainment = $("input:radio[name=entertainment]:checked").val();

    //possible answer combos to determine result/ language suggestion below// 
    // 4 if/if else statements for each possible language result//

  if (spend === music && color === p-color && vacation === tokyo && entertainment === games || spend === music && color === j-color && vacation === tokyo && entertainment === games || spend === food && color === p-color && vacation === tokyo && entertainment === games || spend === music && color === p-color && vacation === tokyo && entertainment === podcast) {
    $('#csharp').show();
  } else if (spend === clothes && color === r-color && vacation === paris && animal === leopard && entertainment === tv || spend === clothes && color === r-color && vacation === bora && animal === leopard && entertainment === tv || spend === food && color === r-color && vacation === paris && animal === leopard && entertainment === tv || spend === clothes && color === j-color && vacation === paris && animal === leopard && entertainment === tv || spend === clothes && color === r-color && vacation === paris && animal === meerkat && entertainment === tv) {
    $('#ruby').show();
  } else if (spend === food && color === c-color && vacation === home && animal === rabbit && entertainment === podcast || spend === food && color === c-color && vacation === tokyo && animal === rabbit && entertainment === podcast || spend === food && color === c-color && vacation === home && animal === dog && entertainment === podcast || spend === food && color === c-color && vacation === home && animal === rabbit && entertainment === youtube || spend === food && color === j-color && vacation === home && animal === rabbit && entertainment === podcast) {
    $('#js').show();
  } else if (spend === gambling && color === j-color && vacation === bora && animal === meerkat && entertainment === tv || spend === gambling && color === j-color && vacation === paris && animal === meerkat && entertainment === tv || spend === gambling && color === j-color && vacation === bora && animal === dog && entertainment === tv || spend === gambling && color === c-color && vacation === bora && animal === meerkat && entertainment === games || spend === gambling && color === j-color && vacation === bora && animal === meerkat && entertainment === tv) {
    $('#python').show();
  }
  });
});




// each question, their div class, name, and values below//

//q1 name spend || options1-4 || values: music clothes food gambling  //
//q2 name color || options1-4 || values: c-color r-color j-color p-color //
//q3 name vacation || options 1-4 || values: tokyo paris bora home//
//q4 name animal || options 1-4 || value: meerkat leopard rabbit dog //
//q5 name entertainment || options 1-4 || value: tv games youtube podcast //

//5 questions 4 answers each question. 