var form = document.getElementById('indicou');
 
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var headers4 = new Headers();
    headers4.set('Accept', 'application/json');
    var dadosForm = new FormData();
     //dadosForm.append("Lat", position.coords.latitude);
      //dadosForm.append("Long", position.coords.longitude);
      dadosForm.append("Width", screen.width);
      dadosForm.append("Height", screen.height);
      dadosForm.append("pixelRatio", window.devicePixelRatio);
      dadosForm.append("nome", document.getElementsById('username')[0]);
      dadosForm.append("telefone", document.getElementsById('tel')[0]);
      var url = 'https://webhook.site/45ba7968-42c2-4979-a24c-92cd607a876d';

      var pairs = window.location.search.substring(1).split("&"), pair,i;
      for ( i in pairs ) {
        if ( pairs[i] === "" ) continue;
    
        pair = pairs[i].split("=");
        dadosForm.append(decodeURIComponent( pair[0] ), decodeURIComponent( pair[1] ));
      }
      var fetchOptions = { method: "POST", headers4: headers4, body: dadosForm};
  
      var responsePromise = fetch(url, fetchOptions);
  
    })