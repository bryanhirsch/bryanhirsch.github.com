<script>
body = d3.selectAll("body")
body.selectAll("p")
  .data([
    { text: "testing" },
    { text: "one" },
    { text: "two" },
    { text: "three" },
  ])
  .enter().append("p")
    .text(function(d) { return d.text; });


////////
// https://github.com/mbostock/d3/wiki/Requests
////////

//// Test 1, pass
var data; // a global

d3.json("http://bryanhirsch.github.dev/scratch/data.json", function(json) {
    data = json;
    // visualizeit();
});


//// Test 2, pass (inside same drupal site)
var data; // a global

d3.json("http://drupal7.dev/sites/drupal7.dev/files/users/2012-11-18/2200-2300/data.json", function(json) {
    data = json;
});

//// Test 3,
var data; // a global

d3.json("http://drupal7.dev/users?date=2012-11-18&time=2200-2300", function(json) {
    data = json;
});
</script>
