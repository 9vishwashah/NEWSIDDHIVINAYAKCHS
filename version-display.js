import versionInfo from './version.js';

document.getElementById('last-updated').textContent =
    `Last updated: ${versionInfo.updatedAt}`;
