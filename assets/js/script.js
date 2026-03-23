function downloadPDF(){

const element = document.querySelector(".biodata");

if(!element){
alert("Biodata section not found");
return;
}

setTimeout(() => {

const opt = {
margin: 10,
filename: "Somnath_Biodata.pdf",
image: { type: "jpeg", quality: 1 },
html2canvas: {
scale: 2,
useCORS: true,
scrollY: 0
},
jsPDF: {
unit: "mm",
format: "a4",
orientation: "portrait"
}
};

html2pdf().set(opt).from(element).save();

}, 500);

}