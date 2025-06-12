document.addEventListener("DOMContentLoaded", function() {
    var ctx1 = document.getElementById("lineChart").getContext("2d");
    new Chart(ctx1, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "People Reached",
                data: [120, 150, 180, 220, 300, 270, 350, 400, 380, 360, 330, 310],
                borderColor: "blue",
                fill: false
            }]
        }
    });

    var ctx2 = document.getElementById("pieChart").getContext("2d");
    new Chart(ctx2, {
        type: "pie",
        data: {
            labels: ["Workshops", "Virtual Sessions", "Community Events", "One-on-One Coaching"],
            datasets: [{
                data: [35, 25, 20, 20],
                backgroundColor: ["#ff9999","#66b3ff","#99ff99","#ffcc99"]
            }]
        }
    });

    var ctx3 = document.getElementById("barChart").getContext("2d");
    new Chart(ctx3, {
        type: "bar",
        data: {
            labels: ["18-24", "25-34", "35-44", "45-54", "55+"],
            datasets: [{
                label: "Participants",
                data: [50, 80, 100, 60, 40],
                backgroundColor: ["red", "blue", "green", "orange", "purple"]
            }]
        }
    });

    var map = L.map("map").setView([29.9511, -90.0715], 10);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    
    var locations = [
        [29.9511, -90.0715],
        [29.9841, -90.1002],
        [29.9200, -90.1200]
    ];

    locations.forEach(function(coord) {
        L.marker(coord).addTo(map).bindPopup("Outreach Event Location");
    });
});
