

var map = new ol.Map({ 
   layers: [ 
     new ol.layer.Tile({ 
        source: new ol.source.OSM() 
     }) 
   ], 
   target: 'mapa', 
   view: new ol.View({ 
     center: [37.035500, -4.553746], 
     zoom: 8
   }) 
   map.addControl(new ol.control.ZoomSlider()); 
});
