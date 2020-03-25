(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225804"],{e553:function(i,o){var a='<h1 id=podatki-o-širjenju-bolezni-covid-19-v-sloveniji><strong>Podatki o širjenju bolezni COVID-19 v Sloveniji</strong></h1> <p>Projekt zbira, analizira in objavlja podatke o širjenju koronavirusa SARS-CoV-2 oz. virusa, ki povzroča bolezen COVID-19 v Sloveniji z namenom omogočiti javnosti čim boljši pregled nad obsegom težave in pravilno oceno tveganosti.</p> <p>Vključeni so sledeči <strong>dnevni podatki</strong> (z zgodovino):</p> <ul> <li>število opravljenih testov</li> <li>število potrjeno okuženih: v Sloveniji, po starosti, spolu, posameznih regijah, in občinah</li> <li>evidenca o bolnišnični oskrbi pacientov s COVID-19 (hospitalizirani, intenzivna nega, kritično stanje, odpuščeni iz bolniške oskrbe)</li> <li>spremljanje posameznih primerov (posebno kritičnih oseb: zaposleni v zdravstvu, DSO, CZ...)</li> <li>kapaciteta zdravstvenega sistema (število postelj, enot intenzivne nege, ventilatorjev...)</li> </ul> <p>Sproti se trudimo dodajati tudi nove oz. relevantne kategorije.</p> <p>Projekt je z zbiranjem podatkov začel <a href=https://twitter.com/LukaRenko>Luka Renko</a>, sedaj pa na njem prostovoljno in dejavno dela od 15 do 25 ljudi, saj vnašanje in preverjanje podatkov in programiranje zahteva vedno več pozornosti. Gre za projekt, podprt z množičnim zunanjim izvajanjem (t.i. &quot;crowdsourcing&quot;), <a href=https://covid-19.sledilnik.org/#/team>kjer <strong>lahko prispeva vsak po svojih močeh</strong> z viri ali podatki</a>. Pridružite se in pomagajte!</p> <h2 id=zbrani-podatki----gdocs-preglednica>Zbrani podatki - <a href="https://docs.google.com/spreadsheets/d/1N1qLMoWyi3WFGhIpPFzKsFmVE0IwNP3elb_c18t2DwY/edit#gid=0">GDocs preglednica</a></h2> <ul> <li><strong>CSV izvoz</strong>: <a href=https://github.com/slo-covid-19/data/blob/master/csv/stats.csv>stats.csv</a>, <a href=https://github.com/slo-covid-19/data/blob/master/csv/regions.csv>regions.csv</a>, <a href=https://github.com/slo-covid-19/data/blob/master/csv/patients.csv>patients.csv</a></li> <li><strong>REST API</strong>: <a href=https://covid19.rthand.com/api/stats>stats</a>, <a href=https://covid19.rthand.com/api/regions>regions</a>, <a href=https://covid19.rthand.com/api/patients>patients</a></li> </ul> <h3 id=podatki-se-uporabljajo-za-različne-vizualizacije-in-statistike>Podatki se uporabljajo za različne vizualizacije in statistike:</h3> <ul> <li><a href=https://covid-19.sledilnik.org/#/stats><strong>Statistika</strong></a> - interaktivni graf s podatki</li> <li><a href=https://covid-19.sledilnik.org/#/viz><strong>Vizualizacije</strong></a> - nekaj zanimivih info grafik </li> <li><a href=https://covid-19.sledilnik.org/#/map><strong>Zemljevid</strong></a> - zemljevid po občinah</li> <li><a href=https://covid19.alpaka.si><strong>Analiza širjenja koronavirusa</strong></a> - postavil <a href=http://www.nace.si/ >Nace Štruc</a></li> </ul> <p>Naše podatke uporabljajo tudi <a href=https://ustavimokorono.si/ >Ustavimo Korono</a>, <a href="https://app.powerbi.com/view?r=eyJrIjoiMWE2NGNmZWMtMjcxZC00MzkxLWIyMTUtYjExYjI2YTg4NzA0IiwidCI6IjkxMGYyNzY0LWEyZGItNGM2Mi04OGM0LWE1ZTcwYzMzNjVjNCIsImMiOjl9&amp;nbsp">Better.Care COVID-19 Slo</a>, <a href=http://milosp.info/maps/interactive/covid19svn/covid19svn.html>Reported COVID-19 cases in the Slovenia - map</a></p> <p>Če bi podatke radi uporabili oz. potrebujete drugače strukturirane podatke za namene podatkovne vizualizacije, napovednega modeliranja ali podobno - kontaktirajte <a href=https://twitter.com/lukarenko>@LukaRenko</a>.</p> <h2 id=zakaj>Zakaj?</h2> <p><strong>Pravilno zbrani in ažurno ter transparentno objavljeni podatki so po izkušnjah držav, kjer jim je virus uspelo najbolj zajeziti, kritičnega pomena za učinkovit odziv sistemov javnega zdravja.</strong> Šele tako objavljeni podatki so temelj za razumevanje dogajanja, aktivno samozaščitno ravnanje ljudi ter sprejemanje nujnosti ukrepov.</p> <p>NIJZ žal trenutno ne objavlja popolnih in dovolj strukturiranih podatkov o številu okužb, zato jih zbiramo in dopolnjujemo iz različnih javnih virov ter posredujemo javnosti. Podatki v medijih in uradnih virih, iz katerih jih črpamo, so pogosto delni, nejasni in nedosledni, zaradi tega preglednica vključuje tudi opombe o virih in sklepanju na podlagi nepopolnih podatkov.<br><a href=%5Bhttps://covid-19.sledilnik.org/#/team%5D(https://covid-19.sledilnik.org/#/team)>Zato tudi računamo na vašo pomoč </a>- tako pri zbiranju in preverjanju podatkov, kot programiranju, analiziranju, pa tudi apeliranju na odločevalce, da ustrezno struktururane podatke objavijo! </p> <h2 id=kako-urejamo-podatke>Kako urejamo podatke:</h2> <p><a href="https://docs.google.com/spreadsheets/d/1N1qLMoWyi3WFGhIpPFzKsFmVE0IwNP3elb_c18t2DwY/edit#gid=0">Bazo podatkov</a> urejamo praviloma po 14:00 s podatki iz NIJZ. Če so objavljeni vmesni podatki, začasno vnesemo te. Podatki po regijah in starosti se včasih ne ujemajo s tistimi ob 14h (ker se zbirajo ob 10h); dopolnjujemo in navzkrižno preverjamo tudi s podatki, objavljenimi v medijih. S pomočjo OCR tudi pretvorimo podatke po občinah v <a href="https://docs.google.com/spreadsheets/d/1N1qLMoWyi3WFGhIpPFzKsFmVE0IwNP3elb_c18t2DwY/edit#gid=598557107">tabelo Kraji</a>.</p> <p>Kako urejamo bolnišnično oskrbo - <a href="https://docs.google.com/spreadsheets/d/1N1qLMoWyi3WFGhIpPFzKsFmVE0IwNP3elb_c18t2DwY/edit#gid=918589010">tabela Pacienti</a>:</p> <ul> <li>Spremljamo objave vseh bolnišnic za COVID-19 (UKC Ljubljana, UKC Maribor, UK Golnik, SB Celje)</li> <li>Spremljamo število hospitaliziranih (vsi oddelki), na intenzivni negi in v kritičnem stanju</li> <li>Iz podatkov evidentiramo tudi prehode (sprejem/odpust) med posameznimi stanji (kadar je to mogoče zaznati).</li> <li>Kjer so podatki nepopolni, s sklepanjem določimo vrednosti (izvedemo s formulo)</li> <li>Vsi viri in sklepanja so zavedena kot komentar na posameznih celicah (za možnost preverjanja)</li> </ul> <p>Kako urejamo posamezne primere - <a href="https://docs.google.com/spreadsheets/d/1N1qLMoWyi3WFGhIpPFzKsFmVE0IwNP3elb_c18t2DwY/edit#gid=1419250136">tabela Primeri</a>:</p> <ul> <li>Posamezne primere spremljamo iz podatkov iz tiskovne konference in objav medijev (link na vir).</li> <li>Zabeležimo predvsem identifikacijske podatke in sledimo izvoru in žariščem (kjer je možno).</li> <li>Rezerviramo mesta z minimalnimi podatki (Izvor - na podlagi podatka po regijah), ki jih v naslednjih dneh dopolnjujemo.</li> <li>Žarišča vodimo iz podatkov o neposrednih okužbah in posplošenih podatkov NIJZ (takrat dodamo žarišče rezervirana mesta).</li> <li><a href="https://docs.google.com/spreadsheets/d/1N1qLMoWyi3WFGhIpPFzKsFmVE0IwNP3elb_c18t2DwY/edit#gid=337671621">K:žarišče</a>, <a href="https://docs.google.com/spreadsheets/d/1N1qLMoWyi3WFGhIpPFzKsFmVE0IwNP3elb_c18t2DwY/edit#gid=931207160">K:regija</a> in <a href="https://docs.google.com/spreadsheets/d/1N1qLMoWyi3WFGhIpPFzKsFmVE0IwNP3elb_c18t2DwY/edit#gid=1657814423">K:kraj</a> so kontrolne pivot tabele za validacijo posameznih primerov.</li> </ul> <h2 id=ostale-zanimive-vsebine>Ostale zanimive vsebine</h2> <p>V zavihku <a href="https://docs.google.com/spreadsheets/d/1N1qLMoWyi3WFGhIpPFzKsFmVE0IwNP3elb_c18t2DwY/edit#gid=328677411"><strong>Viri</strong></a> si lahko ogledate tudi naše vire podatkov. </p> <p>Na strani <a href=/#/links><strong>Povezave</strong></a> si lahko ogledate zbirko povezav na ostale statistike, podatkovne vizualizacije in zanimive objave o metodah in ukrepih, ki se nanašajo na COVID-19 pri nas in po svetu in so vplivale tudi na naše zbiranje podatkov. </p> <h2 id=pogoji-uporabe>Pogoji uporabe</h2> <p>Uporaba in sodelovanje so zaželjeni: podatki so zbrani iz virov v javni domeni in jih lahko prosto uporabljate, urejate, predelujete ali vključujete v vse netržne vsebine ob navedbi vira - <a href=http://covid-19.sledilnik.org/ ><strong>covid-19.sledilnik.org</strong></a>. Za izvoz podatkov v drugih formatih ali uporabo za vizualizacije nas kontaktirajte na <a href=https://twitter.com/lukarenko>@LukaRenko</a></p> ';i.exports=a}}]);
//# sourceMappingURL=chunk-2d225804.ed08c146.js.map