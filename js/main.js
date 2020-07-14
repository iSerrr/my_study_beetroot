let beetroot = [
    {
        name:'Beetroot Academy Rivne',
        lat: 50.619848,
        lng: 26.249555
    },
    {
        name:'Beetroot Academy Ivano-Frankivsk',
        lat: 48.924292,
        lng: 24.721024
    },    
    {
        name:'Beetroot Academy Vinnytsia',
        lat: 49.219037,
        lng: 28.436688
    },
    {
        name: 'Beetroot Academy Kiev',
        lat:50.463918,
        lng: 30.499892
    },
    {
        name: 'Beetroot Academy Zaporizhia',
        lat: 47.839188, 
        lng: 35.122219
    },
]

beetroot.forEach(element => {
    let op = document.createElement('option');
    op.innerText = element.name;
    op.value = `{"lat": ${element.lat}, "lng": ${element.lng}}`;
    op.setAttribute('data-lat', element.lat);
    op.setAttribute('data-lng', element.lng);
    $('.select').append(op);
});



function initMap() {
    let uluru = {lat: 48.924292,lng: 24.721024};
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 6, center: uluru});
       
        beetroot.forEach(element => {
            let marker = new google.maps.Marker({
                position: {lat: element.lat, lng: element.lng},
                map: map,
                title: element.name
        })
        marker.addListener("click", function() {
                map.setZoom(9);
                map.setCenter(this.getPosition());
                console.log(this.getPosition());
        });   
    })
    $('.select').change(function() {
        map.setZoom(9);
        map.setCenter(JSON.parse($('.select').val()));
    })
}




function name(start, end) {
    let i = start;
    if (i == and) return;
    function zoom() {
        map.setZoom(i);
        i++;
    }
    zoom();
}
