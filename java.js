function fibo(n) {
    if (n < 0) {
      throw new Error("n must be a non-negative integer");
    }

    if (n === 0 || n === 1) {
      return n;
    } else {
      return fibo(n - 1) + fibo(n - 2);
    }
  }

  function calfibo() {
    const number = document.getElementById("fiboinput").value;

    const calfibo = [];

    for (let i = 0; i <= number; i++) {
      calfibo.push(fibo(i));
    }

    document.getElementById("fiboresult").innerHTML = calfibo.join(", ");
  }

function calVolume() {
    const selectedshape = document.getElementById("shapeselect").value;
    const cubeside = parseFloat(document.getElementById("cubeside").value);
    const cuboidlength = parseFloat(document.getElementById("cuboidlength").value);
    const cuboidwidth = parseFloat(document.getElementById("cuboidwidth").value);
    const cuboidheight = parseFloat(document.getElementById("cuboidheight").value);
    const sphereradius = parseFloat(document.getElementById("sphererad").value);
    const squarepyedge = parseFloat(document.getElementById("squarepyedge").value);
    const squarepyheight = parseFloat(document.getElementById("squarepyheight").value);

    if (selectedshape === "cube" && !isNaN(cubeside) && cubeside >= 0) {
        const volume = cubeside ** 3;
        document.getElementById("volumeresult").textContent = `Cube Volume: ${volume.toFixed(2)}`;
    }
    else if (selectedshape === "cuboid" && !isNaN(cuboidlength) && !isNaN(cuboidwidth) && !isNaN(cuboidheight) && cuboidlength >= 0 && cuboidwidth >=  0 && cuboidheight>= 0) {
        const volume = cuboidlength * cuboidwidth * cuboidheight;
        document.getElementById("volumeresult").textContent = `Cuboid Volume: ${volume.toFixed(2)}`;
    }
    else if (selectedshape === "sphere" && !isNaN(sphereradius) && sphereradius >= 0) {
        const volume = (4 / 3) * Math.PI * (sphereradius ** 3);
        document.getElementById("volumeresult").textContent = `Sphere Volume: ${volume.toFixed(2)}`;
    }
    else if (selectedshape === "square-pyramid" && !isNaN(squarepyedge) && !isNaN(squarepyheight) && squarepyedge >= 0 && squarepyheight >= 0) {
        const volume = (squarepyedge / 2) * (squarepyheight / 3);
        document.getElementById("volumeresult").textContent = `Square Pyramid Volume: ${volume.toFixed(2)}`;
    }
    else {
        alert("Please enter Positive Numbers");
    }
}

document.getElementById("shapeselect").addEventListener("change", function() {
    const selectedshape = this.value;
    const formIds = ["cube-cal", "cuboid-cal", "sphere-cal", "square-pyramid-cal"];

    for (const formId of formIds) {
        const form = document.getElementById(formId);
        if (formId === `${selectedshape}-cal`) {
            form.style.display = "block";
        } 
        else {
            form.style.display = "none";
        }
    }
});