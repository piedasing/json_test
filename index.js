$('.btn').on('click',function(){
  $.ajax({
    type: 'GET',
    url: 'https://raw.githubusercontent.com/piedasing/json_test/master/json/test.json',
    success: function(data){
      console.log(data)
      var json_data = JSON.parse(data)
    }
  })
})
