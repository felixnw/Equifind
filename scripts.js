mapboxgl.accessToken = 'pk.eyJ1IjoiZmQ4MjI4YSIsImEiOiJjazBvY2o4N3EwMDg4M2NyaGQ1MnpkaXRoIn0.P5qudHxwGxcy9-66acfKHA';
        var map = new mapboxgl.Map({
                container: 'map', // container ID
                style: 'mapbox://styles/fd8228a/cknskpffb04xd17qvenvk8ig1', // style URL
                center: [-77.03, 38.9], // starting position [lng, lat]
                zoom: 10 // starting zoom
        });

        map.on('load', function () {
            var filterGroup = document.getElementById('menu');

            var div = document.createElement("div");

            var transit = document.createElement('h4');
            transit.innerText = "Transit";
            div.appendChild(transit);

            var inputBR = document.createElement('input');
            inputBR.type = 'checkbox';
            inputBR.id = "brCheckBox";
            inputBR.checked = true;
            div.appendChild(inputBR);
    
            var labelBR = document.createElement('label');
            labelBR.setAttribute('for', "brCheckBox");
            labelBR.innerHTML = '<div style="height: 10px; width: 10px; background-color: #76b29e; display: inline-block; vertical-align: middle; margin-right: 0.5em;"></div> WMATA Bus Routes'
            div.appendChild(labelBR);
    
            // When the checkbox changes, update the visibility of the layer.
            inputBR.addEventListener('change', function(e) {
                map.setLayoutProperty(
                    "Bus Routes",
                    'visibility',
                    e.target.checked ? 'visible' : 'none'
                );
                map.setLayoutProperty(
                    "Bus Routes",
                    'visibility',
                    e.target.checked ? 'visible' : 'none'
                );
            });

            var inputBS = document.createElement('input');
            inputBS.type = 'checkbox';
            inputBS.id = "BSCheckBox";
            inputBS.checked = true;
            div.appendChild(inputBS);
    
            var labelBS = document.createElement('label');
            labelBS.setAttribute('for', "BSCheckBox");
            labelBS.innerHTML = '<div style="height: 20px; width: 20px; background-image: url(./img/bike.svg); display: inline-block; vertical-align: middle; margin-right: 0.5em; background-size: cover;"></div> Capitol Bikeshare Stations'
            div.appendChild(labelBS);
    
            // When the checkbox changes, update the visibility of the layer.
            inputBS.addEventListener('change', function(e) {
                map.setLayoutProperty(
                    "Bikeshare Stations",
                    'visibility',
                    e.target.checked ? 'visible' : 'none'
                );
                map.setLayoutProperty(
                    "Bikeshare Stations",
                    'visibility',
                    e.target.checked ? 'visible' : 'none'
                );
            });

            var inputMS = document.createElement('input');
            inputMS.type = 'checkbox';
            inputMS.id = "MSCheckBox";
            inputMS.checked = true;
            div.appendChild(inputMS);
    
            var labelMS = document.createElement('label');
            labelMS.setAttribute('for', "MSCheckBox");
            labelMS.innerHTML = '<div style="height: 20px; width: 20px; background-image: url(./img/metro.png); display: inline-block; vertical-align: middle; margin-right: 0.5em; background-size: cover;"></div> Metro Stations'
            div.appendChild(labelMS);
    
            // When the checkbox changes, update the visibility of the layer.
            inputMS.addEventListener('change', function(e) {
                map.setLayoutProperty(
                    "Metro Stations",
                    'visibility',
                    e.target.checked ? 'visible' : 'none'
                );
                map.setLayoutProperty(
                    "Metro Stations",
                    'visibility',
                    e.target.checked ? 'visible' : 'none'
                );
            });

            filterGroup.appendChild(div);
            div = document.createElement("div");

            var food = document.createElement('h4');
            food.innerText = "Food";
            div.appendChild(food);

            var inputGS = document.createElement('input');
            inputGS.type = 'checkbox';
            inputGS.id = "GSCheckBox";
            inputGS.checked = true;
            div.appendChild(inputGS);
    
            var labelGS = document.createElement('label');
            labelGS.setAttribute('for', "GSCheckBox");
            labelGS.innerHTML = '<div style="height: 20px; width: 20px; background-image: url(./img/grocery.svg); display: inline-block; vertical-align: middle; margin-right: 0.5em; background-size: cover;"></div> Grocery Stores'
            div.appendChild(labelGS);
    
            // When the checkbox changes, update the visibility of the layer.
            inputGS.addEventListener('change', function(e) {
                map.setLayoutProperty(
                    "Grocery Stores",
                    'visibility',
                    e.target.checked ? 'visible' : 'none'
                );
                map.setLayoutProperty(
                    "Grocery Stores",
                    'visibility',
                    e.target.checked ? 'visible' : 'none'
                );
            });

            var inputFD = document.createElement('input');
            inputFD.type = 'checkbox';
            inputFD.id = "FDCheckBox";
            inputFD.checked = true;
            div.appendChild(inputFD);
    
            var labelFD = document.createElement('label');
            labelFD.setAttribute('for', "FDCheckBox");
            labelFD.innerHTML = '<div style="height: 10px; width: 10px; background-color: #b0771c; display: inline-block; vertical-align: middle; margin-right: 0.5em;"></div> Food Deserts - More than a 10min walk from a grocery store'
            div.appendChild(labelFD);
    
            // When the checkbox changes, update the visibility of the layer.
            inputFD.addEventListener('change', function(e) {
                map.setLayoutProperty(
                    "Food Deserts",
                    'visibility',
                    e.target.checked ? 'visible' : 'none'
                );
                map.setLayoutProperty(
                    "Food Deserts",
                    'visibility',
                    e.target.checked ? 'visible' : 'none'
                );
            });

            filterGroup.appendChild(div);
            div = document.createElement("div");

            var education = document.createElement('h4');
            education.innerText = "Education";
            div.appendChild(education);

            var inputBD = document.createElement('input');
            inputBD.type = 'checkbox';
            inputBD.id = "BDCheckBox";
            inputBD.checked = false;
            div.appendChild(inputBD);
    
            var labelBD = document.createElement('label');
            labelBD.setAttribute('for', "BDCheckBox");
            labelBD.innerHTML = '<div style="height: 10px; width: 10px; background-color: #fbd1ff; display: inline-block; vertical-align: middle; margin-right: 0.5em;"></div> Percent of ward population with Bachelors Degree or higher'
            div.appendChild(labelBD);

            filterGroup.appendChild(div);
    
            // When the checkbox changes, update the visibility of the layer.
            inputBD.addEventListener('change', function(e) {
                map.setLayoutProperty(
                    "Percent of population with Bachelors Degree or higher",
                    'visibility',
                    e.target.checked ? 'visible' : 'none'
                );
                map.setLayoutProperty(
                    "Percent of population with Bachelors Degree or higher",
                    'visibility',
                    e.target.checked ? 'visible' : 'none'
                );
            });
    
    
            // var toggleableLayerIds = 
            //     ["Percent of population with Bachelors Degree or higher", 'Food Deserts', 'Grocery Stores',
            //     'Metro Stations', 'Bikeshare Stations', 'Bus Routes'];
            // for (var i = 0; i < toggleableLayerIds.length; i++) {
            //     var id = toggleableLayerIds[i];
            //     if (!document.getElementById(id)) {
            //         // Create a link.
            //         var link = document.createElement('a');
            //         link.id = id;
            //         link.href = '#';
            //         link.textContent = id;
            //         console.log(id);
            //         var visibility = map.getLayoutProperty(id, 'visibility');
            //         console.log(visibility);
            //         if (visibility === 'none') {
            //             link.className = 'inactive';
            //         } else {
            //             link.className = 'active';
            //             map.setLayoutProperty(id, 'visibility', 'visible');
            //         }
            //         // Show or hide layer when the toggle is clicked.

            //         link.onclick = function (e) {
            //             var clickedLayer = this.textContent;
            //             e.preventDefault();
            //             e.stopPropagation();

            //             visibility = map.getLayoutProperty(clickedLayer, 'visibility');
            //             console.log(visibility);

            //             if (visibility === 'visible') {
            //                 map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            //                 this.className = 'inactive';
            //             } else {
            //                 this.className = 'active';
            //                 map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            //             }
            //         };

            //     var layers = document.getElementById('menu');
            //     layers.appendChild(link);
            //     }
            // }
        });