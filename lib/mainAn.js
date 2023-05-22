function getOPjs(filePath) {
    let scriptTag = document.createElement('script');
    scriptTag.src = filePath;
    document.getElementsByTagName('head')[0].appendChild(scriptTag);
}
function getOPcss(filePath) {
    let styleTag = document.createElement('link');
    styleTag.type = "text/css";
    styleTag.rel = "stylesheet";
    styleTag.href = filePath;
    document.getElementsByTagName('head')[0].appendChild(styleTag);
}

getOPjs('./lib/axios.min.js');
getOPcss('./lib/bootstrap-5.3.0-alpha3-dist/css/bootstrap.css');
// getOPjs('./lib/bootstrap-5.3.0-alpha3-dist/js/bootstrap.bundle.js');
getOPjs('./lib/customAn.js');

window.addEventListener('load', function () {

    const questionForm = document.getElementById('question-form');

    questionForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let textForm = this.querySelector('input[name="text"]').value;

        axios.get('http://localhost:8000/')
            .then(function (response) {
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
            });

        console.log(textForm)
    })

})