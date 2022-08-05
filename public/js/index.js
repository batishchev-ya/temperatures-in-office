import * as d3 from 'https://cdn.skypack.dev/d3@7';
// import * as d3 from "d3"
// // import Temperature from '../../models/temperaturesModel';
// // const results = await Temperature.find();
// // console.log(results);
// let dim = {
//   width: 1000,
//   height: 1000,
//   margin: 50,
// };

// let svg = d3.select('chart1').append('svg').attrs(dim);

// console.log('Hello from index.js');

// var svg = d3.select('svg'),
//   margin = { top: 20, right: 20, bottom: 30, left: 50 },
//   width = +svg.attr('width') - margin.left - margin.right,
//   height = +svg.attr('height') - margin.top - margin.bottom,
//   g = svg
//     .append('g')
//     .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

// var parseTime = d3.timeParse('%d-%b-%y');

// var x = d3.scaleTime().rangeRound([0, width]);

// var y = d3.scaleLinear().rangeRound([height, 0]);

// var line = d3
//   .line()
//   .x(function (d) {
//     return x(d.date);
//   })
//   .y(function (d) {
//     return y(d.close);
//   });

let svg = d3.select('#d3_demo8').attr('width', 200).attr('height', 200);
let scale = d3.scaleLinear().domain([0, 100]).range([0, 200]);

let bottom_axis = d3.axisBottom(scale);

svg.append('g').call(bottom_axis);

// const aaplMissing = [
//   { date: '2007-04-23', close: 93.24 },
//   { date: '2007-04-24', close: 93.24 },
//   { date: '2007-04-25', close: 93.24 },
//   { date: '2007-04-26', close: 93.24 },
// ];
// console.log(aaplMissing);
// const chart = LineChart(aaplMissing, {
//   x: (d) => d.date,
//   y: (d) => d.close,
//   yLabel: '↑ Daily close ($)',
//   // width,
//   height: 500,
//   color: 'steelblue',
// });

// // Copyright 2021 Observable, Inc.
// // Released under the ISC license.
// // https://observablehq.com/@d3/line-chart
// function LineChart(
//   data,
//   {
//     x = ([x]) => x, // given d in data, returns the (temporal) x-value
//     y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
//     defined, // for gaps in data
//     curve = d3.curveLinear, // method of interpolation between points
//     marginTop = 20, // top margin, in pixels
//     marginRight = 30, // right margin, in pixels
//     marginBottom = 30, // bottom margin, in pixels
//     marginLeft = 40, // left margin, in pixels
//     width = 640, // outer width, in pixels
//     height = 400, // outer height, in pixels
//     xType = d3.scaleUtc, // the x-scale type
//     xDomain, // [xmin, xmax]
//     xRange = [marginLeft, width - marginRight], // [left, right]
//     yType = d3.scaleLinear, // the y-scale type
//     yDomain, // [ymin, ymax]
//     yRange = [height - marginBottom, marginTop], // [bottom, top]
//     yFormat, // a format specifier string for the y-axis
//     yLabel, // a label for the y-axis
//     color = 'currentColor', // stroke color of line
//     strokeLinecap = 'round', // stroke line cap of the line
//     strokeLinejoin = 'round', // stroke line join of the line
//     strokeWidth = 1.5, // stroke width of line, in pixels
//     strokeOpacity = 1, // stroke opacity of line
//   } = {}
// ) {
//   // Compute values.
//   const X = d3.map(data, x);
//   const Y = d3.map(data, y);
//   const I = d3.range(X.length);
//   if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
//   const D = d3.map(data, defined);

//   // Compute default domains.
//   if (xDomain === undefined) xDomain = d3.extent(X);
//   if (yDomain === undefined) yDomain = [0, d3.max(Y)];

//   // Construct scales and axes.
//   const xScale = xType(xDomain, xRange);
//   const yScale = yType(yDomain, yRange);
//   const xAxis = d3
//     .axisBottom(xScale)
//     .ticks(width / 80)
//     .tickSizeOuter(0);
//   const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);

//   // Construct a line generator.
//   const line = d3
//     .line()
//     .defined((i) => D[i])
//     .curve(curve)
//     .x((i) => xScale(X[i]))
//     .y((i) => yScale(Y[i]));

//   const svg = d3
//     .create('svg')
//     .attr('width', width)
//     .attr('height', height)
//     .attr('viewBox', [0, 0, width, height])
//     .attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

//   svg
//     .append('g')
//     .attr('transform', `translate(0,${height - marginBottom})`)
//     .call(xAxis);

//   svg
//     .append('g')
//     .attr('transform', `translate(${marginLeft},0)`)
//     .call(yAxis)
//     .call((g) => g.select('.domain').remove())
//     .call((g) =>
//       g
//         .selectAll('.tick line')
//         .clone()
//         .attr('x2', width - marginLeft - marginRight)
//         .attr('stroke-opacity', 0.1)
//     )
//     .call((g) =>
//       g
//         .append('text')
//         .attr('x', -marginLeft)
//         .attr('y', 10)
//         .attr('fill', 'currentColor')
//         .attr('text-anchor', 'start')
//         .text(yLabel)
//     );

//   svg
//     .append('path')
//     .attr('fill', 'none')
//     .attr('stroke', color)
//     .attr('stroke-width', strokeWidth)
//     .attr('stroke-linecap', strokeLinecap)
//     .attr('stroke-linejoin', strokeLinejoin)
//     .attr('stroke-opacity', strokeOpacity)
//     .attr('d', line(I));

//   return svg.node();
// }

// d3.tsv(
//   'data.tsv',
//   function (d) {
//     d.date = parseTime(d.date);
//     d.close = +d.close;
//     return d;
//   },
//   function (error, data) {
//     if (error) throw error;

//     x.domain(
//       d3.extent(data, function (d) {
//         return d.date;
//       })
//     );
//     y.domain(
//       d3.extent(data, function (d) {
//         return d.close;
//       })
//     );

//     g.append('g')
//       .attr('transform', 'translate(0,' + height + ')')
//       .call(d3.axisBottom(x))
//       .select('.domain')
//       .remove();

//     g.append('g')
//       .call(d3.axisLeft(y))
//       .append('text')
//       .attr('fill', '#000')
//       .attr('transform', 'rotate(-90)')
//       .attr('y', 6)
//       .attr('dy', '0.71em')
//       .attr('text-anchor', 'end')
//       .text('Price ($)');

//     g.append('path')
//       .datum(data)
//       .attr('fill', 'none')
//       .attr('stroke', 'steelblue')
//       .attr('stroke-linejoin', 'round')
//       .attr('stroke-linecap', 'round')
//       .attr('stroke-width', 1.5)
//       .attr('d', line);
//   }
// );
