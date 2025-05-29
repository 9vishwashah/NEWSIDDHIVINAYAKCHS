// const csvData = `ownerName,flatNo,phno,email,fourwheel,twowheel,balance,occupancy,TwoWNo,SecondTwNo,FourWNo,decBill,decRec,patraBill,patraRec,MarchReceipt,MarchBill,vehicleImage1,vehicleImage2
// DAVID JONES WALTER,1001,9323187731,,1,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1msGvdQt1Vr8I_woEUoLpYV6wexQIWmXk/view,https://drive.google.com/file/d/1wDsgYOu9ARihsG7-Sg7B3erML9eiws38/view,https://drive.google.com/file/d/1I-anSLCRIN9rUHoEDcIal6oKZemXvTOe/view,,
// BHUJBAL DASHARAT MARUTI,1002,9920368673,,1,2,0,OWNER,,,,,,,https://drive.google.com/file/d/1kUTRQHuTy0vv_SOHLnLw6ncSoURwjRxM/view,https://drive.google.com/file/d/1EVgEGF6IYy0PMBVmFvvDf3eWIU8j0CLU/view,https://drive.google.com/file/d/1aS-uyPo3px-6HjEz5I4jyXnD5WrrndGU/view,,
// TRIVEDI KUNDAN B.,1003,9892886649,,N/A,N/A,-8715,OWNER,,,,,,,https://drive.google.com/file/d/14V7n7-Ji-p5utpApDKXMC3324XR-TBvK/view,,https://drive.google.com/file/d/1isTn2zx2R7doQK77hTCw_D4W11zjaEXP/view,,
// PATEL LAKHAN HARJI,1004,8452905622,,N/A,1,0,OWNER,,,,,,,,https://drive.google.com/file/d/1WijaStVk00udLT3RNVuGqng20qA7TyLr/view,https://drive.google.com/file/d/14NBSrtGyzE8BL3LF334ILxrRggonu5Xs/view,,
// MEHTA ATUL M. & TRUPTI A. MEHTA,1005,9322531314,,N/A,2,0,OWNER,,,,,,,,https://drive.google.com/file/d/1NxEzZlZTv4W6iAFhhLHzuj5mAHMLRlVL/view,https://drive.google.com/file/d/1LfZhCWcWWAkwvAwxS6l2UR0JXQnglLNc/view,,
// MEHER VINAYAK SHRIPATRAO,1006,9987333367,,N/A,1,0,TENANT,,,,,,,,https://drive.google.com/file/d/1-TD84L3GbRk9yAXgxpa7j017s2JKGFN_/view,https://drive.google.com/file/d/1avWRXvFHTl4N_2O5Wd_LW_JdGbZX3Y2u/view,,
// BAPNA DINESHKUMAR BANSILAL & KANTA DINESHKUMAR BAPNA,1007,9987079511,,N/A,1,10856,OWNER,,,,,,,,,https://drive.google.com/file/d/1j_i9gZL5Pf-dvdB2qyQN7dfgat3PDVX6/view,,
// SHAH PAVANKUMAR SHANTILAL,1008,9324178138,,N/A,2,87365,OWNER,,,,,,,,,https://drive.google.com/file/d/1QGdGnBvtrFVVw3CoZFYy1rXpZn1HkHfw/view,,
// DEDIA DEVESH DINESH,1009,8172844688,,N/A,N/A,1191,OWNER,,,,,,,https://drive.google.com/file/d/1mLE7JlM6A-l1i6hVKW_Aia5h_NP_HUmn/view,,https://drive.google.com/file/d/1Bd6LpFbmxNHQTEbh7pgSTklxsb24JWQL/view,,
// SONI SHILPA ARJUN & ARJUN MITHALAL SONI,1010,9833085071,,N/A,1,1800,TENANT,,,,,,,https://drive.google.com/file/d/1vHbQR9VhJFQ26nSEK2oYNyc5uTirGh-k/view,,https://drive.google.com/file/d/1gzN5D60u7NjQXHlWednxKjKOHmtJMlyP/view,,
// MORE ASHA PRAKASH,1011,9819704046,,N/A,1,52607,TENANT,,,,,,,,,https://drive.google.com/file/d/1Tcf6Mfo2MuZLK8bJrECJvHWUzrVzKUGt/view,,
// BHANAGE UTTAM GENUBA,1012,9821167546,,N/A,1,3205,OWNER,MH43S8600,,,https://drive.google.com/file/d/1FgWj2hvto-LnIHzenQ7um2jlhjVMTLrD/view,https://drive.google.com/file/d/1Gh-vidQFN4snsQdvo1BJE4Y2fca4C-PU/view,https://drive.google.com/file/d/1FH2Oud42KDxeckRuG5hAIgCpTQv82gTI/view,https://drive.google.com/file/d/1K5V5klT3DzpJn8CpXX8AISVGHRYPHzXt/view,,https://drive.google.com/file/d/1SO0ZEMVZViXOVQX0m4H9JzaSPvZK657-/view,,
// GANDHI AJAY NAGINDAS,1013,9322051984,ajaygandhi1956@gmail.com,N/A,1,10856,OWNER,MH43S8600,,,,,,,,https://drive.google.com/file/d/1yIFYBUtnUrqKOwzKHZSaKH5dFMFaWs61/view,,
// BHUJBAL DAGDU HANUMANT,1014,9322511895,,1,2,0,OWNER,,,,,,,https://drive.google.com/file/d/1nxz_cUtxZnbEdqWEWJsTq5P5RIf3H7bh/view,https://drive.google.com/file/d/1sZg6N3yxqQhD72N4Dw2GZ8MHdr65qEfJ/view,https://drive.google.com/file/d/1v20RAks2bF8AKdU_NcE5h-FbRWUVPQL9/view,,
// PATIL MILIND VASANT,1015,9869250527,,N/A,1,10856,OWNER,,,,,,,,,https://drive.google.com/file/d/1n_b_92mWS1evc2ee3RuG0AZSaAZbLthM/view,,
// MR. VIJAY NATHURAM MRS. RUPALI & MS. SIMRAN KHARPUDE ,1016,7718958556,,N/A,N/A,2905,OWNER,,,,,,,https://drive.google.com/file/d/16WIBeWAfB9UGPHySR-L7su28-e6mrdhB/view,,https://drive.google.com/file/d/1c8ogKfZ08xuhiKOXIFigjTN2UnqvuF48/view,,
// DAVE SHILPA MUKESH & MUKESH CHAMPAKLAL DAVE,1101,9820370977,,N/A,1,0,TENANT,MH13AA841,,,,,,https://drive.google.com/file/d/1GOKF1C6t4G4HcsRBWMWprl5DYkPUXgx8/view,https://drive.google.com/file/d/1XiDqJT6V4k9BoEuO0ekVToROhyFi-AQm/view,https://drive.google.com/file/d/1WC63CoS7SopfXjLh2Qq-rIvMTABfJNvN/view,,
// FURIA HEMANT M. & FURIA MRUDULA HEMANT,1102,9821030417,sushilphuria1810@gmail.com,N/A,1,0,TENANT,MH43AH4172,,,,,,https://drive.google.com/file/d/1Xkytn7uhZoTXzyIu3HC1YtvuRgv_Do2G/view,,https://drive.google.com/file/d/1FtE4iaIbI6EjBxoNXind4fAYhODIwtcn/view,,
// SHAH MRUDULA HEMANT,1103,9821030417,sushilphuria1810@gmail.com,N/A,2,0,OWNER,,,,,,,https://drive.google.com/file/d/1F023QBflnR9tmcuvcrJ7w-dLp9OH9p0d/view,,https://drive.google.com/file/d/1TWNAi_dfzMBkerrbXBsztW01eHDGvJeU/view,,
// M/S. KARAMSHI PACHARIA & CO.,1104,9820809232,,N/A,N/A,7667,OWNER,,,,,,,,https://drive.google.com/file/d/1hxaKO5Vh2MHhq_HPic6iFzuF_OGwZ2K6/view,https://drive.google.com/file/d/1JAXNnuJnIij420vq-R_yC2E4YYpZ9n8c/view,,
// MRS. MEGHA DILIP KHEDEKAR & MR. DILIP TUKARAM KHEDEKAR,1105,9987495399,,1,2,-1715,OWNER,,,,,,,https://drive.google.com/file/d/12XzoYarVol9cx37P3StugoUVzcH2KBoI/view,https://drive.google.com/file/d/1fVBfmru-PjaiFttFjKlQwgx_wJy6C1Hc/view,https://drive.google.com/file/d/1oQrEEtG9mEx05WPqnQ_6yvCrdC4yL5_C/view,,
// KARNANI PUSHPA NARAIN,1106,9819051801,,N/A,N/A,2905,OWNER,,,,,,,https://drive.google.com/file/d/1f_7kvqoAtBJS749okAQ5aMqnCwTZ8K9A/view,,https://drive.google.com/file/d/1G34G0HnjzgJDxfVaWFdS7YLeFjvs4qCn/view,,
// KAD SHANKAR LAHANOO,1107,9969030454,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/19BCZ9jtxxN4MeEWqTsTd9vXnXMXiR8ss/view,https://drive.google.com/file/d/1F9v0pSp7sjFFp_JzsTOJFt4SGsHjRqm0/view,https://drive.google.com/file/d/1A__E_DmVVkHHtEqUREcltYrE6CKP20s5/view,,
// BANDAL DILIP SHAJIRAO,1108,9821308668,rohit.bandalrulz@gmail.com,N/A,1,7123,OWNER,,,,,,,,https://drive.google.com/file/d/1Gr-9LLzFa02m07FCRZbIdbmr-OXoIUWJ/view,https://drive.google.com/file/d/1ylEPShSyI63MgXz_zQAYwe2N8ViFuWpx/view,,
// MR. VIJAY SHIVPRASAD BEHERA & MRS VIBHUTI VIJAY BEHERA,1109,9820220496,,N/A,1,-457,TENANT,,,,,,,https://drive.google.com/file/d/1hpb3K0T9xIda0P4987sdrdt2c9S_ZxyQ/view,https://drive.google.com/file/d/148WUB1tVSf-PcCedN8uHCPum449LsLDH/view,https://drive.google.com/file/d/1u8c9Wl4Ap6sDBgS-04ayuj-AMJXIzt0Q/view,,
// VIJAY SHIVPRASAD BEHERA & VIBHUTI VIJAY BEHERA,1110,9820220496,,N/A,3,0,TENANT,,,,,,,https://drive.google.com/file/d/1ZQe3t0ZwyBV2fCbxC0JaYp_YM6wiUbcx/view,https://drive.google.com/file/d/1WhzCZ0iz8GixQgu3G3Tg6Sm3ekeueO4s/view,https://drive.google.com/file/d/16e74HVQBFEKStG_g99TttT09gC3eXPql/view,,
// RAMBHIA SHILPA GIRISH & GIRISH CHAPSHI RAMBHIA,1111,9867984897,,N/A,1,0,OWNER,6518,,,,,,,,https://drive.google.com/file/d/1JJWijXNEvtpn_eUZ7zCyRVXTiu7a_QRr/view,,
// MANGESH B SHINDE & VAISHALI M SHINDE,1112,9833180888,,1,1,16262,OWNER,MH43AS2176,,,,,,,https://drive.google.com/file/d/1juK8GGwtOkpnZBRnsmLMrRCRIloaeMtG/view,https://drive.google.com/file/d/117Op-5skpZ3pVTnGSK9uO5inY7PLFwT3/view,,
// HARCHEKAR ALHAD C,1113,9969066931,,1,N/A,0,OWNER,,,MH469568,,,,https://drive.google.com/file/d/1cuJ6dJ-9Uc5GGcey3AWe0oYNJJBe9gBL/view,https://drive.google.com/file/d/1O5hm9e5wFyBVrGpYUoGHNqhyJm9aM9iR/view,https://drive.google.com/file/d/1hFqqdR8Vlg2IitibNsXMRwckqMLxjruO/view,,
// BHUJBAL LAXMAN MARUTI,1114,9867984897,,N/A,1,7482,TENANT,,,,,,,,,https://drive.google.com/file/d/13pX0V3cSqdQmQ6UP30rEvnUiUMvKGXI-/view,,
// AJMERA CHANDRESH N. & USHA C. AJMERA,1115,9768024259,,N/A,3,426094,TENANT,4268,,,,,,,,https://drive.google.com/file/d/1y5BNmLAoX0RA1c9l7PI0kEHdpvNVQErt/view,,
// WAGHMARE RAMESH NAMDEO,1116,9769228444,waghmareramesh03@gmail.com,N/A,2,180919,OWNER,,,,,,,,,https://drive.google.com/file/d/1vnRiYPDHFt9nyJh3DpmGIIevLoJLPHI9/view,,
// TRIPATHI NAVINCHANDRA RAVILAL,1201,9920456598,,N/A,N/A,0,TENANT,,,,,,,https://drive.google.com/file/d/1yWD8_Usk05OXJ-VuezAdtlP2bIba614I/view,https://drive.google.com/file/d/1Q6MMDT2WN93K0bYc9HnB_L2iITZ7FSY5/view,https://drive.google.com/file/d/1vYpTp8QHkehjWd-dMS4IHzFYclmuGYah/view,,
// TRIPATHI NAVINCHANDRA RAVILAL,1202,9920456598,,N/A,1,0,OWNER,MH43BM4939,,,,,,https://drive.google.com/file/d/199XK1XVnzMKAs5nTLreXB3raaUW3cJbV/view,https://drive.google.com/file/d/1v055hzC8BB2C_LK6Ck9ykp5HDgO3JEkh/view,https://drive.google.com/file/d/1VyszDHKOIKmbqRhtUPuw2qLEGr_6MYl7/view,,
// BHANUSHALI BALWANT NARAYANJI,1203,9833115589,bhumibhanushali150@gmail.com,N/A,N/A,0,TENANT,,,,,,,https://drive.google.com/file/d/1ftmfp_c6mo4t7c_UNFRNjTDOCYpjIQ9D/view,https://drive.google.com/file/d/1Bef0SPMFxzOCHMHcZMraUHY3EcNW9Ijf/view,https://drive.google.com/file/d/1yD4CaiEA3GLEMMpT6gBauOeHS0koAtf2/view,,
// PATEL HARILAL KANJI & CHANDRIKA H.V. PATEL,1204,9833852816,harilalvan1976@gmail.com,1,1,0,OWNER,,,MH43BU1229,,,,https://drive.google.com/file/d/1mKOrBXMr6q_dZj7BgvZjvHPDFsXgAn3S/view,https://drive.google.com/file/d/1NUSebbIneaW5R2BCNa232-V7uZT0H1j7/view,https://drive.google.com/file/d/1MSC80Wbim3hkSN8nukjFbNT4rsXlQZgO/view,,
// SURYAVANSHI PRAMILA BAJIRAO,1205,9870011001,,1,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1QfO5aQNvIWQspugqJUXUwhgVPIgrp-q-/view,https://drive.google.com/file/d/15aOUrPpkcP45P_AErrHdnaB6nRTn7mTr/view,https://drive.google.com/file/d/12Y_C_3RTzIZxgU8TBNPbatZ67A7rUiAR/view,,
// MORE RAMDAS DINKAR,1206,8097539517,,1,1,2000,OWNER,MH43BQ1391,,6098,,,,,https://drive.google.com/file/d/1gCRF1Jde_mVH81S957Ch1QhpjxZc7gKF/view,https://drive.google.com/file/d/1zHgOemJiupM_1SM2zCL3L4bc-9tR-qUl/view,,
// KALE RAVINDRA BHIKAJI,1207,9920910824,aakashkale59@gmail.com,N/A,N/A,2905,OWNER,,,,,,,https://drive.google.com/file/d/1sHTe5mGQsQqXQKhDBtKwNZ_KrRlXa9R1/view,,https://drive.google.com/file/d/1O9HskB_Vi8UQMloEd0qRDd4aDF1aodKe/view,,
// SHEDE RAJESH VISHNU,1208,9833897889,rshede710@gmail.com,1,1,0,OWNER,MH43AX7099,,MH04FF7914,,,,https://drive.google.com/file/d/1vejO6Jnl1wNaAxVTMhKe-ttONyHsLIn2/view,https://drive.google.com/file/d/1L0zpJjbRpi_LeSV9N1gXXhK3OwmWAz9n/view,https://drive.google.com/file/d/1hsYAUBHw7c38Q4PV515ez0aqSAIAZEPT/view,,
// MASKE SHOBANA KAKASAHEB,1209,9920301761,karansheth111@gmail.com,N/A,1,3646,TENANT,MH43AV1830,,,,,,https://drive.google.com/file/d/10rwe-CMeGyu614-6nCWbt0QZSY5QE53D/view,,https://drive.google.com/file/d/1MZ_tJT9oGjWKRpNEEBvAE5EjO1IexObk/view,,
// Mrs. SUREKHA RAMDAS MORE & Mr. RAMDAS DINKAR MORE,1210,9867780746,,N/A,N/A,3404,OWNER,,,,,,,,,https://drive.google.com/file/d/1YrjmhXaJrhopHTfoMLz5m2kKQLSEHzUZ/view,,
// ASHOKKUMAR MAROO,1211,9869207359,ashokkumarmaroo@gmail.com,N/A,1,0,TENANT,,,,,,,https://drive.google.com/file/d/17jex62OUifsalYtTwHZyt1cYyYV_Mm0o/view,https://drive.google.com/file/d/1tn_g7EE5NvbBXWKnJ0KwX6qPsCL55dBb/view,https://drive.google.com/file/d/12TUyxGTMRdoTTcumwr65b4RlDXYfFrHW/view,,
// RAMI KAMLESH R.,1212,9769403207,saddharthram1144@gmailo.com,1,1,0,OWNER,,,,,,,,,https://drive.google.com/file/d/1RATdHO8RV2XzOLs6V-ItDXTrPSF1cyNA/view,,
// M/S. JAYANTILAL VITHALDAS & SONS,1213,,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1xIZ6ouVlqC2dirfFhUKFA-rertR4z9qQ/view,,https://drive.google.com/file/d/1Y_ffTNXLtRokYM37XWs19O-IIX9JOmqO/view,,
// PANDIT VIJAY SAKHARAM,1214,9821233284,,1,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1muJLMX2Wsv7l924WqWSUNepX6E2uvcmL/view,https://drive.google.com/file/d/1yej6PZfg3mwvQbCm-gRiRbz2lR0HKotf/view,https://drive.google.com/file/d/1RHbIpn0b_tcDE84iaYrzKSl0tX7kRxPY/view,,
// NAIK DEVAKI V.,1215,9987772892,,1,N/A,3805,OWNER,,,,,,,,,https://drive.google.com/file/d/1U2KkGqcLvapi12bJz92TAwN-xaytJAMC/view,,
// DHARAMSHI VARSHA J.,1216,9833130011,sajeet.jd@gmail.com,1,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1W8dsCmj5KPSybYXpr7ITVTZnEfVTKN3G/view,https://drive.google.com/file/d/10Z-7RUzQ9AWGmkcaJ8MpzBQ8E9A3t94a/view,https://drive.google.com/file/d/1wvi2vOMSOaGRuzc512khY7Jj8CTpCCAp/view,,
// WAGH SHIVNATH BHIKURAM,1301,9769785544,,N/A,1,17937,TENANT,,,,,,,,,https://drive.google.com/file/d/1sR8T9S9NvBvLlTai1mxhneSH6sjrKJtf/view,,
// SHAH MANJULA K.,1302,7021960560,,N/A,N/A,7925,TENANT,,,,,,,,,https://drive.google.com/file/d/1RuFHk4h3VEVTNKfYXLnsQbULyyggX5zG/view,,
// NANDU DOLI AMRUTLAL,1303,9918811487,,N/A,2,0,OWNER,,,,,,,https://drive.google.com/file/d/1AId56LBZtv29zLMD2cu9FmaM76mtu7CI/view,https://drive.google.com/file/d/1N8AfBmUNRm0394uSA-FztdgRfLFugIY4/view,https://drive.google.com/file/d/1lI4k0Iuz9aJmMzYfohsHSdfpq7_FzdOI/view,,
// GADA CHANCHALBEN DEVCHAND,1304,9867984897,,N/A,N/A,0,OWNER,,,,,,,,,https://drive.google.com/file/d/1emQpdgE0on3l5onUY83SD608v6wrFlcn/view,,
// PARDALE CHANDRAKANT GANPAT,1305,9867984869,pardalechandrakant@gmail.com,N/A,N/A,0,OWNER,MH43T8039,,,,,,https://drive.google.com/file/d/1fHAaZxcTGwy4VSrlr7jCVvRewU5H4Z3R/view,,https://drive.google.com/file/d/1ZFn0dPSyQuPxjJoDmeyqdyIA_ALg8WPw/view,,
// PARMAR DEVENDRA LALIT & SHAKUNTALA LALIT PARMAR,1306,9821011805,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1ilTomiXsBZTzXRGSochrIkDIKBDUtvHV/view,https://drive.google.com/file/d/1kJH4v7gEQbIZMbu7JmPRk0HfW1xVQiJB/view,https://drive.google.com/file/d/1luCzkW-RAqXaQghuURnpyvvSKUGv07fZ/view,,
// DAVE REENA K.,1307,9867088694,davemeet30@gmail.com,N/A,2,11240,OWNER,MH43AM8233,,,,,,,,https://drive.google.com/file/d/1XjfUhmuA1rSnQnFqdzBBmKyDRpio2LQj/view,,
// RAUT BABURAO BHAGWAN,1308,8286930906,,N/A,1,0,OWNER,MH43AV4683,,,,,,https://drive.google.com/file/d/1XGVgHcfkK7zuotVvjn_x2qxptpEqNRxn/view,https://drive.google.com/file/d/1ANjMIkEvri09e84_DAKKp-39Yc_5h7rA/view,https://drive.google.com/file/d/1EhH-q9eEG8j444wnasVDCWgjpfHmhmbE/view,,
// TEJANI HARESH VRAJLAL & USHA HARESH TEJANI,1309,9820517737,tejaniharesh36@gmail.com,1,N/A,11413,OWNER,,,MH43BE9945,,,,,,https://drive.google.com/file/d/1BzWkM8nBKBPOq3VsRm-pAt1q8fq6rf_9/view,,
// SHINDE NAMRATA RAVINDRA,1310,9167555216,aki.shinde1990@gmail.com,N/A,N/A,0,OWNER,,,,,,,,https://drive.google.com/file/d/1OzwMcQ8Gy9c4VbfG68guHXoaWjH1uixO/view,https://drive.google.com/file/d/1bH9HV224eN9hU0v9EI8HLQyzMpdIh_8a/view,,
// CHAVDA KESUR VERVA & CHAVDA HANSHA KESUR,1311,9321133462,,1,1,4105,OWNER,MH43AV7280,,,,,,,,https://drive.google.com/file/d/1deGZkAbM38gpnQG7vkow84w1lKiGQe6Z/view,,
// RASAL BAHU VITHOBA,1312,9892861324,,N/A,1,0,OWNER,,,,,,,,https://drive.google.com/file/d/1UxcUslGWIfktLxTd-b7Hqhy-KnlR_6nt/view,https://drive.google.com/file/d/19FYLBk8hZNRYZNlIYz8QlQWL6jhxe04z/view,,
// CHAUHAN JATIN JAGJIVNDAS,1313,9820273091,neelc992@gmail.com,N/A,1,11254,TENANT,,,,,,,,,https://drive.google.com/file/d/1k5WuZcCVICV6cRJ1RgY-Miqqjc33HSZH/view,,
// MARU KESARBAI N. & HARESH N. MARU,1314,9819622200,,N/A,1,0,OWNER,MH02CS0721,,,,,,https://drive.google.com/file/d/1w2mPCr6Q97LcwWaz6dd89YY2kIaAyi24/view,https://drive.google.com/file/d/1lemee-Bt2VjgPYzN_jWNcfWR3jfHQ7zL/view,https://drive.google.com/file/d/1pSZ8Mv6fYg1936wPTQ_gPcoBCGB0sDgW/view,,
// VARPE LAXMAN BALSHIRAM,1315,9867758499,dhanashrivarpe1991@gmail.com,N/A,1,900,OWNER,,,,,,,,https://drive.google.com/file/d/1WT9DVtMEs9cCCEGI-D5XMIlauQfgWHB1/view,https://drive.google.com/file/d/1wTGknziAD9dAESNDa7_dPV2VlXf9vlmz/view,,
// VARPE LAXMAN BALSHIRAM,1316,9664379425,,N/A,1,0,TENANT,,,,,,,,https://drive.google.com/file/d/1xrmNX6Foanpc0hWpv0MegVYFMIdj1Udt/view,https://drive.google.com/file/d/1O0CAz-4ZiB0-IWHTtMKPd41y9T_F4NEr/view,,
// SHINDE BABAJI ABU,1401,8108711789,ujjwala.shinde2308@gmail.com,N/A,N/A,2243,OWNER,,,,,,,https://drive.google.com/file/d/1jBpvwAuMpfyH52qwT33xXu2Cop6r5pbq/view,,https://drive.google.com/file/d/1i4VVOjWdGbSoR9rMrDG39AV0fj7Za3AB/view,,
// JOUHARI MAN MOHAN,1402,9322885823,varun.jouhari88@gmail.com,N/A,N/A,2243,OWNER,,,,,,,https://drive.google.com/file/d/1Y9h_1tbGrkN8Z7slQUOcROxj-ZuhNJP-/view,,https://drive.google.com/file/d/16_sccK8O3H9p2ak4xtiZHavQyG5W9zvH/view,,
// GOLE ARUN MARUTI,1403,,,N/A,N/A,10365,OWNER,,,,,,,,,https://drive.google.com/file/d/1XtEPIKN4bI1CbGyrNOEV_wuNNu3PrFbi/view,,
// GAVHANE SANDHYA GANESH,1404,9892933353,sandhya30gavhane@gmail.com,N/A,1,0,OWNER,MH01BN7359,,,,,,https://drive.google.com/file/d/13szl_Z2WyfeAS-MSjwanf6f6InOSN21h/view,https://drive.google.com/file/d/1X5wwfLHTwvW6GK6uIMrIRaWQV91WEytd/view,https://drive.google.com/file/d/1Pu87mlov9bbOd2ZLxrVt0E67_EAvDjrH/view,,
// DHOMSE KAILAS TUKARAM,1405,8369270376,kailasdhomse@gmail.com,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1MB_fdYgK2Vf76ou5zEiuOe2cZq8CQHvO/view,https://drive.google.com/file/d/1jo6UMgEm-HNt4entR7EMoH8CfzKdmjeU/view,https://drive.google.com/file/d/1meA7pbUXBHw1MJ4mdqGSAJF0Wiuu_qqi/view,,
// M/S. CHATARAM NARUMAL & SONS,1406,9833095083,,1,2,0,OWNER,MH43AP5135,,,,,,https://drive.google.com/file/d/17RO6R3rll4Kyf4Cp5A6UQlmxeMe4lvWq/view,https://drive.google.com/file/d/1i0mx5Ch-QKOKfl3AQjzGhl-K8_HhHGpq/view,https://drive.google.com/file/d/1zIKSDfT9s97WyUx3824Nz_eZPexQDOf1/view,,
// GUNDA ANAND NARSAYYA,1407,9029026263,,N/A,1,0,TENANT,,,,,,,,https://drive.google.com/file/d/1puJOgQm0R9r7Ddl7gr9Y2vi1vMh3hOgW/view,https://drive.google.com/file/d/1XTgchhjE_ppWzjrRtigzDPZ1Rm6vm8y2/view,,
// M/S. CHATARAM NARUMAL & SONS,1408,9323450701,,N/A,1,8306,OWNER,,,,,,,,,https://drive.google.com/file/d/1ZvZVBWWbm-wYAYJHQ-R8HiaVEzHizdHj/view,,
// THAKKAR GEETA KANUBHAI & KANUBHAI JAICHANDBHAI THAKKAR,1409,9820729605,,N/A,N/A,10365,OWNER,,,,,,,,,https://drive.google.com/file/d/1JWz6Bd0Wm7Ndby014niHFlYT75cag4v3/view,,
// KALE UJWALA RAJARAM,1410,9892792148,,N/A,N/A,0,OWNER,,,,,,,,https://drive.google.com/file/d/1-j4IlZGFahzSEgFh5UoM7riBzcSWExCR/view,https://drive.google.com/file/d/19Q-kjBtgk6Wr7ceji6JC5nq845lbwrmK/view,,
// SETH VIKRAM PRASAD,1411,9870443341,,N/A,N/A,0,TENANT,,,,,,,https://drive.google.com/file/d/1DnNaVjNjkvOQdhvEClM-OvZxTfK4hmfR/view,https://drive.google.com/file/d/1ueIoB0fyRl32X3QxY_s_UmC_jrNklxeW/view,https://drive.google.com/file/d/1cD5mw-FY5lipCQc44IyNDUS04xyOJA3Y/view,,
// ANBHULE VINAYAK BHAUSAHEB,1412,9821279909,shivamanbhule93@gmail.com,N/A,N/A,2243,OWNER,,,,,,,https://drive.google.com/file/d/1zrxaWIrbrt9qmusjc6SAdPKmYUTOzx_d/view,,https://drive.google.com/file/d/196n9YnvDzABd6pE8uwpWjmhDyMaB--ds/view,,
// SURANA MAHENDRA,1413,9867964221,,1,1,3443,OWNER,,,,,,,,,https://drive.google.com/file/d/12e74QoUZ09delqP2gLdrbvFmLRXViLgs/view,,
// PARDALE PRAKASH S.,1414,8422977528,pardaleparesh@gmail.com,N/A,2,5827.1,OWNER,MH43AV6048,,,,,,,,https://drive.google.com/file/d/1LqqbmW9VfIZwpdiC32rrYPDEy93-o37-/view,,
// WALMIKI SUSHILKUMAR DEERSINGH,1415,8369032965,,N/A,N/A,0,TENANT,,,,,,,,https://drive.google.com/file/d/1Z77HRR5M7W_XwDD6n0V-dblKW-Lf_vrU/view,https://drive.google.com/file/d/1AA643t_HoSjK8gLA9j7xKCw6Cdvqyc7W/view,,
// AMOL PUNDALIK LOKHANDE,1416,9892303474,shreelove.4@gmail.com,N/A,N/A,2467,TENANT,,,,,,,https://drive.google.com/file/d/1uQCSpL--oKkfiPDMA1BGFkToo9d6eqto/view,,https://drive.google.com/file/d/1LJJOMHLOuKcPPlnXfFwrAsz-mWkdz3s7/view,,
// PATIL VIVEKANAND GAJANAN,1501,9869463516,,N/A,1,17337,TENANT,,,MH43BN2543,,,,,,https://drive.google.com/file/d/1EqaYsjZHmGw1VCCaFPwrTG0WR960yEwu/view,,
// SHAH RAMA ANIL,1502,9819698829,,N/A,1,0,OWNER,MH43BD4660,,MH14DF0957,,,,https://drive.google.com/file/d/1P0adyW08SZprNwXQaGfojtFQ1YmbMLwU/view,https://drive.google.com/file/d/17v9pktd1Qfss7yfWsN8HJt5cWrqnjsx8/view,https://drive.google.com/file/d/1KFDgCcC33rr2f-D8iASLil33GM727AWG/view,,
// SHAH ANIL S.,1503,9819698829,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1P0adyW08SZprNwXQaGfojtFQ1YmbMLwU/view,https://drive.google.com/file/d/17v9pktd1Qfss7yfWsN8HJt5cWrqnjsx8/view,https://drive.google.com/file/d/1RG7NsCflAvxmut_btTbT-6OKLZL33m-z/view,,
// JOSHI INDRA DEV & JOSHI DURGA,1504,9820800070,,N/A,N/A,7131,TENANT,,,,,,,,,https://drive.google.com/file/d/1R_HsMv94oy5hHMaGlBxcuNS71Kj6HVeQ/view,,
// VIDYA SHANKAR MALUSARE,1505,9820402490,,1,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1MVtlknDCzBosxcbVOLkUZyRxEvWPV9Ny/view,https://drive.google.com/file/d/1-UOjqdGT52INNu-fmRlzr-fmojzF-a6b/view,https://drive.google.com/file/d/1pP-r4QRLpIoNjdLfkH3xp5dpgiOLqtD0/view,,
// BORSE PUSHPA MANOHAR,1506,9967813121,,N/A,N/A,74108,OWNER,,,,,,,,,https://drive.google.com/file/d/12hulKOQEedZbWLo6VAgDjpt5_CsYWAvL/view,,
// MORE VILAS SITARAM,1507,9969207809,,1,3,0,OWNER,MH43BH4246,,MH43AN4664,,,,https://drive.google.com/file/d/1N0haBMocyoz9jsmMXn1wuqR5XrJa-zYj/view,https://drive.google.com/file/d/1uRWPdGNKPfmK9NJXETj-vXJ6Gka5WXNf/view,https://drive.google.com/file/d/11cAV-TOL7f-TW_VdsQ-YXk2WTVxGchtR/view,,
// SANDEEP SHANKARLAL JAIN,1508,9820805479,,N/A,1,10494,TENANT,,,,,,,,,https://drive.google.com/file/d/1jpkh8tOR6Ab71WJC70_LZ0-hTVxtoqN3/view,,
// MR SHIVRAJ DILIP GOPALE & MRS. SUVIKA SHIVRAJ GOPALE,1509,8805677720,,N/A,1,0,TENANT,,,,,,,https://drive.google.com/file/d/1Hf-HG4rICeeh740wY9gbuTEOf97syLlJ/view,https://drive.google.com/file/d/1v_kvjXlCXfohwmqa-bO86emzyvbH82_h/view,https://drive.google.com/file/d/1j7LLgLeDi5Smk38TBP96YB1isIpaLgKi/view,,
// KONDE SUNIL SHIVAJI,1510,9819907107,suraj6111994@gmail.com,N/A,3,0,TENANT,GJ01NU4303,,,,,,https://drive.google.com/file/d/1u7mWyw_RP6zxbklUElCiLhkxJSastxBl/view,https://drive.google.com/file/d/1aONTQf0axmFmD3h2KnvUAKKeYdP_fO36/view,https://drive.google.com/file/d/11PASiGCEMJ8DsyLwu0-TPhkb3udq7lUC/view,,
// SURANA RAMESH & ANJANA R. SURANA,1511,9819384470,,N/A,N/A,2243,OWNER,,,,,,,https://drive.google.com/file/d/19U_zijLqYXLwb6zCRerG_X7NpStJVEab/view,,https://drive.google.com/file/d/1iheoj_pPHp3jNA0WetlhPiJxsUrAhJyn/view,,
// UBALE DATTATRAY SOPANRAO,1512,9820760384,,N/A,N/A,0,OWNER,MH43AM8422,,,,,,https://drive.google.com/file/d/1vO_pJ6DRkC6Q1-q91gm11e7yxgLbFtVv/view,https://drive.google.com/file/d/1SVSO9GWjC3jsDtysC8cVeUOeBdAu0Ljs/view,https://drive.google.com/file/d/1TbIxoPx9jSmi4bKDJbVkTq52r3IICuVP/view,,
// JAYENDRA ASHOK YEWALE &  MANGAL ASHOK YEWALE,1513,9820927873,,N/A,N/A,33016,OWNER,,,,,,,,,https://drive.google.com/file/d/1yKVY3wTbH2IzCADDG8-lggHy_Aa6N6f0/view,,
// MR. SACHIN ASHOK & MRS. RUPALI SACHIN KANGANE,1514,9773538020,,1,N/A,-423,OWNER,,,,,,,https://drive.google.com/file/d/1NYdckqty9TKpWg9K6JmCUiRuGEUJdSL-/view,,https://drive.google.com/file/d/1ex2TQXQaQjRJCj41Atx7wRZjlwXrSZXE/view,,
// SUTHAR RATANLAL BALURAM,1515,9702565454,,N/A,N/A,6652,TENANT,MH43AU5984,,MH04AD3436,,,,,,https://drive.google.com/file/d/1Cw-aTdwNbpgd8g5lroDlcITmJQF2u-q-/view,,
// BAJPAI SUSHMA,1516,9969017877,,N/A,N/A,0,TENANT,,,,,,,,https://drive.google.com/file/d/1roSbIaWV0184Cw-g7-LJEPDwXnXm_EKm/view,https://drive.google.com/file/d/1LjcQyExVwNR0aIUKdzJakTvchU0OuKgq/view,,
// SHETTY UMANATH K.,1601,9930242518,,N/A,1,0,OWNER,MH43AP3819,,,,,,https://drive.google.com/file/d/1Xk8qCgUNT7VdP5gCdm-_nku_EEfRE8SO/view,https://drive.google.com/file/d/1FrLvZeXJnttu-BxzVfhnKlpBQmBFdrD8/view,https://drive.google.com/file/d/1EZ4m0Kw4tsimKllMPQv8kvGfCBntf7D0/view,,
// KALPANA PRAVIN PATEL &  ANKUR PRAVIN PATEL,1602,9867133768,,N/A,N/A,-4043,OWNER,,,,,,,https://drive.google.com/file/d/1V7lAOcBQ0bOJ_XxcgQD9CGdVTR7LqX1L/view,,https://drive.google.com/file/d/1YmhXncmvpHJLG54scDAkXLiqF-DniS0k/view,,
// PADALKAR RAMKUMAR K. & VIDYA R. PADALKAR,1603,9757484806,,N/A,2,0,OWNER,MH43AU1004,,,,,,https://drive.google.com/file/d/1eO1yrlkOrAa7xN6udOd5mPhaHpG0aIW4/view,https://drive.google.com/file/d/1lQt2AgFUI5U9x3YfxCWPeISf9qc9D_wr/view,https://drive.google.com/file/d/10xae936mZGU54YvNEqIU7DTAbx6y08H8/view,,
// SUHAS CHANDRAKANT SAWANT,1604,9833987749,,N/A,N/A,2243,OWNER,,,,,,,https://drive.google.com/file/d/1Jay2YwTy08QZcWHKLA88mgsrC1eOyvO1/view,,https://drive.google.com/file/d/1GhpcBI1Q4sNRkl4SO7mId4pfC4aQ-01p/view,,
// SHARMA KANAIYALAL PARMANAND & SANJAY PARMANAND SHARMA,1605,7977817150,,N/A,1,3379,OWNER,,,,,,,,,https://drive.google.com/file/d/1JEdF-uv_Yt0UwwsatMcN2G1GIfFaGoO2/view,,
// INGALE SANGEETA SHANKAR,1606,9702944563,pratikingle6282@gmail.com,1,1,0,OWNER,MH43BD2346,,,,,,https://drive.google.com/file/d/1JsK8RbXH9LuTOMgb0TRY887gWT9JGZmo/view,https://drive.google.com/file/d/1HBuZsZW3linyQN6xzN-4rw6KubWyOx_6/view,https://drive.google.com/file/d/1UJe8aMpdyxg59vHo_zdF7Q-luAB1S1fD/view,,
// MEHTA BIPINCHANDRA BHOGHILAL,1607,9757325780,jketanmehta@gmail.com,N/A,2,0,OWNER,MH43AX4023,,,,,,https://drive.google.com/file/d/1jpBDNUlocF9-x3Cu-7Xy4LGTBEOEDcRS/view,https://drive.google.com/file/d/1y3VLM49tiosd5vRCvvz4PYoULjh528Qu/view,https://drive.google.com/file/d/1zratQy4cUmS47qxiTSaSVdLfoOmHJ998/view,,
// POOJA GUBBALA NAGA PRASAD,1608,8652853528,,N/A,N/A,2467,TENANT,,,,,,,https://drive.google.com/file/d/1x90x5c--TmOtLYKLSlnm7bYTrC01J3nE/view,,https://drive.google.com/file/d/1urellI4omR2Y4NhiXncBEVtTXOwOKiRP/view,,
// RAM NARESH BHAIYALAL NIRMAL AND MRS. SUNITA R NIRMAL,1609,8291846255,,N/A,1,8057,OWNER,MH43BT2026,,,,,,,,https://drive.google.com/file/d/1UPbC0QooyyDwJQ7KLuSLVHFxj3byzC9x/view,,
// GADA NAVINCHANDRA KUNVARJI & NEETA NAVINCHANDRA GADA,1610,9920030215,,N/A,N/A,0,OWNER,MRI9924,,,,,,https://drive.google.com/file/d/16I5IpjYTxqt6yGb-GN12WJSpzvKh-REn/view,https://drive.google.com/file/d/1kR9N2_yVW_FkdVjpvvCNzqx96Hca_F6o/view,https://drive.google.com/file/d/1jzXZO3J1Vig2IB3VWeUoWF60tTzmVjS4/view,,
// BAPNA SUBHKARAN SUWALAL,1611,9867095351,bapnask74@gmail.com,N/A,2,0,OWNER,MH43AP4063,,,,,,https://drive.google.com/file/d/1wBatd5BC7kxg6OqwCFPihbbLgbPdOd2I/view,https://drive.google.com/file/d/1a0wDa2-loEtRLanP67pMuKjmU_RcuSa-/view,https://drive.google.com/file/d/1uJwzJTtJNhLqN7mqfQVtW7P0u3h7mgJ3/view,,
// SHARMA SANJAY PARAMANAND & KANIYALAL P. SHARMA,1612,8879247825,sharmaneha48103@gmail.com,N/A,1,3379,OWNER,MH43AN6588,,,,,,,,https://drive.google.com/file/d/1Zgmd_FQhTupzcMMfIhPRolJjLu7T1aZ6/view,,
// VIJAY MAHIPAT MORE & VISHAKHA VIJAY MORE,1613,9324511453,VIJAYMORE1910@GMAIL.COM,N/A,1,-780,TENANT,,,,,,,https://drive.google.com/file/d/1ScxHJ2xwehVizE4RqwbOoIckEqvCU3bQ/view,,https://drive.google.com/file/d/1kG5dY73cI5LZWD-5kH81BdJohqd22T8r/view,,
// PARMAR RAJESHKUMAR J. & JAGDISH V. PARMAR,1614,9773914890,,N/A,1,2543,OWNER,,,,,,,https://drive.google.com/file/d/1uY4bLa41pJhqa4Fa8BgsRQf_1e5AXjUT/view,,https://drive.google.com/file/d/1-B4GiB79urYZHxzR4RhxBWx_gYS-_iTo/view,,
// HANUMANT DADA PAWAR,1615,8652127809,hanumanpawar.bvg@gmail.com,N/A,N/A,2243,OWNER,,,,,,,,,https://drive.google.com/file/d/1tkTgcClmGFuRELIF-VHhUZgf5CcCJ_RB/view,,
// BANSOD MANISH TUKARAM,1616,9819830009,mudra289@gmail.com,1,1,0,OWNER,MH04BV1245,,MH43AS8303,,,,https://drive.google.com/file/d/1zj6YDGk0IfFRQO1X2KmvI6MRP5N6oYT7/view,https://drive.google.com/file/d/1X37TWZH0CPNlmmWNNQu0_euH5xQyPvEW/view,https://drive.google.com/file/d/1F4lPUIrhqpGPeXlCatZFQGryOIcnPhGd/view,,
// WANI KIRANCHANDDAS S.,1701,,,N/A,N/A,1242837,OWNER,,,,,,,,,https://drive.google.com/file/d/1YNsMKP1dHM_ZEYuXR_BAEGspJF6Hysbm/view,,
// M/S. SHAH & MEHTA (PARTNER),1702,9833878899,,N/A,N/A,9235,TENANT,,,,,,,,,https://drive.google.com/file/d/1iIJYzDy-_aKYTKwA_2K-ar3xALgf58f_/view,,
// MANGA S. JANAGAM & MR. SAIDULU VENKATAIAH JANAGAM,1703,9892809443,sjanagam@gmail.com,1,2,0,OWNER,MH43BT5242,,MH43BA2227,,,,https://drive.google.com/file/d/1fMWtQI1syheAoFZA5dMaTOgMUbNloITT/view,https://drive.google.com/file/d/1Bt79_PrKPfWkY7BQeCjv2W0WRAD_k5iM/view,https://drive.google.com/file/d/1p-1MUy4M2f4qpD4h6JKFoQJYz_Kewf8b/view,,
// KONDEJKAR PURSHOTAM BHAGWAN & MRS. VANDANA P. KONDEJKAR,1704,9673992760,,N/A,1,0,TENANT,,,,,,,https://drive.google.com/file/d/1WJ5fR2I2PX6i5UlozrkfQY5v7DEiiBjt/view,https://drive.google.com/file/d/1RSQdCT1g8QoNyzibg4OVmtMfxW9R0CJ4/view,https://drive.google.com/file/d/1NS0d_gt_at4nae7sdBf6xStuF7-MX1gJ/view,,
// THAKKAR DIVYABEN DILIP,1705,9833159331,,N/A,N/A,-1032,OWNER,,,,,,,https://drive.google.com/file/d/1JhAooVkV9litzCvorz7Yh-45UJleMOVP/view,,https://drive.google.com/file/d/1z4UDA_enkDVvWIv3FRPtvUD7pTYx8Lgz/view,,
// Mr. NARESH YADAV,1706,9820371507,,N/A,1,10159,TENANT,,,,,,,,,https://drive.google.com/file/d/1vUBrXNNGGfFtkZT_WklDEDjObWXMmIeC/view,,
// SAWANT SUNANDA CHANDRAKANT,1707,9146935688,anikets009@gmail.com,N/A,N/A,14968,OWNER,MH12DW3844,,,,,,,,https://drive.google.com/file/d/1VTUa5yEj5i8geZy9jeP68gkQGS3gJb-k/view,,
// KHEDEKAR DILIP TUKARAM,1708,9820176996,dilipkhedeka75@gmail.com,N/A,1,0,TENANT,MH43AB7799,,MH43BE7599,,,,https://drive.google.com/file/d/1OD0CnccYnHRcj6RD1DstBh7R1nzifbjy/view,https://drive.google.com/file/d/1VGw4DVRHEgDjFqOWSpEwY62O5kAm-oP_/view,https://drive.google.com/file/d/1XPmVMxIWoKx_zcpQd9rkvcPA_cr94lCx/view,,
// KALPESH MULJIBHAI SHAH & MRS. MADHVI KALPESH SHAH,1709,9323999109,jkshah789@gmail.com,N/A,1,6583,TENANT,,,,,,,,,https://drive.google.com/file/d/1n-2nfUXuob8dUP1FmHHRFbxZz2wxS_DJ/view,,
// BABAN EKNATH BUCHAKE &  MALA BABAN BUCHAKE,1710,9870144700,,N/A,1,-1249,TENANT,,,,,,,https://drive.google.com/file/d/1SYwUCRn228cGBnjK90k6imEYmA2C4RJU/view,,https://drive.google.com/file/d/11dGc90IORVl_xa0Vmjj8FaiKTcCthfN8/view,,
// KANANDE SANTOSH SUDAM,1711,9987960118,,1,1,7616,OWNER,MH43XX6009,,MH43AN6882,,,,,,https://drive.google.com/file/d/1RwEVg6VXBg64GkJrv3h8SvQ_EZGvngIu/view,,
// M/S. CHANDRA BROS.,1712,9819365717,,N/A,2,0,OWNER,,,,,,,https://drive.google.com/file/d/1Py396_EryYlHXJOMPEm5iR9yWsUsG0Gc/view,https://drive.google.com/file/d/1Pi19HCl9eaZDoCkQ_MCrzVzw0kcOYEuk/view,https://drive.google.com/file/d/12-IQTy4Q2vd8E0InBr-kIEpqSz-HKasS/view,,
// HANDE VISHNU BHIMAJI,1713,9892112724,,N/A,1,6583,TENANT,,,,,,,,,https://drive.google.com/file/d/10gy_rtMJojgVieJ-UwCkZl-cGKP33sRY/view,,
// SHELKE MADHURI PRASHANT,1714,9920832071,,N/A,1,0,OWNER,MH43BB5287,,,,,,,https://drive.google.com/file/d/1cs_v6J_k63OeBXoYb-V3qWMkAgIRRJbU/view,https://drive.google.com/file/d/1ItraTt8VV1xJBTQnOyaVJ-LsnmgwHczo/view,,
// JAIN VIKRAM SHANKARLAL,1715,9867815159,,N/A,N/A,2467,TENANT,MH43BJ9232,,,,,,https://drive.google.com/file/d/1cTHC614yMB0iDb-RG3-_S2a-Mvy_ntEo/view,,https://drive.google.com/file/d/1IUKs8iswIAHhpNrzLof3EllR_euZDHbq/view,,
// THAKKAR ARTI RAJESH,1716,9768264903,ambikatraders18@gmail.com,1,1,0,OWNER,,,MH43X7809,,,,https://drive.google.com/file/d/1q9hwb4TZJL67MWuwiCV1s1HupcietVDB/view,https://drive.google.com/file/d/1cZ50HHNrWMW3LNSjgkGhDp2eNZwlGM4Z/view,https://drive.google.com/file/d/1iYtUgiZAMhch3dDoEnJVAB8P-AMQb1u6/view,,
// MS. KAVITA AMOL GAGARE &  AMOL NIVRUTTI GAGARE,1801,9766002001,amol.gagare14@gmail.com,1,1,3743,OWNER,MH43AX6227,,MH14GA1245,https://drive.google.com/file/d/1xOQgbx7NNcyfIEJM4Hv7Bvjg28mIYXwX/view,https://drive.google.com/file/d/1L9PbYqvNfMtTLPZpYFcbjc_npJon1eUy/view,https://drive.google.com/file/d/1oihMLVN29pnFyvyXPPRK_vEtqZRG5VB9/view,,,https://drive.google.com/file/d/1prdg11NoB7NQGZgnxOExNpXxTNJmEsNM/view,,
// SHREYA UMARVAISHY,1802,8770689699,shreyaumarvaishy014@gmail.com,N/A,2,0,OWNER,MH9248,,MH01AL0873,https://drive.google.com/file/d/1jUQdEQ6XznzakCs79YVHYoxeRKS3XSOn/view,,https://drive.google.com/file/d/1j7PElvcpH8mv0imooAWmUOU8Iy1xMrT4/view,https://drive.google.com/file/d/1qNnbhMu4BjRR2by24lk8NBGZY_KjpRTI/view,https://drive.google.com/file/d/1t9v4YKveByon18z2mSOVcD82SLx-FZRk/view,https://drive.google.com/file/d/1gyE46Y4IKsI2qzE7GzMiZ8oYbGuDUBon/view,,
// D'MELLO STEPHEN J. & D'MELLO SYLVIA STEPHEN,1803,9322731867,,N/A,N/A,0,OWNER,,,,https://drive.google.com/file/d/1RxnGRGoFtNw7ZnUIb1CO_ak8l5uBebkT/view,https://drive.google.com/file/d/1TV_Yt-CbDizLb7uzEAOSS46xXmQAz02w/view,https://drive.google.com/file/d/1ckHeTJf7vGmhFLVDACVdFI0lkI-ZHX79/view,https://drive.google.com/file/d/1x0Eq_kyTw0C7LDFmSteTISKnxpXJyEXg/view,https://drive.google.com/file/d/1Qne6ctxKzFib-mu9anej7kR620uvwtIx/view,https://drive.google.com/file/d/1W06FplFC4Zo0GjDm2rHutggICF9b_GNE/view,,
// RAO G. VENKATESHWAR,1804,9699456699,,N/A,N/A,4371,TENANT,,,,,,,,,https://drive.google.com/file/d/1TdJZvi3GOw7PER061sBSSfE0Dl9ZI57x/view,,
// SHAH ATUL PRAVINCHANDRA & FALGUNI ATUL SHAH,1805,9821070155,trushashah65@gmail.com,N/A,2,0,OWNER,MH48AV4503,,,,,,https://drive.google.com/file/d/1Y5tGb10s_b15Gle3AAjKPCvHpTmlw9r0/view,https://drive.google.com/file/d/1YGDj3tdGqYXBC-kQcLLx0YDkcTILCnve/view,https://drive.google.com/file/d/1lkuNkReGvhFhoe67K1JmE5kMjvKLs-QL/view,,
// MEHTA SURESH JAYANTILAL,1806,9004184051,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1TUcSaRL-I9ZJ_1ySWYbFuGKM-liCmQ8p/view,https://drive.google.com/file/d/1Ll7wpUQS2CPTP-WkvXPGwV1SpQw0_6V3/view,https://drive.google.com/file/d/1lkuNkReGvhFhoe67K1JmE5kMjvKLs-QL/view,,
// CHIRAG SURESHKUMAR MEHTA &  LEENA SURESHKUMAR MEHTA,1807,9833085071,,N/A,1,0,OWNER,GJ01SA9328,MH43BM0275,,,,,https://drive.google.com/file/d/1T1t2-i_-OEJ8Ds3LN36WAKHORWYTbASi/view,https://drive.google.com/file/d/1Ll7wpUQS2CPTP-WkvXPGwV1SpQw0_6V3/view,https://drive.google.com/file/d/1qYADLlLYegVW7p_Rjc1yMNmIbAeuXvEI/view,,
// JOSHI HIREN R. & PRATIBHA H. JOSHI,1808,9967154235,hirenjoshi1965@gmail.com,N/A,1,0,OWNER,MH43M8290,,,,,,https://drive.google.com/file/d/1zGuBSfbjYITKWhNOXMkZkud4FUVAL3DC/view,https://drive.google.com/file/d/1U7ow0HvLN50qNz0Vl1evUm1s25_KMDmS/view,https://drive.google.com/file/d/1AXPaTxqs_vseQY4pS4nnhaB-XcqcbAvF/view,,
// THAKKAR KAMLESH P.,1809,9820537833,kamleshbhaithakkarbhai@gmail.com,1,N/A,0,OWNER,,,MH43BE7610,,,,https://drive.google.com/file/d/15DkPp29yZh51xm7pCkX8k_9Lv_tR0q9U/view,https://drive.google.com/file/d/1k_HaZcenrJ00WYDru0YO1U8jbOJtWZZ_/view,https://drive.google.com/file/d/1aYX_Ug3qbfveqflWSZC4W_8fRaATTt14/view,,
// DABHADE AMOL D & SUMAN D. DABHADE,1810,9930886887,amoldabhade760@gmail.com,N/A,2,0,OWNER,MH43BD1100,MH43AN8053,,,,,https://drive.google.com/file/d/1XqIUwV3mzMmIHV-bnhO1hrvt5QAeM2J_/view,https://drive.google.com/file/d/1skpswGUKgeev0Hg0QasAwB6oWFO74kZ1/view,https://drive.google.com/file/d/19wDguZ5noMxlIvDsIBMgYk2X_i7eBsmX/view,,
// MRS. LAXMI AMOL DABHADE MR. AMOL DHARMRAJ DABHADE,1811,9819509353,,N/A,N/A,0,TENANT,,,,,,,https://drive.google.com/file/d/1CuqFYDvG3LP9341mtOJDFcQvCXFnEBy4/view,https://drive.google.com/file/d/1Say0WYZ-4FJ0x4bmH27qAT4bZjbsvMZ2/view,https://drive.google.com/file/d/1F_W7dud1ItUvzxKJhYjMs5TxZJee-I0A/view,,
// GHOSHALKAR NITIN YASHWANT,1812,9819051163,geeta.pednekar@gmail.com,1,1,3443,OWNER,,,,,,,https://drive.google.com/file/d/1s6ikTceJUaJ7XgbgM3HRd_-PQKQLXwPd/view,,https://drive.google.com/file/d/1RIPBpWYPz4zV0cZylQGt1vlrpULC4XTs/view,,
// JADHAV BALSHIRAM TUKARAM,1813,9967266812,,N/A,1,0,TENANT,MH43BU6125,,MH43BU1245,,,,,https://drive.google.com/file/d/1ol193pXWRi16uksivKqnFVp4EtvaZqco/view,https://drive.google.com/file/d/1udAdOYhrz_YNu2H3s_MXOE9npolVlOLB/view,,
// SHWETA RAJESH THAKKAR,1814,9930904834,shweta27.rt@gmail.com,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1DiapjLY57BEIKKYfy-xMWhJ2bkdqJATR/view,https://drive.google.com/file/d/1LD1TinWvZ1UdxyeTH2-fYeFQUPv6lPX_/view,https://drive.google.com/file/d/1CvOfBO8iWihS3tmzS_SI5MImpYHvweG0/view,,
// JAGTAP ASHOK BALASAHEB,1815,9322890275,ashokbjagtap75@gmail.com,1,1,0,OWNER,MH43XX6393,,MH43BU3525,,,,https://drive.google.com/file/d/1RLg598rF1YxO6xikl0Jf2Vrt8qocGf-I/view,https://drive.google.com/file/d/1p_nlDMCOMLVMODr0XOnTLeLkTwvuTeyD/view,https://drive.google.com/file/d/1TgdxPM9fjTglCF5nhSfnYSIeabum8mwH/view,,
// DONGARE NIRMALA MAHESH & MR. DONGARE MAHESH RAMCHANDRA,1816,9323407710,,N/A,N/A,0,TENANT,,,,,,,https://drive.google.com/file/d/1HXNxC4D-qkv_q0os1yv9Xhp4UAaiW0hu/view,https://drive.google.com/file/d/1gKUI40xdYRB8ScT_KuPSWFWQpBHHbxow/view,https://drive.google.com/file/d/1s-WxYNzHfYCofpj3ia8MGAQ265X8Srwh/view,,
// TIKONE SUREKHA SAHEBRAO,1901,9773055486,sagar_org@yahoo.com,N/A,N/A,23040,TENANT,,,,,,,,,https://drive.google.com/file/d/1redj-TmRtLqAA0hWjWLiYKY2Sku9p9Uw/view,,
// SAINI SURESH B.,1902,9892961558,sureshsaini130@gmail.com,N/A,1,113821,TENANT,MH43AQ0947,,,,,,,,https://drive.google.com/file/d/1CFXLmYFxJ2irGKUly-Pw3XlU6LnUMWh7/view,,
// SUTAR DINESH B. & SUTAR SHANTA DINESH,1903,9892961558,sureshsaini130@gmail.com,1,1,2000,OWNER,MH46BH0915,,MH01AR5084,,,,,,https://drive.google.com/file/d/1JaxbjIJc4iwXeCESfaa4Rxq_sGxuZDyi/view,,
// BAGAL SHAMRAO SAUDAGAR & SANGEETA SHAMRAO BAGAL,1904,9769148843,sandip.bagal786@gmail.com,N/A,1,0,OWNER,MH43BQ8496,,,,,,,https://drive.google.com/file/d/17w3H6SZkmyKjis94UdwheVkZahevAaGu/view,https://drive.google.com/file/d/1xs1ck-Vm-TWqBVaPd_w61UCLHFwAEahI/view,,
// MRS. SHOBHA GANPAT BANGAR,1905,9867984897,,N/A,N/A,8496,TENANT,MH03AV0777,,,,,,,,https://drive.google.com/file/d/1-0Wh-T8xuWPSje5tG3cthTzjQOlJGTa5/view,,
// PANDEY SUSHILKUMAR RAMAYAN,1906,9867522581,ppfaithingod17@gmail.com,N/A,1,0,TENANT,,,,,,,https://drive.google.com/file/d/1055vD_5_TdhCTc3lKcwyMUEXJeFRMCr1/view,https://drive.google.com/file/d/1jyfBLo5xixcipR9jBU5ALO31rz7BbHuQ/view,https://drive.google.com/file/d/1hwtCxLwKXHs7v2yYHM_tPmu4xzkxhS3v/view,,
// MORE ASHOK B.,1907,9819403417,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1I7hNINwKkxkZf3seNR5sczKdQdaWhppQ/view,https://drive.google.com/file/d/1H9D4ly2vlRPOoX1Rk3FG5xaApMxvOUsS/view,https://drive.google.com/file/d/1b__46kzP9YftwDFMJdOlvSWyksX-oWBk/view,,
// SAVE ARUNA SHARAD & NIRANJAN SHARAD SAVE,1908,9987554982,niranjansave@gmail.com,N/A,1,4476,TENANT,,,,,,,,,https://drive.google.com/file/d/1aif3VM8C5BprvSHh4WXQDwlShv_YLPx0/view,,
// GITE SUNIL DYANDEO,1909,9324403983,adv.sunilgite@gmail.com,1,2,85286,OWNER,MH43AK8012,,MH43AB63,,,,,,https://drive.google.com/file/d/1YdEVXG5pxoUSB9015zOwk-eEx9zOdhj_/view,,
// GITE SUNIL DYANDEO,1910,9324403983,,1,N/A,47571,OWNER,,,,,,,,,https://drive.google.com/file/d/19FsejsvEFh-gF0A6WqebykxWk0JAXED9/view,,
// MORE PANDURANG RAOBA,1911,9773502366,sushant2518@gmail.com,N/A,N/A,2543,TENANT,MH43AU0584,,MH46X6928,,,,https://drive.google.com/file/d/1wp5TL8stQoap_NDwgkAy_tkHu9Q7x7MO/view,,https://drive.google.com/file/d/1rzhv_C8yaucOYIygGJy7P_deSCH44h-z/view,,
// GADHAVE BHIMRAO DHARMU,1912,9769206076,snehalgadhave3016@gmail.com,1,1,0,OWNER,MH43AV9331,,,,,,https://drive.google.com/file/d/12NcVKseon7djyZ8TK9TRqq_Zan8SRXjd/view,https://drive.google.com/file/d/1Gn6CjI2D8A9gQhdFIfgk9sTE7gEI0Jvd/view,https://drive.google.com/file/d/1JG2SRULcBfgiOLTWIcTSMo3O0p1Ibp_5/view,,
// MR. RAJESH EKNATH PINGLE &  MRS. PRIYANKA RAJESH PINGLE,1913,9870020550,,1,3,4043,OWNER,MH43BX6899,,MH43BN0376,,,,https://drive.google.com/file/d/1jsaAkL6xRlp3NuFMxD31IQ01WdMY_MOw/view,,https://drive.google.com/file/d/1WVwlUXm1RdAdZiUJEYib4aRYl0imCHvu/view,,
// NEHERKAR DEEPAK RAMDAS,1914,9987957500,dneherkar@gmail.com,N/A,N/A,0,TENANT,MH43AA9869,,MH43BU3618,,,,https://drive.google.com/file/d/14WyEumBRUvfkAtSndzY9WxeHCx4Q8dNX/view,https://drive.google.com/file/d/1J1ERiV_2mXF8jnMZlHpMCzpDvUTq-YBI/view,https://drive.google.com/file/d/14c6qupOOVtmy1oT2FpFBwEHQu1bYUD4W/view,,
// THORAT GAHINAJI BHAGUJI,1915,9819882694,,N/A,1,-2114,TENANT,MH01CB6939,,,,,,https://drive.google.com/file/d/12nfbzdGH8dy2Dk8DUNMOgn5pyBTFvy3D/view,,https://drive.google.com/file/d/1eSPvR5-mEPl4Ah9Oa0cpEg7520wQ49SO/view,,
// LALITHA SAIDULU NARAGONI & MR. PRAVEENKUMAR SAIDULU NARAGONI,1916,9653144398,praveennaragoni360@gmail.com,N/A,2,0,OWNER,MH43BT0713,MH43AG0360,,,,,https://drive.google.com/file/d/1odOGZLp7chOKpCXJLnf2qwZRpY9idkqz/view,https://drive.google.com/file/d/1qg5UzHws6JGbHaNLWuzKUM9fFnZV63Yp/view,https://drive.google.com/file/d/19UAYK1qQwckvqU7Aht0X_tPd3hTHipLK/view,,
// SMT. ANACHAI HIRALAL KAWARIYA,2001,,,N/A,N/A,-7486,TENANT,,,,,,,,,https://drive.google.com/file/d/14bd1cEQxmEFBrYDuj19nmKuvYtBCJZo8/view,,
// HEGDE KASHINATH BASAWNATH,2002,9833340734,ravie6298@gmail.com,N/A,1,0,OWNER,MH43BV3219,,,,,,,https://drive.google.com/file/d/191a1TL4jug3wIdvxOmtEkOsG137tAEol/view,https://drive.google.com/file/d/1VADHe_l37G4Mtn4YbtMXQL6TDvA2r3YU/view,,
// BELLE KALYANI BIRAPPA,2003,7718981916,bellevijay@gmail.com,N/A,2,61272,OWNER,MH43BQ2400,,MH43BU2400,,,,,,https://drive.google.com/file/d/1Z-VY3jLozUgo-bLq1s8Y8qZIAUH8hyad/view,,
// GARUD GANESH NAMDEO,2004,9870472346,atharvagarud54@gmail.com,N/A,1,8133,TENANT,MH43BJ7033,,,,,,,,https://drive.google.com/file/d/16XPkyOhD20rD8jcFos_RAtoSSYqyWc2o/view,,
// ARYA BALMUKUND KHIMJI,2005,9371549385,prashantluka@gmail.com,N/A,N/A,7077,OWNER,,,,,,,,,https://drive.google.com/file/d/1-9Xda3azngGaS_4Xy2JuDSiZ7kgqnAhS/view,,
// MAHADIK TATYASAHEB,2006,7010042381,saichephoto@gmail.com,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1Y-TyDad4I6HP9Qf0-DBIJiHjwCv3Rww2/view,https://drive.google.com/file/d/1K3_xh2mCwHnhpk87hHT_45dGo0Hd2RI7/view,https://drive.google.com/file/d/1kZJaUFZ-goNeKwblBvxc6PvV8HB3sj15/view,,
// GOGRI CHETAN G. & LEENA C. GOGRI,2007,9702096661,chetangogri67@gmail.com,N/A,N/A,2243,OWNER,,,,,,,https://drive.google.com/file/d/1YysYS3syVwBUO9S7jeXL-VhUvvLH94yC/view,,https://drive.google.com/file/d/1YpGQ4fyOdgoxOAbZbw1VtTkr6DUPAUMy/view,,
// TRIVEDI BHANUPRASAD D. & VIJAYABEN B. TRIVEDI,2008,9004194448,bhanuprasad1954@gmail.com,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1c5wFBwojq53znnxhfPqLpwWvi9CUvwCN/view,https://drive.google.com/file/d/1ylTIPYbcwOMtbalgN28vtPjv4Nf85F1p/view,https://drive.google.com/file/d/11iRgcPvjgVIhbjk9PTy3p4gsSPPaQGkQ/view,,
// HEMANT BACHULAL GANGAR & NEETA HEMANT GANGAR,2009,9821140136,,N/A,1,2917,TENANT,,,,,,,,,https://drive.google.com/file/d/1xHycUWtKHz3_WoAXFuh7onVo1t4d3L8e/view,,
// SALIAN MADHUSUDAN PUNDLIK & ASHALATA M. SALIAN,2010,9819188943,chaitrasalian97@gmail.com,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1bseUkkMBWWFozGMOe5gbKNzZdKh2aA-y/view,https://drive.google.com/file/d/1k_4HkHyXuwSDh8fMXDxK5sQRxXISfXOw/view,https://drive.google.com/file/d/1vj3SBPvC9Z4uzsfLDySWOv8wBDCQxwLM/view,,
// DALVI DILIP ASHRUBA,2011,9004536082,dalvipareshnhitm@gmail.com,N/A,2,11075,OWNER,,,,,,,,,https://drive.google.com/file/d/16_vq9Ld7Nhuk9xOhPQkK73QTy0umzcOL/view,,
// KOLHE TANAJI RAMCHANDRA,2012,8928516429,kolheomkartanaji1234@gmail.com,N/A,1,0,OWNER,MH43BL2109,,,,,,https://drive.google.com/file/d/1Xt5UQPD1QeFkrbqP8GrgExBqOf75fWZg/view,https://drive.google.com/file/d/18VsYdWe33UF2j9IaU-8xHiwaWNeyKfBF/view,https://drive.google.com/file/d/1qtG2jcYjjoQM5j--wNW_On-9-_VY5MuO/view,,
// MANDE ABHIMANYU RAMCHANDRA,2013,9967608437,,N/A,N/A,2467,TENANT,,,,,,,https://drive.google.com/file/d/1pmn0thQGiaIrHtlmIsNBrq4P37QYbl0i/view,,https://drive.google.com/file/d/1tp34rEDge8duv50PwJDWQpQtsN0rvhiP/view,,
// SHINDE RAJKUMAR ANANT,2014,9503756998,dr.tushar8769@gmail.com,1,1,0,OWNER,MH43AS7411,MH43BD9171,MH43AR8769,,,,,https://drive.google.com/file/d/17fndNwOSpN9Ah1XvzviFnStEX5BBksXX/view,https://drive.google.com/file/d/1I2YnoXhJMPngCebL_PqBwRb_TFN8RWjM/view,,
// PATEL MAHESH NARAYANBHAI,2015,9619601194,mujaspatel@gmail.com,1,1,0,OWNER,MH43AM4612,,MH04HM8261,,,,https://drive.google.com/file/d/1SuEO7p9xIdoghQbVbWruNqQFi2Zh0Wex/view,https://drive.google.com/file/d/1N87kbHbm9spMRi53xncjvHY_FxHmKNR5/view,https://drive.google.com/file/d/17Ca6d2AEU0NtxLYA-pXOJZHyJ5gVKAXw/view,,
// GHANSHYAM PARYANI,2016,7738009594,ravi.gsaimpex@gmail.com,N/A,1,0,OWNER,MH04JZ0617,,,,,,https://drive.google.com/file/d/10TFgrMIJ1_0GubZ9PhR3Ou9qfw3sqGVm/view,https://drive.google.com/file/d/1HRbJVd3UaKsU1oTCULs8oRAOtgzoBr1a/view,https://drive.google.com/file/d/1SwEph5-sm1SCDO1v96jVMIZThn1Xu1ML/view,,
// ANARADEVI AMRUTLALVAISHYA,2101,8779145562,,N/A,2,8311,OWNER,,,,,,,,,https://drive.google.com/file/d/1Nqpmz7JV3ymAjnTKG-G8_n0KfmZ6bywS/view,,
// SHENOY SHANTHARAM BABURAO,2102,9867375831,,1,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1m67HyVB9cFP7Npwm4kG6EehVVxv5uuHk/view,https://drive.google.com/file/d/1zCDI6g2-VzG2Fw99nxKY8WSkbrWFiZVu/view,https://drive.google.com/file/d/1vYOF73SPT9SJr9Ihnt6hgjGEAp93asAW/view,,
// PANDEY SANJAY JOKUPRASAD,2103,9821869998,,1,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1HsyCgWJNE3DAtU-YkEbDAXGqZQxWGaE_/view,https://drive.google.com/file/d/1jKGPheAL8AvOVVbH7v1X9XRaVu7i0znP/view,https://drive.google.com/file/d/1SUgpU7F_w0ej0UPgQRgKaxm9GK3wvaPX/view,,
// CHAUHAN PARESHKUMAR CHUNNILAL,2104,9221284271,,N/A,2,3505,OWNER,,,,,,,https://drive.google.com/file/d/1yt4G31EZ5HbQhPUluqsIMuNMFa2Y5bHq/view,,https://drive.google.com/file/d/1oekaYCOYdcg5IDcGn4mX6x_CzZ-lcpaW/view,,
// DOSHI ARUNA ROHITKUMAR & DOSHI ROHITKUMAR CHABILDAS,2105,9825227990,,N/A,N/A,-11633,OWNER,,,,,,,,https://drive.google.com/file/d/1sbnKfUxm27NhDJZyPnx9KsF34AgEG76Z/view,https://drive.google.com/file/d/1ov5zhlE_G050zfD5zgH7S0asTF34QNIt/view,,
// MEMON ISMAIL SULEMAN,2106,9322112444,,N/A,1,3646,TENANT,,,,,,,https://drive.google.com/file/d/11DpA6ehOXlKgy2GFWTyxgCLLN-QrBQ3M/view,,https://drive.google.com/file/d/1_xuPIxYQwDZSbLlB2kXTp4DkEww7gciw/view,,
// SHAH RAJESH J. & PINA R. SHAH,2107,9821718206,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1lK0Ox8d8643zAy-jYkqv6AYoylRUmH3W/view,https://drive.google.com/file/d/1IX1SGaXUcc1LTw2BG6bG-qf5Jb_Jhay1/view,https://drive.google.com/file/d/1mPkuHEiaV2KIO5F5URGA0BwlfYfuC_02/view,,
// SAVLA CHANDRAKANT LALJI & SAVLA KUSUM CHANDRAKANT,2108,9320573646,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1BOGZeB01njaYO6uaSjpKVmCsi93pZiUD/view,,https://drive.google.com/file/d/1mYSP-3V35Vo5TMcaC8RPXtqW7lldHrVu/view,,
// PANGE RAJENDRA JAGANNATH,2109,8369584821,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1j7H-dtu89E6n0JqXU9rX1Vev9bxwLon6/view,https://drive.google.com/file/d/1HjAbmYEkkrAu2LHaEOSAPX9QIEbDEPoi/view,https://drive.google.com/file/d/18MVjTMFsSScKE7gpgv2AuotqORNjL8KK/view,,
// MANVEL VARSHA SAMSON,2110,9867480237,,N/A,1,3205,OWNER,,,,,,,https://drive.google.com/file/d/1rC827_GfL43-E_V8bgyYcUrCtm3-Wuw1/view,,https://drive.google.com/file/d/1LzNznUn2aMu0x00d0dRTB-5UXJo3O2X4/view,,
// THORAT CHANDRAKANT KRISHNA,2111,9867775031,,N/A,N/A,10766,OWNER,,,,,,,,,https://drive.google.com/file/d/1fRsr0tdEMJ9wxtNCBv4apEoWleiKTWyT/view,,
// BANKAR SHAILAJA ASHOK,2112,8655553495,,N/A,1,3205,OWNER,,,,,,,https://drive.google.com/file/d/1tYJharVlB7hJzGlUNT72UmVV-N4ljBsm/view,,https://drive.google.com/file/d/1QX8AiFWWM8D6FZ9K2qlWPMx-1hwrl80Z/view,,
// TRIVEDI BHUPENDRA HIMMATLAL & HANSHA BHUPENDRA TRI VEDI,2113,9702458333,bhupendra.rtc@gmail.com,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1Ikxa-3xTBFee5EwF7vHgxqv1I_u_oret/view,https://drive.google.com/file/d/1DGxUgeHZ3fvlmZ1f5_9O8bzqxbgwiEHB/view,https://drive.google.com/file/d/1TKhJburjbOuafEucCeLgdysgizXUvrnH/view,,
// SHINDE UJWALA VIJAY,2114,9987803777,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1c8QiB68MAvpFrK6ABLRDzxdFho5dyQFG/view,https://drive.google.com/file/d/10Bc-RqY8qv5P4qR-8Yyc1RKe8oThrSNf/view,https://drive.google.com/file/d/1JAg3mXVSNptmF2ZrMkECqZYyde1IMbDX/view,,
// SHETH BHANUMATI SHANTILAL,2115,9769286721,,N/A,N/A,2905,OWNER,,,,,,,https://drive.google.com/file/d/17wkA_ulUTYG9oF6fnez72jilcn8ekaP-/view,,https://drive.google.com/file/d/1BABP4o_HUMfTNfEVz_jsncajbNiBBleO/view,,
// KHANDEKAR SANJAY SHRIPATI,2116,9869416181,,N/A,1,0,TENANT,,,,,,,https://drive.google.com/file/d/1-Ln46Kt41gYMWNdFcYZtdn0QdNvP3kLF/view,https://drive.google.com/file/d/1bDKQDxXSw-C576XZAOfDo-7_zoO5Df2b/view,https://drive.google.com/file/d/13bpIJHVMgjEfQQ5lTQXEHupbJAEq58zx/view,,
// MRS. SUWARNA GANESH & MR. GANESH VASANT DERE,2201,9819282264,,N/A,N/A,0,TENANT,,,,,,,,https://drive.google.com/file/d/1Zw0bApf8iN7t5LrbBLg8JvluQLGwznc8/view,https://drive.google.com/file/d/1dNHI_W-5U4h9cBeinjrvE_Di7Np23urW/view,,
// MR. DHANANJAY GAHINAJI & MRS. SUVARNA DHANANJAY THORAT,2202,9821393767,,N/A,N/A,-3760,OWNER,,,,,,,https://drive.google.com/file/d/1Dm6NfkI9JAbg4fmwcspRKHe_u0LKxazc/view,,https://drive.google.com/file/d/1u8WxAAwIK8_pADOxGorcN_nDK1GdWWTt/view,,
// NITESH KUMAR PARASMAL BAFNA,2203,,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1D7Oi_N0wcqmJKRMRxaolbyDglLdYA8jQ/view,https://drive.google.com/file/d/1Mxhnop48FFSF6tZw2uYirW3rdmbmXZam/view,https://drive.google.com/file/d/1vgzIXemxLDFzpQhGIFrQz8zkhBEjD4GN/view,,
// ALKABEN H CHOLERA &. PALAK ATULBHAI THAKKAR,2204,9824327506,,N/A,1,-1743,OWNER,,,,,,,https://drive.google.com/file/d/1FqbiYm_bfkwjlX3YR1JhDKFunbuLMUbp/view,,https://drive.google.com/file/d/1pu8AsKgLe-3Bd_Pd7b6jJlA_4EmhBF65/view,,
// JAGTAP SURESH NARAYANRAO & MANDAKINI SURESH JAGTAP,2205,9820737200,,N/A,N/A,-3570,TENANT,,,,,,,https://drive.google.com/file/d/1mymZOWF7O6OE4F6g2zTU433uToCocFXW/view,,https://drive.google.com/file/d/1Mgt6yiJcZ51KMSuDKhPMHWPdndKXsovT/view,,
// JADHAV SIDDHI SANTOSH,2206,9969025335,,N/A,1,0,OWNER,,,,,,,,https://drive.google.com/file/d/1curUY0749S3K4BbsSt974g2Fz0JjcDNx/view,https://drive.google.com/file/d/1TVJ105X9xHeE9ln2Q93B19rowMFmWgd4/view,,
// TRIVEDI ANIL R & PRADEEP R & BHUPENDRA R & SANJAY R,2207,9967542020,,N/A,1,0,TENANT,,,,,,,,https://drive.google.com/file/d/1O_Jvwgr00QmPATb7Plbr1WbaoYqgatUy/view,https://drive.google.com/file/d/1OmcN_oTeDaRXuiHdw--BODVUc_4W7Z3H/view,,
// SINGH RAMSUBHAG M. & SHIVLAL M. SINGH &,2208,9323251919,,N/A,3,0,TENANT,,,,,,,https://drive.google.com/file/d/1s622Z1Ge09L2FR99n4Q51Kc2VSwTVfUA/view,https://drive.google.com/file/d/1u1acuJKr_H9KHpF9FEIEs-agxOBsHqpm/view,https://drive.google.com/file/d/1Z1nSSZxbUk7mBAG_1PoqPQrvrGi_FoeP/view,,
// GIDE KAILASH DATTARAYA & SAVITA KAILASH GIDE,2209,9987764946,,1,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1PWBVV0iJ4kRV-H3BZjtPSZveCuXGgcjX/view,https://drive.google.com/file/d/1ELIITXogez1qMX-VGmiKS9nezT6c32kC/view,https://drive.google.com/file/d/1xrv1ReZ3d0b8Xo8hcqcTPLUk56PX-AG7/view,,
// DAVE NARAYAN KISHANLAL,2210,9819893441,,N/A,1,0,TENANT,,,,,,,https://drive.google.com/file/d/1Z8vsF7mpHBdLxpdeLUbkyCgmmwfl9a_T/view,,https://drive.google.com/file/d/1qt0ohFBHseVC3GUbAJMbm0Smh3rky8Xc/view,,
// MR. KAPIL DHARMSHI PATEL,2211,9819508296,,1,N/A,0,OWNER,,,GJ12FC5555,,,,,https://drive.google.com/file/d/1OtI234uEbO9-W85KD7oL8P4HZMF_IBYD/view,https://drive.google.com/file/d/1qNso7jKZXRCmR6ELSOvi3L0-yfYNc3LV/view,,
// MAKHARIA ATUL S.,2212,,,N/A,1,3646,TENANT,,,,,,,,,https://drive.google.com/file/d/1sGYKsEs7d0CKlF2-1YDRjKOXpdzBKfnr/view,,
// AGRAHARI SURESH M. & AGRAHARI NISHA SURESH,2213,9699926184,,1,1,9929,OWNER,,,,,,,,,https://drive.google.com/file/d/1XnL0BtEHkpqwF3tsxOmDdK6S8K00XALh/view,,
// MEHTA MAHENDRA PRANJIVANDAS,2214,9892704307,,N/A,1,35984,OWNER,,,,,,,,,https://drive.google.com/file/d/1KR_vdAu95OKDhWUEuNtaxRHwAWT2WLFx/view,,
// M/S. RAMESHKUMAR GOPALDAS,2215,9820021235,,N/A,2,0,OWNER,,,,,,,,,https://drive.google.com/file/d/1JxoYBxaewFPzc4rQCKM1orzG-cuYyZ_y/view,,
// DALVI RUTUJA ROHIT & DALVI ROHIT SHANKAR,2216,8652322099,,1,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1dfPI9ZeLUA50WMwBVUGdIyEIMg8mkR-L/view,https://drive.google.com/file/d/1tI7I369Wefu1-YQCjlu1J4LRxggJvuD2/view,https://drive.google.com/file/d/1J7hRV0w9Tk-mYXVQlDuyxyZWa9CrUiRz/view,,
// KANSE LAXMI JANARDAN,2301,9833033031,,N/A,1,9219,OWNER,,,,,,,,,https://drive.google.com/file/d/1__M4NETeBepzRIw8BnSIklKrweLIrR5C/view,,
// KANSE JANARDHAN RAMBHAU,2302,9833033031,,N/A,1,9660,TENANT,,,,,,,,,https://drive.google.com/file/d/1gxxh-t7gAz65PLtyEBJdOR7zI7aMwVqY/view,,
// Mr. JITENDRA JAMNADAS ASHAR,2303,8080735442,,N/A,N/A,-3,OWNER,,,,,,,https://drive.google.com/file/d/1XZ7MP5OKUWr8Jp1hYFmwO0Rg55lEWhVK/view,,https://drive.google.com/file/d/1781l8Wx8SIMBVdP6dVi-ri5Z6Iu7A9KP/view,,
// URADE RAJU PRALHAD,2304,9322516162,,N/A,N/A,30518,TENANT,MH43BM4939,,,,,,,,https://drive.google.com/file/d/1T8NoSwpKScXCirHoq0EIVT8UR3P1vcPz/view,,
// KENIKAR ANIL VITHAL,2305,9869031904,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1spq3vIzG38un-0wKy3ooErxRVpJdy52f/view,https://drive.google.com/file/d/1MFXeaOPokEoW3zGsJUNEyQURD-vkqRC_/view,https://drive.google.com/file/d/1kN38G8eIOxWWeQ-lXboff-kcD5VvFaxl/view,,
// ARJUN SHYAMLAL YADAV & HARINDRA YADAV,2306,9819871305,,N/A,N/A,0,OWNER,,,,,,,,https://drive.google.com/file/d/1TmDIWsubhTRkV79bvd6R_eWRyy3UaRs5/view,https://drive.google.com/file/d/1catj_BVQf6pLHh49ySIsaMGBbo1uc1sF/view,,
// LALAN CHANDRIKA LAHARCHAND & LAHARCHAND KALYANJI LALAN,2307,9967012466,,N/A,N/A,2905,OWNER,,,,,,,https://drive.google.com/file/d/1dqIWnxYALgJ0_Q163D5E8mD3vEb_GbmN/view,,https://drive.google.com/file/d/1Quxm5tG6QTbKmWQ_gL8_clyO514iH94u/view,,
// METHA MOHANLAL G. & VANDANA M. METHA,2308,9821876303,mohm1561956@gmail.com,N/A,1,0,TENANT,,,,,,,,https://drive.google.com/file/d/1yNxFzdlRJVD80rorcr9a1PE5kmhH_No4/view,https://drive.google.com/file/d/10396RnOiqXgpAkjATY2QAB9N5YS_BRnF/view,,
// PATEL KOKILA CHANDU,2309,9820032377,,N/A,1,0,TENANT,MH01CG1496,,,,,,,https://drive.google.com/file/d/11K-R-1Zs4_WPZbZr3S7QPHJWHYmjD-UE/view,https://drive.google.com/file/d/1L2viRRfBmLD0Ly5vJGRREZTdp9unzJaj/view,,
// MORE SHANTARAM SHIVRAM,2310,9821532606,,N/A,N/A,9210,TENANT,,,,,,,,,https://drive.google.com/file/d/1hu50NperHkNguZ9lKiGtGpv3oa_8Lvnl/view,,
// MR. KIRAN DAMJI MANGE,2311,9967552628,,1,1,296,OWNER,,,,,,,,https://drive.google.com/file/d/1dpcRSq67cpDiVAtYs-wJa5EFinHyEcZ1/view,https://drive.google.com/file/d/1sxrLAIofsFbp2w37C6MOcIX7woNKPysw/view,,
// BHANUSHALI VALLABHJI K. & VIMLABEN V. BHANUSHALI,2312,9930898750,,1,1,0,OWNER,MH43AY6058,,MH13AN5767,,,,https://drive.google.com/file/d/1Jk2NqtyWLaZtNikeLXqY37LII_evim0T/view,https://drive.google.com/file/d/1ScfKyGJbinWK24x2Iqapz-3pByqQpJRv/view,https://drive.google.com/file/d/1tbWCmEjW26ziDYLeNroHt3zo7iR7yZ-u/view,,
// THAKKAR NITIN SHIVJIBHAI,2313,8691022390,,N/A,2,0,OWNER,,,,,,,https://drive.google.com/file/d/1PMlSSy5K0DvyjiONmHR1vBQoBFJ1QYQH/view,https://drive.google.com/file/d/1XkeaqDbNZ0Bn9va6CSwuRyStNEsJ_sgb/view,https://drive.google.com/file/d/1782v87bC7Fx8Ndc73uc8NQm-hVottLmG/view,,
// VIRENDRAKUMAR AMRUTLAL VAISHYA,2314,9821393350,,N/A,N/A,2905,OWNER,,,,,,,https://drive.google.com/file/d/1am8_gfjTxPht-hT7yf6yIEMxKo8t5Hnp/view,,https://drive.google.com/file/d/14Q1BkXFL1nqy8ESfOkebbxyroGOFISh_/view,,
// HOLKAR CHANDRAKANT RAMCHANDRA,2315,8976991885,,N/A,N/A,0,OWNER,,,,,,,https://drive.google.com/file/d/1Vggp7cnTA1K43li_3EAgE6D54mkOqFgZ/view,https://drive.google.com/file/d/1PcrUIwxhfNPwow6-N6HkxajOLV6mfBr6/view,https://drive.google.com/file/d/1BEMF6zzMtav4fjAVq56G2ZTUwX7JI3FB/view,,
// HOLKAR CHANDRAKANT RAMCHANDRA,2316,8850233176,,N/A,1,0,OWNER,,,,,,,https://drive.google.com/file/d/1RIP1fjzdaxOCj6zXIAZ2IfJ4QTu96EXl/view,https://drive.google.com/file/d/1f-nAXgxwNfN-3Rm3kHHNtsEt6DfG6J0U/view,https://drive.google.com/file/d/1Mkr9sD9aZqk5f80pOaxacNVJv6DuSb7Z/view,,
// `

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("requestForm");
    const submitButton = form.querySelector("button[type='submit']");

    submitButton.addEventListener("click", function () {
        setTimeout(() => {
            form.reset();
        }, 1000);
    });
});

let flatData = [];

fetch('asset/member_details.csv')  // Make sure the path is correct and public
    .then(response => {
        if (!response.ok) {
            throw new Error('CSV file could not be loaded');
        }
        return response.text();
    })
    .then(csvData => {
        const lines = csvData.trim().split('\n');

        flatData = lines.slice(1).map(line => {
            const [
                ownerName, flatNo, phno, email, fourwheel, twowheel, balance, occupancy,
                TwoWNo, SecondTwNo, FourWNo, decBill, decRec,
                patraBill, patraRec, MarchReceipt, MarchBill,
                vehicleImage1, vehicleImage2
            ] = line.split(',').map(item => item.trim());

            return {
                ownerName, flatNo, phno, email, fourwheel, twowheel, balance, occupancy,
                TwoWNo, SecondTwNo, FourWNo, decBill, decRec,
                patraBill, patraRec, MarchReceipt, MarchBill,
                vehicleImage1, vehicleImage2
            };
        });

        console.log('CSV Data Loaded:', flatData);
    })
    .catch(error => {
        console.error('Error loading CSV:', error);
        console.log('Error loading member data. Please check the console for details.');
    });




// let flatData = [];

// const lines = csvData.split('\n');
// flatData = lines.slice(1).map(line => {
//     const [ownerName, flatNo, phno, email, fourwheel, twowheel, balance, occupancy, TwoWNo, SecondTwNo, FourWNo, decBill, decRec, patraBill, patraRec, MarchReceipt, MarchBill, vehicleImage1, vehicleImage2,] = line.split(',').map(item => item.trim());
//     return { ownerName, flatNo, phno, email, fourwheel, twowheel, balance, occupancy, TwoWNo, SecondTwNo, FourWNo, decBill, decRec, patraBill, patraRec, MarchReceipt, MarchBill, vehicleImage1, vehicleImage2 };
// });

// window.onload = function () {
//     document.getElementById("alertPopup").style.display = "flex";
// };

// // Close popup when clicking anywhere outside the popup box
// document.addEventListener("click", function (event) {
//     const popup = document.getElementById("alertPopup");
//     if (event.target === popup) {
//         closePopup();
//     }
// });







function triggerSearch(event) {
    if (event.key === "Enter") {
        searchFlat();
    }
}


function showPopup(message) {
    document.getElementById("popupMessage").innerText = message;
    document.getElementById("customPopup").style.display = "flex";
}


function closePopup() {
    document.getElementById("alertPopup").style.display = "none";
    document.getElementById("customPopup").style.display = "none";
}


function searchFlat() {
    let searchInput = document.getElementById('searchInput').value.trim().toUpperCase();
    let searchPhoneInput = document.getElementById('searchMobileNo').value.trim(); // Get phone number input
    document.getElementById('searchInput').value = "";
    document.getElementById('searchMobileNo').value = ""; // Clear input after search

    // if (!searchInput || searchInput.length < 2) {
    //     alert("Enter Flat No!");
    //     return;
    // }

    if (!searchInput && !searchPhoneInput) {
        showToast("Please enter both Flat No and Mobile No!", "info");
        return;
    } else if (!searchInput) {
        showToast("Please enter Flat No!", "info");
        return;
    } else if (!searchPhoneInput) {
        showToast("Please enter Mobile No!", "info");
        return;
    }

    document.getElementById('searchInput').value = "";
    document.getElementById('searchMobileNo').value = ""; // Clear inputs after search

    // Normalize input for flat numbers
    const normalizedFlatNo = normalizeFlatNo(searchInput);

    const result = flatData.find(flat =>
        (normalizedFlatNo && flat.flatNo === normalizedFlatNo) || // Match normalized flat no
        (flat.TwoWNo && flat.TwoWNo.toUpperCase() === searchInput) ||
        (flat.FourWNo && flat.FourWNo.toUpperCase() === searchInput) ||
        nameMatches(flat.ownerName, searchInput) // Match owner name
    );

    const resultCard = document.getElementById('resultCard');
    resetField();

    if (result) {

        if (searchPhoneInput !== result.phno.trim()) {
            showToast("Kindly Enter Registered PhNo! Contact Office", "error");
            resultCard.style.display = 'none';
            return;
        }

        showToast("Login successful!", "success");

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
        bills(result);
        checkEmail(result);

        resultCard.style.display = 'block';

        resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });


    } else {
        resultCard.style.display = 'none';
        showToast("Flat not found!");
    }
}

// Function to search by phone number directly
function searchByPhoneNumber() {
    let searchPhoneInput = document.getElementById('searchMobileNo').value.trim();

    if (!searchPhoneInput) {
        alert("Please enter a phone number!");
        return;
    }

    const result = flatData.find(flat => flat.phno && flat.phno.trim() === searchPhoneInput);

    if (result) {
        document.getElementById('searchInput').value = result.flatNo; // Auto-fill flat number
        searchFlat(); // Call the main search function
    } else {
        alert("No matching flat found for this phone number!");
    }
}




function checkApplication(event) {
    event.preventDefault(); // Prevent default form submission

    const form = document.getElementById("requestForm");

    // Get individual fields
    const flatNo = form.querySelector('input[name="FlatNo"]').value.trim();
    const ownerName = form.querySelector('input[name="OwnerName"]').value.trim();
    const mobile = form.querySelector('input[name="Mobile No"]').value.trim();
    const message = form.querySelector('textarea[name="Message"]').value.trim();

    // Validate each field
    if (!flatNo) {
        showToast("Please enter your Flat No.", "info");
        form.querySelector('input[name="FlatNo"]').focus();
        return false;
    }

    if (!ownerName) {
        showToast("Please enter your Name.", "info");
        form.querySelector('input[name="OwnerName"]').focus();
        return false;
    }

    if (!mobile) {
        showToast("Please enter your Mobile No.", "info");
        form.querySelector('input[name="Mobile No"]').focus();
        return false;
    }

    if (!message) {
        showToast("Please write the message.", "info");
        form.querySelector('input[name="Message"]').focus();
        return false;
    }

    // ✅ If all fields valid
    showToast("Form details filled! Submitting...", "success");

    // Delay form submission slightly to let user see the toast
    setTimeout(() => {
        form.submit();
    }, 1200); // 1.2 seconds
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

    if (result.MarchReceipt) {
        const marchReceiptBtn = document.getElementById('marchReceiptBtn');
        marchReceiptBtn.style.display = "inline-block";
        marchReceiptBtn.onclick = () => {
            console.log("Opening URL:", result.MarchReceipt); // Debugging
            window.open(result.MarchReceipt, '_blank'); // Use correct property
        };
    } else {
        document.getElementById('marchReceiptBtn').style.display = "none";
    }

    if (result.MarchBill) {
        const marchBillbtn = document.getElementById('marchBillbtn');
        marchBillbtn.style.display = "inline-block";
        marchBillbtn.onclick = () => {
            console.log("Opening URL:", result.MarchBill); // Debugging
            window.open(result.MarchBill, '_blank'); // Use correct property
        };
    } else {
        document.getElementById('marchBillbtn').style.display = "none";
    }



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

function normalizeFlatNo(input) {
    // Extract digits only
    let digits = input.replace(/\D/g, ""); // Remove all non-numeric characters

    // Ensure 4-digit format: If only 3 digits, insert '0' in 3rd place
    if (digits.length === 3) {
        digits = digits.substring(0, 2) + "0" + digits.substring(2);
    }

    return digits.length === 4 ? digits : null; // Ensure it's exactly 4 digits
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




window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});


// Image Pop Up Functionality

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("popupModal");
    const modalImg = document.getElementById("popupImg");
    const closeModal = document.querySelector(".close");

    // Select all images with the custom data attribute "data-popup"
    document.querySelectorAll("img[data-popup='true']").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    // Close modal when clicking close button
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});



// Show popup when page loads
