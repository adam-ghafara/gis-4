export let URLGeoJson = "https://asia-southeast2-gis-tester-401506.cloudfunctions.net/GetLocation";
export let URLPostPoint = "https://asia-southeast2-gis-tester-401506.cloudfunctions.net/function-1";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let tableTemplate=`
<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
`