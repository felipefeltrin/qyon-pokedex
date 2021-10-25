function commonScripts() {
  this.toggleSpinner = () => {
    let spinner = document.getElementsByClassName("spinner")[0];
    let currentStatus = window.getComputedStyle(spinner);
    if(currentStatus.visibility === "hidden") {
      spinner.style.visibility = "visible";
      document.body.classList.add("is-loading");
    } else {
      spinner.style.visibility = "hidden";
      document.body.classList.remove("is-loading");
    }
  }
}

export default commonScripts;