$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1. ProdSearch.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: abhinav.dev@gmail.com"
    },
    {
      "line": 2,
      "value": "#Comments: Demo project"
    },
    {
      "line": 3,
      "value": "#Scenario Description: User is able to search product Amazon successfully"
    },
    {
      "line": 4,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 5,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 6,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 7,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 8,
      "value": "#| (Data Tables)"
    },
    {
      "line": 9,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 10,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 11,
      "value": "#\"\""
    },
    {
      "line": 12,
      "value": "## (Comments)"
    },
    {
      "line": 13,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 16,
  "name": "Product search on Amazon",
  "description": "",
  "id": "product-search-on-amazon",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 20,
  "name": "Product search",
  "description": "",
  "id": "product-search-on-amazon;product-search",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Amazon home page is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user searches for the product",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Lists all prices with count of results on first page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("2. BrokenLinks.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: abhinav.dev@gmail.com"
    },
    {
      "line": 2,
      "value": "#Comments: Demo project"
    },
    {
      "line": 3,
      "value": "#Scenario Description: User needs to check if there are any broken links"
    }
  ],
  "line": 6,
  "name": "Check broken links",
  "description": "",
  "id": "check-broken-links",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Validate broken links on home page",
  "description": "",
  "id": "check-broken-links;validate-broken-links-on-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Amazon home page is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User fetches all links on the page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user validates if any link is broken and reports",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});