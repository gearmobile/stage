$(document).ready(function(){var e=$(".tab-content .collapse");e.on("shown.bs.collapse",function(){$(this).prev().find(".fa").removeClass("fa-plus-circle").addClass("fa-minus-circle")}),e.on("hidden.bs.collapse",function(){$(this).prev().find(".fa").removeClass("fa-minus-circle").addClass("fa-plus-circle")});var i=$(".feature-two .flipper");i.hover(function(){$(this).next(".thumbnail__title").addClass("thumbnail__title--highlight")},function(){$(this).next(".thumbnail__title").removeClass("thumbnail__title--highlight")});var a=$("#featureSixForm"),t={feedback:{success:"fa-check-circle",error:"fa-times-circle"}};a.validator(t);var l=$("#plan");l.select2({minimumResultsForSearch:1/0,width:"100%"});var s=new WOW({boxClass:"wow",animateClass:"animated",offset:200,mobile:!1,live:!0});s.init()});