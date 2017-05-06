$(document).ready(function() {
 var listview;
 var list_arr = []; 
//$("#load").on('click', function(){
  $.ajax({
   url: "http://api.dataweave.com/v1/priceintelligence_api_test/fetchBundlesAll/?api_key=8034178a60ee3eb70d8d5ab27a561485&bundle=all&per_page=100&page=1&more=1",
   success: function(data){

     var data1 = data.data;
       $.each(data1, function(i, x){

         $.each(x, function(j, y){

           $.each(y, function(k, m){

              //var card = "Title:<li>"+ m.title + "</li>Category:<li>" + m.category + "</li>Price:<li>" + m.available_price +"</li>";
              var card = "<li class='ul-color'><h5 class='title'>"+ m.title + "</h5><p class='category'>" + m.category + "</p><p class='a_price'>" + m.available_price +"</p></li>";

             // $("#data-list").append("<ul class='list list-wrap'>"+card+"<ul>");
              $("#d-list").append(card);
              //$("#d-list").append("<span class='ul-color'>" + card + "</span>");

              // for list
		var listvalues ={};
		listvalues.title = m.title;
		listvalues.category = m.category;
   		listvalues.a_price = m.avilable_price;
            	list_arr.push(listvalues);
           });
        });

      });
   },
   complete: function(){
    // To get the list data to be formed
     setTimeout(function(){
        var options = {
          valueNames: [ 'title', 'category','a_price' ],
          item: "<li><h5 class='title'></h5><p class='category'></p><p class='a_price'></p></li>"
         };
 
        var datalist = new List('data-list', options,list_arr);
     }, 2000);
   }
  });
  //});
});
