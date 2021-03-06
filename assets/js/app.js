// Main JS file
import Map from "./map.js";
import Tabs from "./tabs";
import alerts from "./alerts";
import Contact from "./contact";
import Validator from './validators';
import SearchFestivals from './search';
import transform from './dates';

window.App = {};
App.alerts = alerts;

function boot() {
    let map = new Map();
    let tabs = new Tabs();
    let contact = new Contact();
    
    Validator.initializeFormValidators();
    transform();

    SearchFestivals.initializeSearchBar();
}

window.addEventListener('DOMContentLoaded', boot);