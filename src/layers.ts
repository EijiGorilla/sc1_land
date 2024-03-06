import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import {
  TextSymbol3DLayer,
  LabelSymbol3D,
  SimpleLineSymbol,
  PolygonSymbol3D,
  ExtrudeSymbol3DLayer,
  PointSymbol3D,
  IconSymbol3DLayer,
  SimpleMarkerSymbol,
} from '@arcgis/core/symbols';
import SolidEdges3D from '@arcgis/core/symbols/edges/SolidEdges3D';
import CustomContent from '@arcgis/core/popup/content/CustomContent';
import PopupTemplate from '@arcgis/core/PopupTemplate';

/* Standalone table for Dates */
export const dateTable = new FeatureLayer({
  portalItem: {
    id: 'b2a118b088a44fa0a7a84acbe0844cb2',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
});

/* Chainage Layer  */
var labelChainage = new LabelClass({
  labelExpressionInfo: { expression: '$feature.KmSpot' },
  symbol: {
    type: 'text',
    color: [85, 255, 0],
    haloColor: 'black',
    haloSize: 0.5,
    font: {
      size: 15,
      weight: 'bold',
    },
  },
});

var chainageRenderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    size: 5,
    color: [255, 255, 255, 0.9],
    outline: {
      width: 0.2,
      color: 'black',
    },
  }),
});

export const chainageLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 2,
  title: 'Chainage',
  elevationInfo: {
    mode: 'relative-to-ground',
  },
  labelingInfo: [labelChainage],
  minScale: 150000,
  maxScale: 0,
  renderer: chainageRenderer,

  popupEnabled: false,
});

/* Station Box */
let stationBoxRenderer = new UniqueValueRenderer({
  field: 'Layer',
  uniqueValueInfos: [
    {
      value: '00_Platform',
      label: 'Platform',
      symbol: new SimpleFillSymbol({
        color: [160, 160, 160],
        style: 'backward-diagonal',
        outline: {
          width: 1,
          color: 'black',
        },
      }),
    },
    {
      value: '00_Platform 10car',
      label: 'Platform 10car',
      symbol: new SimpleFillSymbol({
        color: [104, 104, 104],
        style: 'cross',
        outline: {
          width: 1,
          color: 'black',
          style: 'short-dash',
        },
      }),
    },
    {
      value: '00_Station',
      label: 'Station Box',
      symbol: new SimpleFillSymbol({
        color: [0, 0, 0, 0],
        outline: {
          width: 2,
          color: [115, 0, 0],
        },
      }),
    },
  ],
});

export const stationBoxLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 7,
  renderer: stationBoxRenderer,
  minScale: 150000,
  maxScale: 0,
  title: 'Station Box',

  popupEnabled: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

/* ROW Layer */
var prowRenderer = new SimpleRenderer({
  symbol: new SimpleLineSymbol({
    color: '#ff0000',
    width: '2px',
  }),
});

export const prowLayer = new FeatureLayer({
  url: 'https://gis.railway-sector.com/server/rest/services/SC_Alignment/FeatureServer/5',
  layerId: 5,
  title: 'PROW',
  popupEnabled: false,
  renderer: prowRenderer,
});
prowLayer.listMode = 'hide';

/* PNR */
let pnrRenderer = new UniqueValueRenderer({
  valueExpression:
    "When($feature.LandOwner == 'BASES CONVERSION DEVELOPMENT AUTHORITY', 'BCDA', $feature.LandOwner == 'MANILA RAILROAD COMPANY' || $feature.LandOwner == 'Manila Railroad Company','PNR',$feature.LandOwner)",
  uniqueValueInfos: [
    {
      value: 'BCDA',
      symbol: new SimpleFillSymbol({
        color: [137, 205, 102],
        style: 'diagonal-cross',
        outline: {
          width: 0.5,
          color: 'black',
        },
      }),
    },
    {
      value: 'PNR',
      symbol: new SimpleFillSymbol({
        color: [137, 205, 102],
        style: 'diagonal-cross',
        outline: {
          width: 0.5,
          color: 'black',
        },
      }),
    },
  ],
});

export const pnrLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  title: 'Land (PNR)',
  definitionExpression:
    "LandOwner IN ('BASES CONVERSION DEVELOPMENT AUTHORITY','MANILA RAILROAD COMPANY')",

  elevationInfo: {
    mode: 'on-the-ground',
  },
  labelsVisible: false,
  renderer: pnrRenderer,
  popupTemplate: {
    title: '<p>{LandOwner} ({LotID})</p>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'HandOverDate',
            label: 'Hand-Over Date',
          },
          {
            fieldName: 'Municipality',
          },
          {
            fieldName: 'Barangay',
          },
          {
            fieldName: 'LandOwner',
            label: 'Land Owner',
          },
        ],
      },
    ],
  },
});

/* Station Layer */
var labelClass = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: '#d4ff33',
        },
        size: 15,
        halo: {
          color: 'black',
          size: 0.5,
        },
        // font: {
        //   family: 'Ubuntu Mono',
        //   //weight: "bold"
        // },
      }),
    ],
    verticalOffset: {
      screenLength: 100,
      maxWorldLength: 700,
      minWorldLength: 80,
    },

    callout: {
      type: 'line', // autocasts as new LineCallout3D()
      color: [128, 128, 128, 0.5],
      size: 0.2,
      border: {
        color: 'grey',
      },
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.Station',
    //value: "{TEXTSTRING}"
  },
});

export const stationLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 6,
  title: 'SC Stations',
  labelingInfo: [labelClass],
  elevationInfo: {
    mode: 'relative-to-ground',
  },
});
stationLayer.listMode = 'hide';

/* The colors used for the each transit line */
var lotIdLabel = new LabelClass({
  labelExpressionInfo: { expression: '$feature.LotID' },
  symbol: {
    type: 'text',
    color: 'black',
    haloColor: 'white',
    haloSize: 0.5,
    font: {
      size: 11,
      weight: 'bold',
    },
  },
});

/* uniqueRenderer */
const lotObj: any = [
  {
    category: 'Complete',
    colorRGB: [76, 230, 0],
    colorHEX: '#4CE600',
    value: 1,
  },
  {
    category: 'Incomplete Documents',
    colorRGB: [49, 149, 183],
    colorHEX: '#3195B7',
    value: 2,
  },
  {
    category: 'Surveyed and with plan',
    colorRGB: [68, 85, 90],
    colorHEX: '#44555A',
    value: 3,
  },
  {
    category: 'Surveyed and for drafting',
    colorRGB: [255, 170, 0],
    colorHEX: '#FFAA00',
    value: 4,
  },
  {
    category: 'Researched',
    colorRGB: [255, 255, 0],
    colorHEX: '#FFFF00',
    value: 5,
  },
  {
    category: 'For Survey & Research',
    colorRGB: [255, 255, 255],
    colorHEX: '#FFFFFF',
    value: 6,
  },
  {
    category: 'Refused',
    colorRGB: [255, 0, 0],
    colorHEX: '#FF0000',
    value: 7,
  },
  {
    category: 'NA',
    colorRGB: [128, 128, 128],
    colorHEX: '#808080',
    value: 8,
  },
];

let lotDefaultSymbol = new SimpleFillSymbol({
  color: [0, 0, 0, 0],
  style: 'solid',
  outline: {
    // autocasts as new SimpleLineSymbol()
    color: [110, 110, 110],
    width: 0.7,
  },
});

export const lotLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  definitionExpression: 'ContSubm = 1',
  labelsVisible: false,
  title: 'Land Acquisition',
  minScale: 150000,
  maxScale: 0,
  popupTemplate: {
    title: '<p>{LotID}</p>',
    lastEditInfoEnabled: false,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'LandOwner',
            label: 'Land Owner',
          },
          {
            fieldName: 'Municipality',
          },
          {
            fieldName: 'Barangay',
          },
          {
            fieldName: 'Reqs',
            label: '<p>Requirements</p>',
          },
          {
            fieldName: 'Priority1',
            label: '<p>Priority</p>',
          },
        ],
      },
    ],
  },
});

function uniqueValueInfosLotRenderer() {
  const categoryLot: any = [];
  for (var i = 0; i < lotObj.length; i++) {
    const temp = lotObj[Object.keys(lotObj)[i]].category;
    categoryLot.push(temp);
  }

  const uniqueValueInfosLot = categoryLot.map((result: any, index: any) => {
    return Object.assign(
      {},
      {
        value: index + 1,
        label: result,
        symbol: {
          type: 'simple-fill', // autocasts as new SimpleFillSymbol()
          color: lotObj[Object.keys(lotObj)[index]].colorRGB,
          style: result === 'NA' ? 'diagonal-cross' : 'solid',
        },
      },
    );
  });

  const lotRenderer = new UniqueValueRenderer({
    field: 'Reqs',
    defaultSymbol: lotDefaultSymbol, // autocasts as new SimpleFillSymbol()
    uniqueValueInfos: uniqueValueInfosLot,
  });
  lotLayer.renderer = lotRenderer;
}
uniqueValueInfosLotRenderer();

/* Structure Layer */
const height = 5;
const edgeSize = 0.3;

const completed = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [76, 230, 0, 0.4],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const surveyed = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [115, 223, 255, 0.4],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const forSurvey = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [255, 170, 0, 0.4],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const reschedule = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [255, 255, 0, 0.4],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const missing = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [197, 0, 255, 0.4],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const refused = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [255, 0, 0, 0.4],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const na = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [189, 181, 181, 0.5], // [0,0,0,0.5]
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const defaultStructureRenderer = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: 5,
      material: {
        color: [0, 0, 0, 0.4],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const structureRenderer = new UniqueValueRenderer({
  defaultSymbol: defaultStructureRenderer,
  defaultLabel: 'Other',
  field: 'BasicPlan',
  uniqueValueInfos: [
    {
      value: 1,
      symbol: completed,
      label: 'Completed',
    },
    {
      value: 2,
      symbol: surveyed,
      label: 'Surveyed and for drafting',
    },
    {
      value: 3,
      symbol: forSurvey,
      label: 'For Survey',
    },
    {
      value: 4,
      symbol: reschedule,
      label: 'For Reschedule',
    },
    {
      value: 5,
      symbol: missing,
      label: 'Missing tag or structure or owner',
    },
    {
      value: 6,
      symbol: refused,
      label: 'Refused',
    },
    {
      value: 7,
      symbol: na,
      label: 'NA',
    },
  ],
});

export const structureLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 2,
  definitionExpression: 'ContSubm = 1',
  title: 'Structure Basic Plan',
  renderer: structureRenderer,

  elevationInfo: {
    mode: 'on-the-ground',
  },
  popupTemplate: {
    title: '<p>{StrucID}</p>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'StrucOwner',
            label: 'Structure Owner',
          },
          {
            fieldName: 'BasicPlan',
            label: '<p>Status of Structure</p>',
          },
          {
            fieldName: 'LotID',
            label: 'Lot ID',
          },
          {
            fieldName: 'Municipality',
          },
          {
            fieldName: 'Barangay',
          },
        ],
      },
    ],
  },
});

/* Priority Layer */
var priorityLabel = new LabelClass({
  labelExpressionInfo: { expression: '$feature.LotID' },
  symbol: {
    type: 'text',
    color: 'black',
    haloColor: 'white',
    haloSize: 0.5,
    font: {
      size: 11,
      weight: 'bold',
    },
  },
});

const colorPriority = [
  [255, 0, 0],
  [255, 127, 80],
  [255, 255, 0],
  [0, 112, 255],
  [143, 0, 255],
  [0, 255, 0],
  [112, 173, 71],
];

const priorityDates = ['December 2022', 'April 2023', 'July 2023'];

let lotPriorityRenderer = new UniqueValueRenderer({
  field: 'Priority1',
  defaultSymbol: lotDefaultSymbol, // autocasts as new SimpleFillSymbol()
  uniqueValueInfos: [
    {
      value: '1',
      symbol: new SimpleFillSymbol({
        color: [0, 0, 0, 0],
        outline: {
          width: 4,
          color: colorPriority[0],
        },
      }),
    },
    {
      value: '2',
      symbol: new SimpleFillSymbol({
        color: [0, 0, 0, 0],
        outline: {
          width: 4,
          color: colorPriority[1],
        },
      }),
    },
    {
      value: '3',
      symbol: new SimpleFillSymbol({
        color: [0, 0, 0, 0],
        outline: {
          width: 4,
          color: colorPriority[2],
        },
      }),
    },
  ],
});

export const priorityLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  renderer: lotPriorityRenderer,
  labelingInfo: [priorityLabel],
  definitionExpression: 'ContSubm = 1',
  title: 'Priority Lot',
  popupEnabled: false,
  minScale: 200000,
  maxScale: 0,
});

/* Barangay Layer */
const colorBarangay = [
  [76, 230, 0, 0.9],
  [115, 178, 255, 0.9],
  [255, 255, 255, 0.9],
  [255, 170, 0, 0.9],
  [255, 0, 0, 0.9],
  [0, 0, 0, 0.9],
];

const barangayRenderer = new UniqueValueRenderer({
  field: 'Coop',
  defaultSymbol: lotDefaultSymbol, // autocasts as new SimpleFillSymbol()
  uniqueValueInfos: [
    {
      value: 1,
      symbol: new SimpleFillSymbol({
        color: [0, 0, 0, 0],
        outline: {
          width: 2,
          color: colorBarangay[0],
        },
      }),
    },
    {
      value: 2,
      symbol: new SimpleFillSymbol({
        color: [0, 0, 0, 0],
        outline: {
          width: 2,
          color: colorBarangay[1],
        },
      }),
    },
    {
      value: 3,
      symbol: new SimpleFillSymbol({
        color: [0, 0, 0, 0],
        outline: {
          width: 2,
          color: colorBarangay[2],
        },
      }),
    },
    {
      value: 4,
      symbol: new SimpleFillSymbol({
        color: [0, 0, 0, 0],
        outline: {
          width: 2,
          color: colorBarangay[3],
        },
      }),
    },
    {
      value: 5,
      symbol: new SimpleFillSymbol({
        color: [0, 0, 0, 0],
        outline: {
          width: 2,
          color: colorBarangay[4],
        },
      }),
    },
    {
      value: 6,
      symbol: new SimpleFillSymbol({
        color: [0, 0, 0, 0],
        outline: {
          width: 2,
          color: colorBarangay[5],
        },
      }),
    },
  ],
});

export const barangayLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 5,
  renderer: barangayRenderer,

  title: 'Barangay',
  elevationInfo: {
    mode: 'on-the-ground',
  },
  popupTemplate: {
    title: '<p>{Barangay}</p>',

    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'Municipality',
          },
          {
            fieldName: 'Subcon',
            label: 'Subcontractors',
          },
          {
            fieldName: 'Coop',
            label: '<p>Cooperation</p>',
          },
        ],
      },
    ],
  },
});

/* Pier Head and Column */
const pHeight = 0;

const pierColumn = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: pHeight + 10,
      material: {
        color: [78, 78, 78, 0.5],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: 0.3,
      }),
    }),
  ],
});

const pileCap = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: pHeight + 3,
      material: {
        color: [200, 200, 200, 0.7],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: 1.0,
      }),
    }),
  ],
});

const pierHeadRenderer = new UniqueValueRenderer({
  defaultSymbol: new PolygonSymbol3D({
    symbolLayers: [
      {
        type: 'extrude',
        size: 5, // in meters
        material: {
          color: '#E1E1E1',
        },
        edges: new SolidEdges3D({
          color: '#4E4E4E',
          size: 1.0,
        }),
      },
    ],
  }),
  defaultLabel: 'Other',
  field: 'Layer',
  legendOptions: {
    title: 'Pier Head/Pier Column/Pile Cap',
  },
  uniqueValueInfos: [
    {
      value: 'Pier_Column',
      symbol: pierColumn,
      label: 'Column',
    },
    /*
  {
    value: "Pier_Head",
    symbol: pierHead,
    label: "Pier Head"
  },
  */
    {
      value: 'Pile_Cap',
      symbol: pileCap,
      label: 'Pile Cap',
    },
  ],
});

export const pierHeadColumnLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 4,
  title: 'Pier Head/Column',
  definitionExpression: "Layer <> 'Pier_Head'",

  minScale: 150000,
  maxScale: 0,
  renderer: pierHeadRenderer,
  popupEnabled: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});
pierHeadColumnLayer.listMode = 'hide';

/* Pier Point Layer with access dates */
const pierAccessDateColor = {
  0: [0, 255, 0, 0.9], // Accessible (green)
  1: [255, 127, 80], // Orange
  2: [255, 255, 0], // Yellow
  3: [0, 112, 255], // Blue
  4: [143, 0, 255], // violet
  5: [255, 255, 255, 0.9],
  6: [255, 0, 0, 0.9], // Dates are missing
};

//const cutOffDateAccess = '01/01/1970';
const today = new Date();
const todayn = today.getTime();
const cutOffDateAccess = todayn;
console.log(todayn);

const pierAccessReadyDateLabel = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: pierAccessDateColor[0],
        },
        size: 15,
        font: {
          family: 'Ubuntu Mono',
          weight: 'bold',
        },
      }),
    ],
    verticalOffset: {
      screenLength: 80,
      maxWorldLength: 500,
      minWorldLength: 30,
    },
    callout: {
      type: 'line',
      size: 0.5,
      color: [0, 0, 0],
      border: {
        color: [255, 255, 255, 0.7],
      },
    },
  }),
  labelExpressionInfo: {
    expression: `var accessdate = $feature.AccessDate;
                  var cutoffDate = 1700011031473;
                  var labelPier = when($feature.AccessDate <= cutoffDate, $feature.PIER, '');
                  return \`\${labelPier}\`
                  `,
  },
  labelPlacement: 'above-center',
});

const pierAccessNotYetLabel = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: '#cccccc',
        },
        size: 10,
        font: {
          family: 'Ubuntu Mono',
          weight: 'normal',
        },
      }),
    ],
    verticalOffset: {
      screenLength: 80,
      maxWorldLength: 500,
      minWorldLength: 30,
    },
    callout: {
      type: 'line',
      size: 0.5,
      color: [0, 0, 0],
      border: {
        color: [255, 255, 255, 0.7],
      },
    },
  }),
  labelExpressionInfo: {
    expression: `var accessdate = $feature.AccessDate;
                  var cutoffDate = 1700011031473;
                  var labelPier = when($feature.AccessDate > cutoffDate || isEmpty($feature.AccessDate), $feature.PIER, '');
                  return \`\${labelPier}\`
                  `,
  },
  labelPlacement: 'above-center',
});

const pierAccessDateMissingLabel = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: '#ff0000',
        },
        size: 10,
        font: {
          family: 'Ubuntu Mono',
          weight: 'normal',
        },
      }),
    ],
    verticalOffset: {
      screenLength: 80,
      maxWorldLength: 500,
      minWorldLength: 30,
    },
    callout: {
      type: 'line',
      size: 0.5,
      color: [0, 0, 0],
      border: {
        color: [255, 255, 255, 0.7],
      },
    },
  }),
  labelExpressionInfo: {
    expression: '$feature.PIER',
    //'DefaultValue($feature.GeoTechName, "no data")'
    //"IIF($feature.Score >= 13, '', '')"
    //value: "{Type}"
  },
  labelPlacement: 'above-center',
  where: 'AccessDate IS NULL',
});

// 1. Get unique dates
export const pierAccessLayer = new FeatureLayer(
  {
    portalItem: {
      id: 'e09b9af286204939a32df019403ef438',
      portal: {
        url: 'https://gis.railway-sector.com/portal',
      },
    },
    layerId: 3,
    labelingInfo: [pierAccessReadyDateLabel, pierAccessNotYetLabel, pierAccessDateMissingLabel], //[pierAccessDateMissingLabel, pierAccessReadyDateLabel, pierAccessNotYetLabel],
    title: 'Pier with Access Date',
    minScale: 150000,
    maxScale: 0,

    elevationInfo: {
      mode: 'on-the-ground',
    },
  },
  //{ utcOffset: 300 },
);

const pierAccessRenderer = new UniqueValueRenderer({
  field: 'AccessDate',

  valueExpression:
    "When(IsEmpty($feature.AccessDate), 'empty', $feature.AccessDate <= 1636070400000, 'accessible', $feature.AccessDate > 1636070400000, 'others',$feature.AccessDate)",
  uniqueValueInfos: [
    {
      value: 'empty',
      label: 'Dates are missing',
      symbol: new SimpleMarkerSymbol({
        size: 5,
        color: pierAccessDateColor[6],
        outline: {
          width: 0.1,
          color: 'white',
        },
      }),
    },
    {
      value: 'accessible',
      label: 'Accessible',
      symbol: new SimpleMarkerSymbol({
        size: 5,
        color: pierAccessDateColor[0],
        outline: {
          width: 0.1,
          color: 'white',
        },
      }),
    },
    {
      value: 'others',
      label: 'Others',
      symbol: new SimpleMarkerSymbol({
        size: 5,
        color: pierAccessDateColor[5],
        outline: {
          width: 0.1,
          color: 'white',
        },
      }),
    },
  ],
});
pierAccessLayer.renderer = pierAccessRenderer;

// 3. Popup Template
function dateFormat(inputDate: any, format: any) {
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
}

// Custom Popup Content for pierAccessLayer
let customContent = new CustomContent({
  creator: function (event: any) {
    // Extract AsscessDate of clicked pierAccessLayer
    const statsDate = event.graphic.attributes.AccessDate;

    // Convert numeric to date format
    const date = new Date(statsDate);
    let dateValue = dateFormat(date, 'MM-dd-yyyy');

    // If the date is before current date, popupContent should be "AVAILABLE"
    let DATES: any;
    if (dateValue === '01-01-1970') {
      // Empty date is entered as this
      DATES = 'NO DATES AVAILABLE';
    } else if (statsDate <= cutOffDateAccess) {
      DATES = 'ACCESSIBLE';
    } else if (statsDate > cutOffDateAccess) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      DATES = dateValue;
    }

    //return `Access Date: <b>${DATES}</b>`;
    return `Access Date: <b>${dateValue}</b><br>
            Status: <b>${DATES}</b> 
    `;
  },
});

const template = new PopupTemplate({
  title: 'Pier No: <b>{PIER}</b>',
  lastEditInfoEnabled: false,
  content: [customContent],
});
pierAccessLayer.popupTemplate = template;
