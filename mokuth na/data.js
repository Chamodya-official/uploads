const fs = require('fs');
if (fs.existsSync('exam.env')) require('dotenv').neon({ path: './exam.env' });
DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
// BASE : ex

module.exports = {
  VERSION: 'v1.0.0',
  TEST: 'mytest',
  EXAM: 'EXAM',
  OL: '*O/L*',
  AL: '*A/L*',
  
  // ---Subjects----
  SIN: '*SINHALA*',
  SCI: '*SCIENCE*',
  MTS: '*MATHEMATICS*',
  HIS: '*HISTORY*',
  ENG: '*ENGLISH*',
  BUD: '*BUDDHISM*',
  TAM: '*TAMIL*',
  MUS: '*MUSIC*',
  DRA: '*DRAMA*',
  ART: '*ART*',
  DANO: '*DANCING (ORIANTAL)*',
  DANB: '*DANCING (BHARATH)*',
  TAML: '*TAMIL LITERATURE*',
  SINL: '*SINHALA LITERATURE*',
  ENGL: '*ENGLISH LITERATURE*',
  
  // ---YEARS----
  Y14: '*2014*',
  Y15: '*2015*',
  Y16: '*2016*',
  Y17: '*2017*',
  Y18: '*2018*',
  Y19: '*2019*',
  Y20: '*2019*',
  Y21: '*2021*',
  

// LINKS



// MAIN SUBJECTS
//--------  SINHALA (A) ---------
  A2015: 'https://drive.google.com/u/1/uc?id=1U_t8jKrz18ddPQlK5rB8qpiEEFVddY-y&export=download',
  A2016: 'https://drive.google.com/u/1/uc?id=1peVcERkRhtmd7NEO_DC2A1pSGRguFVq3&export=download',
  A2017: 'https://drive.google.com/u/1/uc?id=1tvCVvVOinMRWSJ3wDABk3EXOlPg2t6wJ&export=download',
  A2018: 'https://drive.google.com/u/1/uc?id=1b0MbaxwVglsEEPQDHoooWBvKQZWI7zmv&export=download',
  A2019: 'https://drive.google.com/u/1/uc?id=1xR7XD1UmWsT34szD9rLYWIgk9Vs7GIh5&export=download',
 
//--------  SCIENCE (B) ---------
  B2015: 'https://drive.google.com/u/1/uc?id=1H3hNTTmWi0BrRHoIxm38y0WxY-MNGWMH&export=download',
  B2016: 'https://drive.google.com/u/1/uc?id=1yOrVwZ33d7pvNQBQU9oU5-NvOCaF4KL-&export=download',
  B2017: 'https://drive.google.com/u/1/uc?id=1Fr1o3xnpLP2b1CZjxpTAK8LztaFksQZV&export=download',
  B2018: 'https://drive.google.com/u/1/uc?id=1XdmtBupVoLhKLJQ1LIU0gFgNkfattbqL&export=download',
  B2019: 'https://drive.google.com/u/1/uc?id=1OA3oZnCoO0ulhpElrWVKbkHGUXdaQMcX&export=download',

//--------  MATHS (C) ---------
  C2015: 'https://drive.google.com/u/1/uc?id=1zDO2vh1sFXbS0ryB-gn7oUI0r1sz9PJx&export=download',
  C2016: 'https://drive.google.com/u/1/uc?id=1nd2SAxXqMaSP_ufpsLHl52IuQ_xC1gHA&export=download',
  C2017: 'https://drive.google.com/u/1/uc?id=1rdP-Pr4Z03MOObfrDrdxeXroWcPoucDL&export=download',
  C2018: 'https://drive.google.com/u/1/uc?id=1Lhmi9BhS5KpCX9cXWJhuNtGFShIE9JOJ&export=download',
  C2019: 'https://drive.google.com/u/1/uc?id=1Iaz4nvnQgFLXBSiWGcw-seSNF-VJ_TcZ&export=download',
 
//--------  HISTORY (D) ---------
  D2015: 'https://drive.google.com/u/1/uc?id=1SqX403DGSSaASyL2CrVgeXE62acOv2Ma&export=download',
  D2016: 'https://drive.google.com/u/1/uc?id=1pVo_v5WWn1EVjbeuCFzpFRqWJGvbLGZ5&export=download',
  D2017: 'https://drive.google.com/u/1/uc?id=1KlqXmqF-mr-YomNKzp-GcvTQARStVevc&export=download',
  D2018: 'https://drive.google.com/u/1/uc?id=1YRZ8EaBOK0cLBupq5G2iWq47o8ZaYI5S&export=download',
  D2019: 'https://drive.google.com/u/1/uc?id=1nbuNeGWjUfhv35XfeIhzStaTlIugakPo&export=download',

//--------  ENGLISH (E) ---------
  E2015: 'https://drive.google.com/u/1/uc?id=1bKb6Pga8Uj0UsptFlFC0Nk2K-soZSkYG&export=download',
  E2016: 'https://drive.google.com/u/1/uc?id=1gGZHaWKWV37iN_M_uB-KpdXWVMdSN7Dc&export=download',
  E2017: 'https://drive.google.com/u/1/uc?id=12GJyfoKAUzfWO-Kq0HwuNOJqgBpv1yli&export=download',
  E2018: 'https://drive.google.com/u/1/uc?id=1AN_sxwStnv3f9qHErZ787mJdNS55cRKm&export=download',
  E2019: 'https://drive.google.com/u/1/uc?id=1lWurxFWO_ac4LDMU2xihk6pNDWU0XWuL&export=download',

//-------- BUDDISM (F) ---------
  F2015: 'https://drive.google.com/u/1/uc?id=1rsZjWtlG_E4bBOfVvplhSjh8DCQf1oIr&export=download',
  F2016: 'https://drive.google.com/u/1/uc?id=1c83uWoiHRLRHH5WCSvl64W8uwH92nCz_&export=download',
  F2017: 'https://drive.google.com/u/1/uc?id=1pH6s_az5pHlsuLkEuezJsgSKqqYy-9Zu&export=download',
  F2018: 'https://drive.google.com/u/1/uc?id=1EAe5YlmAWxqOzpYYjKAZdNb56z4gretn&export=download',
  F2019: 'https://drive.google.com/u/1/uc?id=1YivtEv6GOKlHBKPMbgTNBZBmnVTVY82f&export=download',



//SECOND BRACKET SUBJECTS
//-------- TAMIL (G) ---------
  G2015: 'https://drive.google.com/u/1/uc?id=1ytZaaHkLOGRZfK7yQa-6feoKUV-thIDI&export=download',
  G2016: 'https://drive.google.com/u/1/uc?id=13CtZaHvaG6ZQJ-e58YF0648poVMr6myR&export=download',
  G2017: 'https://drive.google.com/u/1/uc?id=19w5CeGhQZw_jkTlFJE0xu9nVER3t3W1H&export=download',
  G2018: 'https://drive.google.com/u/1/uc?id=186J4lwjBqlyNiNyzjp2wU2Wu5eXKsKa1&export=download',
  G2019: 'https://drive.google.com/u/1/uc?id=19W26PHBt7HSwwhbIEhULVO4FTe_YwjFz&export=download',

//-------- MUSIC (H) ---------
  H2015: 'https://drive.google.com/u/1/uc?id=1zzEKOGG_zG3G4pgtPPbG82hg0fo1KGDy&export=download',
  H2016: 'https://drive.google.com/u/1/uc?id=1R1el_E5KAfNGu2RMqZRzy69uVXkBxz83&export=download',
  H2017: 'https://drive.google.com/u/1/uc?id=1Gnkp-Fq0Q2F0ps9peCBZS7MZnKl6j9hs&export=download',
  H2018: 'https://drive.google.com/u/1/uc?id=1RgkLM3yshybZSDVXYb7cSZOGDDfOoySP&export=download',
  H2019: 'https://drive.google.com/u/1/uc?id=1-H7VafLre7bSeqwVxh2i3GJ1g9ZFndlD&export=download',

//-------- DRAMA (I) ---------
  I2015: 'https://drive.google.com/u/1/uc?id=1O2h9f7sPpQRiiSIE3MDV0bjOKgbi38Nu&export=download',
  I2016: 'https://drive.google.com/u/1/uc?id=1RX3LOohzLdJNR0KhbUOWw5AR96oF8jtz&export=download',
  I2017: 'https://drive.google.com/u/1/uc?id=1FqJxrKIoKnlX9izo41AmzH7tcEZTYuNO&export=download',
  I2018: 'https://drive.google.com/u/1/uc?id=1WrJ5PaWLV-7E--a1khKfgbNePRu05WLr&export=download',
  I2019: 'https://drive.google.com/u/1/uc?id=18VJTP949Sunp-ucep7zpwKHIPwVKZ26N&export=download',  

//-------- DANCING ORIANTAL (J) ---------
  J2015: 'https://drive.google.com/u/1/uc?id=1YYIe2xykgVXKICmefLBVMj_jn5ciSblS&export=download',
  J2016: 'https://drive.google.com/u/1/uc?id=1ftfWUIXv3fV5N-iWbUuy_NcCeGipf-qU&export=download',
  J2017: 'https://drive.google.com/u/1/uc?id=1YCGeu_A5flDATehxKuWEyDsw-MXquSzR&export=download',
  J2018: 'https://drive.google.com/u/1/uc?id=1vCZm7bPnLVMCS9wxYd3YCwE0J6cIASUO&export=download',
  J2019: 'https://drive.google.com/u/1/uc?id=1fe_QIxgEif_Qn9cO--8VQX0aarx9JdV_&export=download',  

  //-------- DANCING BHARATH (K) ---------
  K2015: 'https://drive.google.com/u/1/uc?id=16bfXDUuZ72lz2_DRQbJUivj1q15yRAyk&export=download',
  K2017: 'https://drive.google.com/u/1/uc?id=12OeongQvWKgMdSoYhkhlzh47ZlYsS9PT&export=download',
  K2018: 'https://drive.google.com/u/1/uc?id=19rfCUaEUb_IAo6xEYEaeMj7q5s6YLh9b&export=download',
  K2019: 'https://drive.google.com/u/1/uc?id=1DSB2EdWzG2gaDpUT50R0iXy-oYFukOPV&export=download',  

//-------- ART (L) ---------
  L2015: 'https://drive.google.com/u/1/uc?id=1yHSQNE4hm6gPgH8E_FVdkTjZx2_J1jgR&export=download',
  L2016: 'https://drive.google.com/u/1/uc?id=11GoHBK0C-UWa5rsNPs_xZ-31DbClhfA4&export=download',
  L2017: 'https://drive.google.com/u/1/uc?id=1HBOXMvcUqGwvTkaOTJGTAvuYcm_2uNh0&export=download',
  L2018: 'https://drive.google.com/u/1/uc?id=1Xuz5QTDs6d8Bky0CWlwDRQHE_xQ272T5&export=download',
  L2019: 'https://drive.google.com/u/1/uc?id=1kIg5g9FM4CTa9jm-A3HLR73aj5MAvvmY&export=download',  

//-------- TAMIL LIT (M) ---------
  M2015: 'https://drive.google.com/u/1/uc?id=10Xqwx3X8hNdbMvnrEXdxAaOrd8vJgleT&export=download',
  M2016: 'https://drive.google.com/u/1/uc?id=1J6lJIufdFF65wzJOHTxj64iIftNpT_sM&export=download',
  M2017: 'https://drive.google.com/u/1/uc?id=1DtF3bDNLT6KtpEF7aX_7OcvuNqwFjdq6&export=download',
  M2018: 'https://drive.google.com/u/1/uc?id=1STof7uc05KGbnrNFTMsKuVMEnMPdF96o&export=download',

//-------- SINHALA LIT (N) ---------
  N2015: 'https://drive.google.com/u/1/uc?id=1AThWxYwumMcq7wYgPWHe_yyWS1GdRseV&export=download',
  N2016: 'https://drive.google.com/u/1/uc?id=11EsgZnEY_9r1Qp2037lS9vIcatnqwFKX&export=download',
  N2017: 'https://drive.google.com/u/1/uc?id=1-yPG5z46vSt6HlTgVypYkFEBfLU1UN6H&export=download',
  N2018: 'https://drive.google.com/u/1/uc?id=1zEQwndjlkDE3GIHyhrzl9OmFgB8TJGyq&export=download',
  N2019: 'https://drive.google.com/u/1/uc?id=10_flMq0B8c3kNeUqjO64WavsH93pAc8Z&export=download',  

//-------- ENGLISH LIT LIT (O) ---------
  O2015: 'https://drive.google.com/u/1/uc?id=1KTBaqHoUtQaUID88cq68g6g0apli2nvl&export=download',
  O2016: 'https://drive.google.com/u/1/uc?id=14Np2ItrYSHFzZgdparhg4XMSne2LMyzx&export=download',
  O2017: 'https://drive.google.com/u/1/uc?id=1L82DwFreYlJn4LyNj2g2nyh0R6cGGSQj&export=download',
  O2018: 'https://drive.google.com/u/1/uc?id=1-7nYuPMgLyc3wlBb9datsHPH55uiIatB&export=download',
  O2019: 'https://drive.google.com/u/1/uc?id=1PuEAzYCNYi5YPjkgYbG1bL-t-zYvf52g&export=download',  



//FIRST BRACKE SUBJECTS 


};
