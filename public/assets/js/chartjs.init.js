!(function (i) {
  "use strict";
  var r = function () {};
  (r.prototype.respChart = function (r, o, a, e) {
    (Chart.defaults.global.defaultFontColor = "#98a6ad"),
      (Chart.defaults.scale.gridLines.color = "rgba(173, 181, 189, 0.1)");
    var t = r.get(0).getContext("2d"),
      n = i(r).parent();
    function s() {
      r.attr("width", i(n).width());
      switch (o) {
        case "Line":
          new Chart(t, { type: "line", data: a, options: e });
          break;
      }
    }
    i(window).resize(s), s();
  }),
    (r.prototype.init = function () {
      this.respChart(
        i("#lineChart-1"),
        "Line",
        {
          labels: ["20:04:40", "20:04:50", "20:05:00", "20:05:10", "20:05:20", "20:05:30", "20:05:40", "20:05:50", "20:06:00"],
          datasets: [
            {
              label: "TEMPERATURE",
              fill: !1,
              lineTension: 0.1,
              backgroundColor: "#d32f2f",
              borderColor: "#d32f2f",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: "miter",
              pointBorderColor: "#d32f2f",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#d32f2f",
              pointHoverBorderColor: "#eef0f2",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 30,
              data: [35, 40, 50, 45, 40, 40, 30, 25, 30],
            },
            {
              label: "HUMID",
              fill: !1,
              lineTension: 0.1,
              backgroundColor: "#1B486B",
              borderColor: "#1B486B",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: "miter",
              pointBorderColor: "#1B486B",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#1B486B",
              pointHoverBorderColor: "#eef0f2",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 30,
              data: [30, 25, 30, 40, 40, 45, 50, 40, 35],
            }
          ],
        },
        { scales: { yAxes: [{ ticks: { max: 60, min: 20, stepSize: 10 } }] } }
      );
      this.respChart(
        i("#lineChart-2"),
        "Line",
        {
          labels: ["20:04:40", "20:04:50", "20:05:00", "20:05:10", "20:05:20", "20:05:30", "20:05:40", "20:05:50", "20:06:00"],
          datasets: [
            {
              label: "TEMPERATURE",
              fill: !1,
              lineTension: 0.1,
              backgroundColor: "#d32f2f",
              borderColor: "#d32f2f",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: "miter",
              pointBorderColor: "#d32f2f",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#d32f2f",
              pointHoverBorderColor: "#eef0f2",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 30,
              data: [40, 35, 30, 40, 40, 25, 50, 40, 35],
            },
            {
              label: "HUMID",
              fill: !1,
              lineTension: 0.1,
              backgroundColor: "#1B486B",
              borderColor: "#1B486B",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: "miter",
              pointBorderColor: "#1B486B",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#1B486B",
              pointHoverBorderColor: "#eef0f2",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 30,
              data: [35, 40, 50, 45, 40, 40, 30, 25, 30],
            }
          ],
        },
        { scales: { yAxes: [{ ticks: { max: 60, min: 20, stepSize: 10 } }] } }
      );
    }),
    (i.ChartJs = new r()),
    (i.ChartJs.Constructor = r);
})(window.jQuery),
  (function (r) {
    "use strict";
    window.jQuery.ChartJs.init();
  })();
