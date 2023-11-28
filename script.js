const tovar = [
    {
        name: "Пиздатая пудра",
        stoimost: 150,
        about: "Состав в названии"
    },
    {
        name: "Ахуенная тоналка",
        stoimost: 250,
        about: "Сделан из говна всех участников K-POP группы BTS"
    },
    {
        name: "Средство для снятие лака",
        stoimost: 350,
        about: "состав: моча чимина"
    }
]

const ShowTovari = document.getElementById("ShowTovari")

for (let i=0;i<tovar.length;++i) {
    ShowTovari.insertAdjacentHTML(
    'beforeend',
    `
    <div class="tovar">
        <h3 style="padding:20px;">${tovar[i].name}</h3>
        <p style="padding:5px;">${tovar[i].about}</p>
        <div class="buttonsTovar" style="display:flex;gap:10px;">
            <h4>${tovar[i].stoimost} руб.</h4>
            <h4><a href="#">Купить</a></h4>
        </div>
    </div>
    `)
}