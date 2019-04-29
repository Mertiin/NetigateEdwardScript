function onChange(dropdownId, radioId, bindings){
    var value = parseInt($(dropdownId + ' option:selected').val())
    for (var i = 0; i < bindings.length; i++) {
      var binding = bindings[i]
      if (value >= binding.from && value <= binding.to) {
        $($(radioId + ' input')[binding.target]).prop('checked', true)
      }
    }
}

function selectRadioOnDropdownChange(dropdownId, radioId, bindings) {
  $(dropdownId).change(function() {
    onChange(dropdownId, radioId, bindings);
  })
}

// Ex...
// $(function(){
//     var bindings = [
//         {from: 0, to: 1, target: 0},
//         {from: 2, to: 3, target: 1}
//     ];
//     selectRadioOnDropdownChange('#ctl21_N-5-124409750', '#ctl22_N-3-124409767', bindings);
//     onChange('#ctl21_N-5-124409750', '#ctl22_N-3-124409767', bindings);
// })
