var $ = function (id) {
    return document.getElementById(id);
};

var fields = ["subtotal", "tax_rate"];

function clearResult() {
  $("sales_tax").value = '';
  $("total").value = '';  
}

function clearForm () {
  fields.forEach(function(f) {clearError(f)});
  $("subtotal").value = '';
  $("tax_rate").value = '';
  clearResult();
}

function calculateForm () {
  clearResult();
  var subtotal = parseFloat($("subtotal").value);
  var tax_rate = parseFloat($("tax_rate").value);
  if (validate('subtotal', subtotal) & validate('tax_rate', tax_rate)) {
    fields.forEach(function(f) {clearError(f)});
    $("sales_tax").value = (subtotal * tax_rate / 100.0).toFixed(2);
    $("total").value = (subtotal + subtotal * tax_rate / 100.0).toFixed(2);    
  }
}

function validate(field, value) {
  return !isNaN(value) && clearError(field) || raiseError(field);
}

function raiseError(field) {
  $(field + "_message").style.display = 'none';
  $(field + "_error_message").style.display = 'inline';
  return false;
}

function clearError(field) {  
  $(field + "_message").style.display = 'inline';
  $(field + "_error_message").style.display = 'none';
  return true;
}