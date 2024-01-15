import { barangayLayer, dateTable, lotLayer, structureLayer } from './layers';
import StatisticDefinition from '@arcgis/core/rest/support/StatisticDefinition';
import * as am5 from '@amcharts/amcharts5';
import { view } from './Scene';
// Read this for why useState is not updated
//https://stackoverflow.com/questions/68627317/usestate-not-updated-as-expected
//https://codesandbox.io/s/optimistic-moore-zm8sc?file=/src/App.js
// Updat date

export async function dateUpdate() {
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const query = dateTable.createQuery();
  query.where = "project = 'SC1'" + ' AND ' + "category = 'Land Acquisition Subcon'";

  return dateTable.queryFeatures(query).then((response: any) => {
    const stats = response.features;
    const dates = stats.map((result: any) => {
      const date = new Date(result.attributes.date);
      const year = date.getFullYear();
      const month = monthList[date.getMonth()];
      const day = date.getDate();
      const final = year < 1990 ? '' : `${month} ${day}, ${year}`;
      return final;
    });
    return dates;
  });
}

// For Lot Pie Chart
const statusLot: string[] = [
  'Complete',
  'Incomplete Documents',
  'Surveyed and with plan',
  'Surveyed and for drafting',
  'Researched',
  'For Survey & Research',
  'Refused',
  'NA',
];

export const statusLotChartQuery = [
  {
    category: statusLot[0],
    value: 1,
  },
  {
    category: statusLot[1],
    value: 2,
  },
  {
    category: statusLot[2],
    value: 3,
  },
  {
    category: statusLot[3],
    value: 4,
  },
  {
    category: statusLot[4],
    value: 5,
  },
  {
    category: statusLot[5],
    value: 6,
  },
  {
    category: statusLot[6],
    value: 7,
  },
  {
    category: statusLot[7],
    value: 8,
  },
];

// For Lot Priority Chart
const statusPriority: String[] = ['1st Priority', '2nd Priority', '3rd Priority'];

export const statusPriorityChartQuery = [
  {
    category: statusPriority[0],
    value: 1,
  },
  {
    category: statusPriority[1],
    value: 2,
  },
  {
    category: statusPriority[2],
    value: 3,
  },
];

// For Structure Pie Chart
const statusStructure = [
  'Completed',
  'Surveyed and for drafting',
  'For Survey',
  'For Reschedule',
  'Missing tag or structure or owner',
  'Refused',
  'NA',
];

export const statusStructureChartQuery = [
  {
    category: statusStructure[0],
    value: 1,
  },
  {
    category: statusStructure[1],
    value: 2,
  },
  {
    category: statusStructure[2],
    value: 3,
  },
  {
    category: statusStructure[3],
    value: 4,
  },
  {
    category: statusStructure[4],
    value: 5,
  },
  {
    category: statusStructure[5],
    value: 6,
  },
  {
    category: statusStructure[6],
    value: 7,
  },
];

// Barangay pie chart
const statusBarangay = [
  'Cooperative w/ assistance',
  'Cooperative w/out assistance',
  'For Coordination',
  'Quarantine/Reschedule',
  'Refused',
  'NA',
];

export const statusBarangayChartQuery = [
  {
    category: statusBarangay[0],
    value: 1,
  },
  {
    category: statusBarangay[1],
    value: 2,
  },
  {
    category: statusBarangay[2],
    value: 3,
  },
  {
    category: statusBarangay[3],
    value: 4,
  },
  {
    category: statusBarangay[4],
    value: 5,
  },
  {
    category: statusBarangay[5],
    value: 6,
  },
];

export async function generateLotData() {
  var total_comp_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Reqs = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_comp_lot',
    statisticType: 'sum',
  });

  var total_incomp_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Reqs = 2 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_incomp_lot',
    statisticType: 'sum',
  });

  var total_survey_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Reqs = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_survey_lot',
    statisticType: 'sum',
  });

  var total_survdraft_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Reqs = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_survdraft_lot',
    statisticType: 'sum',
  });

  var total_researched_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Reqs = 5 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_researched_lot',
    statisticType: 'sum',
  });

  var total_survres_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Reqs = 6 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_survres_lot',
    statisticType: 'sum',
  });

  var total_refuse_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Reqs = 7 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_refuse_lot',
    statisticType: 'sum',
  });

  var total_na_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Reqs = 8 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_na_lot',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [
    total_comp_lot,
    total_incomp_lot,
    total_survey_lot,
    total_survdraft_lot,
    total_researched_lot,
    total_survres_lot,
    total_refuse_lot,
    total_na_lot,
  ];
  query.returnGeometry = true;

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const comp = stats.total_comp_lot;
    const incomp = stats.total_incomp_lot;
    const survey = stats.total_survey_lot;
    const survdraft = stats.total_survdraft_lot;
    const researched = stats.total_researched_lot;
    const survres = stats.total_survres_lot;
    const refuse = stats.total_refuse_lot;
    const na = stats.total_na_lot;

    const compile = [
      {
        category: statusLot[0],
        value: comp,
        sliceSettings: {
          fill: am5.color('#4CE600'),
        },
      },
      {
        category: statusLot[1],
        value: incomp,
        sliceSettings: {
          fill: am5.color('#3195B7'),
        },
      },
      {
        category: statusLot[2],
        value: survey,
        sliceSettings: {
          fill: am5.color('#44555A'),
        },
      },
      {
        category: statusLot[3],
        value: survdraft,
        sliceSettings: {
          fill: am5.color('#FFAA00'),
        },
      },
      {
        category: statusLot[4],
        value: researched,
        sliceSettings: {
          fill: am5.color('#FFFF00'),
        },
      },
      {
        category: statusLot[5],
        value: survres,
        sliceSettings: {
          fill: am5.color('#FFFFFF'),
        },
      },
      {
        category: statusLot[6],
        value: refuse,
        sliceSettings: {
          fill: am5.color('#FF0000'),
        },
      },
      {
        category: statusLot[7],
        value: na,
        sliceSettings: {
          fill: am5.color('#2E2E2E'),
        },
      },
    ];
    return compile;
  });
}

export async function generateLotNumber() {
  var total_lot_pie = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Reqs >= 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_lot_pie',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [total_lot_pie];
  query.returnGeometry = true;

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const totalLotPie = stats.total_lot_pie;
    return totalLotPie;
  });
}

export async function generateLotPriorityData() {
  var total_first_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Priority1 = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_first_lot',
    statisticType: 'sum',
  });

  var total_second_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Priority1 = 2 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_second_lot',
    statisticType: 'sum',
  });

  var total_third_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Priority1 = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_third_lot',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [total_first_lot, total_second_lot, total_third_lot];
  query.returnGeometry = true;
  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const first = stats.total_first_lot;
    const second = stats.total_second_lot;
    const third = stats.total_third_lot;

    const compile = [
      {
        category: statusPriority[0],
        value: first,
      },
      {
        category: statusPriority[1],
        value: second,
      },
      {
        category: statusPriority[2],
        value: third,
      },
    ];
    return compile;
  });
}

export async function generateStructureData() {
  var total_comp_struc = new StatisticDefinition({
    onStatisticField: 'CASE WHEN BasicPlan = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_comp_struc',
    statisticType: 'sum',
  });

  var total_survey_struc = new StatisticDefinition({
    onStatisticField: 'CASE WHEN BasicPlan = 2 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_survey_struc',
    statisticType: 'sum',
  });

  var total_forsurv_struc = new StatisticDefinition({
    onStatisticField: 'CASE WHEN BasicPlan = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_forsurv_struc',
    statisticType: 'sum',
  });

  var total_reschedule_struc = new StatisticDefinition({
    onStatisticField: 'CASE WHEN BasicPlan = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_reschedule_struc',
    statisticType: 'sum',
  });

  var total_miss_struc = new StatisticDefinition({
    onStatisticField: 'CASE WHEN BasicPlan = 5 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_miss_struc',
    statisticType: 'sum',
  });

  var total_refuse_struc = new StatisticDefinition({
    onStatisticField: 'CASE WHEN BasicPlan = 6 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_refuse_struc',
    statisticType: 'sum',
  });

  var total_na_struc = new StatisticDefinition({
    onStatisticField: 'CASE WHEN BasicPlan = 7 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_na_struc',
    statisticType: 'sum',
  });

  var query = structureLayer.createQuery();
  query.outStatistics = [
    total_comp_struc,
    total_survey_struc,
    total_forsurv_struc,
    total_reschedule_struc,
    total_miss_struc,
    total_refuse_struc,
    total_na_struc,
  ];
  query.returnGeometry = true;
  query.outFields = ['*'];
  return structureLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;

    const comp = stats.total_comp_struc;
    const survey = stats.total_survey_lot;
    const forsurv = stats.total_forsurv_lot;
    const reschedule = stats.total_reschedule_lot;
    const miss = stats.total_miss_struc;
    const refuse = stats.total_refuse_struc;
    const na = stats.total_na_struc;

    const compile = [
      {
        category: statusStructure[0],
        value: comp,
        sliceSettings: {
          fill: am5.color('#4ce600'),
        },
      },
      {
        category: statusStructure[1],
        value: survey,
        sliceSettings: {
          fill: am5.color('#73dfff'),
        },
      },
      {
        category: statusStructure[2],
        value: forsurv,
        sliceSettings: {
          fill: am5.color('#ffaa00'),
        },
      },
      {
        category: statusStructure[3],
        value: reschedule,
        sliceSettings: {
          fill: am5.color('#ffff00'),
        },
      },
      {
        category: statusStructure[4],
        value: miss,
        sliceSettings: {
          fill: am5.color('#c500ff'),
        },
      },
      {
        category: statusStructure[5],
        value: refuse,
        sliceSettings: {
          fill: am5.color('#ff0000'),
        },
      },
      {
        category: statusStructure[6],
        value: na,
        sliceSettings: {
          fill: am5.color('#bdb5b5'),
        },
      },
    ];
    return compile;
  });
}

export async function generateStrucNumber() {
  var total_struc_N = new StatisticDefinition({
    onStatisticField: 'CASE WHEN BasicPlan >=1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_struc_N',
    statisticType: 'sum',
  });

  var query = structureLayer.createQuery();

  query.outStatistics = [total_struc_N];
  return structureLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const totaln = stats.total_struc_N;
    return totaln;
  });
}

export async function generateBarangayData() {
  var total_coopassist_barang = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Coop = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_coopassist_barang',
    statisticType: 'sum',
  });

  var total_coopnoassist_barang = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Coop = 2 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_coopnoassist_barang',
    statisticType: 'sum',
  });

  var total_coord_barang = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Coop = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_coord_barang',
    statisticType: 'sum',
  });

  var total_quaran_barang = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Coop = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_quaran_barang',
    statisticType: 'sum',
  });

  var total_refuse_barang = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Coop = 5 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_refuse_barang',
    statisticType: 'sum',
  });

  var total_na_barang = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Coop = 6 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_na_barang',
    statisticType: 'sum',
  });

  var query = barangayLayer.createQuery();
  query.outStatistics = [
    total_coopassist_barang,
    total_coopnoassist_barang,
    total_coord_barang,
    total_quaran_barang,
    total_refuse_barang,
    total_na_barang,
  ];
  query.returnGeometry = true;
  query.outFields = ['*'];
  return barangayLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;

    const coopassist = stats.total_coopassist_barang;
    const coopnoassist = stats.total_coopnoassist_barang;
    const coord = stats.total_coord_barang;
    const quaran = stats.total_quaran_barang;
    const refuse = stats.total_refuse_barang;
    const nna = stats.total_na_barang;

    const compile = [
      {
        category: statusBarangay[0],
        value: coopassist,
        sliceSettings: {
          fill: am5.color('#4CE600'),
        },
      },
      {
        category: statusBarangay[1],
        value: coopnoassist,
        sliceSettings: {
          fill: am5.color('#73b2ff'),
        },
      },
      {
        category: statusBarangay[2],
        value: coord,
        sliceSettings: {
          fill: am5.color('#FFFFFF'),
        },
      },
      {
        category: statusBarangay[3],
        value: quaran,
        sliceSettings: {
          fill: am5.color('#FFAA00'),
        },
      },
      {
        category: statusBarangay[4],
        value: refuse,
        sliceSettings: {
          fill: am5.color('#FF0000'),
        },
      },
      {
        category: statusBarangay[5],
        value: nna,
        sliceSettings: {
          fill: am5.color('#000000'),
        },
      },
    ];
    return compile;
  });
}

export async function generateBarangayNumber() {
  var total_struc_N = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Coop >=1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_struc_N',
    statisticType: 'sum',
  });

  var query = barangayLayer.createQuery();

  query.outStatistics = [total_struc_N];
  return barangayLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const totaln = stats.total_struc_N;
    return totaln;
  });
}

export const dateFormat = (inputDate: any, format: any) => {
  //parse the input date
  const date = new Date(inputDate);

  //extract the parts of the date
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  //replace the month
  format = format.replace('MM', month.toString().padStart(2, '0'));

  //replace the year
  if (format.indexOf('yyyy') > -1) {
    format = format.replace('yyyy', year.toString());
  } else if (format.indexOf('yy') > -1) {
    format = format.replace('yy', year.toString().substr(2, 2));
  }

  //replace the day
  format = format.replace('dd', day.toString().padStart(2, '0'));

  return format;
};

// Thousand separators function
export function thousands_separators(num: any) {
  if (num) {
    var num_parts = num.toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num_parts.join('.');
  }
}

export function zoomToLayer(layer: any) {
  return layer.queryExtent().then((response: any) => {
    view
      .goTo(response.extent, {
        //response.extent
        speedFactor: 2,
      })
      .catch(function (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      });
  });
}
