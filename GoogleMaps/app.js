var markers = [
    {
      "title": "Arroio do Meio",
      "lat": -29.4014151,
      "lng": -51.9470039
    },
    {
      "title": "Bom Retiro do Sul",
      "lat": -29.6092175,
      "lng": -51.9468971
    },
    {
      "title": "Canudos do Vale",
      "lat": -29.3229905,
      "lng": -52.2383921
    },
    {
      "title": "Capitão",
      "lat": -29.2710815,
      "lng": -51.9893557
    },
    {
      "title": "Colinas",
      "lat": -29.3891281,
      "lng": -51.8715834
    },
    {
      "title": "Cruzeiro do Sul",
      "lat": -29.5133367,
      "lng": -51.986626
    },
    {
      "title": "Encantado",
      "lat": -29.236805,
      "lng": -51.874572
    },
    {
      "title": "Estrela",
      "lat": -29.5021978,
      "lng": -51.9695611
    },
    {
      "title": "Fazenda Vilanova",
      "lat": -29.5906741,
      "lng": -51.8299978
    },
    {
      "title": "Forquetinha",
      "lat": -29.3848088,
      "lng": -52.0990619
    },
    {
      "title": "Imigrante",
      "lat": -29.3545616,
      "lng": -51.7802304
    },
    {
      "title": "Lajeado",
      "lat": -29.4663559,
      "lng": -51.9633544
    },
    {
      "title": "Marques de Souza",
      "lat": -29.3277391,
      "lng": -52.0972108
    },
    {
      "title": "Mato Leitão",
      "lat": -29.5248186,
      "lng": -52.1301486
    },
    {
      "title": "Muçum",
      "lat": -29.1665198,
      "lng": -51.8735793
    },
    {
      "title": "Paverama",
      "lat": -29.5511998,
      "lng": -51.7374725
    },
    {
      "title": "Poço das Antas",
      "lat": -29.450178,
      "lng": -51.671959
    },
    {
      "title": "Pouso Novo",
      "lat": -29.1714841,
      "lng": -52.2095528
    },
    {
      "title": "Progresso",
      "lat": -29.2422098,
      "lng": -52.3135834
    },
    {
      "title": "Roca Sales",
      "lat": -29.284663,
      "lng": -51.8719074
    },
    {
      "title": "Santa Clara do Sul",
      "lat": -29.4656052,
      "lng": -52.0839017
    },
    {
      "title": "Sério",
      "lat": -29.3874774,
      "lng": -52.2693369
    },
    {
      "title": "Tabaí",
      "lat": -29.6852377,
      "lng": -51.7187607
    },
    {
      "title": "Taquari",
      "lat": -29.7908127,
      "lng": -51.8779606
    },
    {
      "title": "Teutônia",
      "lat": -29.4807832,
      "lng": -51.8308868
    },
    {
      "title": "Travesseiro",
      "lat": -29.2944715,
      "lng": -52.0650453
    },
    {
      "title": "Venâncio Aires",
      "lat": -29.6058179,
      "lng": -52.1941537
    },
    {
      "title": "Westfália",
      "lat": -29.4321684,
      "lng": -51.7726723
    },
    {
      "title": "Triunfo",
      "lat": -29.940227,
      "lng": -51.7100205
    }
   ];
window.onload = function () {
    LoadMap();

}
let map
function LoadMap() {
    //set the options for the map
    var mapOptions = {
        center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
        zoom: 8.5,
        minZoom: 7,
        maxZoom:18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);
    
    //Create and open InfoWindow.
    var infoWindow = new google.maps.InfoWindow();

    for (var i = 0; i < markers.length; i++) {
        var data = markers[i];
        
        //create markers
        var myLatlng = new google.maps.LatLng(data.lat, data.lng);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: data.title,
            value: i
        });
        
        //create button
        var button = document.createElement("button");
        button.value = i
        button.innerHTML = data.title;
        button.className = "btn btn-outline";
        button.id = `btnid${i}`;
        var buttonDiv = document.getElementById("buttons");
        
        buttonDiv.appendChild(button).className = "button";
        

        //Attach click event to the button
        var botao = document.getElementById(`btnid${i}`);
        
        botao.addEventListener('click',function(){
            window.scrollTo(0,0);
            var position = this.value;
            var id = this.id;
            var classes = this.classList;
            lati = markers[position].lat
            long = markers[position].lng
            map.setZoom(13);
            map.setCenter(new google.maps.LatLng(lati,long));

        });

        //Attach click event to the marker.
        (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {
                //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                map.setZoom(13);
                map.setCenter(marker.getPosition());
                infoWindow.setContent("<div style = 'width:100px;min-height:40px'>" + data.title + "</div>");
                infoWindow.open(map, marker);
                
            });
        })(marker, data);

    }
    
    //create event listener
    //for(var z = 0; z < markers.length; z ++){
    //}
    }