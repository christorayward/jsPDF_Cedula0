﻿import { jsPDF } from "jspdf"
var callAddFont = function () {
this.addFileToVFS('calibrib-normal.ttf', font);
this.addFont('calibrib-normal.ttf', 'calibrib', 'normal');
};
jsPDF.API.events.push(['addFonts', callAddFont])