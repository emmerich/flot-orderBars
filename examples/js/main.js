// DATA DEFINITION
function getData() {
    var data = [];

    data.push({
        data: [[0, 1], [1, 4], [2, 2]]
    });

    data.push({
        data: [[0, 5], [1, 3], [2, 1]]
    });

    return data;
}


// ORDERED & STACKED CHART
var orig_data = getData();

// Add order: 0 to the existing bars
for(var i = 0; i<orig_data.length; i++) {
    orig_data[i].bars = {
        order: 0
    }
}

orig_data.push({
    data: [[0, 4], [1, 1], [2, 3]],
    bars: {
        order: 1
    }
});

orig_data.push({
    data: [[0, 7], [1, 2], [2, 3]],
    bars: {
        order: 1
    }
});
$.plot($('#stacked-ordered-chart'), orig_data, {
    bars: {
        show: true,
        barWidth: 0.4
    },
    series: {
        stack: true
    }
});

// Don't want any logs for the working examples

// STACKED CHART
$.plot($('#stacked-chart'), getData(), {
    bars: {
        show: true
    },
    series: {
        stack: true
    }
});

var d = getData();
for(var i = 0; i<d.length; i++) {
    d[i].bars = {
        order: i
    }
}
// ORDERED CHART
$.plot($('#ordered-chart'), d, {
    bars: {
        show: true,
        barWidth: 0.4
    }
});
