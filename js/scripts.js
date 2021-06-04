$(document).ready(function() {
  $("form#suggester").submit(function(event) {
    event.preventDefault();
    //the submitted answers to each of the 5 questions below//
    const spend = $("input:radio[name=spend]:checked").val();
    const color = $("input:radio[name=color]:checked").val();
    const vacation = $("input:radio[name=vacation]:checked").val();
    const animal = $("input:radio[name=animal]:checked").val();
    const entertainment = $("input:radio[name=entertainment]:checked").val();
    //possible answer combos to determine result/ language suggestion below// 
    // 4 if/if else statements for each possible language result//

    if ((spend === "csharp" && color === "csharp" && vacation === "csharp" && animal === "csharp" && entertainment === "csharp") || (spend === "csharp" && color === "csharp" && vacation === "csharp" && animal === "csharp" && entertainment === "ruby") || (spend === "javascript" && color === "csharp" && vacation === "csharp" && animal === "csharp" && entertainment === "csharp") || (spend === "csharp" && color === "csharp" && vacation === "csharp" && animal === "python" && entertainment === "csharp")) {
      $('#csharp').show();
    } else if ((spend === "ruby" && color === "ruby" && vacation === "ruby" && animal === "ruby" && entertainment === "ruby") || (spend === "ruby" && color === "ruby" && vacation === "ruby" && animal === "ruby" && entertainment === "csharp") || (spend === "ruby" && color === "ruby" && vacation === "ruby" && animal === "javascript" && entertainment === "ruby") || (spend === "ruby" && color === "ruby" && vacation === "python" && animal === "ruby" && entertainment === "ruby") || (spend === "ruby" && color === "javascript" && vacation === "ruby" && animal === "ruby" && entertainment === "ruby")) {
      $('#ruby').show();
    } else if ((spend === "javascript" && color === "javascript" && vacation === "javascript" && animal === "javascript" && entertainment === "javascript") || (spend === "javascript" && color === "javascript" && vacation === "javascript" && animal === "javascript" && entertainment === "csharp") || (spend === "javascript" && color === "javascript" && vacation === "javascript" && animal === "ruby" && entertainment === "javascript") || (spend === "javascript" && color === "javascript" && vacation === "ruby" && animal === "javascript" && entertainment === "javascript") || (spend === "javascript" && color === "python" && vacation === "javascript" && animal === "javascript" && entertainment === "javascript")) {
      $('#javascript').show();
    } else if ((spend === "python" && color === "python" && vacation === "python" && animal === "python" && entertainment === "python") || (spend === "python" && color === "python" && vacation === "python" && animal === "python" && entertainment === "csharp") || (spend === "python" && color === "python" && vacation === "python" && animal === "ruby" && entertainment === "python") || (spend === "python" && color === "python" && vacation === "javascript" && animal === "python" && entertainment === "python") || (spend === "python" && color === "csharp" && vacation === "python" && animal === "python" && entertainment === "python")) {
      $('#python').show();
    }
  });
});




// each question, their div class, name, and values below//

//q1 name spend ||div class: questions || values: music clothes food gambling  //
//q2 name color ||div class: questions || values: c-color r-color j-color p-color //
//q3 name vacation || div class: questions || values: tokyo paris bora home//
//q4 name animal || div class: questions || value: meerkat leopard rabbit dog //
//q5 name entertainment || div class: questions || value: tv games youtube podcast //

//5 questions 4 answers each question. //