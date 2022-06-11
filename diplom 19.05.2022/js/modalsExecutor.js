
function showModal(modalID) { //передаем в функцию id модалки в str формате
    var modal = document.getElementById(modalID); //сохраняем модалку в переменную
    var span = modal.getElementsByClassName("closeModal")[0]; //нахрдим и сохраняем крестик

    modal.style.display = "block";//делаем модалку ввидимой


    span.onclick = function () { // по нажатию на крест скрываем
        modal.style.display = "none";
    }

    window.onclick = function (event) { // по нажатию на осноынй саайт скрываем
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}

