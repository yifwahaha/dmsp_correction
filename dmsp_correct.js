var china1 = table.filterBounds(china);
var usa1 = table.filterBounds(usa);
//Map.addLayer(usa1);
var india1 = table.filterBounds(india);
var japan1 = table.filterBounds(japan);
var germany1 = table.filterBounds(germany);
var Canada1 = table.filterBounds(canada);
var Korea1 = table.filterBounds(korea);
var UK1 = table.filterBounds(UK);
var Russia1 = table.filterBounds(Russia);
var Australia1 = table.filterBounds(Australia);
var Brazzil1 = table.filterBounds(Brazil);
var region = [china1,usa1,india1,japan1,germany1,Canada1,Korea1,UK1,Russia1,Australia1,Brazzil1];
var c=[-3.06516, -2.0638, -1.68421, -1.71621, 0.530922, 0.303469, -0.18513, 0.490138, 1.800988, -0.6186,
-0.91352, -1.37993, 0.061872, 0.249452, 1.127103, 0.866522,0, 0.005164,-0.04462, -0.27189, -0.06977, 0.449229,
0.913485, 0.644785, -0.02563, -0.54115, -0.38377, 0.629564, 0.745403, -0.15161, 6.22332, 1.427157, 3.866698];
//
var b=[-0.00698, -0.00726, -0.00695, -0.00454, 0.00011, -0.00176, -0.00057, 0.001236, 0.002969, -0.0094,
-0.00929, -0.00889, -0.00469, -0.00452, -0.00221, -0.00351, 0, 8.94e-05, 0.000117, -0.0085, -0.00912, -0.00601,
-0.00595, -0.00675, -0.00496, -0.0094, -0.0061, -0.00084, -0.00062, -0.00278, 0.014627,0.002877, 0.007962];
 //
var a=[1.519907, 1.516595, 1.491333, 1.331971, 0.984465, 1.111207, 1.034429, 0.905787, 0.761106, 1.603921,
1.603648, 1.586457, 1.294471, 1.275902, 1.128708, 1.206319, 1, 1.002879, 0.987943, 1.555808, 1.591033, 1.401146,
1.381139,1.448976, 1.317581, 1.613536, 1.41435, 1.040815, 1.037042, 1.193437, -0.08536, 0.774923, 0.355542];


var F101992 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F101992').select('stable_lights');
var F101993 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F101993').select('stable_lights');
var F101994 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F101994').select('stable_lights');
var F121994 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F121994').select('stable_lights');
var F121995 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F121995').select('stable_lights');
var F121996 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F121996').select('stable_lights');
var F121997 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F121997').select('stable_lights');
var F121998 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F121998').select('stable_lights');
var F121999 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F121999').select('stable_lights');
var F141997 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F141997').select('stable_lights');
var F141998 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F141998').select('stable_lights');
var F141999 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F141999').select('stable_lights');
var F142000 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F142000').select('stable_lights');
var F142001 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F142001').select('stable_lights');
var F142002 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F142002').select('stable_lights');
var F142003 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F142003').select('stable_lights');
var F152000 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F152000').select('stable_lights');
var F152001 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F152001').select('stable_lights');
var F152002 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F152002').select('stable_lights');
var F152003 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F152003').select('stable_lights');
var F152004 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F152004').select('stable_lights');
var F152005 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F152005').select('stable_lights');
var F152006 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F152006').select('stable_lights');
var F152007 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F152007').select('stable_lights');
var F162004 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F162004').select('stable_lights');
var F162005 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F162005').select('stable_lights');
var F162006 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F162006').select('stable_lights');
var F162007 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F162007').select('stable_lights');
var F162008 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F162008').select('stable_lights');
var F162009 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F162009').select('stable_lights');
var F182010 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F182010').select('stable_lights');
var F182011 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F182011').select('stable_lights');
var F182012 = ee.Image('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS/F182012').select('stable_lights');

var collections =[F101992, F101993, F101994, F121994, F121995, F121996, F121997, F121998, F121999, F141997, F141998
, F141999, F142000, F142001,F142002, F142003, F152000, F152001, F152002, F152003, F152004, F152005, F152006, F152007
, F162004, F162005, F162006, F162007, F162008, F162009, F182010, F182011, F182012];
//var latitude = ee.List.sequence(-60,60,0.5);
var images = [];
var count = 0;
var total_list1 = [];
var total_list2 = [];
var images_correct1 = [];
var images_correct2 = [];
//var fun1 = function(image){
//    return image.where(image.lte(5.0), ee.Image(0.0));
//  };

//rewrite this function to replace fun2,fun3, fun4,and fun5
var fun1 = function(correct_image,raw_img){
    return correct_image.where(correct_image.lte(5.0), raw_img.float());// Can we directly replace with raw image?
  };

var fun2 = function(raw_image,correct_image){
  var a = correct_image.where(correct_image.lte(5.0),ee.Image(0.0));
  var mask = a.gt(5.0);
  var b = raw_image.updateMask(mask);
  var final_image = b.add(a);
  return final_image;
};

var fun3 = function(raw,correct){
  //0-5:1,5-63:0
  var mask1 = raw.lte(5.0);
  var mask2 = raw.gt(5.0);
  var a = raw.updateMask(mask1);
  var b = correct.updateMask(mask2);
  var final = a.add(b);
  return final
}

//////////////////////////
var fun4 = function(raw){
  var mask1 = raw.lte(5.0);
  var a =raw.updateMask(mask1);
  return a
}
var fun5 = function(raw,correct){
  var mask2 = raw.gt(5)
  var b = correct.updateMask(mask2);
  return b
}
//////////////////////////

//Do the calibration and deal with data less than 5
for (var i=0;i<33;i++){
  //model:y=ax+bx**2+c;
  images[i] = ee.Image(a[i]).multiply(collections[i].float()).add(ee.Image(b[i])
      .multiply((collections[i].float()).pow(2))).add(ee.Image(c[i]));
  images[i] = fun1(images[i],collections[i].float());
}
//This way we will save a lot of memery with the cost of calculation that is much cheaper

for (var i=0;i<33;i++){
  //model:y=ax+bx**2+c;
  images[i] = ee.Image(a[i]).multiply(collections[i]).add(ee.Image(b[i])
      .multiply(collections[i].pow(2)))
      .add(ee.Image(c[i]));
  images_correct1[i] = fun4(collections[i])
  images_correct2[i] = fun5(collections[i],images[i])
  //images_correct[i] = fun1(images[i]);
  var sum1 = [];
  var sum2 = [];
  for(var j=0;j<11;j++){

    var roi = region[j];

    var img1 = images_correct1[i].clip(roi);
    var img2 = images_correct2[i].clip(roi);

    var sum_DN1 = img1.reduceRegion({
                        reducer: ee.Reducer.sum(),
                        geometry: roi,
                        scale: 900,
                        maxPixels: 1e9});
    var sum_DN2 = img2.reduceRegion({
                        reducer:ee.Reducer.sum(),
                        geometry:roi,
                        scale:900,
                        maxPixels: 1e9});

      sum1.push(sum_DN1.get('stable_lights'));
      sum2.push(sum_DN2.get('constant'));
  }
  total_list1.push(sum1);
  total_list2.push(sum2);
  //print(sum);
}
//var total_list = [];
print(total_list1);
print(total_list2);
var data1 = ee.FeatureCollection(ee.Feature(null,{value:ee.List(total_list1)}));
var data2 = ee.FeatureCollection(ee.Feature(null,{value:ee.List(total_list2)}));
Export.table.toDrive({
  collection: data1,
  description:'sumdata',
  fileFormat:'csv'
});
Export.table.toDrive({
  collection: data2,
  description:'sumdata',
  fileFormat:'csv'
});

//https://code.earthengine.google.com/07fe7e09fad8f0eb5625be0388dcfa4e