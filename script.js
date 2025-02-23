const csvData = `ownerName,flatNo,phno,email,fourwheel,twowheel,balance,occupancy,TwoWNo,SecondTwNo,FourWNo,decBill,decRec,patraBill,patraRec,vehicleImage1,vehicleImage2
DAVID JONES WALTER,1001,9323187731,,1,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1msGvdQt1Vr8I_woEUoLpYV6wexQIWmXk/view,,
BHUJBAL DASHARAT MARUTI,1002,9920368673,,1,2,0,OWNER,,,,,,,https://drive.google.com/file/d/1kUTRQHuTy0vv_SOHLnLw6ncSoURwjRxM/view,,
TRIVEDI KUNDAN B.,1003,9892886649,,N/A,N/A,-11620,OWNER,,,,,,,https://drive.google.com/file/d/14V7n7-Ji-p5utpApDKXMC3324XR-TBvK/view,,
PATEL LAKHAN HARJI,1004,8452905622,,N/A,1,7274,OWNER,,,,,,,,,
MEHTA ATUL M. & TRUPTI A. MEHTA,1005,9322531314,,N/A,2,7274,OWNER,,,,,,,,,
MEHER VINAYAK SHRIPATRAO,1006,9987333367,,N/A,1,0,TENANT,,,,,,,,,
BAPNA DINESHKUMAR BANSILAL & KANTA DINESHKUMAR BAPNA,1007,9987079511,,N/A,1,7274,OWNER,,,,,,,,,
SHAH PAVANKUMAR SHANTILAL,1008,9324178138,,N/A,2,80527,OWNER,,,,,,,,,
DEDIA DEVESH DINESH,1009,8172844688,,N/A,N/A,-1714,OWNER,,,,,,,https://drive.google.com/file/d/1mLE7JlM6A-l1i6hVKW_Aia5h_NP_HUmn/view,,
SONI SHILPA ARJUN & ARJUN MITHALAL SONI,1010,9833085071,,N/A,1,-1846,TENANT,,,,,,,https://drive.google.com/file/d/1vHbQR9VhJFQ26nSEK2oYNyc5uTirGh-k/view,,
MORE ASHA PRAKASH,1011,9819704046,,N/A,1,46885,TENANT,,,,,,,,,
BHANAGE UTTAM GENUBA,1012,9821167546,uttambhanage24@gmail.com,N/A,1,0,OWNER,MH43S8600,,,https://drive.google.com/file/d/1FgWj2hvto-LnIHzenQ7um2jlhjVMTLrD/view,https://drive.google.com/file/d/1Gh-vidQFN4snsQdvo1BJE4Y2fca4C-PU/view,https://drive.google.com/file/d/1FH2Oud42KDxeckRuG5hAIgCpTQv82gTI/view,https://drive.google.com/file/d/1K5V5klT3DzpJn8CpXX8AISVGHRYPHzXt/view,,
GANDHI AJAY NAGINDAS,1013,9322051984,ajaygandhi1956@gmail.com,N/A,1,7274,OWNER,MH43S8600,,,,,,,,
BHUJBAL DAGDU HANUMANT,1014,9322511895,,1,2,0,OWNER,,,,,,,https://drive.google.com/file/d/1nxz_cUtxZnbEdqWEWJsTq5P5RIf3H7bh/view,,
PATIL MILIND VASANT,1015,9869250527,,N/A,1,7274,OWNER,,,,,,,,,
MR. VIJAY NATHURAM MRS. RUPALI & MS. SIMRAN KHARPUDE ,1016,7718958556,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/16WIBeWAfB9UGPHySR-L7su28-e6mrdhB/view,,
DAVE SHILPA MUKESH & MUKESH CHAMPAKLAL DAVE,1101,9820370977,,N/A,1,0,TENANT,MH13AA841,,,,,,https://drive.google.com/file/d/1GOKF1C6t4G4HcsRBWMWprl5DYkPUXgx8/view,,
FURIA HEMANT M. & FURIA MRUDULA HEMANT,1102,9821030417,sushilphuria1810@gmail.com,N/A,1,0,TENANT,MH43AH4172,,,,,,https://drive.google.com/file/d/1Xkytn7uhZoTXzyIu3HC1YtvuRgv_Do2G/view,,
SHAH MRUDULA HEMANT,1103,9821030417,sushilphuria1810@gmail.com,N/A,2,0,OWNER,,,,,,,https://drive.google.com/file/d/1F023QBflnR9tmcuvcrJ7w-dLp9OH9p0d/view,,
M/S. KARAMSHI PACHARIA & CO.,1104,9820809232,,N/A,N/A,7290,OWNER,,,,,,,,,
MRS. MEGHA DILIP KHEDEKAR & MR. DILIP TUKARAM KHEDEKAR,1105,9987495399,,1,2,-2690,OWNER,,,,,,,https://drive.google.com/file/d/12XzoYarVol9cx37P3StugoUVzcH2KBoI/view,,
KARNANI PUSHPA NARAIN,1106,9819051801,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1f_7kvqoAtBJS749okAQ5aMqnCwTZ8K9A/view,,
KAD SHANKAR LAHANOO,1107,9969030454,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/19BCZ9jtxxN4MeEWqTsTd9vXnXMXiR8ss/view,,
BANDAL DILIP SHAJIRAO,1108,9821308668,rohit.bandalrulz@gmail.com,N/A,1,6772,OWNER,,,,,,,,,
MR. VIJAY SHIVPRASAD BEHERA & MRS VIBHUTI VIJAY BEHERA,1109,9820220496,,N/A,1,-457,TENANT,,,,,,,https://drive.google.com/file/d/1hpb3K0T9xIda0P4987sdrdt2c9S_ZxyQ/view,,
VIJAY SHIVPRASAD BEHERA & VIBHUTI VIJAY BEHERA,1110,9820220496,,N/A,3,0,TENANT,,,,,,,https://drive.google.com/file/d/1ZQe3t0ZwyBV2fCbxC0JaYp_YM6wiUbcx/view,,
RAMBHIA SHILPA GIRISH & GIRISH CHAPSHI RAMBHIA,1111,9867984897,,N/A,1,0,OWNER,6518,,,,,,,,
MANGESH B SHINDE & VAISHALI M SHINDE,1112,9833180888,,1,1,16363,OWNER,MH43AS2176,,,,,,,,
HARCHEKAR ALHAD C,1113,9969066931,,1,N/A,0,OWNER,,,MH469568,,,,https://drive.google.com/file/d/1cuJ6dJ-9Uc5GGcey3AWe0oYNJJBe9gBL/view,,
BHUJBAL LAXMAN MARUTI,1114,9867984897,,N/A,1,3647,TENANT,,,,,,,,,
AJMERA CHANDRESH N. & USHA C. AJMERA,1115,9768024259,,N/A,3,414636,TENANT,4268,,,,,,,,
WAGHMARE RAMESH NAMDEO,1116,9769228444,waghmareramesh03@gmail.com,N/A,2,172348,OWNER,,,,,,,,,
TRIPATHI NAVINCHANDRA RAVILAL,1201,9920456598,,N/A,N/A,0,TENANT,,,,,,,https://drive.google.com/file/d/1yWD8_Usk05OXJ-VuezAdtlP2bIba614I/view,,
TRIPATHI NAVINCHANDRA RAVILAL,1202,9920456598,,N/A,1,0,OWNER,MH43BM4939,,,,,,https://drive.google.com/file/d/199XK1XVnzMKAs5nTLreXB3raaUW3cJbV/view,,
BHANUSHALI BALWANT NARAYANJI,1203,9833115589,bhumibhanushali150@gmail.com,N/A,N/A,0,TENANT,,,,,,,https://drive.google.com/file/d/1ftmfp_c6mo4t7c_UNFRNjTDOCYpjIQ9D/view,,
PATEL HARILAL KANJI & CHANDRIKA H.V. PATEL,1204,9833852816,harilalvan1976@gmail.com,1,1,0,OWNER,,,MH43BU1229,,,,https://drive.google.com/file/d/1mKOrBXMr6q_dZj7BgvZjvHPDFsXgAn3S/view,,
SURYAVANSHI PRAMILA BAJIRAO,1205,9870011001,,1,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1QfO5aQNvIWQspugqJUXUwhgVPIgrp-q-/view,,
MORE RAMDAS DINKAR,1206,8097539517,,1,1,6419,OWNER,MH43BQ1391,,6098,,,,,,
KALE RAVINDRA BHIKAJI,1207,9920910824,aakashkale59@gmail.com,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1sHTe5mGQsQqXQKhDBtKwNZ_KrRlXa9R1/view,,
SHEDE RAJESH VISHNU,1208,9833897889,rshede710@gmail.com,1,1,0,OWNER,MH43AX7099,,MH04FF7914,,,,https://drive.google.com/file/d/1vejO6Jnl1wNaAxVTMhKe-ttONyHsLIn2/view,,
MASKE SHOBANA KAKASAHEB,1209,9920301761,karansheth111@gmail.com,N/A,1,0,TENANT,MH43AV1830,,,,,,https://drive.google.com/file/d/10rwe-CMeGyu614-6nCWbt0QZSY5QE53D/view,,
Mrs. SUREKHA RAMDAS MORE & Mr. RAMDAS DINKAR MORE,1210,9867780746,,N/A,N/A,6419,OWNER,,,,,,,,,
ASHOKKUMAR MAROO,1211,8454843712,,N/A,1,0,TENANT,,,,,,,https://drive.google.com/file/d/17jex62OUifsalYtTwHZyt1cYyYV_Mm0o/view,,
RAMI KAMLESH R.,1212,9769403207,saddharthram1144@gmailo.com,1,1,6419,OWNER,,,,,,,,,
M/S. JAYANTILAL VITHALDAS & SONS,1213,,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1xIZ6ouVlqC2dirfFhUKFA-rertR4z9qQ/view,,
PANDIT VIJAY SAKHARAM,1214,9821233284,,1,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1muJLMX2Wsv7l924WqWSUNepX6E2uvcmL/view,,
NAIK DEVAKI V.,1215,9987772892,,1,N/A,0,OWNER,,,,,,,,,
DHARAMSHI VARSHA J.,1216,9833130011,sajeet.jd@gmail.com,1,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1W8dsCmj5KPSybYXpr7ITVTZnEfVTKN3G/view,,
WAGH SHIVNATH BHIKURAM,1301,9769785544,,N/A,1,13587,TENANT,,,,,,,,,
SHAH MANJULA K.,1302,7021960560,,N/A,N/A,4496,TENANT,,,,,,,,,
NANDU DOLI AMRUTLAL,1303,9918811487,,N/A,2,0,OWNER,,,,,,,https://drive.google.com/file/d/1AId56LBZtv29zLMD2cu9FmaM76mtu7CI/view,,
GADA CHANCHALBEN DEVCHAND,1304,9867984897,,N/A,N/A,0,OWNER,,,,,,,,,
PARDALE CHANDRAKANT GANPAT,1305,9867984869,pardalechandrakant@gmail.com,N/A,N/A,-2905,OWNER,MH43T8039,,,,,,https://drive.google.com/file/d/1fHAaZxcTGwy4VSrlr7jCVvRewU5H4Z3R/view,,
PARMAR DEVENDRA LALIT & SHAKUNTALA LALIT PARMAR,1306,9821011805,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1ilTomiXsBZTzXRGSochrIkDIKBDUtvHV/view,,
DAVE REENA K.,1307,9867088694,davemeet30@gmail.com,N/A,2,7372,OWNER,MH43AM8233,,,,,,,,
RAUT BABURAO BHAGWAN,1308,8286930906,,N/A,1,0,OWNER,MH43AV4683,,,,,,https://drive.google.com/file/d/1XGVgHcfkK7zuotVvjn_x2qxptpEqNRxn/view,,
TEJANI HARESH VRAJLAL & USHA HARESH TEJANI,1309,9820517737,tejaniharesh36@gmail.com,1,N/A,7233,OWNER,,,MH43BE9945,,,,,,
SHINDE NAMRATA RAVINDRA,1310,9167555216,aki.shinde1990@gmail.com,N/A,N/A,0,OWNER,,,,,,,,,
CHAVDA KESUR VERVA & CHAVDA HANSHA KESUR,1311,9321133462,,1,1,7233,OWNER,MH43AV7280,,,,,,,,
RASAL BAHU VITHOBA,1312,9892861324,,N/A,1,0,OWNER,,,,,,,,,
CHAUHAN JATIN JAGJIVNDAS,1313,9820273091,neelc992@gmail.com,N/A,1,7233,TENANT,,,,,,,,,
MARU KESARBAI N. & HARESH N. MARU,1314,9819622200,,N/A,1,0,OWNER,MH02CS0721,,,,,,https://drive.google.com/file/d/1w2mPCr6Q97LcwWaz6dd89YY2kIaAyi24/view,,
VARPE LAXMAN BALSHIRAM,1315,9867758499,dhanashrivarpe1991@gmail.com,N/A,1,1300,OWNER,,,,,,,,,
VARPE LAXMAN BALSHIRAM,1316,9664379425,,N/A,1,0,TENANT,,,,,,,,,
SHINDE BABAJI ABU,1401,8108711789,ujjwala.shinde2308@gmail.com,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1jBpvwAuMpfyH52qwT33xXu2Cop6r5pbq/view,,
JOUHARI MAN MOHAN,1402,9322885823,varun.jouhari88@gmail.com,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1Y9h_1tbGrkN8Z7slQUOcROxj-ZuhNJP-/view,,
GOLE ARUN MARUTI,1403,,,N/A,N/A,7722,OWNER,,,,,,,,,
GAVHANE SANDHYA GANESH,1404,9892933353,sandhya30gavhane@gmail.com,N/A,1,0,OWNER,MH01BN7359,,,,,,https://drive.google.com/file/d/13szl_Z2WyfeAS-MSjwanf6f6InOSN21h/view,,
DHOMSE KAILAS TUKARAM,1405,8369270376,kailasdhomse@gmail.com,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1MB_fdYgK2Vf76ou5zEiuOe2cZq8CQHvO/view,,
M/S. CHATARAM NARUMAL & SONS,1406,9833095083,,1,2,0,OWNER,MH43AP5135,,,,,,https://drive.google.com/file/d/17RO6R3rll4Kyf4Cp5A6UQlmxeMe4lvWq/view,,
GUNDA ANAND NARSAYYA,1407,9029026263,,N/A,1,1313,TENANT,,,,,,,,,
M/S. CHATARAM NARUMAL & SONS,1408,9323450701,,N/A,1,10697,OWNER,,,,,,,,,
THAKKAR GEETA KANUBHAI & KANUBHAI JAICHANDBHAI THAKKAR,1409,9820729605,,N/A,N/A,7722,OWNER,,,,,,,,,
KALE UJWALA RAJARAM,1410,9892792148,,N/A,N/A,5479,OWNER,,,,,,,,,
SETH VIKRAM PRASAD,1411,9870443341,,N/A,N/A,0,TENANT,,,,,,,https://drive.google.com/file/d/1DnNaVjNjkvOQdhvEClM-OvZxTfK4hmfR/view,,
ANBHULE VINAYAK BHAUSAHEB,1412,9821279909,shivamanbhule93@gmail.com,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1zrxaWIrbrt9qmusjc6SAdPKmYUTOzx_d/view,,
SURANA MAHENDRA,1413,9867964221,,1,1,12543,OWNER,,,,,,,,,
PARDALE PRAKASH S.,1414,8422977528,pardaleparesh@gmail.com,N/A,2,8316.1,OWNER,MH43AV6048,,,,,,,,
WALMIKI SUSHILKUMAR DEERSINGH,1415,9702627571,,N/A,N/A,5479,TENANT,,,,,,,,,
AMOL PUNDALIK LOKHANDE,1416,9892303474,shreelove.4@gmail.com,N/A,N/A,0,TENANT,MH43AS8275,,MH43AN2947,,,,https://drive.google.com/file/d/1uQCSpL--oKkfiPDMA1BGFkToo9d6eqto/view,,
PATIL VIVEKANAND GAJANAN,1501,9869463516,,N/A,1,13732,TENANT,,,MH43BN2543,,,,,,
SHAH RAMA ANIL,1502,9819698829,,N/A,1,0,OWNER,MH43BD4660,,MH14DF0957,,,,https://drive.google.com/file/d/1P0adyW08SZprNwXQaGfojtFQ1YmbMLwU/view,,
SHAH ANIL S.,1503,9819698829,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1P0adyW08SZprNwXQaGfojtFQ1YmbMLwU/view,,
JOSHI INDRA DEV & JOSHI DURGA,1504,9820800070,,N/A,N/A,4434,TENANT,,,,,,,,,
VIDYA SHANKAR MALUSARE,1505,9820402490,,1,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1MVtlknDCzBosxcbVOLkUZyRxEvWPV9Ny/view,,
BORSE PUSHPA MANOHAR,1506,9967813121,,N/A,N/A,69334,OWNER,,,,,,,,,
MORE VILAS SITARAM,1507,9969207809,,1,3,0,OWNER,MH43BH4246,,MH43AN4664,,,,https://drive.google.com/file/d/1N0haBMocyoz9jsmMXn1wuqR5XrJa-zYj/view,,
SANDEEP SHANKARLAL JAIN,1508,9820805479,,N/A,1,7204,TENANT,,,,,,,,,
MR SHIVRAJ DILIP GOPALE & MRS. SUVIKA SHIVRAJ GOPALE,1509,8805677720,,N/A,1,0,TENANT,,,,,,,https://drive.google.com/file/d/1Hf-HG4rICeeh740wY9gbuTEOf97syLlJ/view,,
KONDE SUNIL SHIVAJI,1510,9819907107,suraj6111994@gmail.com,N/A,3,0,TENANT,GJ01NU4303,,,,,,https://drive.google.com/file/d/1u7mWyw_RP6zxbklUElCiLhkxJSastxBl/view,,
SURANA RAMESH & ANJANA R. SURANA,1511,9819384470,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/19U_zijLqYXLwb6zCRerG_X7NpStJVEab/view,,
UBALE DATTATRAY SOPANRAO,1512,9820760384,,N/A,N/A,0,OWNER,MH43AM8422,,,,,,https://drive.google.com/file/d/1vO_pJ6DRkC6Q1-q91gm11e7yxgLbFtVv/view,,
JAYENDRA ASHOK YEWALE &  MANGAL ASHOK YEWALE,1513,9820927873,,N/A,N/A,29432,OWNER,,,,,,,,,
MR. SACHIN ASHOK & MRS. RUPALI SACHIN KANGANE,1514,9702565454,,1,N/A,-3566,OWNER,,,,,,,https://drive.google.com/file/d/1NYdckqty9TKpWg9K6JmCUiRuGEUJdSL-/view,,
SUTHAR RATANLAL BALURAM,1515,9702565454,,N/A,N/A,3979,TENANT,MH43AU5984,,MH04AD3436,,,,,,
BAJPAI SUSHMA,1516,9969017877,,N/A,N/A,8664,TENANT,,,,,,,,,
SHETTY UMANATH K.,1601,9930242518,,N/A,1,0,OWNER,MH43AP3819,,,,,,https://drive.google.com/file/d/1Xk8qCgUNT7VdP5gCdm-_nku_EEfRE8SO/view,,
KALPANA PRAVIN PATEL &  ANKUR PRAVIN PATEL,1602,9867133768,,1,N/A,-6286,OWNER,,,MH04DW6130,,,,https://drive.google.com/file/d/1V7lAOcBQ0bOJ_XxcgQD9CGdVTR7LqX1L/view,,
PADALKAR RAMKUMAR K. & VIDYA R. PADALKAR,1603,9757484806,,N/A,2,0,OWNER,MH43AU1004,,,,,,https://drive.google.com/file/d/1eO1yrlkOrAa7xN6udOd5mPhaHpG0aIW4/view,,
SUHAS CHANDRAKANT SAWANT,1604,9833987749,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1Jay2YwTy08QZcWHKLA88mgsrC1eOyvO1/view,,
SHARMA KANAIYALAL PARMANAND & SANJAY PARMANAND SHARMA,1605,7977817150,,N/A,1,795,OWNER,,,,,,,,,
INGALE SANGEETA SHANKAR,1606,8108966282,pratikingle6282@gmail.com,1,1,0,OWNER,MH43BD2346,,,,,,https://drive.google.com/file/d/1JsK8RbXH9LuTOMgb0TRY887gWT9JGZmo/view,,
MEHTA BIPINCHANDRA BHOGHILAL,1607,9757325780,jketanmehta@gmail.com,N/A,2,0,OWNER,MH43AX4023,,,,,,https://drive.google.com/file/d/1jpBDNUlocF9-x3Cu-7Xy4LGTBEOEDcRS/view,,
POOJA GUBBALA NAGA PRASAD,1608,8652853528,,N/A,N/A,0,TENANT,,,,,,,https://drive.google.com/file/d/1x90x5c--TmOtLYKLSlnm7bYTrC01J3nE/view,,
RAM NARESH BHAIYALAL NIRMAL AND MRS. SUNITA R NIRMAL,1609,8291846255,,N/A,1,5243,OWNER,MH43BT2026,,,,,,,,
GADA NAVINCHANDRA KUNVARJI & NEETA NAVINCHANDRA GADA,1610,9920030215,,N/A,N/A,0,OWNER,MRI9924,,,,,,https://drive.google.com/file/d/16I5IpjYTxqt6yGb-GN12WJSpzvKh-REn/view,,
BAPNA SUBHKARAN SUWALAL,1611,9867095351,bapnask74@gmail.com,N/A,2,0,OWNER,MH43AP4063,,,,,,https://drive.google.com/file/d/1wBatd5BC7kxg6OqwCFPihbbLgbPdOd2I/view,,
SHARMA SANJAY PARAMANAND & KANIYALAL P. SHARMA,1612,8879247825,sharmaneha48103@gmail.com,N/A,1,795,OWNER,MH43AN6588,,,,,,,,
VIJAY MAHIPAT MORE & VISHAKHA VIJAY MORE,1613,,,N/A,1,-3697,TENANT,,,,,,,https://drive.google.com/file/d/1ScxHJ2xwehVizE4RqwbOoIckEqvCU3bQ/view,,
PARMAR RAJESHKUMAR J. & JAGDISH V. PARMAR,1614,9773914890,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1uY4bLa41pJhqa4Fa8BgsRQf_1e5AXjUT/view,,
HANUMANT DADA PAWAR,1615,8652127809,hanumanpawar.bvg@gmail.com,N/A,N/A,0,OWNER,,,,,,,,,
BANSOD MANISH TUKARAM,1616,9819830009,mudra289@gmail.com,1,1,0,OWNER,MH04BV1245,,MH43AS8303,,,,https://drive.google.com/file/d/1zj6YDGk0IfFRQO1X2KmvI6MRP5N6oYT7/view,,
WANI KIRANCHANDDAS S.,1701,,,N/A,N/A,1219951,OWNER,,,,,,,,,
M/S. SHAH & MEHTA (PARTNER),1702,9833878899,,N/A,N/A,6435,TENANT,,,,,,,,,
MANGA S. JANAGAM & MR. SAIDULU VENKATAIAH JANAGAM,1703,9892809443,sjanagam@gmail.com,1,2,0,OWNER,MH43BT5242,,MH43BA2227,,,,https://drive.google.com/file/d/1fMWtQI1syheAoFZA5dMaTOgMUbNloITT/view,,
KONDEJKAR PURSHOTAM BHAGWAN & MRS. VANDANA P. KONDEJKAR,1704,9673992760,,N/A,1,0,TENANT,,,,,,,https://drive.google.com/file/d/1WJ5fR2I2PX6i5UlozrkfQY5v7DEiiBjt/view,,
THAKKAR DIVYABEN DILIP,1705,9833159331,,N/A,N/A,-2816,OWNER,,,,,,,https://drive.google.com/file/d/1JhAooVkV9litzCvorz7Yh-45UJleMOVP/view,,
Mr. NARESH YADAV,1706,9820371507,,N/A,1,6885,TENANT,,,,,,,,,
SAWANT SUNANDA CHANDRAKANT,1707,9146935688,anikets009@gmail.com,N/A,N/A,16112,OWNER,MH12DW3844,,,,,,,,
KHEDEKAR DILIP TUKARAM,1708,9820176996,dilipkhedeka75@gmail.com,N/A,1,0,TENANT,MH43AB7799,,MH43BE7599,,,,https://drive.google.com/file/d/1OD0CnccYnHRcj6RD1DstBh7R1nzifbjy/view,,
KALPESH MULJIBHAI SHAH & MRS. MADHVI KALPESH SHAH,1709,9323999109,jkshah789@gmail.com,N/A,1,3968,TENANT,,,,,,,,,
BABAN EKNATH BUCHAKE &  MALA BABAN BUCHAKE,1710,42361414,,N/A,1,-4166,TENANT,,,,,,,https://drive.google.com/file/d/1SYwUCRn228cGBnjK90k6imEYmA2C4RJU/view,,
KANANDE SANTOSH SUDAM,1711,9987960118,,1,1,3968,OWNER,MH43XX6009,,MH43AN6882,,,,,,
M/S. CHANDRA BROS.,1712,9819365717,,N/A,2,0,OWNER,,,,,,,https://drive.google.com/file/d/1Py396_EryYlHXJOMPEm5iR9yWsUsG0Gc/view,,
HANDE VISHNU BHIMAJI,1713,9892112724,,N/A,1,3968,TENANT,,,,,,,,,
SHELKE MADHURI PRASHANT,1714,9920832071,,N/A,1,3968,OWNER,MH43BB5287,,,,,,,,
JAIN VIKRAM SHANKARLAL,1715,9867815159,,N/A,N/A,0,TENANT,MH43BJ9232,,,,,,https://drive.google.com/file/d/1cTHC614yMB0iDb-RG3-_S2a-Mvy_ntEo/view,,
THAKKAR ARTI RAJESH,1716,9768264903,ambikatraders18@gmail.com,1,1,0,OWNER,,,MH43X7809,,,,https://drive.google.com/file/d/1q9hwb4TZJL67MWuwiCV1s1HupcietVDB/view,,
MS. KAVITA AMOL GAGARE &  AMOL NIVRUTTI GAGARE,1801,9766002001,amol.gagare14@gmail.com,1,1,4457,OWNER,MH43AX6227,,MH14GA1245,https://drive.google.com/file/d/1xOQgbx7NNcyfIEJM4Hv7Bvjg28mIYXwX/view,https://drive.google.com/file/d/1L9PbYqvNfMtTLPZpYFcbjc_npJon1eUy/view,https://drive.google.com/file/d/1oihMLVN29pnFyvyXPPRK_vEtqZRG5VB9/view,,,
SHREYA UMARVAISHY,1802,9029419112,yagnesh.yc@gmail.com,N/A,2,-457,OWNER,,,MH01AL0873,https://drive.google.com/file/d/1jUQdEQ6XznzakCs79YVHYoxeRKS3XSOn/view,,https://drive.google.com/file/d/1j7PElvcpH8mv0imooAWmUOU8Iy1xMrT4/view,https://drive.google.com/file/d/1qNnbhMu4BjRR2by24lk8NBGZY_KjpRTI/view,,
D'MELLO STEPHEN J. & D'MELLO SYLVIA STEPHEN,1803,9322731867,,N/A,N/A,0,OWNER,,,,https://drive.google.com/file/d/1RxnGRGoFtNw7ZnUIb1CO_ak8l5uBebkT/view,https://drive.google.com/file/d/1TV_Yt-CbDizLb7uzEAOSS46xXmQAz02w/view,https://drive.google.com/file/d/1ckHeTJf7vGmhFLVDACVdFI0lkI-ZHX79/view,https://drive.google.com/file/d/1x0Eq_kyTw0C7LDFmSteTISKnxpXJyEXg/view,,
RAO G. VENKATESHWAR,1804,9699456699,,N/A,N/A,1810,TENANT,,,,,,,,,
SHAH ATUL PRAVINCHANDRA & FALGUNI ATUL SHAH,1805,9821070155,trushashah65@gmail.com,N/A,2,0,OWNER,MH48AV4503,,,,,,https://drive.google.com/file/d/1Y5tGb10s_b15Gle3AAjKPCvHpTmlw9r0/view,,
MEHTA SURESH JAYANTILAL,1806,9004184051,chiragmehta589@gmail.com,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1TUcSaRL-I9ZJ_1ySWYbFuGKM-liCmQ8p/view,,
CHIRAG SURESHKUMAR MEHTA &  LEENA SURESHKUMAR MEHTA,1807,9833085071,chiragmehta589@gmail.com,N/A,1,0,OWNER,GJ01SA9328,MH43BM0275,,,,,https://drive.google.com/file/d/1T1t2-i_-OEJ8Ds3LN36WAKHORWYTbASi/view,,
JOSHI HIREN R. & PRATIBHA H. JOSHI,1808,9967154235,hirenjoshi1965@gmail.com,N/A,1,0,OWNER,MH43M8290,,,,,,https://drive.google.com/file/d/1zGuBSfbjYITKWhNOXMkZkud4FUVAL3DC/view,,
THAKKAR KAMLESH P.,1809,9820537833,kamleshbhaithakkarbhai@gmail.com,1,N/A,0,OWNER,,,MH43BE7610,,,,https://drive.google.com/file/d/15DkPp29yZh51xm7pCkX8k_9Lv_tR0q9U/view,,
DABHADE AMOL D & SUMAN D. DABHADE,1810,9930886887,amoldabhade760@gmail.com,N/A,2,0,OWNER,MH43BD1100,MH43AN8053,,,,,https://drive.google.com/file/d/1XqIUwV3mzMmIHV-bnhO1hrvt5QAeM2J_/view,,
MRS. LAXMI AMOL DABHADE MR. AMOL DHARMRAJ DABHADE,1811,8425903690,,N/A,N/A,0,TENANT,,,,,,,https://drive.google.com/file/d/1CuqFYDvG3LP9341mtOJDFcQvCXFnEBy4/view,,
GHOSHALKAR NITIN YASHWANT,1812,9819051163,geeta.pednekar@gmail.com,1,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1s6ikTceJUaJ7XgbgM3HRd_-PQKQLXwPd/view,,
JADHAV BALSHIRAM TUKARAM,1813,9967266812,,N/A,1,7374,TENANT,MH43BU6125,,MH43BU1245,,,,,,
PANDYA CHARUMATI JITENDRA,1814,9870248883,chiragpandya1978@gmail.com,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1DiapjLY57BEIKKYfy-xMWhJ2bkdqJATR/view,,
JAGTAP ASHOK BALASAHEB,1815,9322890275,ashokbjagtap75@gmail.com,1,1,0,OWNER,MH43XX6393,,MH43BU3525,,,,https://drive.google.com/file/d/1RLg598rF1YxO6xikl0Jf2Vrt8qocGf-I/view,,
DONGARE NIRMALA MAHESH & MR. DONGARE MAHESH RAMCHANDRA,1816,9323407710,,N/A,N/A,0,TENANT,,,,,,,https://drive.google.com/file/d/1HXNxC4D-qkv_q0os1yv9Xhp4UAaiW0hu/view,,
TIKONE SUREKHA SAHEBRAO,1901,9773055486,sagar_org@yahoo.com,N/A,N/A,19607,TENANT,,,,,,,,,
SAINI SURESH B.,1902,9892961558,sureshsaini130@gmail.com,N/A,1,106613,TENANT,MH43AQ0947,,,,,,,,
SUTAR DINESH B. & SUTAR SHANTA DINESH,1903,9892961558,sureshsaini130@gmail.com,1,1,30617,OWNER,MH46BH0915,,MH01AR5084,,,,,,
BAGAL SHAMRAO SAUDAGAR & SANGEETA SHAMRAO BAGAL,1904,9769148843,sandip.bagal786@gmail.com,N/A,1,8275,OWNER,MH43BQ8496,,,,,,,,
MRS. SHOBHA GANPAT BANGAR,1905,9867984897,,N/A,N/A,5732,TENANT,MH03AV0777,,,,,,,,
PANDEY SUSHILKUMAR RAMAYAN,1906,9867522581,ppfaithingod17@gmail.com,N/A,1,0,TENANT,,,,,,,https://drive.google.com/file/d/1055vD_5_TdhCTc3lKcwyMUEXJeFRMCr1/view,,
MORE ASHOK B.,1907,9819403417,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1I7hNINwKkxkZf3seNR5sczKdQdaWhppQ/view,,
SAVE ARUNA SHARAD & NIRANJAN SHARAD SAVE,1908,9987554982,niranjansave@gmail.com,N/A,1,1482,TENANT,,,,,,,,,
GITE SUNIL DYANDEO,1909,9324403983,adv.sunilgite@gmail.com,1,2,78312,OWNER,MH43AK8012,,MH43AB63,,,,,,
GITE SUNIL DYANDEO,1910,9324403983,,1,N/A,42499,OWNER,,,,,,,,,
MORE PANDURANG RAOBA,1911,9773502366,sushant2518@gmail.com,N/A,N/A,0,TENANT,MH43AU0584,,MH46X6928,,,,https://drive.google.com/file/d/1wp5TL8stQoap_NDwgkAy_tkHu9Q7x7MO/view,,
GADHAVE BHIMRAO DHARMU,1912,9769206076,snehalgadhave3016@gmail.com,1,1,0,OWNER,MH43AV9331,,,,,,https://drive.google.com/file/d/12NcVKseon7djyZ8TK9TRqq_Zan8SRXjd/view,,
MR. RAJESH EKNATH PINGLE &  MRS. PRIYANKA RAJESH PINGLE,1913,9870020550,,1,3,0,OWNER,MH43BX6899,,MH43BN0376,,,,https://drive.google.com/file/d/1jsaAkL6xRlp3NuFMxD31IQ01WdMY_MOw/view,,
NEHERKAR DEEPAK RAMDAS,1914,9987957500,dneherkar@gmail.com,N/A,N/A,0,TENANT,MH43AA9869,,MH43BU3618,,,,https://drive.google.com/file/d/14WyEumBRUvfkAtSndzY9WxeHCx4Q8dNX/view,,
THORAT GAHINAJI BHAGUJI,1915,9819882694,,N/A,1,-5031,TENANT,MH01CB6939,,,,,,https://drive.google.com/file/d/12nfbzdGH8dy2Dk8DUNMOgn5pyBTFvy3D/view,,
LALITHA SAIDULU NARAGONI & MR. PRAVEENKUMAR SAIDULU NARAGONI,1916,9653144398,praveennaragoni360@gmail.com,N/A,2,0,OWNER,MH43BT0713,MH43AG0360,,,,,https://drive.google.com/file/d/1odOGZLp7chOKpCXJLnf2qwZRpY9idkqz/view,,
SMT. ANACHAI HIRALAL KAWARIYA,2001,,,N/A,N/A,10547,TENANT,,,,,,,,,
HEGDE KASHINATH BASAWNATH,2002,9833340734,ravie6298@gmail.com,N/A,1,7027,OWNER,MH43BV3219,,,,,,,,
BELLE KALYANI BIRAPPA,2003,7718981916,bellevijay@gmail.com,N/A,2,56038,OWNER,MH43BQ2400,,MH43BU2400,,,,,,
GARUD GANESH NAMDEO,2004,9870472346,atharvagarud54@gmail.com,N/A,1,4484,TENANT,MH43BJ7033,,,,,,,,
ARYA BALMUKUND KHIMJI,2005,9371549385,prashantluka@gmail.com,N/A,N/A,4602,OWNER,,,,,,,,,
MAHADIK TATYASAHEB,2006,7010042381,saichephoto@gmail.com,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1Y-TyDad4I6HP9Qf0-DBIJiHjwCv3Rww2/view,,
GOGRI CHETAN G. & LEENA C. GOGRI,2007,9702096661,chetangogri67@gmail.com,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1YysYS3syVwBUO9S7jeXL-VhUvvLH94yC/view,,
TRIVEDI BHANUPRASAD D. & VIJAYABEN B. TRIVEDI,2008,9004194448,bhanuprasad1954@gmail.com,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1c5wFBwojq53znnxhfPqLpwWvi9CUvwCN/view,,
HEMANT BACHULAL GANGAR & NEETA HEMANT GANGAR,2009,9821140136,,N/A,1,3386,TENANT,,,,,,,,,
SALIAN MADHUSUDAN PUNDLIK & ASHALATA M. SALIAN,2010,9819188943,chaitrasalian97@gmail.com,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1bseUkkMBWWFozGMOe5gbKNzZdKh2aA-y/view,,
DALVI DILIP ASHRUBA,2011,9004536082,dalvipareshnhitm@gmail.com,N/A,2,7827,OWNER,,,,,,,,,
KOLHE TANAJI RAMCHANDRA,2012,8928516429,kolheomkartanaji1234@gmail.com,N/A,1,0,OWNER,MH43BL2109,,,,,,https://drive.google.com/file/d/1Xt5UQPD1QeFkrbqP8GrgExBqOf75fWZg/view,,
MANDE ABHIMANYU RAMCHANDRA,2013,9967608437,,N/A,N/A,0,TENANT,,,,,,,https://drive.google.com/file/d/1pmn0thQGiaIrHtlmIsNBrq4P37QYbl0i/view,,
SHINDE RAJKUMAR ANANT,2014,9503756998,dr.tushar8769@gmail.com,1,1,3620,OWNER,MH43AS7411,MH43BD9171,MH43AR8769,,,,,,
PATEL MAHESH NARAYANBHAI,2015,9619601194,mujaspatel@gmail.com,1,1,0,OWNER,MH43AM4612,,MH04HM8261,,,,https://drive.google.com/file/d/1SuEO7p9xIdoghQbVbWruNqQFi2Zh0Wex/view,,
GHANSHYAM PARYANI,2016,7738009594,ravi.gsaimpex@gmail.com,N/A,1,0,OWNER,MH04JZ0617,,,,,,https://drive.google.com/file/d/10TFgrMIJ1_0GubZ9PhR3Ou9qfw3sqGVm/view,,
ANARADEVI AMRUTLALVAISHYA,2101,8779145562,,N/A,2,4569,OWNER,,,,,,,,,
SHENOY SHANTHARAM BABURAO,2102,9867375831,,1,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1m67HyVB9cFP7Npwm4kG6EehVVxv5uuHk/view,,
PANDEY SANJAY JOKUPRASAD,2103,9821869998,,1,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1HsyCgWJNE3DAtU-YkEbDAXGqZQxWGaE_/view,,
CHAUHAN PARESHKUMAR CHUNNILAL,2104,9221284271,,N/A,2,0,OWNER,,,,,,,https://drive.google.com/file/d/1yt4G31EZ5HbQhPUluqsIMuNMFa2Y5bHq/view,,
DOSHI ARUNA ROHITKUMAR & DOSHI ROHITKUMAR CHABILDAS,2105,9825227990,,N/A,N/A,1662,OWNER,,,,,,,,,
MEMON ISMAIL SULEMAN,2106,9322112444,,N/A,1,0,TENANT,,,,,,,https://drive.google.com/file/d/11DpA6ehOXlKgy2GFWTyxgCLLN-QrBQ3M/view,,
SHAH RAJESH J. & PINA R. SHAH,2107,9821718206,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1lK0Ox8d8643zAy-jYkqv6AYoylRUmH3W/view,,
SAVLA CHANDRAKANT LALJI & SAVLA KUSUM CHANDRAKANT,2108,9320573646,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1BOGZeB01njaYO6uaSjpKVmCsi93pZiUD/view,,
PANGE RAJENDRA JAGANNATH,2109,9869213745,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1j7H-dtu89E6n0JqXU9rX1Vev9bxwLon6/view,,
MANVEL VARSHA SAMSON,2110,9867480237,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1rC827_GfL43-E_V8bgyYcUrCtm3-Wuw1/view,,
THORAT CHANDRAKANT KRISHNA,2111,9867775031,,N/A,N/A,7474,OWNER,,,,,,,,,
BANKAR SHAILAJA ASHOK,2112,8655553495,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1tYJharVlB7hJzGlUNT72UmVV-N4ljBsm/view,,
TRIVEDI BHUPENDRA HIMMATLAL & HANSHA BHUPENDRA TRI VEDI,2113,9702458333,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1Ikxa-3xTBFee5EwF7vHgxqv1I_u_oret/view,,
SHINDE UJWALA VIJAY,2114,9987803777,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1c8QiB68MAvpFrK6ABLRDzxdFho5dyQFG/view,,
SHETH BHANUMATI SHANTILAL,2115,9769286721,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/17wkA_ulUTYG9oF6fnez72jilcn8ekaP-/view,,
KHANDEKAR SANJAY SHRIPATI,2116,9869416181,,N/A,1,0,TENANT,,,,,,,https://drive.google.com/file/d/1-Ln46Kt41gYMWNdFcYZtdn0QdNvP3kLF/view,,
MRS. SUWARNA GANESH & MR. GANESH VASANT DERE,2201,9819282264,,N/A,N/A,5537,TENANT,,,,,,,,,
MR. DHANANJAY GAHINAJI & MRS. SUVARNA DHANANJAY THORAT,2202,9821393767,,N/A,N/A,-6665,OWNER,,,,,,,https://drive.google.com/file/d/1Dm6NfkI9JAbg4fmwcspRKHe_u0LKxazc/view,,
NITESH KUMAR PARASMAL BAFNA,2203,,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1D7Oi_N0wcqmJKRMRxaolbyDglLdYA8jQ/view,,
ALKABEN H CHOLERA &. PALAK ATULBHAI THAKKAR,2204,9824327506,,N/A,1,-4948,OWNER,,,,,,,https://drive.google.com/file/d/1FqbiYm_bfkwjlX3YR1JhDKFunbuLMUbp/view,,
JAGTAP SURESH NARAYANRAO & MANDAKINI SURESH JAGTAP,2205,9820737200,,N/A,N/A,-6766,TENANT,,,,,,,https://drive.google.com/file/d/1mymZOWF7O6OE4F6g2zTU433uToCocFXW/view,,
JADHAV SIDDHI SANTOSH,2206,9969025335,,N/A,1,5152,OWNER,,,,,,,,,
"TRIVEDI ANIL R, PRADEEP R, BHUPENDRA R, SANJAY R",2207,9967542020,,N/A,1,5537,TENANT,,,,,,,,,
SINGH RAMSUBHAG M. & SHIVLAL M. SINGH &,2208,9323251919,,N/A,3,0,TENANT,,,,,,,https://drive.google.com/file/d/1s622Z1Ge09L2FR99n4Q51Kc2VSwTVfUA/view,,
GIDE KAILASH DATTARAYA & SAVITA KAILASH GIDE,2209,9987764946,,1,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1PWBVV0iJ4kRV-H3BZjtPSZveCuXGgcjX/view,,
DAVE NARAYAN KISHANLAL,2210,9004258489,,N/A,1,0,TENANT,,,,,,,https://drive.google.com/file/d/1Z8vsF7mpHBdLxpdeLUbkyCgmmwfl9a_T/view,,
MR. KAPIL DHARMSHI PATEL,2211,9819508296,,1,N/A,5537,OWNER,,,GJ12FC5555,,,,,,
MAKHARIA ATUL S.,2212,,,N/A,1,5537,TENANT,,,,,,,,,
AGRAHARI SURESH M. & AGRAHARI NISHA SURESH,2213,9699926184,,1,1,5537,OWNER,,,,,,,,,
MEHTA MAHENDRA PRANJIVANDAS,2214,9892704307,,N/A,1,31321,OWNER,,,,,,,,,
M/S. RAMESHKUMAR GOPALDAS,2215,9820021235,,N/A,2,5537,OWNER,,,,,,,,,
DALVI RUTUJA ROHIT & DALVI ROHIT SHANKAR,2216,8652322099,,1,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1dfPI9ZeLUA50WMwBVUGdIyEIMg8mkR-L/view,,
KANSE LAXMI JANARDAN,2301,9833033031,,N/A,1,5718,OWNER,,,,,,,,,
KANSE JANARDHAN RAMBHAU,2302,9833033031,,N/A,1,5718,TENANT,,,,,,,,,
Mr. JITENDRA JAMNADAS ASHAR,2303,8080735442,,N/A,N/A,-2442,OWNER,,,,,,,https://drive.google.com/file/d/1XZ7MP5OKUWr8Jp1hYFmwO0Rg55lEWhVK/view,,
URADE RAJU PRALHAD,2304,9322516162,,N/A,N/A,26049,TENANT,MH43BM4939,,,,,,,,
KENIKAR ANIL VITHAL,2305,9869031904,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1spq3vIzG38un-0wKy3ooErxRVpJdy52f/view,,
ARJUN SHYAMLAL YADAV & HARINDRA YADAV,2306,9819871305,,N/A,N/A,18353,OWNER,,,,,,,,,
LALAN CHANDRIKA LAHARCHAND & LAHARCHAND KALYANJI LALAN,2307,9967012466,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1dqIWnxYALgJ0_Q163D5E8mD3vEb_GbmN/view,,
METHA MOHANLAL G. & VANDANA M. METHA,2308,9224014104,,N/A,1,7,TENANT,,,,,,,,,
PATEL KOKILA CHANDU,2309,9820032377,,N/A,1,9364,TENANT,MH01CG1496,,,,,,,,
MORE SHANTARAM SHIVRAM,2310,9821532606,,N/A,N/A,5718,TENANT,,,,,,,,,
MR. KIRAN DAMJI MANGE,2311,9967552628,,1,1,5718,OWNER,,,,,,,,,
BHANUSHALI VALLABHJI K. & VIMLABEN V. BHANUSHALI,2312,9930898750,,1,1,0,OWNER,MH43AY6058,,MH13AN5767,,,,https://drive.google.com/file/d/1Jk2NqtyWLaZtNikeLXqY37LII_evim0T/view,,
THAKKAR NITIN SHIVJIBHAI,2313,8691022390,,N/A,2,0,OWNER,,,,,,,https://drive.google.com/file/d/1PMlSSy5K0DvyjiONmHR1vBQoBFJ1QYQH/view,,
VIRENDRAKUMAR AMRUTLAL VAISHYA,2314,9821393350,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1am8_gfjTxPht-hT7yf6yIEMxKo8t5Hnp/view,,
HOLKAR CHANDRAKANT RAMCHANDRA,2315,8976991885,,N/A,N/A,5718,OWNER,,,,,,,,,
HOLKAR CHANDRAKANT RAMCHANDRA,2316,8850233176,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1RIP1fjzdaxOCj6zXIAZ2IfJ4QTu96EXl/view,,`

let flatData = [];

const lines = csvData.split('\n');
flatData = lines.slice(1).map(line => {
    const [ownerName, flatNo, phno, email, fourwheel, twowheel, balance, occupancy, TwoWNo, SecondTwNo, FourWNo, decBill, decRec, patraBill, patraRec, vehicleImage1, vehicleImage2] = line.split(',').map(item => item.trim());
    return { ownerName, flatNo, phno, email, fourwheel, twowheel, balance, occupancy, TwoWNo, SecondTwNo, FourWNo, decBill, decRec, patraBill, patraRec, vehicleImage1, vehicleImage2 };
});


function triggerSearch(event) {
    if (event.key === "Enter") {
        searchFlat();
    }
}



function searchFlat() {
    const searchInput = document.getElementById('searchInput').value.trim().toUpperCase();
    document.getElementById('searchInput').value = "";
    const result = flatData.find(flat => flat.flatNo === searchInput ||
        (flat.TwoWNo && flat.TwoWNo.toUpperCase() === searchInput) ||
        (flat.FourWNo && flat.FourWNo.toUpperCase() === searchInput) ||
        nameMatches(flat.ownerName, searchInput));

    const resultCard = document.getElementById('resultCard');
    resetField()


    if (result) {

        document.getElementById('ownerName').innerText = result.ownerName;
        document.getElementById('flatNo').innerText = result.flatNo;
        document.getElementById('phno').innerText = result.phno;
        document.getElementById('email').innerText = result.email;
        document.getElementById('twowheel').innerText = result.twowheel;
        document.getElementById('fourwheel').innerText = result.fourwheel;
        document.getElementById('balance').classList.remove('red-text', 'green-text');



        document.getElementById('occupancy').innerText = result.occupancy;

        updatePhoneNumber(result);
        checkTwoWheeler(result);
        checkFourWheeler(result);
        checkBalance(result);
        vehicleImages(result);
        bills(result)
        checkEmail(result)

        resultCard.style.display = 'block';
    } else {
        resultCard.style.display = 'none';
        alert('Flat not found!');
    }
}

function resetField() {

    document.getElementById('ownerName').innerText = "";
    document.getElementById('flatNo').innerText = "";
    document.getElementById('phno').innerText = "";
    document.getElementById('email').innerText = "";
    document.getElementById('fourwheel').innerText = "";
    document.getElementById('twowheel').innerText = "";
    document.getElementById('balance').innerText = "";
    document.getElementById('occupancy').innerText = "";
    document.getElementById('TwoWNo').innerText = "";
    document.getElementById('SecondTwNo').innerText = "";
    document.getElementById('FourWNo').innerText = "";
    document.getElementById('SecondTwNopara').style.display = "none";
}



function checkTwoWheeler(result) {
    const twowheellabel = document.getElementById('twoWLabel');
    const twowheelno = document.getElementById("TwoWNo");

    twowheellabel.style.display = "block";
    twowheelno.innerText = ""

    if (result.twowheel == "N/A") {
        twowheellabel.style.display = 'none';
    } else {
        twowheelno.innerText = result.TwoWNo || "No Record";
    }
}

function checkEmail(result) {
    const emailField = document.getElementById("email");

    if (!result.email || result.email.trim() === "") {
        emailField.innerText = "No Record";
    } else {
        emailField.innerText = result.email;
    }
}



function checkFourWheeler(flat) {

    const fourWheelLabel = document.getElementById("flabel")
    const fourWheelNo = document.getElementById("FourWNo")

    fourWheelLabel.style.display = "block"
    fourWheelNo.innerText = ""

    if (flat.fourwheel === "N/A") {
        fourWheelLabel.style.display = 'none';
    } else {
        fourWheelNo.innerText = flat.FourWNo || "No Record";
    }
}


function checkBalance(result) {
    if (result.balance > 0) {

        document.getElementById('balance').classList.add('red-text');
    } else {
        document.getElementById('balance').classList.add('green-text');
    }
    document.getElementById('balance').innerText = "₹" + Math.abs(result.balance);
}

function vehicleImages(result) {
    if (result.vehicleImage1) {
        document.getElementById('vehicleImage1').src = result.vehicleImage1;
        document.getElementById('vehicleImage1').style.display = 'block';
    } else {
        document.getElementById('vehicleImage1').style.display = 'none';
    }

    if (result.vehicleImage2) {
        document.getElementById('vehicleImage2').src = result.vehicleImage2;
        document.getElementById('vehicleImage2').style.display = 'block';
    } else {
        document.getElementById('vehicleImage2').style.display = 'none';
    }
}

function bills(result) {
    if (result.decBill) {
        const decBillBtn = document.getElementById('decBillBtn');
        decBillBtn.style.display = "inline-block";
        decBillBtn.onclick = () => {
            window.open(result.decBill, '_blank');
        };
    } else {
        document.getElementById('decBillBtn').style.display = "none";
    }


    if (result.decRec) {
        const decRecBtn = document.getElementById('decRecBtn');
        decRecBtn.style.display = "inline-block";
        decRecBtn.onclick = () => {
            window.open(result.decRec, '_blank');
        };
    } else {
        document.getElementById('decRecBtn').style.display = "none";
    }

    if (result.patraBill) {
        const patraBillBtn = document.getElementById('patraBillBtn');
        patraBillBtn.style.display = "inline-block";
        patraBillBtn.onclick = () => {
            window.open(result.patraBill, '_blank');
        };
    } else {
        document.getElementById('patraBillBtn').style.display = "none";
    }


    if (result.patraRec) {
        const patraRecBtn = document.getElementById('patraRecBtn');
        patraRecBtn.style.display = "inline-block";
        patraRecBtn.onclick = () => {
            window.open(result.patraRec, '_blank');
        };
    } else {
        document.getElementById('patraRecBtn').style.display = "none";
    }

}


function nameMatches(ownerName, searchInput) {
    if (!ownerName) return false;

    const ownerWords = ownerName.toUpperCase().split(" ");
    const searchWords = searchInput.split(" ");

    return searchWords.every(word => ownerWords.includes(word));

}


function updatePhoneNumber(result) {
    const phnoElement = document.getElementById('phno');
    const phnoLink = document.getElementById('phnoLink');

    if (result.phno) {
        phnoElement.innerText = result.phno;
        phnoLink.href = `https://wa.me/${result.phno.replace(/\D/g, '')}`;
        phnoLink.style.display = "inline";
    } else {
        phnoElement.innerText = "N/A";
        phnoLink.href = "#";
        phnoLink.style.display = "none";
    }
}