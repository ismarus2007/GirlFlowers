const tovar = [
    {
        name: "Пиздатая пудра",
        stoimost: 150
    },
    {
        name: "Ахуенная тоналка",
        stoimost: 250
    },
    {
        name: "Средство для снятие лака (состав: моча чимина)",
        stoimost: 350
    }
]

const ShowTovari = document.getElementById("ShowTovari")

for (let i=0;i<tovar.length;++i) {
    ShowTovari.insertAdjacentHTML(
    'beforeend',
    `
    <div class="tovar">
        <h3>${tovar[i].name}</h3>
        <p>${tovar[i].stoimost} RUB</p>
        <a href="#">Купить</a>
    </div>
    `)
}