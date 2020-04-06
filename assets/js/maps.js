        var map;

        function initMap() {

            var options = {
                zoom: 12,
                center: { lat: 53.350140, lng: -6.266155 }
            }

            var map = new
            google.maps.Map(document.getElementById('map'), options);


            var markers = [{
                    locations: { lat: 53.350912, lng: -6.251621 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon10.png',
                    content: '<div><p><strong>Name:</strong> Jacobs Inn</p><p><strong>Price:</strong> €19 per/night</p><p><strong>Working Hours:</strong> 7/24</p><p><strong>Rate:</strong> 9.1/10</p><p><strong>Phone:</strong> (01) 855 5660</p></div>'

                },

                {
                    locations: { lat: 53.346334, lng: -6.257587 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon10.png',
                    content: '<div><p><strong>Name:</strong> Ashfield Hostel</p><p><strong>Price:</strong> €18 per/night</p><p><strong>Working Hours:</strong> 7/24</p><p><strong>Rate:</strong> 8.7/10</p><p><strong>Phone:</strong> (01) 679 7734</p></div>'

                },

                {
                    locations: { lat: 53.343880, lng: -6.269919 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon10.png',
                    content: '<div><p><strong>Name:</strong> Kinlay House Dublin</p><p><strong>Price:</strong> €12 per/night</p><p><strong>Working Hours:</strong> 7/24</p><p><strong>Rate:</strong> 7.5/10</p><p><strong>Phone:</strong> (01) 679 6644</p></div>'

                },

                {
                    locations: { lat: 53.335504, lng: -6.264637 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon10.png',
                    content: '<div><p><strong>Name:</strong> The Times Hostel</p><p><strong>Price:</strong> €12 per/night</p><p><strong>Working Hours:</strong> 7/24</p><p><strong>Rate:</strong> 9.1/10</p><p><strong>Phone:</strong> (01) 679 5527</p></div>'

                },

                {

                    locations: { lat: 53.341196, lng: -6.276672 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon10.png',
                    content: '<div><p><strong>Name:</strong> Garden Lane Backpackers</p><p><strong>Price:</strong> €21 per/night</p><p><strong>Working Hours:</strong> 7/24</p><p><strong>Rate:</strong> 9.1/10</p><p><strong>Phone:</strong> (01) 561 6885</p></div>'

                },

                {

                    locations: { lat: 53.326672, lng: -6.226079 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon10.png',
                    content: '<div><p><strong>Name:</strong> InterContinental Dublin</p><p><strong>Price:</strong> €216 per/night</p><p><strong>Working Hours:</strong> 7/24</p><p><strong>Rate:</strong> 9/10</p><p><strong>Phone:</strong> (01) 665 4000</p></div>'

                },

                {

                    locations: { lat: 53.338600, lng: -6.252872 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon10.png',
                    content: '<div><p><strong>Name:</strong> The Merrion Hotel</p><p><strong>Price:</strong> €301 per/night</p><p><strong>Working Hours:</strong> 7/24</p><p><strong>Rate:</strong> 9.6/10</p><p><strong>Phone:</strong> (01) 603 0600</p></div>'

                },

                {

                    locations: { lat: 53.341680, lng: -6.261577 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon10.png',
                    content: '<div><p><strong>Name:</strong> The Westbury</p><p><strong>Price:</strong> €286 per/night</p><p><strong>Working Hours:</strong> 7/24</p><p><strong>Rate:</strong> 9.1/10</p><p><strong>Phone:</strong> (01) 679 1122</p></div>'

                },

                {

                    locations: { lat: 53.339299, lng: -6.242842 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon10.png',
                    content: '<div><p><strong>Name:</strong> The Phil Lynott Suite</p><p><strong>Price:</strong> €181 per/night</p><p><strong>Working Hours:</strong> 7/24</p><p><strong>Rate:</strong> 10/10</p><p><strong>Phone:</strong> 086 070 2819</p></div>'

                },

                {

                    locations: { lat: 53.361001, lng: -6.253619 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon10.png',
                    content: '<div><p><strong>Name:</strong> The Croke Park Hotel</p><p><strong>Price:</strong> €116 per/night</p><p><strong>Working Hours:</strong> 7/24</p><p><strong>Rate:</strong> 9.1/10</p><p><strong>Phone:</strong> 086 070 2819</p></div>'

                },

                {

                    locations: { lat: 53.339672, lng: -6.258568 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon37.png',
                    content: '<div><p><strong>Name:</strong> Tang Cafe</p><p><strong>Price:</strong> €</p><p><strong>Working Hours:</strong> 7:30-17:00</p><p><strong>Rate:</strong> 9.1/10</p><p><strong>Phone:</strong> 086 391 5401</p></div>'

                },

                {

                    locations: { lat: 53.340126, lng: -6.258472 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon37.png',
                    content: '<div><p><strong>Name:</strong> The Greenhouse</p><p><strong>Price:</strong> €€€€</p><p><strong>Working Hours:</strong> 10:00-21:30</p><p><strong>Rate:</strong> 9.5/10</p><p><strong>Phone:</strong> (01) 676 7015</p></div>'

                },

                {

                    locations: { lat: 53.339441, lng: -6.261464 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon37.png',
                    content: '<div><p><strong>Name:</strong> Glovers Alley</p><p><strong>Price:</strong> €€€€</p><p><strong>Working Hours:</strong> 12:00-23:00</p><p><strong>Rate:</strong> 9.2/10</p><p><strong>Phone:</strong> (01) 244 0733</p></div>'

                },

                {

                    locations: { lat: 53.344026, lng: -6.269934 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon37.png',
                    content: '<div><p><strong>Name:</strong> Darkey Kellys</p><p><strong>Price:</strong> €€-€€€</p><p><strong>Working Hours:</strong> 10:30-00:30</p><p><strong>Rate:</strong> 9.2/10</p><p><strong>Phone:</strong> 083 346 4682</p></div>'

                },

                {

                    locations: { lat: 53.322749, lng: -6.236818 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon37.png',
                    content: '<div><p><strong>Name:</strong> Mulberry Garden</p><p><strong>Price:</strong> €€€€</p><p><strong>Working Hours:</strong> 18:00-22:00</p><p><strong>Rate:</strong> 9.4/10</p><p><strong>Phone:</strong> (01) 269 3300</p></div>'

                },

                {

                    locations: { lat: 53.334373, lng: -6.262846 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon37.png',
                    content: '<div><p><strong>Name:</strong> 1900 Restaurant</p><p><strong>Price:</strong> €€-€€€</p><p><strong>Working Hours:</strong> 12:00-23:00</p><p><strong>Rate:</strong> 8.8/10</p><p><strong>Phone:</strong> (01) 476 4667</p></div>'

                },

                {

                    locations: { lat: 53.354439, lng: -6.264103 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon37.png',
                    content: '<div><p><strong>Name:</strong> Chapter One</p><p><strong>Price:</strong> €€€€</p><p><strong>Working Hours:</strong> 12:30-22:30</p><p><strong>Rate:</strong> 9.4/10</p><p><strong>Phone:</strong> (01) 873 2266</p></div>'

                },

                {

                    locations: { lat: 53.333702, lng: -6.244925 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon37.png',
                    content: '<div><p><strong>Name:</strong> Bloom Brasserie</p><p><strong>Price:</strong> €€-€€€</p><p><strong>Working Hours:</strong> 12:00-23:30</p><p><strong>Rate:</strong> 9/10</p><p><strong>Phone:</strong> (01) 668 7170</p></div>'

                },

                {

                    locations: { lat: 53.335817, lng: -6.247767 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon37.png',
                    content: '<div><p><strong>Name:</strong> Chai Yo</p><p><strong>Price:</strong> €€-€€€</p><p><strong>Working Hours:</strong> 12:30-23:00</p><p><strong>Rate:</strong> 9/10</p><p><strong>Phone:</strong> (01) 676 7652</p></div>'

                },

                {

                    locations: { lat: 53.324073, lng: -6.265105 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon37.png',
                    content: '<div><p><strong>Name:</strong> Teppinyaki Restaurant</p><p><strong>Price:</strong> €€-€€€</p><p><strong>Working Hours:</strong> 17:00-23:00</p><p><strong>Rate:</strong> 9.2/10</p><p><strong>Phone:</strong> (01) 497 9463</p></div>'

                },

                {

                    locations: { lat: 53.343883, lng: -6.254582 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon13.png',
                    content: '<div><p><strong>Name:</strong> Trinity College</p><p><strong>Price:</strong> Free</p><p><strong>Working Hours:</strong> 7:00-23:00</p><p><strong>Rate:</strong> 9/10</p><p><strong>Phone:</strong> (01) 896 1000</p></div>'

                },

                {

                    locations: { lat: 53.341932, lng: -6.286709 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon13.png',
                    content: '<div><p><strong>Name:</strong> Guinness Storehouse</p><p><strong>Price:</strong> €15-€20</p><p><strong>Working Hours:</strong> 10:00-18:00</p><p><strong>Rate:</strong> 9.2/10</p><p><strong>Phone:</strong> (01) 408 4800</p></div>'

                },

                {

                    locations: { lat: 53.343007, lng: -6.300059 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon13.png',
                    content: '<div><p><strong>Name:</strong> Irish Museum of Modern Art</p><p><strong>Price:</strong> Free</p><p><strong>Working Hours:</strong> 10:00-17:00</p><p><strong>Rate:</strong> 8.6/10</p><p><strong>Phone:</strong> (01) 612 9900</p></div>'

                },

                {

                    locations: { lat: 53.342989, lng: -6.267428 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon13.png',
                    content: '<div><p><strong>Name:</strong> Dublin Castle</p><p><strong>Price:</strong> €6-€7</p><p><strong>Working Hours:</strong> 9:45-17:15</p><p><strong>Rate:</strong> 8.4/10</p><p><strong>Phone:</strong> (01) 645 8800</p></div>'

                },

                {

                    locations: { lat: 53.356082, lng: -6.318183 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon13.png',
                    content: '<div><p><strong>Name:</strong> Phoenix Park</p><p><strong>Price:</strong> Free</p><p><strong>Working Hours:</strong> 9:45-17:15</p><p><strong>Rate:</strong> 9.4/10</p><p><strong>Phone:</strong> (01) 820 5800</p></div>'

                },

                {

                    locations: { lat: 53.339599, lng: -6.271477 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon13.png',
                    content: '<div><p><strong>Name:</strong> St. Patricks Cathedral</p><p><strong>Price:</strong> €7-€9</p><p><strong>Working Hours:</strong> 9:00-17:00</p><p><strong>Rate:</strong> 8.8/10</p><p><strong>Phone:</strong> (01) 453 9472</p></div>'

                },

                {

                    locations: { lat: 53.343564, lng: -6.271071 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon13.png',
                    content: '<div><p><strong>Name:</strong> Christ Church Cathedral</p><p><strong>Price:</strong> €3-€8</p><p><strong>Working Hours:</strong> 9:00-17:00</p><p><strong>Rate:</strong> 9/10</p><p><strong>Phone:</strong> (01) 677 8099</p></div>'

                },

                {

                    locations: { lat: 53.348916, lng: -6.247862 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon13.png',
                    content: '<div><p><strong>Name:</strong> EPIC The Irish Emigration Museum</p><p><strong>Price:</strong> €8-€17</p><p><strong>Working Hours:</strong> 10:00-17:300</p><p><strong>Rate:</strong> 9.2/10</p><p><strong>Phone:</strong> (01) 906 0861</p></div>'

                },

                {

                    locations: { lat: 53.344275, lng: -6.259525 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon13.png',
                    content: '<div><p><strong>Name:</strong> Irish Whiskey Museum</p><p><strong>Price:</strong> €16-€20</p><p><strong>Working Hours:</strong> 10:00-19:30</p><p><strong>Rate:</strong> 9.2/10</p><p><strong>Phone:</strong> (01) 525 0970</p></div>'

                },

                {

                    locations: { lat: 53.342479, lng: -6.309854 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon13.png',
                    content: '<div><p><strong>Name:</strong> Kilmainham Gaol</p><p><strong>Price:</strong> €7-€10</p><p><strong>Working Hours:</strong> 9:30-18:00</p><p><strong>Rate:</strong> 9.2/10</p><p><strong>Phone:</strong> (01) 453 5984</p></div>'

                },

                {

                    locations: { lat: 53.345016, lng: -6.276332 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon27.png',
                    content: '<div><p><strong>Name:</strong> Brazen Head</p><p><strong>Price:</strong> €€</p><p><strong>Working Hours:</strong> 10:30-00:30</p><p><strong>Rate:</strong> 9.2/10</p><p><strong>Phone:</strong> (01) 679 5186</p></div>'

                },

                {

                    locations: { lat: 53.341914, lng: -6.265287 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon27.png',
                    content: '<div><p><strong>Name:</strong> The Long Hall</p><p><strong>Price:</strong> €€</p><p><strong>Working Hours:</strong> 11:00-01:00</p><p><strong>Rate:</strong> 9.3/10</p><p><strong>Phone:</strong> (01) 475 1590</p></div>'

                },

                {

                    locations: { lat: 53.364749, lng: -6.271219 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon27.png',
                    content: '<div><p><strong>Name:</strong> The Bernard Shaw</p><p><strong>Price:</strong> €€</p><p><strong>Working Hours:</strong> 11:00-03:00</p><p><strong>Rate:</strong> 9/10</p><p><strong>Phone:</strong> (01) 906 0218</p></div>'

                },

                {

                    locations: { lat: 53.343537, lng: -6.259677 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon27.png',
                    content: '<div><p><strong>Name:</strong> O Donoghues Bar</p><p><strong>Price:</strong> €€</p><p><strong>Working Hours:</strong> 09:00-00:00</p><p><strong>Rate:</strong> 8.8/10</p><p><strong>Phone:</strong> (01) 677 0605</p></div>'

                },

                {

                    locations: { lat: 53.349863, lng: -6.277853 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon27.png',
                    content: '<div><p><strong>Name:</strong> The Cobblestone</p><p><strong>Price:</strong> €</p><p><strong>Working Hours:</strong> 14:00-00:30</p><p><strong>Rate:</strong> 9.2/10</p><p><strong>Phone:</strong> (01) 872 1799</p></div>'

                },

                {

                    locations: { lat: 53.337814, lng: -6.252425 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon27.png',
                    content: '<div><p><strong>Name:</strong> Toners</p><p><strong>Price:</strong> €€</p><p><strong>Working Hours:</strong> 10:30-00:30</p><p><strong>Rate:</strong> 8.8/10</p><p><strong>Phone:</strong> (01) 676 3090</p></div>'

                },

                {

                    locations: { lat: 53.351081, lng: -6.282321 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon27.png',
                    content: '<div><p><strong>Name:</strong> L. Mulligan Grocer</p><p><strong>Price:</strong> €€</p><p><strong>Working Hours:</strong> 12:30-23:30</p><p><strong>Rate:</strong> 9/10</p><p><strong>Phone:</strong> (01) 670 9889</p></div>'

                },

                {

                    locations: { lat: 53.341285, lng: -6.261003 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon27.png',
                    content: '<div><p><strong>Name:</strong> McDaids</p><p><strong>Price:</strong> €€</p><p><strong>Working Hours:</strong> 10:30-00:30</p><p><strong>Rate:</strong> 8.8/10</p><p><strong>Phone:</strong> (01) 679 4395</p></div>'

                },


                {

                    locations: { lat: 53.352479, lng: -6.260368 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon27.png',
                    content: '<div><p><strong>Name:</strong> The Living Room</p><p><strong>Price:</strong> €€</p><p><strong>Working Hours:</strong> 10:00-03:00</p><p><strong>Rate:</strong> 8.4/10</p><p><strong>Phone:</strong> (01) 872 7169</p></div>'

                },

                {

                    locations: { lat: 53.345578, lng: -6.264204 },
                    iconMarker: 'http://maps.google.com/mapfiles/kml/pal2/icon27.png',
                    content: '<div><p><strong>Name:</strong> The Temple Bar</p><p><strong>Price:</strong> €€€</p><p><strong>Working Hours:</strong> 10:00-03:00</p><p><strong>Rate:</strong> 9.2/10</p><p><strong>Phone:</strong> (01) 672 5286</p></div>'

                },



            ];

            for (var i = 0; i < markers.length; i++) {
                addMarker(markers[i]);
            }

            function addMarker(base) {
                var marker = new google.maps.Marker({
                    position: base.locations,
                    map: map,
                    //icon: base.iconMarker
                });

                if (base.iconMarker) {
                    marker.setIcon(base.iconMarker);

                }

                if (base.content) {
                    var infoWindow = new google.maps.InfoWindow({
                        content: base.content
                    });

                    marker.addListener('click', function() {
                        infoWindow.open(map, marker);
                    });

                }
            }
        }


        
