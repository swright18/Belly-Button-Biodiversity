// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot(); 

    // 1. Create the trace for the bubble chart.
    var bubbleData = [
   
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot(); 
  });
}


        // // Build a Bubble Chart
        // var bubbleChart = {
        //     title: "Bacteria Cultures Per Sample",
        //     hovermode: "closest",
        //     xaxis: { title: "OTU ID" },
        // };

        // // 1. Create the trace for the bubble chart.
        // var bubbleData = [
        //     {
        //         x: otu_ids,
        //         y: sample_values,
        //         text: otu_labels,
        //         mode: "markers",
        //         marker: {
        //             size: sample_values,
        //             color: otu_ids,
        //             colorscale: "Earth"
        //     }
        // ];


        // Plotly.newPlot("bubble", bubbleData, bubbleLayout

        var barData = [
          {
              y: yticks,
              x: sample_values.slice(0, 10).reverse(),
              text: otu_labels.slice(0, 10).reverse(),
              type: "bar",
              orientation: "h",
          }
      ];
      // 9. Create the layout for the bar chart.
      var chartLayout = {
          title: "Top 10 Bacteria Cultures Found",
          margin: { t: 30, l: 150 }
      };
      //10. Use Plotly to plot the data with the layout.
      Plotly.newPlot("bar", barData, chartLayout);