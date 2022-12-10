ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([280406.250777, 4011394.630550, 369270.409005, 4086684.263821]);
var wms_layers = [];

var format_A_Limite_provincias_Andalucia_0 = new ol.format.GeoJSON();
var features_A_Limite_provincias_Andalucia_0 = format_A_Limite_provincias_Andalucia_0.readFeatures(json_A_Limite_provincias_Andalucia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_A_Limite_provincias_Andalucia_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_Limite_provincias_Andalucia_0.addFeatures(features_A_Limite_provincias_Andalucia_0);
var lyr_A_Limite_provincias_Andalucia_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A_Limite_provincias_Andalucia_0, 
                style: style_A_Limite_provincias_Andalucia_0,
                interactive: true,
                title: '<img src="styles/legend/A_Limite_provincias_Andalucia_0.png" /> A_Limite_provincias_Andalucia'
            });
var format_A_Limite_Yunquera_1 = new ol.format.GeoJSON();
var features_A_Limite_Yunquera_1 = format_A_Limite_Yunquera_1.readFeatures(json_A_Limite_Yunquera_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_A_Limite_Yunquera_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_Limite_Yunquera_1.addFeatures(features_A_Limite_Yunquera_1);
var lyr_A_Limite_Yunquera_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A_Limite_Yunquera_1, 
                style: style_A_Limite_Yunquera_1,
                interactive: true,
                title: '<img src="styles/legend/A_Limite_Yunquera_1.png" /> A_Limite_Yunquera'
            });
var format_A_Limite_EENNPP_Sierra_de_las_Nieves_2 = new ol.format.GeoJSON();
var features_A_Limite_EENNPP_Sierra_de_las_Nieves_2 = format_A_Limite_EENNPP_Sierra_de_las_Nieves_2.readFeatures(json_A_Limite_EENNPP_Sierra_de_las_Nieves_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_A_Limite_EENNPP_Sierra_de_las_Nieves_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_Limite_EENNPP_Sierra_de_las_Nieves_2.addFeatures(features_A_Limite_EENNPP_Sierra_de_las_Nieves_2);
var lyr_A_Limite_EENNPP_Sierra_de_las_Nieves_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A_Limite_EENNPP_Sierra_de_las_Nieves_2, 
                style: style_A_Limite_EENNPP_Sierra_de_las_Nieves_2,
                interactive: true,
                title: '<img src="styles/legend/A_Limite_EENNPP_Sierra_de_las_Nieves_2.png" /> A_Limite_EENNPP_Sierra_de_las_Nieves'
            });
var format_A_Plaga_Foco_Heterobasidium_3 = new ol.format.GeoJSON();
var features_A_Plaga_Foco_Heterobasidium_3 = format_A_Plaga_Foco_Heterobasidium_3.readFeatures(json_A_Plaga_Foco_Heterobasidium_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_A_Plaga_Foco_Heterobasidium_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_Plaga_Foco_Heterobasidium_3.addFeatures(features_A_Plaga_Foco_Heterobasidium_3);
var lyr_A_Plaga_Foco_Heterobasidium_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A_Plaga_Foco_Heterobasidium_3, 
                style: style_A_Plaga_Foco_Heterobasidium_3,
                interactive: true,
                title: '<img src="styles/legend/A_Plaga_Foco_Heterobasidium_3.png" /> A_Plaga_Foco_Heterobasidium'
            });
var format_L_Via_carretera_4 = new ol.format.GeoJSON();
var features_L_Via_carretera_4 = format_L_Via_carretera_4.readFeatures(json_L_Via_carretera_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_L_Via_carretera_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L_Via_carretera_4.addFeatures(features_L_Via_carretera_4);
var lyr_L_Via_carretera_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_L_Via_carretera_4, 
                style: style_L_Via_carretera_4,
                interactive: true,
                title: '<img src="styles/legend/L_Via_carretera_4.png" /> L_Via_carretera'
            });
var format_L_Via_sendero_5 = new ol.format.GeoJSON();
var features_L_Via_sendero_5 = format_L_Via_sendero_5.readFeatures(json_L_Via_sendero_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_L_Via_sendero_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L_Via_sendero_5.addFeatures(features_L_Via_sendero_5);
var lyr_L_Via_sendero_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_L_Via_sendero_5, 
                style: style_L_Via_sendero_5,
                interactive: true,
                title: '<img src="styles/legend/L_Via_sendero_5.png" /> L_Via_sendero'
            });
var format_L_Via_camino_6 = new ol.format.GeoJSON();
var features_L_Via_camino_6 = format_L_Via_camino_6.readFeatures(json_L_Via_camino_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_L_Via_camino_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L_Via_camino_6.addFeatures(features_L_Via_camino_6);
var lyr_L_Via_camino_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_L_Via_camino_6, 
                style: style_L_Via_camino_6,
                interactive: true,
                title: '<img src="styles/legend/L_Via_camino_6.png" /> L_Via_camino'
            });
var format_P_Inventario_IFN3_7 = new ol.format.GeoJSON();
var features_P_Inventario_IFN3_7 = format_P_Inventario_IFN3_7.readFeatures(json_P_Inventario_IFN3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_P_Inventario_IFN3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P_Inventario_IFN3_7.addFeatures(features_P_Inventario_IFN3_7);
var lyr_P_Inventario_IFN3_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_P_Inventario_IFN3_7, 
                style: style_P_Inventario_IFN3_7,
                interactive: true,
                title: '<img src="styles/legend/P_Inventario_IFN3_7.png" /> P_Inventario_IFN3'
            });

lyr_A_Limite_provincias_Andalucia_0.setVisible(true);lyr_A_Limite_Yunquera_1.setVisible(true);lyr_A_Limite_EENNPP_Sierra_de_las_Nieves_2.setVisible(true);lyr_A_Plaga_Foco_Heterobasidium_3.setVisible(true);lyr_L_Via_carretera_4.setVisible(true);lyr_L_Via_sendero_5.setVisible(true);lyr_L_Via_camino_6.setVisible(true);lyr_P_Inventario_IFN3_7.setVisible(true);
var layersList = [lyr_A_Limite_provincias_Andalucia_0,lyr_A_Limite_Yunquera_1,lyr_A_Limite_EENNPP_Sierra_de_las_Nieves_2,lyr_A_Plaga_Foco_Heterobasidium_3,lyr_L_Via_carretera_4,lyr_L_Via_sendero_5,lyr_L_Via_camino_6,lyr_P_Inventario_IFN3_7];
lyr_A_Limite_provincias_Andalucia_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PROVINCIAS': 'PROVINCIAS', 'PROVINCI_1': 'PROVINCI_1', 'PROVINCIA': 'PROVINCIA', 'SUM__P_F45': 'SUM__P_F45', 'TSUM__P_F4': 'TSUM__P_F4', 'TSUM__P__1': 'TSUM__P__1', 'SUM_SUM_C2': 'SUM_SUM_C2', 'SUM_C2': 'SUM_C2', 'C1': 'C1', 'C2': 'C2', 'C3': 'C3', 'C4': 'C4', 'C5': 'C5', 'C6': 'C6', 'C7': 'C7', 'C8': 'C8', 'C9': 'C9', 'C10': 'C10', });
lyr_A_Limite_Yunquera_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_A_Limite_EENNPP_Sierra_de_las_Nieves_2.set('fieldAliases', {'CODIGOESPA': 'CODIGOESPA', 'FIGURA': 'FIGURA', 'NOMBRE': 'NOMBRE', 'SUPERFICIE': 'SUPERFICIE', 'SUP_TER': 'SUP_TER', 'SUP_MAR': 'SUP_MAR', 'ZON_PRO': 'ZON_PRO', 'FEC_DECLA': 'FEC_DECLA', 'NOR_DECLA': 'NOR_DECLA', 'FEC_DEC_PR': 'FEC_DEC_PR', 'NOR_DEC_PR': 'NOR_DEC_PR', 'FEC_LIM_LI': 'FEC_LIM_LI', 'NOR_LIM_LI': 'NOR_LIM_LI', 'FEC_LIM_CA': 'FEC_LIM_CA', 'NOR_LIM_CA': 'NOR_LIM_CA', 'OBSERVAC': 'OBSERVAC', 'FORMAT_LEG': 'FORMAT_LEG', 'CARACTER': 'CARACTER', 'TIPO_FIGUR': 'TIPO_FIGUR', });
lyr_A_Plaga_Foco_Heterobasidium_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', });
lyr_L_Via_carretera_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_L_Via_sendero_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_L_Via_camino_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_P_Inventario_IFN3_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_A_Limite_provincias_Andalucia_0.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'PROVINCIAS': '', 'PROVINCI_1': '', 'PROVINCIA': '', 'SUM__P_F45': '', 'TSUM__P_F4': '', 'TSUM__P__1': '', 'SUM_SUM_C2': '', 'SUM_C2': '', 'C1': '', 'C2': '', 'C3': '', 'C4': '', 'C5': '', 'C6': '', 'C7': '', 'C8': '', 'C9': '', 'C10': '', });
lyr_A_Limite_Yunquera_1.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_A_Limite_EENNPP_Sierra_de_las_Nieves_2.set('fieldImages', {'CODIGOESPA': '', 'FIGURA': '', 'NOMBRE': '', 'SUPERFICIE': '', 'SUP_TER': '', 'SUP_MAR': '', 'ZON_PRO': '', 'FEC_DECLA': '', 'NOR_DECLA': '', 'FEC_DEC_PR': '', 'NOR_DEC_PR': '', 'FEC_LIM_LI': '', 'NOR_LIM_LI': '', 'FEC_LIM_CA': '', 'NOR_LIM_CA': '', 'OBSERVAC': '', 'FORMAT_LEG': '', 'CARACTER': '', 'TIPO_FIGUR': '', });
lyr_A_Plaga_Foco_Heterobasidium_3.set('fieldImages', {'OBJECTID': '', 'Name': '', });
lyr_L_Via_carretera_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_L_Via_sendero_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_L_Via_camino_6.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_P_Inventario_IFN3_7.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_A_Limite_provincias_Andalucia_0.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'PROVINCIAS': 'no label', 'PROVINCI_1': 'no label', 'PROVINCIA': 'no label', 'SUM__P_F45': 'no label', 'TSUM__P_F4': 'no label', 'TSUM__P__1': 'no label', 'SUM_SUM_C2': 'no label', 'SUM_C2': 'no label', 'C1': 'no label', 'C2': 'no label', 'C3': 'no label', 'C4': 'no label', 'C5': 'no label', 'C6': 'no label', 'C7': 'no label', 'C8': 'no label', 'C9': 'no label', 'C10': 'no label', });
lyr_A_Limite_Yunquera_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_A_Limite_EENNPP_Sierra_de_las_Nieves_2.set('fieldLabels', {'CODIGOESPA': 'no label', 'FIGURA': 'no label', 'NOMBRE': 'no label', 'SUPERFICIE': 'no label', 'SUP_TER': 'no label', 'SUP_MAR': 'no label', 'ZON_PRO': 'no label', 'FEC_DECLA': 'no label', 'NOR_DECLA': 'no label', 'FEC_DEC_PR': 'no label', 'NOR_DEC_PR': 'no label', 'FEC_LIM_LI': 'no label', 'NOR_LIM_LI': 'no label', 'FEC_LIM_CA': 'no label', 'NOR_LIM_CA': 'no label', 'OBSERVAC': 'no label', 'FORMAT_LEG': 'no label', 'CARACTER': 'no label', 'TIPO_FIGUR': 'no label', });
lyr_A_Plaga_Foco_Heterobasidium_3.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', });
lyr_L_Via_carretera_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_L_Via_sendero_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_L_Via_camino_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_P_Inventario_IFN3_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_P_Inventario_IFN3_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});