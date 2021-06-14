$(document).ready(function() {
  $("form#suggester").submit(function(event) {
    event.preventDefault();
    const spend = $("input:radio[name=spend]:checked").val();
    const color = $("input:radio[name=color]:checked").val();
    const vacation = $("input:radio[name=vacation]:checked").val();
    const animal = $("input:radio[name=animal]:checked").val();
    const entertainment = $("input:radio[name=entertainment]:checked").val();
    
    if ((spend === "csharp" && color === "csharp" && vacation === "csharp" && animal === "csharp" && entertainment === "csharp") || (spend === "csharp" && color === "csharp" && vacation === "csharp" && animal === "csharp" && entertainment === "ruby") || (spend === "javascript" && color === "csharp" && vacation === "csharp" && animal === "csharp" && entertainment === "csharp") || (spend === "csharp" && color === "csharp" && vacation === "csharp" && animal === "python" && entertainment === "csharp")) {
      $('#csharp').show();
    } else if ((spend === "ruby" && color === "ruby" && vacation === "ruby" && animal === "ruby" && entertainment === "ruby") || (spend === "ruby" && color === "ruby" && vacation === "ruby" && animal === "ruby" && entertainment === "csharp") || (spend === "ruby" && color === "ruby" && vacation === "ruby" && animal === "javascript" && entertainment === "ruby") || (spend === "ruby" && color === "ruby" && vacation === "python" && animal === "ruby" && entertainment === "ruby") || (spend === "ruby" && color === "javascript" && vacation === "ruby" && animal === "ruby" && entertainment === "ruby")) {
      $('#ruby').show();
    } else if ((spend === "javascript" && color === "javascript" && vacation === "javascript" && animal === "javascript" && entertainment === "javascript") || (spend === "javascript" && color === "javascript" && vacation === "javascript" && animal === "javascript" && entertainment === "csharp") || (spend === "javascript" && color === "javascript" && vacation === "javascript" && animal === "ruby" && entertainment === "javascript") || (spend === "javascript" && color === "javascript" && vacation === "ruby" && animal === "javascript" && entertainment === "javascript") || (spend === "javascript" && color === "python" && vacation === "javascript" && animal === "javascript" && entertainment === "javascript")) {
      $('#javascript').show();
    } else if ((spend === "python" && color === "python" && vacation === "python" && animal === "python" && entertainment === "python") || (spend === "python" && color === "python" && vacation === "python" && animal === "python" && entertainment === "csharp") || (spend === "python" && color === "python" && vacation === "python" && animal === "ruby" && entertainment === "python") || (spend === "python" && color === "python" && vacation === "javascript" && animal === "python" && entertainment === "python") || (spend === "python" && color === "csharp" && vacation === "python" && animal === "python" && entertainment === "python")) {
      $('#python').show();
    } else {
      $('#error').show();
    }
  });
});
