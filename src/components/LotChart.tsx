import { useEffect, useRef, useState } from 'react';
import { lotLayer } from '../layers';
import { view } from '../Scene';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import Query from '@arcgis/core/rest/support/Query';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';
import {
  generateLotData,
  generateLotNumber,
  generateLotPriorityData,
  statusPriorityChartQuery,
  thousands_separators,
  statusLotChartQuery,
} from '../Query';
import '../App.css';

//https://codesandbox.io/s/amcharts5-react-demo-forked-gid7b0?from-embed=&file=/src/App.js:271-276
// https://github.com/reactchartjs/react-chartjs-2/blob/master/src/chart.tsx
//https://www.reddit.com/r/reactjs/comments/gr5vhh/react_hooks_and_amcharts4/?rdt=56344
//https://medium.com/swlh/how-to-use-amcharts-4-with-react-hooks-999a62c185a5
//https://codesandbox.io/s/amcharts5-react-demo-forked-hrth2d

// Dispose function
function maybeDisposeRoot(divId: any) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
}

///*** Others */
/// Draw chart
const LotChart = ({ municipal, barangay, priority }: any) => {
  // 1. Land Acquisition
  const pieSeriesRef = useRef<unknown | any | undefined>({});
  const legendRef = useRef<unknown | any | undefined>({});
  const chartRef = useRef<unknown | any | undefined>({});
  const [lotData, setLotData] = useState([
    {
      category: String,
      value: Number,
      sliceSettings: {
        fill: am5.color('#00c5ff'),
      },
    },
  ]);

  const chartID = 'pie-two';

  const [lotNumber, setLotNumber] = useState([]);

  // 2. Priority
  const barSeriesRef = useRef<unknown | any | undefined>({});
  const yAxisRef = useRef<unknown | any | undefined>({});
  const chartRef_priority = useRef<unknown | any | undefined>({});
  const [priorityMoaData, setLotPriorityData] = useState([]);
  const chartID_priority = 'land-priority';

  // Query
  const queryMunicipality = "Municipality = '" + municipal + "'";
  const queryBarangay = "Barangay = '" + barangay + "'";
  const queryPriority = 'Priority1 = ' + priority;
  const queryMunicipalBarangay = queryMunicipality + ' AND ' + queryBarangay;
  const queryMunicipalBarangayPriority =
    queryMunicipality + ' AND ' + queryBarangay + ' AND ' + queryPriority;

  if (!municipal) {
    lotLayer.definitionExpression = '1=1';
  } else if (municipal && !barangay) {
    lotLayer.definitionExpression = queryMunicipality;
  } else if (municipal && barangay) {
    lotLayer.definitionExpression = queryMunicipalBarangay;
  } else {
    lotLayer.definitionExpression = queryMunicipalBarangayPriority;
  }

  useEffect(() => {
    generateLotData().then((result: any) => {
      setLotData(result);
    });

    // Lot number
    generateLotNumber().then((response: any) => {
      setLotNumber(response);
    });

    // Lot Priority
    generateLotPriorityData().then((response: any) => {
      setLotPriorityData(response);
    });
  }, [municipal, barangay, priority]);

  // 1. Pie Chart for Land Acquisition
  useEffect(() => {
    // Dispose previously created root element

    maybeDisposeRoot(chartID);

    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        //centerY: am5.percent(-2), //-10
        y: am5.percent(-25), // space between pie chart and total lots
        layout: root.horizontalLayout,
      }),
    );
    chartRef.current = chart;

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var pieSeries = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: 'Series',
        categoryField: 'category',
        valueField: 'value',
        //legendLabelText: "[{fill}]{category}[/]",
        legendValueText: "{valuePercentTotal.formatNumber('#.')}% ({value})",
        radius: am5.percent(45), // outer radius
        innerRadius: am5.percent(20),
        marginBottom: -10,
      }),
    );
    pieSeriesRef.current = pieSeries;
    chart.series.push(pieSeries);

    // Set slice opacity and stroke color
    pieSeries.slices.template.setAll({
      fillOpacity: 0.9,
      stroke: am5.color('#ffffff'),
      strokeWidth: 1,
      strokeOpacity: 1,
      templateField: 'sliceSettings',
    });

    // Disabling labels and ticksll
    pieSeries.labels.template.set('visible', false);
    pieSeries.ticks.template.set('visible', false);

    // EventDispatcher is disposed at SpriteEventDispatcher...
    // It looks like this error results from clicking events
    pieSeries.slices.template.events.on('click', (ev) => {
      const selected: any = ev.target.dataItem?.dataContext;
      const categorySelected: string = selected.category;
      const find = statusLotChartQuery.find((emp: any) => emp.category === categorySelected);
      const statusSelect = find?.value;

      var highlightSelect: any;

      var query = lotLayer.createQuery();

      view.when(function () {
        view.whenLayerView(lotLayer).then((layerView): any => {
          //chartLayerView = layerView;

          lotLayer.queryFeatures(query).then(function (results) {
            const RESULT_LENGTH = results.features;
            const ROW_N = RESULT_LENGTH.length;

            let objID = [];
            for (var i = 0; i < ROW_N; i++) {
              var obj = results.features[i].attributes.OBJECTID;
              objID.push(obj);
            }

            var queryExt = new Query({
              objectIds: objID,
            });

            lotLayer.queryExtent(queryExt).then(function (result) {
              if (result.extent) {
                view.goTo(result.extent);
              }
            });

            if (highlightSelect) {
              highlightSelect.remove();
            }
            highlightSelect = layerView.highlight(objID);

            view.on('click', function () {
              layerView.filter = new FeatureFilter({
                where: undefined,
              });
              highlightSelect.remove();
            });
          }); // End of queryFeatures

          layerView.filter = new FeatureFilter({
            where: 'Reqs = ' + statusSelect,
          });

          // For initial state, we need to add this
          view.on('click', () => {
            layerView.filter = new FeatureFilter({
              where: undefined,
            });
            highlightSelect !== undefined ? highlightSelect.remove() : console.log('');
          });
        }); // End of view.whenLayerView
      }); // End of view.whenv
    });

    pieSeries.data.setAll(lotData);

    // Legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = root.container.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        y: am5.percent(48),
        layout: root.verticalLayout,
      }),
    );
    legendRef.current = legend;
    legend.data.setAll(pieSeries.dataItems);

    // Change the size of legend markers
    legend.markers.template.setAll({
      width: 18,
      height: 18,
    });

    // Change the marker shape
    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
    });

    // Responsive legend
    // https://www.amcharts.com/docs/v5/tutorials/pie-chart-with-a-legend-with-dynamically-sized-labels/
    // This aligns Legend to Left
    chart.onPrivate('width', function (width: any) {
      const boxWidth = 190; //props.style.width;
      var availableSpace = Math.max(width - chart.height() - boxWidth, boxWidth);
      //var availableSpace = (boxWidth - valueLabelsWidth) * 0.7
      legend.labels.template.setAll({
        width: availableSpace,
        maxWidth: availableSpace,
      });
    });

    // Change legend labelling properties
    // To have responsive font size, do not set font size
    legend.labels.template.setAll({
      oversizedBehavior: 'truncate',
      fill: am5.color('#ffffff'),
    });

    legend.valueLabels.template.setAll({
      textAlign: 'right',
      //width: valueLabelsWidth,
      fill: am5.color('#ffffff'),
      //fontSize: LEGEND_FONT_SIZE,
    });

    legend.itemContainers.template.setAll({
      // set space between legend items
      paddingTop: 1.1,
      paddingBottom: 2,
    });

    pieSeries.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartID, lotData]);

  useEffect(() => {
    pieSeriesRef.current?.data.setAll(lotData);
    legendRef.current?.data.setAll(pieSeriesRef.current.dataItems);
  });

  // Priority
  useEffect(() => {
    // Dispose previously created root element

    maybeDisposeRoot(chartID_priority);

    var root2 = am5.Root.new(chartID_priority);
    root2.container.children.clear();
    root2._logo?.dispose();

    // Set themesf
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root2.setThemes([am5themes_Animated.new(root2), am5themes_Responsive.new(root2)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root2.container.children.push(
      am5xy.XYChart.new(root2, {
        panX: false,
        panY: false,
        wheelX: 'none',
        wheelY: 'none',
        paddingLeft: 10,
        marginTop: 20,
        height: am5.percent(100),
      }),
    );
    chartRef_priority.current = chart;

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var yRenderer = am5xy.AxisRendererY.new(root2, {
      minGridDistance: 5,
      strokeOpacity: 1,
      strokeWidth: 1,
      inversed: true,
      stroke: am5.color('#ffffff'),
    });
    yRenderer.grid.template.set('location', 1);

    var yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root2, {
        maxDeviation: 0,
        categoryField: 'category',
        renderer: yRenderer,
      }),
    );

    // Remove grid lines
    yAxis.get('renderer').grid.template.set('forceHidden', true);

    var xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root2, {
        maxDeviation: 0,
        min: 0,
        strictMinMax: true,
        calculateTotals: true,
        renderer: am5xy.AxisRendererX.new(root2, {
          visible: true,
          strokeOpacity: 1,
          strokeWidth: 1,
          stroke: am5.color('#ffffff'),
        }),
      }),
    );
    // Remove grid lines
    xAxis.get('renderer').grid.template.set('forceHidden', true);

    // Label properties for yAxis (category axis)
    yAxis.get('renderer').labels.template.setAll({
      //oversizedBehavior: "wrap",
      textAlign: 'center',
      fill: am5.color('#ffffff'),
      //maxWidth: 150,
      fontSize: 12,
    });

    xAxis.get('renderer').labels.template.setAll({
      fill: am5.color('#ffffff'),
      fontSize: 10,
    });

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(
      am5xy.ColumnSeries.new(root2, {
        name: 'Series 1',
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: 'value',
        sequencedInterpolation: true,
        categoryYField: 'category',
      }),
    );
    barSeriesRef.current = series;
    chart.series.push(series);

    var columnTemplate = series.columns.template;

    columnTemplate.setAll({
      draggable: false,
      cursorOverStyle: 'pointer',
      tooltipText: '{value}',
      cornerRadiusBR: 10,
      cornerRadiusTR: 10,
      strokeOpacity: 0,
    });

    // Add Label bullet
    series.bullets.push(function () {
      return am5.Bullet.new(root2, {
        locationY: 1,
        sprite: am5.Label.new(root2, {
          text: '{value}',
          fill: root2.interfaceColors.get('alternativeText'),
          centerY: am5.percent(1),
          centerX: am5.p50,
          fontSize: 14,
          populateText: true,
        }),
      });
    });

    series.columns.template.events.on('click', function (ev) {
      const selected: any = ev.target.dataItem?.dataContext;
      const categorySelect: string = selected.category;
      const find = statusPriorityChartQuery.find((emp: any) => emp.category === categorySelect);
      const statusSelect = find?.value;

      var highlightSelect: any;

      var query = lotLayer.createQuery();
      view.whenLayerView(lotLayer).then(function (layerView) {
        //CHART_ELEMENT.style.visibility = "visible";

        lotLayer.queryFeatures(query).then(function (results) {
          const RESULT_LENGTH = results.features;
          const ROW_N = RESULT_LENGTH.length;

          let objID = [];
          for (var i = 0; i < ROW_N; i++) {
            var obj = results.features[i].attributes.OBJECTID;
            objID.push(obj);
          }

          var queryExt = new Query({
            objectIds: objID,
          });

          lotLayer.queryExtent(queryExt).then(function (result) {
            if (result.extent) {
              view.goTo(result.extent);
            }
          });

          if (highlightSelect) {
            highlightSelect.remove();
          }
          highlightSelect = layerView.highlight(objID);

          view.on('click', function () {
            layerView.filter = new FeatureFilter({
              where: undefined,
            });
            highlightSelect.remove();
          });
        });
        layerView.filter = new FeatureFilter({
          where: 'MoA = ' + statusSelect,
        });

        // For initial state, we need to add this
        view.on('click', () => {
          layerView.filter = new FeatureFilter({
            where: undefined,
          });
          highlightSelect !== undefined ? highlightSelect.remove() : console.log('');
        });
      }); // End of whenLayerView
    });

    // Chart title
    chart.children.unshift(
      am5.Label.new(root2, {
        text: 'PRIORITY LOT',
        fontSize: '1.1em',
        fontWeight: 'normal',
        textAlign: 'left',
        fill: am5.color('#f7f5f7'),
        paddingTop: -15,
        paddingLeft: 10,
      }),
    );

    yAxisRef.current = yAxis;
    yAxis.data.setAll(priorityMoaData);
    series.data.setAll(priorityMoaData);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root2.dispose();
    };
  }, [chartID_priority, priorityMoaData]);

  useEffect(() => {
    barSeriesRef.current?.data.setAll(priorityMoaData);
    yAxisRef.current?.data.setAll(priorityMoaData);
  });

  return (
    <>
      <div className="lotNumberImage">
        <div>
          <div className="totalLotsLabel">TOTAL LOTS</div>
          <br />
          <br />
          <b className="totalLotsNumber">{thousands_separators(lotNumber)}</b>
        </div>
        <img
          src="https://EijiGorilla.github.io/Symbols/Land_logo.png"
          alt="Land Logo"
          height={'18%'}
          width={'18%'}
          style={{ padding: '10px', margin: 'auto' }}
        />
      </div>
      <div style={{ color: 'white', fontSize: '1.1rem', paddingLeft: '20px', marginTop: '15px' }}>
        LOT REQUIREMENTS
      </div>
      <div
        id={chartID}
        style={{
          height: '50vh',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
          marginBottom: '-1.5vh',
        }}
      ></div>
      <div
        id={chartID_priority}
        style={{
          height: '21vh',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
          marginTop: '0.8vh',
        }}
      ></div>
    </>
  );
}; // End of lotChartgs

export default LotChart;
