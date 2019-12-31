'use strict';

const fs = require('fs');


const auditDesktopSuccessfully = runAudit(JSON.parse(fs.readFileSync('html_desktop_audit.report.json')), "desktop");
const auditMobileSuccessfully = runAudit(JSON.parse(fs.readFileSync('html_mobile_audit.report.json')), "mobile");

if(auditDesktopSuccessfully && auditMobileSuccessfully)
{
    process.exit(0);
}
else
{
    process.exit(1);
}



function runAudit(data, version) {
    const performanceScore = data.categories.performance.score;
    const accessibilityScore = data.categories.accessibility.score;
    const bestPracticesScore = data.categories["best-practices"].score;
    const seoScore = data.categories.seo.score;
    const pwaScore = data.categories.pwa.score;
    console.log(`Start analyzing report for ${version}`);
    console.log(`+ Performance Grade ${version}: ${performanceScore}`);
    console.log(`+ Accessibility Grade ${version}: ${accessibilityScore}`);
    console.log(`+ Best Practices Grade ${version}: ${bestPracticesScore}`);
    console.log(`+ SEO Grade ${version}: ${seoScore}`);
    console.log(`+ PWA Grade ${version}: ${pwaScore}`);

    if (performanceScore < 0.85
        || accessibilityScore < 0.9
        || bestPracticesScore < 0.9
        || seoScore < 0.9
        || pwaScore < 0.75) {
        console.log(`=> Audit ${version} failed :(\r\n--------------------------------------------------------`);
        return false;
    }
    else {
        console.log(`=> Audit ${version} passed :)\r\n--------------------------------------------------------`);
        return true;
    }
}
    