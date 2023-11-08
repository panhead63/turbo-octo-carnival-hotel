$(function() {
    console.log( "ready!" );
  
  //click the eye icon w/class reveal 
  $(".reveal").on('click',function() {
    let $pwd = $(".pwd");
    
    if ($pwd.attr('type') === 'password') {
        $pwd.attr('type', 'text');
       $(this).children('i').addClass('bi-eye-slash-fill').removeClass('bi-eye-fill');
    } else {
        $pwd.attr('type', 'password');
     $(this).children('i').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
    }
});
  
});

var subjectObject = {
  "Math": {
    "600": ["01", "02"],
    "602": ["03", "04"],
    "625": ["05", "06"],
    "630": ["07", "08"],
    "631": ["09", "10"],
    "637": ["11", "12"]  
  },
  "English": {
    "501": ["13", "14"],
    "502": ["15", "16"],
    "504": ["17", "18"],
    "505": ["19", "20"],
    "506": ["21", "22"],
    "507": ["23", "24"]  
  },
  "Biology": {
    "100": ["25", "26"],
    "101": ["27", "28"],
    "102": ["29", "30"],
    "111": ["31", "32"],
    "112": ["33", "34"],
    "200W": ["35", "36"]  
  },
  "History": {
    "605": ["37", "38"],
    "611": ["39", "40"],
    "612": ["41", "42"],
    "621": ["43", "44"],
    "622": ["45", "46"],
    "623": ["47", "48"]  
  },
}
window.onload = function() {
  var subjectSel = document.getElementById("subject");
  var courseSel = document.getElementById("course");
  var sectionSel = document.getElementById("sections");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    sectionSel.length = 1;
    courseSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      courseSel.options[courseSel.options.length] = new Option(y, y);
    }
  }
  courseSel.onchange = function() {
    //empty Chapters dropdown
    sectionSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      sectionSel.options[sectionSel.options.length] = new Option(z[i], z[i]);
    }
  }
}

function clearResult(){
  document.getElementById("result").value = ''
}

$('#btnLoadData').click(function() {
    console.log("clicked");

    let jsonURL = "https://barrycumbie.github.io/376-india-lab/demo.json";

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(data) {
            console.log(data.firstName);
            $("#noSpaces").val(data.firstName);
            console.log(data.email);

            $('input[type=checkbox]').each(function () {
                if (data.language === $(this).val())
                {
                  $(this).prop('checked', true)
                    console.log($(this));
               }

            });

            $.each(data, function (key, val) {
                //step through results
                console.log(key, val);
           
                $(`#${key}`).val(val);
                
            });
        }
    });
});


function myFunction() {
  document.getElementById("submit").innerHTML = "Thanks! One of our tutors will email you shortly for details";
}
