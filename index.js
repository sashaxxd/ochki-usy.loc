   
   $(document).ready(function()
   {
      var jQuerySlider1Options =
      {
         orientation: 'horizontal',
         animate: true,
         range: false,
         min: 106,
         max: 200,
         value: 0
      };
      $("#jQuerySlider1").slider(jQuerySlider1Options);
       $("#jQuerySlider1").bind('slide', function(event, ui)
       {
           var x = ui.value;
           $("#ochki")
               .css({left: x});
       });



      var jQuerySlider2Options =
      {
         orientation: 'horizontal',
         animate: true,
         range: false,
         min: 0,
         max: 100,
         value: 0
      };
      $("#jQuerySlider2").slider(jQuerySlider2Options);
       $("#jQuerySlider2").bind('slide', function(event, ui)
       {
           var x = ui.value;
           $("#ochki")
               .css({top: x});
       });



      var jQuerySlider3Options =
      {
         orientation: 'horizontal',
         animate: true,
         range: false,
         min: 106,
         max: 200,
         value: 0
      };
      $("#jQuerySlider3").slider(jQuerySlider3Options);
       $("#jQuerySlider3").bind('slide', function(event, ui)
       {
           var x = ui.value;
           $("#Image2")
               .css({left: x});
       });




      var jQuerySlider4Options =
      {
         orientation: 'horizontal',
         animate: true,
         range: false,
         min: 100,
         max: 200,
         value: 0
      };
      $("#jQuerySlider4").slider(jQuerySlider4Options);

       $("#jQuerySlider4").bind('slide', function(event, ui)
       {
           var x = ui.value;
           $("#Image2")
               .css({top: x});
       });



      var jQuerySlider5Options =
      {
         orientation: 'horizontal',
         animate: true,
         range: false,
         min: 0,
         max: 100,
         value: 0
      };






      var jQuerySlider6Options =
      {
         orientation: 'horizontal',
         animate: true,
         range: false,
         min: 0,
         max: 100,
         value: 0
      };
      $("#jQuerySlider6").slider(jQuerySlider6Options);
      var jQuerySlider7Options =
      {
         orientation: 'horizontal',
         animate: true,
         range: false,
         min: 0,
         max: 100,
         value: 0
      };
      $("#jQuerySlider7").slider(jQuerySlider7Options);
      var jQuerySlider8Options =
      {
         orientation: 'horizontal',
         animate: true,
         range: false,
         min: 0,
         max: 100,
         value: 0
      };
      $("#jQuerySlider8").slider(jQuerySlider8Options);
   });
   