d3.csv("unitrans-oct-2011.csv", function(error, csv_data) {
	function click(element){ 
		d3.selectAll("svg").attr("fill-opacity", .3)
			.attr("stroke","white");
		d3.select(this).attr("fill-opacity", 1)
			.attr("stroke","black");
		d3.selectAll("svg").remove();
		
		var graph = d3.select("body").append("svg")
			.data(csv_data)
			.attr("width", 1900)
			.attr("height", 600);
			
		csv_data.forEach(function(data) {
			if (data["route"] == element) {
				var x = +(data["time"].replace(/:/g,""));
				x = x/100;
				var circle = graph.append("circle")
					.attr("cx", x)
					.attr("cy", data["boarding"])
					.attr("r", 5);
				}
			});
		
		console.log(element); 
	}
	var color = d3.scale.category20();
	
	var data = d3.nest()
		.key(function(d) { return d.route; })
		.rollup(function(d) {
			return d3.sum(d, function(g) { return g.boarding; });
		}).entries(csv_data);
		
	data.forEach(function(d) {
		d.route = d.key;
		d.boarding = d.values;
	});

	for (var x=0, l=data.length; x<l; x++) { //Sort the array of objects.
		for (var y=0; y<l; y++) {
			if (data[x].boarding > data[y].boarding) {
				var temp = data[x];
				data[x] = data[y];
				data[y] = temp;
			}
		}
	}
	
	var div = d3.select("body").append("div")
		.attr("class", "tooltip")
		.style("opacity", 0);
	
	for (var x=0, l=data.length; x<l; x++) {
	
		var route = data[x].route;
		var boarding = data[x].boarding;
		var svgContainer = d3.select("body").append("svg")
			.data([route,boarding])
			.attr("width", 200)
			.attr("height", 200)
			.on("click",click)
			;
	
		var circle = svgContainer.append("circle")
			.data([boarding, route])
			.attr("cx", 100)
			.attr("cy", 100)
			.attr("r",100-x*5)
			.style("fill", function(d,i){ return color(x); })
			.attr("opacity",1)
			.on("mouseover", function(d) {
				div.transition()
					.duration(200)
					.style("opacity", 0.9);
				div.html("Total people who boarded: " + d)
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
				})
			.on("mouseout", function(d) {
				div.transition()
					.duration(500)
					.style("opacity", 0);
				})
			
			; //assign d3 defined colors to each circle for now
	
		var text = svgContainer.append("text")
			.data([boarding, route])
			.attr("font-size", (100-(x*4))+"px")
			.attr("x", 100)
			.attr("y", 130-x-1)
			.style("text-anchor","middle")
			.html(data[x].route)
			.attr("fill", "white")
			.on("mouseover", function(d) {
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.html("Total people who boarded: " + d)
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
				})
			.on("mouseout", function(d) {
				div.transition()
					.duration(500)
					.style("opacity", 0)
				})
			;
	}
	console.log(data); //show that data is being loaded in the console.
});

