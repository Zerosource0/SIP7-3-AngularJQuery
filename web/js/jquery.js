$(document).ready(function(){
    getMembers();
});

getMembers = function(){
    $.ajax({
       url: 'api/member',
       dataType: "json",
       contentType: "application/json; charset=utf-8",
       success: function(result){
           
           addRow(result);
       },
       type: 'GET'
    });  
};

addRow = function(result){
    for (var i = 0; i < result.length; i++) {
        var row = "<tr><td>" + result[i].id + "</td><td>" + result[i].age + "</td><td>" + result[i].eyeColor + "</td><td>" + result[i].name + "</td><td>" + result[i].email + "</td></tr>";
        $("#members tr:last").after(row);
    }
    
};