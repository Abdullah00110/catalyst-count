document.getElementById('uploadForm').onsubmit = function(e) {
    e.preventDefault();
    
    let formData = new FormData(this);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", this.action, true);
    
    let progressBar = document.getElementById('progressBar');
    
    
    xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
            let percentComplete = Math.round((event.loaded / event.total) * 100);
            progressBar = document.getElementById('progressBar');
            progressBar.style.width = percentComplete + "%";
            progressBar.textContent = percentComplete + "%";
        }
        
    };
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            if(progressBar.textContent === "100%"){
                // sleep for 2 sec
                setTimeout(() => {
                    window.location.reload();
                }, 2000)

            }
        } else {
            alert("An error occurred!");
        }
    };

    xhr.send(formData);
};


document.querySelectorAll(".filter").forEach(function(filterElement) {
    filterElement.addEventListener("change", () => {
        console.log("Filter changed!");
    });
});


document.addEventListener('DOMContentLoaded', function () {

   
    const alertElements = document.querySelectorAll('.alert');
    
    alertElements.forEach(function (alertElement) {
      setTimeout(function () {
        let alert = new bootstrap.Alert(alertElement);
        alert.close();
      }, 2000);
    });


});