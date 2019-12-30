'use strict';

const fs = require('fs');

let data = JSON.parse(fs.readFileSync('html_audit.report.json'));

const performanceScore = data.categories.performance.score;
const accessibilityScore = data.categories.accessibility.score;
const bestPracticesScore = data.categories["best-practices"].score;
const seoScore = data.categories.seo.score;
const pwaScore = data.categories.pwa.score;

console.log(`Performance Grade: ${performanceScore}`);
console.log(`Accessibility Grade: ${accessibilityScore}`);
console.log(`Best Practices Grade: ${bestPracticesScore}`);
console.log(`SEO Grade: ${seoScore}`);
console.log(`PWA Grade: ${pwaScore}`);

process.on('exit', function(code) {
    return console.log(`About to exit with code ${code}`);
});

if(performanceScore < 0.85
    || accessibilityScore < 0.9
    || bestPracticesScore < 0.9
    || seoScore < 0.9
    || pwaScore < 0.75) {
        console.log("audit failed");
        process.exit(1);
    }
    else
    {
        console.log("audit passed");
        process.exit(0);
    }


    