'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('lighthouse-report.json');
let data = JSON.parse(rawdata);

const performanceScore = data.categories.performance.score;
const accessibilityScore = data.categories.accessibility.score;
const bestPracticesScore = data.categories["best-practices"].score;
const seoScore = data.categories.seo.score;
const pwaScore = data.categories.pwa.score;

console.log(performanceScore);
console.log(accessibilityScore);
console.log(bestPracticesScore);
console.log(seoScore);
console.log(pwaScore);

process.on('exit', function(code) {
    return console.log(`About to exit with code ${code}`);
});

if(performanceScore < 0.9
    || accessibilityScore < 0.9
    || bestPracticesScore < 0.9
    || seoScore < 0.9
    || pwaScore < 0.9) {
        console.log("audit failed");
        process.exit(1);
    }
    else
    {
        console.log("audit passed");
        process.exit(0);
    }


    