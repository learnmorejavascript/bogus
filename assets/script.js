"use strict";

var e = function(el) {
  return document.getElementById(el);
}

var footer = {
  'For Students':{
    'Tution':'http://',
    'Classes':'http://',
    'Programs':'http://',
    'Buildings':'http://',
    'Other':'http://'
  },
  'For Teachers':{
    'Help Desk':'http://',
    'Classes':'http://',
    'Programs':'http://',
    'Buildings':'http://',
    'Other':'http://'
  },
  'For Clowns':{
    'Bogus':'http://',
    'Misc':'http://',
    'Other':'http://',
    'Link':'http://',
    'Juggling':'http://'
  }
};

var data = '';
for (var col in footer) {
  data += "<div class='footer-div'> <h3>"+col+"</h3> <ul>";
  for (var row in footer[col]) {
    data += "<li><a href='"+footer[col][row]+"'>"+row+"</a></li>";
  }
  data += "</ul> </div>";
}
e('footer-lists').innerHTML = data;