import { useRef, useEffect, useState } from 'react';
import Select from 'react-select';
import { map, view, basemaps, layerList } from './Scene';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalciteTab,
  CalciteTabs,
  CalciteTabNav,
  CalciteTabTitle,
  CalcitePanel,
  CalciteList,
  CalciteListItem,
} from '@esri/calcite-components-react';
import loadable from '@loadable/component';
import LotChart from './components/LotChart';
import { DropDownData } from './customClass';
import { lotLayer } from './layers';
import { dateUpdate, zoomToLayer } from './Query';
// import BarangayChart from './components/BarangayChart';
import RefusedList from './components/RefusedList';

function App() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  //**** Set states */
  const mapDiv = useRef(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);

  // For Calcite Design
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);

  // For dropdown filter
  const [initMunicipalBarangayPriority, setInitMunicipalBarangayPriority] = useState([]);

  const [municipality, setMunicipality] = useState<null | any>(null);
  const [barangay, setBarangay] = useState<null | any>(null);
  const [priority, setPriority] = useState<null | any>(null);

  const [barangayList, setBarangayList] = useState([]);
  const [priorityList, setPriorityList] = useState([]);
  const [barangaySelected, setBarangaySelected] = useState({ name: '' });

  // // loadable for code splitting
  const BarangayChart = loadable(() => import('./components/BarangayChart'));
  const StructureChart = loadable(() => import('./components/StructureChart'));

  //**** Create dropdonw list */
  useEffect(() => {
    const dropdownData = new DropDownData({
      featureLayers: [lotLayer],
      fieldNames: ['Municipality', 'Barangay', 'Priority1_1'],
    });

    dropdownData.dropDownQuery().then((response: any) => {
      setInitMunicipalBarangayPriority(response);
    });

    dateUpdate().then((response: any) => {
      setAsOfDate(response);
    });
  }, []);

  useEffect(() => {
    zoomToLayer(lotLayer);
  }, [municipality, barangay, priority]);

  const handleMunicipalityChange = (obj: any) => {
    setMunicipality(obj);
    setBarangayList(obj.field2);
    setBarangay(null);
    setPriority(null);
  };

  const handleBarangayChange = (obj: any) => {
    setBarangay(obj);
    setPriorityList(obj.field3);
    setPriority(null);
  };

  const handlePriorityChange = (obj: any) => {
    setPriority(obj);
  };

  // End of dropdown list
  useEffect(() => {
    if (activeWidget) {
      const actionActiveWidget = document.querySelector(
        `[data-panel-id=${activeWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionActiveWidget.hidden = true;
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(
        `[data-panel-id=${nextWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionNextWidget.hidden = false;
    }
  });

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize
       */

      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
      basemaps.container = calcitePanelBasemaps.current;
      layerList.container = layerListDiv.current;
    }
  }, []);

  // Style CSS
  const customstyles = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? '#999999' : isSelected ? '#2b2b2b' : '#2b2b2b',
        color: '#ffffff',
      };
    },

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: '#2b2b2b',
      borderColor: '#949494',
      height: 35,
      width: '170px',
      color: '#ffffff',
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#fff' }),
  };

  return (
    <div>
      <CalciteShell>
        <CalciteTabs slot="panel-end" style={{ width: '27vw' }}>
          <div id="chartPanel" style={{ height: '100%' }}>
            <CalciteTabNav slot="tab-nav" id="thetabs">
              <CalciteTabTitle class="Land">Land</CalciteTabTitle>
              <CalciteTabTitle class="Structure">Structure</CalciteTabTitle>
              <CalciteTabTitle class="Barangay">Barangay</CalciteTabTitle>
              <CalciteTabTitle class="RefusedList">RefusedList</CalciteTabTitle>
            </CalciteTabNav>
            {/* CalciteTab: Lot */}
            <CalciteTab>
              <LotChart
                municipal={municipality === null ? '' : municipality.field1}
                barangay={barangay === null ? '' : barangay.name}
                priority={priority === null ? '' : priority.name}
              />
            </CalciteTab>
            {/* CalciteTab: Structure */}
            <CalciteTab>
              <StructureChart
                municipal={municipality === null ? '' : municipality.field1}
                barangay={barangay === null ? '' : barangay.name}
              />
            </CalciteTab>

            {/* CalciteTab: Non-Land Owner */}
            <CalciteTab>
              <BarangayChart
                municipal={municipality === null ? '' : municipality.field1}
                barangay={barangay === null ? '' : barangay.name}
              />
            </CalciteTab>

            {/* CalciteTab: List of refused lots */}
            <CalciteTab>
              <RefusedList
                municipal={municipality === null ? '' : municipality.field1}
                barangay={barangay === null ? '' : barangay.name}
              />
            </CalciteTab>
          </div>
        </CalciteTabs>
        <header
          slot="header"
          id="header-title"
          style={{ display: 'flex', width: '100%', padding: '0 1rem' }}
        >
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
            alt="DOTr Logo"
            height={'2.9%'}
            width={'2.9%'}
            style={{ marginBottom: 'auto', marginTop: 'auto' }}
          />
          <b className="headerTitle">SC1 SUBCONTRACTOR</b>
          <div className="date">{!asOfDate ? '' : 'As of ' + asOfDate}</div>

          <div className="dropdownFilter">
            <div className="dropdownFilterLayout">
              <b style={{ color: 'white', margin: 10, fontSize: '0.9vw' }}></b>
              <Select
                placeholder="Select Municipality"
                value={municipality}
                options={initMunicipalBarangayPriority}
                onChange={handleMunicipalityChange}
                getOptionLabel={(x: any) => x.field1}
                styles={customstyles}
              />
              <br />
              <b style={{ color: 'white', margin: 10, fontSize: '0.9vw' }}></b>
              <Select
                placeholder="Select Barangay"
                value={barangay}
                options={barangayList}
                onChange={handleBarangayChange}
                getOptionLabel={(x: any) => x.name}
                styles={customstyles}
              />
              <br />
              <b style={{ color: 'white', margin: 10, fontSize: '0.9vw' }}></b>
              <Select
                placeholder="Select Priority"
                value={priority}
                options={priorityList}
                onChange={handlePriorityChange}
                getOptionLabel={(x: any) => x.name}
                styles={customstyles}
              />
            </div>
          </div>
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/GCR LOGO.png"
            alt="GCR Logo"
            height={'4.4%'}
            width={'4.4%'}
            style={{
              marginBottom: 'auto',
              marginTop: 'auto',
              marginLeft: 'auto',
              marginRight: '5rem',
            }}
          />
        </header>

        <CalciteShellPanel
          width-scale="1"
          slot="panel-start"
          position="start"
          id="left-shell-panel"
          displayMode="dock"
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="layers"
              id="layers"
              //textEnabled={true}
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="basemaps"
              icon="basemap"
              text="basemaps"
              id="basemaps"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="information"
              icon="information"
              text="Information"
              id="information"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel
            heading="Layers"
            height-scale="l"
            width-scale="l"
            data-panel-id="layers"
            style={{ width: '18vw' }}
            hidden
          >
            <CalciteList>
              <CalciteListItem
                label=""
                description=""
                value="land-acquisition"
                ref={layerListDiv}
              ></CalciteListItem>
            </CalciteList>
          </CalcitePanel>

          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            style={{ width: '18vw' }}
            hidden
          >
            <CalciteList>
              <CalciteListItem value="basemaps" ref={calcitePanelBasemaps}></CalciteListItem>
            </CalciteList>
          </CalcitePanel>

          <CalcitePanel heading="Description" data-panel-id="information" hidden>
            {nextWidget === 'information' ? (
              <div className="informationDiv">
                <ul>
                  <li>
                    You can <b>filter the data</b> by City and Barangy using dropdown lists.
                  </li>
                  <li>
                    <b>Click a tab</b> below the dropdown lists to view progress on land, structure,
                    or NLO in charts.
                  </li>
                  <li>
                    <b>Click series in pie charts</b> to view progress on the corresponding
                    lots/structures/NLO on the map.
                  </li>
                  <li>
                    <b>Lots under expropriation</b> are available in the 'Expro List' tab.
                  </li>
                  <li>
                    Click/unclick widgets icon for viewing Layer list, legend, basemaps, and locate
                    widgets under the main title.
                  </li>
                  <li>
                    <b>Toggle a checkbox</b> above the Land pie chart to view{' '}
                    <b>handed-over areas</b> (m2) of Contract Packages.
                  </li>
                </ul>
              </div>
            ) : (
              <div className="informationDiv" hidden></div>
            )}
          </CalcitePanel>
        </CalciteShellPanel>
        <div className="mapDiv" ref={mapDiv}></div>
      </CalciteShell>
    </div>
  );
}

export default App;
