$('.btn').on('click',function(){
  $.ajax({
    type: 'GET',
    url: './json/test.json',
    success: function(data){
      console.log(data)
      var json_data = JSON.parse(data)
      console.log(json_data)
    }
  })
})
