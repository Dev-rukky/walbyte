window.addEventListener("load", function () {
    const preLoaderDuration = 6000;

    setTimeout(function () {
        document.getElementById("loader").style.display = "none";

        document.getElementById("main").style.display = "block";
    }, preLoaderDuration);

});