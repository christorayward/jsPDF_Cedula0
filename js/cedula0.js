cedula0 = () => {
    var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'letter',
        putOnlyUsedFonts: false,
        floatPrecision: 16 // or "smart", default is 16
    });
    //doc.text("Hello world!", 10, 10);
    doc.addImage(sctImg, 13.386, 13.383, 56.473, 20.997);
    doc.addImage(dgacImg, 178.135, 13.845, 22.0, 22.0);
    doc.rect(71.399, 14.698, 102.782, 19.597, 'T');
    doc.setFontSize(12);
    doc.setFontType('bold');
    doc.text(74.534, 20.105, 'DIRECCIÓN GENERAL DE AERONÁUTICA CIVIL');
    doc.text(86.43, 25.693, 'DIRECCIÓN DE SEGURIDAD AÉREA');
    doc.text(74.45, 31.288, 'DIRECCIÓN DE CERTIFICACIÓN DE LICENCIAS ');
    //doc.text(74.534,50, product);
    doc.setFontSize(12);
    doc.setFontType('normal');
    doc.text(30.346, 44.655, 'DGAC');
    doc.setFontSize(14);
    doc.setFontType('bold');
    doc.text(100.847, 44.880, 'CEDULA 0');
    doc.text(87.962, 51.815, 'CEDULA DE LICENCIA');
    doc.setFontSize(11);
    doc.setFontType('normal');
    doc.text(81.214, 58.136, 'DGAC-PE-11-DSA-SLIP-P-01-FE-102');
    doc.setFontSize(8);
    doc.setFontType('normal');
    doc.text(20.245, 71.000, 'UTILIZAR MÁQUINA DE ESCRIBIR O LETRA DE MOLDE');
    doc.text(20.245, 75.205, 'PARA SU ELABORACION:');
    doc.rect(112.092, 62.658, 66.199, 10.107, 'T');
    doc.rect(112.621, 63.187, 65.14, 9.049, 'T');
    doc.text(115.849, 68.591, 'SOLO PARA SER LLENADO POR LA DGAC.');
    doc.rect(183.247, 62.888, 13.529, 7.99, 'T');
    doc.rect(183.777, 63.417, 12.471, 6.932, 'T');
    doc.setFontSize(8);
    doc.text(20.194, 81.910, '(01)');
    doc.setFontSize('9');
    doc.setFontType('bold');
    doc.text(30.909, 81.660, 'AEROPUERTO: _____________________________  FECHA: _____________  No. ENTRADA:');
    doc.rect(172.558, 75.940, 24.606, 7.232);
    doc.rect(172.999, 76.381, 23.724, 6.35);
    doc.rect(20.045, 91.790, 177.562, 7, 699);
    doc.line(47.926, 91.882, 47.926, 98.7);
    doc.line(84.978, 91.882, 84.978, 98.7);
    doc.line(109.954, 91.882, 109.954, 98.7);
    doc.line(142.473, 91.882, 142.473, 98.7);
    doc.line(170.001, 91.882, 170.001, 98.7);
    doc.setFontSize(8.5);
    doc.setFontType('normal');
    doc.text(22.049, 94.458, '(02)');
    doc.setFontSize('9');
    doc.setFontType('bold');
    doc.text(22.115, 98.086, 'REVALIDACIÓN');
    doc.text(53.282, 94.455, 'CONVALIDACIÓN');
    doc.text(56.624, 98.096, 'DE LICENCIA');
    doc.text(87.157, 96.351, 'REPOSICIÓN');
    doc.text(112.183, 96.351, 'RECUPERACIÓN');
    doc.text(144.612, 96.360, 'CAPACIDAD');
    doc.text(172.18, 94.455, 'EXPEDICION');
    doc.text(172.18, 98.096, 'DE LICENCIA');
    doc.rect(27.438, 103.744, 12.656, 6.35, 'T');
    doc.rect(59.948, 103.744, 12.656, 6.35, 'T');
    doc.rect(89.973, 103.744, 12.656, 6.35, 'T');
    doc.rect(119.952, 103.744, 12.656, 6.35, 'T');
    doc.rect(147.469, 103.744, 12.656, 6.35, 'T');
    doc.rect(177.494, 103.744, 12.656, 6.35, 'T');
    doc.rect(19.936, 114.285, 177.75, 74.175, 'T');
    doc.setDrawColor(0)
    doc.setFillColor(255, 236, 154)
    doc.rect(20.144, 118.0, 41.869, 3.175, 'F')
    doc.setFontSize(9);
    doc.setFontType('normal');
    doc.text(20.144, 120.663, '(03)');
    doc.setFontType('bold');
    doc.text(26.78, 120.659, 'DATOS PERSONALES:');
    doc.text(20.128, 127.983, 'CURP:');
    doc.line(32.647, 127.746, 101.878, 127.746);
    doc.setFontType('normal');
    doc.text(45,126.746,CURP_Personal); //CURP Personal Usuario
    doc.text(102.736, 127.983, 'RFC:');
    doc.line(112.647, 127.746, 188.878, 127.746);
    doc.text(135,126.746,RFC_Personal); //RFC Personal Usuario
    doc.text(54.766, 131.712,
        '( Si lo posee )                                                                         ( Con Homoclave )');
    doc.text(22.125, 139.035,
        'NOMBRE ______________________________________________________________________________________');
    doc.text(43,138.535,aPaterno_Personal); //Apellido Paterno Usuario
    doc.text(86,138.535,aMaterno_Personal); //Apellido Materno Usuario
    doc.text(125,138.535,nombres_Personal); //Nombre(s) Usuario
    //doc.line(36.647,138.941,188.878,138.941);
    doc.text(39.412, 142.714,
        '  A. PATERNO                              A. MATERNO                        NOMBRE(S)');
    doc.text(22.128, 149.957, 'DOMICILIO PERSONAL:');
    doc.text(22.042, 154.640,
        'CALLE: _____________________________________________  No. EXTERIOR: __________ No. INT ___________');
    doc.text(36.5,154.3,calle_Personal); //Calle Usuario
    doc.text(140,154.3,noExt_Personal); //Número Exterior Usuario
    doc.text(172,154.3,noInt_Personal); //Número Interior Usuario
    //doc.line(34.552,154.340,113.878,154.340);
    //doc.line(139.798,154.340,155.878,154.340);
    //doc.line(169.552,154.340,188.878,154.340);
    doc.text(22.042, 159.701,
        'COLONIA: ___________________________________________ COD. POSTAL: _____________________________');
    doc.text(39.5,159.301,colonia_Personal); //Colonia Usuario
    doc.text(139,159.301,cp_Personal); //Código Postal Usuario
    //doc.line(38.751,160.095,113.878,160.095);
    doc.text(22.042, 165.797,
        'CIUDAD: ____________________________________________  DELEG/MUNI: ______________________________');
    doc.text(38,165.301,cd_Personal); //Ciudad Usuario
    doc.text(138,165.301,mun_Personal); //Delegación o Municipio Usuario
    doc.text(22.042, 171.521,
        'ENTIDAD FED: _______________________________________  TELÉFONO: _______________________________');
    doc.text(46,171.221,entfed_Personal); //Entidad Federativa Usuario
    doc.text(135,171.221,tel_Personal); //Teléfono Usuario
    doc.text(22.042, 177.819,
        'NACIONALIDAD: ______________________________________ LUGAR NAC. ______________________________');
    doc.text(48.5,177.519,nacionalidad_Personal); //Nacionalidad Usuario
    doc.text(137,177.519,lugarNacimiento_Personal); //Lugar de Nacimiento Usuario
    doc.text(22.042, 181.994, 'ACTA DE NACIMIENTO:');
    doc.text(22.042, 185.169,
        '(Solo por primera vez)   No. ACTA: ________________________ FECHA DE NACIMIENTO ____________________');
    doc.text(74,184.969,noActa_Personal); //Número de Acta Usuario
    doc.text(155,184.969,fechaNacimiento_Personal); //Fecha de Nacimiento Usuario
    //doc.text(0,185.169,noActa_Personal); //Número de Acta
    
    doc.rect(19.936, 194.911, 177.75, 43.699, 'T')
    doc.setFillColor(255, 236, 154)
    doc.rect(24.583, 199.80, 56.00, 3.175, 'F')
    doc.text(24.583, 202.330, '(04)');
    doc.setFontType('bold');
    doc.text(31.183, 202.330, 'DATOS ESTUDIOS ESCOLARES: (Solo por primera vez)');
    doc.line(20.105, 206.045, 197.7, 206.045);
    doc.text(61.873, 211.335, 'NOMBRE INSTITUCIÓN EDUCATIVA');
    doc.line(20.105, 213.114, 197.7, 213.114);
    doc.setFontType('normal');
    doc.text(160.697, 211.0, 'DE           A          CERT.')
    doc.text(24.583, 219.201, 'PRIMARIA');
    doc.line(51.228, 220.194, 197.517, 220.194);
    doc.text(52.228,219.0,nombEsc_Primaria); //Nombre Primaria Usuario
    doc.text(159,218.0,deEsc_Primaria); //De Cuando Primaria Usuario
    doc.text(172,218.0,aEsc_Primaria); //A Cuando Primaria Usuario
    doc.text(189,218.0,certEsc_Primaria); //Certificado Primaria Usuario
    doc.text(24.583, 225.344, 'SECUNDARIA');
    doc.line(51.228, 226.248, 197.517, 226.248);
    doc.text(52.228,225.0,nombEsc_Secundaria); //Nombre Secundaria Usuario
    doc.text(159,224.9,deEsc_Secundaria); //De Cuando Secundaria Usuario
    doc.text(172,224.9,aEsc_Secundaria); //A Cuando Secundaria Usuario
    doc.text(189,224.9,certEsc_Secundaria); //Certificado Secundaria Usuario
    doc.text(24.583, 231.440, 'PREPARATORIA');
    doc.line(51.228, 232.429, 197.517, 232.429);
    doc.text(52.228,231.040,nombEsc_Preparatoria); //Nombre Preparatoria Usuario
    doc.text(159,231.040,deEsc_Preparatoria); //De Cuando Preparatoria Usuario
    doc.text(172,231.040,aEsc_Preparatoria); //A Cuando Preparatoria Usuario
    doc.text(189,231.040,certEsc_Preparatoria); //Certificado Preparatoria Usuario
    doc.text(24.583, 237.536, 'ESTUDIOS SUPERIORES');
    doc.text(64.228,237.136,nombEsc_Superiores); //Nombre Superiores Usuario
    doc.text(159,237.136,deEsc_Superiores); //De Cuando Superiores Usuario
    doc.text(172,237.136,aEsc_Superiores); //A Cuando Superiores Usuario
    doc.text(189,237.136,certEsc_Superiores); //Certificado Superiores Usuario
    doc.line(155.523, 206.045, 155.523, 238.525);
    doc.line(168.646, 206.045, 168.646, 238.525);
    doc.line(181.685, 206.045, 181.685, 238.525);
    doc.setFontType('bold');
    doc.setFontSize(9.5);
    doc.text(20.289, 265.604, 'DGAC-MIL-CED-0');
    doc.setFontType('normal');
    doc.text(176.889, 260.701, 'Página 1 de 5');

    //Página 2//
    doc.addPage("letter", "p");
    doc.addImage(sctImg, 13.386, 13.383, 56.473, 20.997);
    doc.addImage(dgacImg, 178.135, 13.845, 22.0, 22.0);
    doc.rect(71.399, 14.698, 102.782, 19.597, 'T');
    doc.setFontSize(12);
    doc.setFontType('bold');
    doc.text(74.534, 20.105, 'DIRECCIÓN GENERAL DE AERONÁUTICA CIVIL');
    doc.text(86.43, 25.693, 'DIRECCIÓN DE SEGURIDAD AÉREA');
    doc.text(74.45, 31.288, 'DIRECCIÓN DE CERTIFICACIÓN DE LICENCIAS ');
    doc.rect(19.936, 47.743, 178.301, 19.008);
    doc.setFontSize(9);
    doc.setFontType('normal');
    doc.text(24.583, 52.516, '(05)');
    doc.setFontType('bold');
    doc.text(31.183, 52.358, 'DATOS EMPRESA, INSTITUCIÓN, O CENTRO DE FORMACIÓN, CAPACITACIÓN Y ADIESTRAMIENTO:');
    doc.text(22.033, 60.169,
        'CLAVE                                          NOMBRE:     _________________________________________________________'
    );
    doc.rect(36.624, 55.974, 29.686, 6.95);
    doc.rect(37.12, 56.470, 28.531, 5.799);
    doc.rect(19.936, 81.695, 177.751, 55.298);
    doc.setFontType('normal');
    doc.text(22.077, 84.614, '(06)');
    doc.setFontType('bold');
    doc.text(27.685, 84.614, ' DATOS EXAMEN MÉDICO:');
    doc.text(22.115, 91.091,
        'FECHA EXAMEN MÉDICO:___________________________   FECHA DE VENCIMIENTO _________________________');
    doc.text(22.115, 97.452,
        'RESULTADO EXAMEN MÉDICO:               APTO:                                                 NO APTO:');
    doc.rect(98.471, 93.832, 11.532, 4.498);
    doc.rect(98.956, 94.328, 10.539, 3.528);
    doc.rect(156.856, 93.501, 11.532, 4.498);
    doc.rect(157.341, 93.998, 10.539, 3.528);
    doc.text(22.033, 107.621, 'CLAVE UNIDAD:');
    doc.rect(47.462, 103.6662, 26.15, 6.747);
    doc.rect(47.947, 104.217, 25.202, 5.711);
    doc.text(83.91, 104.446, 'LUGAR DE');
    doc.text(84.236, 107.611, 'EXPEDICIÓN:____________________________________________________');
    doc.text(22.033, 117.146,
        'CLASE DE EXAMEN:         1                      2                      3                 GRUPO SANGUINEO_________________________'
    );
    doc.rect(63.767, 113.478, 11.532, 4.498);
    doc.rect(64.252, 113.974, 10.539, 3.528);
    doc.rect(85.154, 113.478, 11.532, 4.498);
    doc.rect(85.639, 113.974, 10.539, 3.528);
    doc.rect(106.696, 113.478, 11.532, 4.498);
    doc.rect(107.181, 113.974, 10.539, 3.528);
    doc.setFontType('bold');
    doc.text(22.02, 126.671, 'OBSERVACIONES MEDICAS:');
    doc.rect(69.95, 121.286, 125.705, 11.218);
    doc.rect(70.288, 121.625, 125.028, 10.541);
    doc.line(70.457, 126.790, 195.147, 126.790);
    doc.rect(19.936, 152.724, 177.75, 28.709);
    doc.setFontType('normal');
    doc.text(22.077, 155.952, '(07)');
    doc.setFontSize(8)
    doc.setFontType('bold');
    doc.text(28.6615, 155.9, 'DATOS CURSO AEROMÉDICO');
    doc.line(20.105, 156.583, 197.517, 156.583);
    doc.line(20.105, 159.970, 197.517, 159.970);
    doc.setFontType('normal');
    doc.setFontSize(9)
    doc.text(22.144, 163.183, 'FECHA                       CLAVE                                          LUGAR');
    doc.text(22.144, 166.824,
        'CURSO:                     UNIDAD:                                       ESPEDICIÓN');
    doc.rect(70.375, 160.675, 26.564, 6.509);
    doc.rect(70.825, 161.205, 25.691, 5.45);
    doc.line(20.105, 167.632, 197.517, 167.632);
    doc.line(20.105, 170.257, 197.517, 170.257);
    doc.line(51.27, 159.970, 51.27, 170.257);
    doc.line(98.821, 159.970, 98.821, 170.257);
    doc.line();
    doc.text(22.02, 173.759, 'OBSERVACIONES MÉDICAS:');
    doc.rect(69.789, 171.220, 126.496, 9.022);
    doc.rect(70.251, 171.692, 125.564, 8.088);
    doc.rect(19.936, 194.048, 178.301, 26.003);
    doc.text(22.125, 197.947, '(08) DATOS ESTANCIA LEGAL (Solo extranjero)');
    doc.line(20.105, 199.213, 198.237, 199.213);
    doc.text(22.125, 203.427,
        'No. DOCUMENTO:                                      FECHA EXPEDICIÓN:                                           FECHA VENC.:'
    );
    doc.line(20.105, 204.378, 198.237, 204.378);
    doc.text(22.125, 208.276, 'CONDICIÓN:');
    doc.line(20.105, 209.542, 198.237, 209.542);
    doc.text(22.125, 213.866, 'EMPRESA EN MÉXICO');
    doc.text(22.125, 217.454, 'DONDE LABORA:');
    doc.setFontType('bold');
    doc.setFontSize(9.5);
    doc.text(20.289, 265.604, 'DGAC-MIL-CED-0');
    doc.setFontType('normal');
    doc.text(176.889, 260.701, 'Página 2 de 5');

    //Página 3//
    doc.addPage("letter", "p");
    doc.addImage(sctImg, 13.386, 13.383, 56.473, 20.997);
    doc.addImage(dgacImg, 178.135, 13.845, 22.0, 22.0);
    doc.rect(71.399, 14.698, 102.782, 19.597, 'T');
    doc.setFontSize(12);
    doc.setFontType('bold');
    doc.text(74.534, 20.105, 'DIRECCIÓN GENERAL DE AERONÁUTICA CIVIL');
    doc.text(86.43, 25.693, 'DIRECCIÓN DE SEGURIDAD AÉREA');
    doc.text(74.45, 31.288, 'DIRECCIÓN DE CERTIFICACIÓN DE LICENCIAS ');
    doc.rect(19.936, 44.560, 177.751, 50.006);
    doc.setFontSize(9)
    doc.setFontType('normal');
    doc.text(20.172, 50.972, '(09)');
    doc.setFontType('bold');
    doc.text(26.78, 50.972,
        'DATOS CURSOS DE FORMACIÓN, CAPACITACIÓN Y/O ADIESTRAMIENTO EN EL ÚLTIMO AÑO DE VIGENCIA:');
    doc.line(19.936, 54.763, 197.687, 54.763);
    doc.setFontType('normal');
    doc.text(22.042, 58.084,
        'CENTRO FORMACIÓN, CAPACITACIÓN Y/O                   CURSO:                 CLAVE                              FECHA'
    );
    doc.text(22.042, 61.724,
        'ADIESTRAMIENTO:                                                            (PROGRAMA)        GRUPO:');
    doc.text(151.851, 63.926, 'INICIO:           TERMINACIÓN:');
    doc.line(102.461, 54.763, 102.461, 94.397); //Comienzo Lineas Verticales
    doc.line(129.985, 54.763, 129.985, 94.397);
    doc.line(149.966, 54.763, 149.966, 94.397);
    doc.line(170.001, 59.927, 170.001, 94.397);
    doc.line(149.966, 59.927, 197.687, 59.927); //Comienzo Lineas Horizontales
    doc.line(19.936, 65.092, 197.687, 65.092);
    doc.line(19.936, 69.224, 197.687, 69.224);
    doc.line(19.936, 73.356, 197.687, 73.356);
    doc.line(19.936, 77.488, 197.687, 77.488);
    doc.line(19.936, 81.62, 197.687, 81.62);
    doc.line(19.936, 85.752, 197.687, 85.752);
    doc.line(19.936, 89.884, 197.687, 89.884);
    doc.rect(19.936, 103.221, 178.301, 34.629);
    doc.text(22.077, 106.163, '(10)');
    doc.setFontType('bold');
    doc.text(28.685, 106.163, 'DATOS LICENCIA:');
    doc.text(22.033, 113.861,
        'CLASE DE LICENCIA:_______________________________         NUMERO: ____________________________');
    doc.line(19.936, 118.392, 198.237, 118.392);
    doc.setFontType('normal');
    doc.text(22.144, 125.034,
        'FECHA REVALIDACION ACTUAL:                                                FECHA VENCIMIENTO:');
    doc.rect(72.088, 120.889, 36.475, 7.293);
    doc.rect(72.62, 121.422, 35.419, 6.228);
    doc.rect(149.039, 120.063, 43.202, 7.96);
    doc.rect(149.57, 120.592, 42.141, 6.9);
    doc.text(22.144, 136.049,
        'FECHA EXPEDICIÓN (INICIAL)____________________      LUGAR EXPEDICION (INICIAL):_____________________');
    doc.text(22.077, 144.162, '(11) DATOS FORMATO OACI (Si lo posee):');
    doc.rect(19.936, 140.813, 178.301, 21.359);
    doc.text(22.125, 151.143,
        'No. OACI:  _______________________________               FECHA EXPEDICIÓN:   _____________________________'
    );
    doc.line(19.936, 155.822, 198.237, 155.822);
    doc.text(22.125, 159.828, 'EMPRESA DONDE LABORA:');
    doc.rect(19.936, 166.335, 178.301, 68.553);
    doc.text(22.077, 171.766, '(12)');
    doc.setFontType('bold');
    doc.text(28.008, 171.766, ' DATOS CAPACIDADES REGISTRADAS PERSONAL DE VUELO Y/O CONVALIDACIÓN DE CAPACIDADES:');
    doc.line(19.936, 175.507, 198.237, 175.507);
    doc.setFontType('normal');
    doc.text(102.113, 180.5, 'PERIODO DE ADIESTRAMIENTO                     ACREDITADAS');
    doc.text(22.077, 185.6, 'TIPO DE CAPACIDAD         *AUTORIZADA');
    doc.text(68.924, 189.3, 'POR.');
    doc.text(142.522, 187.641, 'FECHA');
    doc.text(89.722, 191.282, 'HORAS     FECHA INICIO           TERMINACION                SI              NO')
    doc.setFontType('bold');
    doc.text(171.69, 196.828, '(   )             (   )');
    doc.text(171.69, 201.992, '(   )             (   )');
    doc.text(171.69, 207.157, '(   )             (   )');
    doc.text(171.69, 212.322, '(   )             (   )');
    doc.text(171.69, 217.497, '(   )             (   )');
    doc.text(171.69, 222.662, '(   )             (   )');
    doc.text(171.69, 227.826, '(   )             (   )');
    doc.text(171.69, 232.991, '(   )             (   )');
    doc.line(57.451, 175.507, 57.451, 234.752); //Empiezan lineas verticales
    doc.line(87.475, 175.507, 87.475, 234.752);
    doc.line(102.588, 182.000, 102.588, 234.752);
    doc.line(130.07, 182.000, 130.07, 234.752);
    doc.line(165.132, 175.507, 165.132, 234.752);
    doc.line(182.616, 182.000, 182.616, 234.752);
    doc.line(87.475, 182.000, 198.237, 182.000); //Empiezan líneas horizontales
    doc.line(19.936, 193.091, 198.237, 193.091);
    doc.line(19.936, 198.256, 198.237, 198.256);
    doc.line(19.936, 203.420, 198.237, 203.420);
    doc.line(19.936, 208.585, 198.237, 208.585);
    doc.line(19.936, 213.750, 198.237, 213.750);
    doc.line(19.936, 218.925, 198.237, 218.925);
    doc.line(19.936, 224.090, 198.237, 224.090);
    doc.line(19.936, 229.254, 198.237, 229.254);
    doc.setFontType('bold');
    doc.text(20.065, 238.152, '*INDICAR: (CON)');
    doc.setFontType('normal');
    doc.text(46.603, 238.152, 'CUANDO SEA CONVALIDACIÓN Y (REG) SI YA LA TENIA REGISTRADA ANTERIORMENTE.');
    doc.setFontType('bold');
    doc.setFontSize(9.5);
    doc.text(20.289, 265.604, 'DGAC-MIL-CED-0');
    doc.setFontType('normal');
    doc.text(176.889, 260.701, 'Página 3 de 5');

    //Página 4//
    doc.addPage("letter", "p");
    doc.addImage(sctImg, 13.386, 13.383, 56.473, 20.997);
    doc.addImage(dgacImg, 178.135, 13.845, 22.0, 22.0);
    doc.rect(71.399, 14.698, 102.782, 19.597, 'T');
    doc.setFontSize(12);
    doc.setFontType('bold');
    doc.text(74.534, 20.105, 'DIRECCIÓN GENERAL DE AERONÁUTICA CIVIL');
    doc.text(86.43, 25.693, 'DIRECCIÓN DE SEGURIDAD AÉREA');
    doc.text(74.45, 31.288, 'DIRECCIÓN DE CERTIFICACIÓN DE LICENCIAS ');
    doc.rect(19.936, 40.869, 177.878, 52.012);
    doc.setFontType('normal');
    doc.setFontSize(9);
    doc.text(22.077, 47.246, '(13)');
    doc.setFontType('bold');
    doc.text(28.685, 47.246, 'DATOS CAPACIDADES REGISTRADAS PERSONAL DE TIERRA Y/O CONVALIDACIÓN DE CAPACIDADES:');
    doc.setFontType('normal');
    doc.text(61.782, 51.861,
        '*AUTORIZADA       PERIODO DE ADIESTRAMIENTO                                ACREDITADAS');
    doc.text(21.956, 55.801,
        'TIPO DE CAPACIDAD                 POR:                   FECHA DE INICIO              FECHA TERMINO');
    doc.setFontType('bold');
    doc.text(172.567, 55.801, 'SI              NO')
    doc.text(171.732, 60.438, '(   )             (   )');
    doc.text(171.732, 67.593, '(   )             (   )');
    doc.text(171.732, 74.789, '(   )             (   )');
    doc.text(171.732, 81.986, '(   )             (   )');
    doc.text(171.732, 89.140, '(   )             (   )');
    doc.line(19.936, 49.040, 197.644, 49.040); //Lineas Horizontales
    doc.line(87.475, 52.850, 197.644, 52.850);
    doc.line(19.936, 56.702, 197.644, 56.702);
    doc.line(19.936, 63.856, 197.644, 63.856);
    doc.line(19.936, 71.053, 197.644, 71.053);
    doc.line(19.936, 78.207, 197.644, 78.207);
    doc.line(19.936, 85.404, 197.644, 85.404);
    doc.line(57.451, 49.040, 57.451, 92.611); //Lineas Verticales
    doc.line(87.475, 49.040, 87.475, 92.611);
    doc.line(124.99, 52.850, 124.99, 92.611);
    doc.line(165.132, 49.040, 165.132, 92.611);
    doc.line(182.658, 52.850, 182.658, 92.611);
    doc.setFontSize(8);
    doc.text(20.109, 95.498, '*INDICAR: (CON)');
    doc.setFontType('normal');
    doc.text(43.707, 95.498, 'CUANDO SEA CONVALIDACIÓN Y (REG) SI YA LA TENIA REGISTRADA ANTERIORMENTE.');
    doc.rect(19.936, 100.697, 177.751, 60.975);
    doc.setFillColor(255, 236, 154)
    doc.rect(28.385, 104.545, 100.469, 3.175, 'F')
    doc.setFontSize(9);
    doc.text(22.077, 107.145, '(14)');
    doc.setFontType('bold');
    doc.text(28.685, 107.145, 'DATOS DE LA PERSONA A NOTIFICAR EN CASO DE ACCIDENTE.');
    doc.text(20.128, 114.394, 'CURP:');
    doc.line(32.647, 114.194, 96.878, 114.194);
    doc.setFontType('normal');
    doc.text(43.747,113.294,CURP_Acc); //CURP Persona Notificar
    doc.text(102.736, 114.394, 'RFC:');
    doc.line(112.647, 114.194, 188.878, 114.194);
    doc.text(139.747,113.294,RFC_Acc); //RFC Persona Notificar
    doc.setFontType('normal');
    doc.text(54.766, 118.123,
        '( Si lo posee )                                                                         ( Con Homoclave )');
    doc.text(22.125, 125.446,
        'NOMBRE ______________________________________________________________________________________');
    doc.text(39.412, 129.857,
        '     A. PATERNO                              A. MATERNO                           NOMBRE(S)');
    doc.text(42.412,125.046,aPaterno_Acc); //Apellido Paterno Persona Notificar
    doc.text(89,125.046,aMaterno_Acc); //Apellido Materno Persona Notificar
    doc.text(132,125.046,nombres_Acc); //Nombres Persona Notificar
    doc.text(22.128, 136.368, 'DOMICILIO:');
    doc.text(22.042, 141.051,
        'CALLE: _____________________________________________  No. EXTERIOR: __________ No. INT ___________');
    doc.text(35.0,140.851,calle_Acc); //Calle Persona Notificar
    doc.text(141,140.851,noExt_Acc); //Número Exterior Persona Notificar
    doc.text(172,140.851,noInt_Acc); //Número Interior Persona Notificar
    doc.text(22.042, 147.112,
        'COLONIA: ___________________________________________ COD. POSTAL: _____________________________');
    doc.text(39,146.951,colonia_Acc); //Colonia Persona Notificar
    doc.text(140,146.951,cp_Acc); //Código Postal Persona Notificar
    doc.text(22.042, 152.208,
        'CIUDAD: ____________________________________________  DELEG/MUNI: ______________________________');
    doc.text(38,152.008,cd_Acc); //Ciudad Persona Notificar
    doc.text(139,152.008,mun_Acc); //Delegación o municipio Persona Notificar
    doc.text(22.042, 157.932,
        'ENTIDAD FED: _______________________________________  TELÉFONO: _______________________________');
    doc.text(45.747,157.732,entfed_Acc); //Entidad Federativa Persona Notificar
    doc.text(137,157.732,tel_Acc); //Teléfono Persona Notificar
    doc.rect(19.936, 166.363, 177.751, 77.00);
    doc.text(22.077, 172.779, '(15)');
    doc.setFontType('bold');
    doc.text(28.454, 172.779, 'ANEXOS:');
    doc.setFontType('normal');
    doc.text(43.928, 172.779,
        '(Esta documentación deberá ser resguardada en Comandancia en caso de tramites foráneos)');
    doc.setFontSize(8);
    doc.text(42.056, 180.607, 'COPIA DE ÚLTIMA HOJA DE BITÁCORA DE VUELO, HORAS DE VUELO DE ADIESTRAMIENTO Y/O');
    doc.text(42.056, 183.866, 'CAPACITACIÓN CERTIFICADAS.');
    doc.text(42.056, 190.343, 'COPIA CERTIFICADO MEDICO.');
    doc.text(42.056, 196.863, 'COPIA DE LOS CERTIFICADOS O CONSTANCIAS POR CAPACIDAD (del Centro de Instrucción)');
    doc.text(42.056, 203.340, 'COPIA DE LICENCIA AERONAUTICA.');
    doc.text(42.056, 209.817,
        'DOCUMENTOS DE CONVALIDACION S.D.N. (Para obtención de licencia solo en la Dirección de Licencias)');
    doc.text(42.056, 216.346,
        'COPIA RECIBO DE PAGO: No. RECIBO:                                                       FECHA DE PAGO');
    doc.text(42.056, 222.823, 'COPIA ACTA DEL MINISTERIO PUBLICO O DE LA AUTORIDAD AERONAUTICA.');
    doc.text(42.056, 226.083, '(Por perdida de Licencia o Bitácora de Vuelo)');
    doc.text(42.056, 232.560, 'APOSTILLADOS (Documentos correspondientes en Convalidación).');
    doc.text(42.056, 238.558, 'COPIA CONSTANCIA DE CALIFICACIONES Y RESULTADOS EXAMEN PRÁCTICO.');
    doc.setFontSize(9);
    doc.setFontType('bold');
    doc.text(28.28, 181.376, '(   )');
    doc.text(28.28, 190.343, '(   )');
    doc.text(28.28, 196.863, '(   )');
    doc.text(28.28, 203.340, '(   )');
    doc.text(28.28, 209.817, '(   )');
    doc.text(28.28, 216.346, '(   )');
    doc.text(28.28, 223.823, '(   )');
    doc.text(28.28, 232.560, '(   )');
    doc.text(28.28, 238.558, '(   )');
    doc.rect(19.976, 177.607, 20.496, 65.74); //Rectangulo Vertical
    doc.rect(20.356, 178.007, 19.696, 64.89); //Rectangulo Vertical
    doc.rect(97.893, 211.014, 29.704, 8.678);
    doc.rect(98.482, 211.581, 28.53, 7.502);
    doc.rect(164.052, 210.434, 29.704, 8.678);
    doc.rect(164.623, 211.001, 28.53, 7.502);
    doc.setFontType('bold');
    doc.setFontSize(9.5);
    doc.text(20.289, 265.604, 'DGAC-MIL-CED-0');
    doc.setFontType('normal');
    doc.text(176.889, 260.701, 'Página 4 de 5');

    //Página 5//
    doc.addPage("letter", "p");
    doc.addImage(sctImg, 13.386, 13.383, 56.473, 20.997);
    doc.addImage(dgacImg, 178.135, 13.845, 22.0, 22.0);
    doc.rect(71.399, 14.698, 102.782, 19.597, 'T');
    doc.setFontSize(12);
    doc.setFontType('bold');
    doc.text(74.534, 20.105, 'DIRECCIÓN GENERAL DE AERONÁUTICA CIVIL');
    doc.text(86.43, 25.693, 'DIRECCIÓN DE SEGURIDAD AÉREA');
    doc.text(74.45, 31.288, 'DIRECCIÓN DE CERTIFICACIÓN DE LICENCIAS ');
    doc.rect(19.936, 44.832, 178.301, 55.907);
    doc.setFillColor(255, 236, 154);
    doc.rect(22.077, 45.397, 58.069, 3.175, 'F');
    doc.setFontType('normal');
    doc.setFontSize(9);
    doc.text(22.077, 47.797, '(16) ');
    doc.setFontType('bold');
    doc.text(30.463, 47.797, 'DATOS DE ENVIO DE LICENCIA:');
    doc.text(21.994, 55.075, 'SOLICITO QUE MI LICENCIA SEA ENTREGADA EN LA COMANDANCIA DEL AEROPUERTO DE:');
    doc.line(19.936, 63.475, 198.068, 63.475);
    doc.setFontType('normal');
    doc.text(26,62.275,entregaLic_Personal); //Entre Licencia Usuario
    doc.text(21.994, 69.937, 'O EN LA DIRECCIÓN DE LICENCIAS DGAC (    )');
    doc.setFillColor(255, 236, 154)
    doc.rect(21.877, 74.461, 15, 3.175, 'F')
    doc.text(21.994, 77.261, 'NOMBRE:  _______________________________________________________________________');
    doc.text(40,76.861,nombres_Personal +" "+ aPaterno_Personal + " " + aMaterno_Personal);
    doc.line(79.355, 92.727, 133.00, 92.727);
    doc.setFillColor(255, 236, 154)
    doc.rect(103.55, 93.409, 11.8, 3.175, 'F')
    doc.setFontSize(10);
    doc.text(103.85, 96.209, 'FIRMA');
    doc.setFontSize(9.05);
    doc.text(30.252, 120.197,
        'BAJO PROTESTA DE DECIR VERDAD, DECLARO QUE LA INFORMACIÓN ASENTADA POR PARTE DE ESTA');
    doc.setFontSize(8.92);
    doc.text(30.252, 123.852,
        'AUTORIDAD  AERONÁUTICA  EN  CADA  UNO  DE  LOS  FORMATOS  Y  DOCUMENTOS  QUE  INTEGRAN  EL');
    doc.setFontSize(9.19);
    doc.text(30.170, 127.979,
        'EXPEDIENTE DE SOLICITUD RESPECTIVO, SON FIDEDIGNOS; APERCIBIDO DE LA RESPONSABILIDAD Y');
    doc.setFontSize(9.23);
    doc.text(30.252, 132.213,
        'SANCIONES A LAS QUE ME HAGO ACREEDOR, ESTABLECIDAS EN LA LEY PENAL, EN LA LEY FEDERAL');
    doc.text(30.252, 136.567,
        'DE RESPONSABILIDADES DE LOS SERVIDORES PÚBLICOS, Y EN LAS DEMÁS LEYES Y REGLAMENTOS');
    doc.text(30.252, 140.995, 'APLICABLES.');
    doc.line(31.147, 169.033, 78.356, 169.033);
    doc.line(138.498, 169.051, 182.831, 169.051);
    doc.setFontSize(8);
    doc.text(38.108, 174.257, 'NOMBRE Y FIRMA');
    doc.text(30.238, 178.448, 'DE LA AUTORIDAD AERONAUTICA ');
    doc.text(30.142, 182.850, 'QUE VALIDA LA INFORMACIÓN');
    doc.setFontSize(11);
    doc.text(151.373, 174.486, 'SELLO');
    doc.setFontSize(10);
    doc.text(139.547, 182.763, 'AUTORIDAD AERONÁUTICA');













    doc.setFontType('bold');
    doc.setFontSize(9.5);
    doc.text(20.289, 265.604, 'DGAC-MIL-CED-0');
    doc.setFontType('normal');
    doc.text(176.889, 260.701, 'Página 5 de 5');


    //doc.line(0,0,215.9,279.4);
    //Tamaño carta en mm: 215.9 cm x 279.4 cm
    //doc.line(0,279.4,215.9,0);
    window.open(doc.output('bloburl'));
}