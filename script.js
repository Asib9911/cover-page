function generate() {

    // get input values
    document.getElementById("out-name").innerText = document.getElementById("name").value;
    document.getElementById("out-id").innerText = document.getElementById("id").value;
    document.getElementById("out-dept").innerText = document.getElementById("dept").value;
    document.getElementById("out-course").innerText = document.getElementById("course").value;
    document.getElementById("out-teacher").innerText = document.getElementById("teacher").value;

    const element = document.getElementById("cover");

    element.style.display = "block";

    html2pdf()
        .set({
            filename: 'NSTU-Cover-Page.pdf',
            html2canvas: { scale: 2 }
        })
        .from(element)
        .save();

    setTimeout(() => {
        element.style.display = "none";
    }, 1000);
}
