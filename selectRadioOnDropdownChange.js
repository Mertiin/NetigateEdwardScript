function selectRadioOnDropdownChange(dropdownId, radioId, bindings) {
  $(dropdownId).change(function() {
    var value = parseInt($(dropdownId + ' option:selected').val())
    for (var i = 0; i < bindings.length; i++) {
      var binding = bindings[i]
      if (value >= binding.from && value <= binding.to) {
        $($(radioId + ' input')[binding.target]).prop('checked', true)
      }
    }
  })
}

// EX...
// $(function(){
//   dropdownSelectStuff("#ctl20_N-5-121890584","#ctl21_N-3-121890585", [
//       {from: 0, to: 5, target: 1}
//       ])
// })
