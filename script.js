    require([
      "esri/WebScene",
      "esri/views/SceneView",
	  "esri/widgets/Search",
	  "esri/widgets/Legend",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Search, Legend, Home, PopupTemplate) {

      
      var scene = new WebScene({
        portalItem:{
         id:"46a35cadd1d0434c81ffb7c97d7b3a68",
          
        }
      });

      
  
      
      var view = new SceneView({
        container: "viewDiv",
        map: scene,
		viewingMode:'global',
      });
	  
        var homeBtn = new Home({
        view: view
      });
      view.ui.add(homeBtn, "top-left");
      
	  var searchWidget = new Search({
        view: view
      });

      
      view.ui.add(searchWidget, {
        position: "top-right"
      });
	  
	    view.when(function() {
         
          var featureLayer = scene.layers.getItemAt(0);

          var legend = new Legend({
            view: view,
            layerInfos: [{
              layer: featureLayer,
              title: "Active Duty Military Personnel"
            }]
          });
        
          view.ui.add(legend, "bottom-right");
        });
        
       [chi, usa, rus, uk].forEach(function(button) {
      button.style.display = '.esri-button';
      view.ui.add(button, 'top-right');
    });
    
    chi.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 104.1954,
          y: 35.8617,
          z: 10000000
        },
        tilt: 0,
        heading: 0
      });
    });
      
     usa.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: -95.7129,
          y: 37.0902,
          z: 10000000
        },
        tilt: 0,
        heading: 0
      });
    });
    
     rus.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 105.3188,
          y: 61.5240,
          z: 10000000
        },
        tilt: 0,
        heading: 0
      });
    });
      
       uk.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: -3.4360,
          y: 55.3781,
          z: 5000000
        },
        tilt: 0,
        heading: 0
      });
    });


      
    });
