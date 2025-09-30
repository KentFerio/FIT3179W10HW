{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Population & Immigration Trends by State (2020–2024)",
  "data": {
    "url": "https://raw.githubusercontent.com/KentFerio/FIT3179W10HW/main/FIT3179W10HW.csv"
  },
  "params": [
    {
      "name": "selected_state",
      "value": "All",
      "bind": {
        "input": "select",
        "options": [
          "All",
          "New South Wales",
          "Victoria",
          "Queensland",
          "South Australia",
          "Western Australia",
          "Tasmania",
          "Northern Territory",
          "Australian Capital Territory"
        ],
        "name": "Select State: "
      }
    }
  ],
  "hconcat": [
    {
      "transform": [
        {
          "filter": "selected_state == 'All' || datum.State == selected_state"
        }
      ],
      "mark": "bar",
      "encoding": {
        "x": {"field": "Year", "type": "ordinal", "title": "Year"},
        "y": {
          "aggregate": "sum",
          "field": "Population",
          "type": "quantitative",
          "title": "Total Population (Million)",
          "axis": {"format": "s"},
          "scale": {"domain": [0, 20000000]}
        },
        "color": {"field": "State", "type": "nominal"},
        "tooltip": [
          {"field": "State", "title": "State"},
          {"field": "Year", "title": "Year"},
          {
            "aggregate": "sum",
            "field": "Population",
            "title": "Population",
            "format": ","
          }
        ]
      },
      "width": 400,
      "height": 300,
      "title": "Total Population by State (Million)"
    },
    {
      "transform": [
        {
          "filter": "selected_state == 'All' || datum.State == selected_state"
        }
      ],
      "mark": "line",
      "encoding": {
        "x": {"field": "Year", "type": "ordinal", "title": "Year"},
        "y": {
          "aggregate": "sum",
          "field": "Immigrant Entry",
          "type": "quantitative",
          "title": "Total Immigrant Entry (Thousand)",
          "axis": {"format": "s"},
          "scale": {"domain": [0, 200000]}
        },
        "color": {"field": "State", "type": "nominal"},
        "tooltip": [
          {"field": "State", "title": "State"},
          {"field": "Year", "title": "Year"},
          {
            "aggregate": "sum",
            "field": "Immigrant Entry",
            "title": "Immigrant Entry",
            "format": ","
          }
        ]
      },
      "width": 400,
      "height": 300,
      "title": "Total Immigrant Entry by State (Thousand)"
    }
  ]
}
