let btnAdd = document.querySelector('#btn-add');
let btnDownload = document.querySelector('#btn-download');
let timelineGroup = document.querySelector('.timeline__card--group');
let titleTimeline = document.querySelector('.timeline__title');

btnAdd.addEventListener('click', ()=> {
    timelineGroup.innerHTML += `
    <div class="card text-bg-light border-0 timeline__card" id="delete">
        <div class="card-header d-flex align-items-center justify-content-between border-0">
            <div class="me-auto">
                <span class="badge bg-primary my-2" contenteditable="true">1995</span>
                <h5 class="card-title fw-bold" contenteditable="true">Title</h5>
            </div>
            <div class="dropdown">
                <button type="button" class="btn btn-sm" id="" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></button>
                <ul class="dropdown-menu border-0 bg-primary-variant" aria-labelledby="">
                    <li><button class="dropdown-item fs-sm text-danger btn-delete" href="#" onclick="remove()">Delete <i class="bi bi-trash"></i></button></li>
                </ul>
            </div>
        </div>
        <div class="card-body">
            <p class="card-text fs-sm" contenteditable="true">Some quick example text to build on the card
                title and make up the bulk of the card's content.</p>
        </div>
    </div>`;

});


function remove() {
    var element = document.getElementById("delete");
    element.remove();
}

btnDownload.addEventListener('click', capture)

function capture() {
    const captureElement = document.querySelector('#timeline__content')
    html2canvas(captureElement)
        .then(canvas => {
            canvas.style.display = 'none'
            document.body.appendChild(canvas)
            return canvas
        })
        .then(canvas => {
            const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
            canvas.style.backgroundColor = 'red'
            const a = document.createElement('a')
            a.setAttribute('download', `${titleTimeline.textContent} - Línea del tiempo.png`)
            a.setAttribute('href', image)
            a.click()
            canvas.remove()
        })
}