let doc = document
let btn1 = doc.querySelector('.btn1')
let btn2 = doc.querySelector('.btn2')
let p1 = doc.querySelector('.p1')
let p2 = doc.querySelector('.p2')
let p3 = doc.querySelector('.p3')
let p4 = doc.querySelector('.p4')
let all = doc.querySelector('.all')
let btns1 = doc.querySelector('.btns1')
let btns2 = doc.querySelector('.btns2')
let btns3 = doc.querySelector('.btns3')
let btns4 = doc.querySelector('.btns4')
let img = doc.querySelector('img')
let btns = doc.querySelector('.btns')
let modalka = doc.querySelector('.modalka')
let cross = doc.querySelector('.exe2')

let activeAll = (bn1, bn2) => {
    bn2.classList.remove('btn2')
    bn2.classList.add('btn1')
    bn1.classList.add('btn2')
    bn1.classList.remove('btn1')
}
btn1.onclick = () => {
    activeAll(btn2, btn1)
}
btn2.onclick = () => {
    activeAll(btn1, btn2)
}

let h4 = doc.querySelector('.h4')

let white = () => {
   h4.innerHTML = 'Silver'
   h4.style.color = "red"
   img.src = "./img/silver1.png"
   
}
btn2.addEventListener('click', white)
let Grey = () => {
    h4.innerHTML = 'Space Grey'
    h4.style.color = "#0071E3"
    img.src = "./img/gray2.png"
 }
 btn1.addEventListener('click', Grey)

let btn_active = (bn1, bn2, bn3, bn4) => {
    bn1.classList.add("btns_active")
    bn2.classList.remove("btns_active")
    bn3.classList.remove("btns_active")
    bn4.classList.remove("btns_active")
}
let btnsActive = (bn1, bn2, bn3, bn4) => {
    p1.innerHTML = bn1
    p2.innerHTML = bn2
    p3.innerHTML = bn3
    p4.innerHTML = bn4
}
btns1.onclick = () => {
    btn_active(btns1, btns2, btns3, btns4)
    all.innerHTML = "$1,999"
}
btns2.onclick = () => {
    btn_active(btns2, btns1, btns3, btns4)
    all.innerHTML = "$2,199"
}
btns3.onclick = () => {
    btn_active(btns3, btns2, btns1, btns4)
    all.innerHTML = "$2,599"
}
btns4.onclick = () => {
    btn_active(btns4, btns2, btns3, btns1)
    all.innerHTML = "$3,199"
}
btns.ondblclick = () => {
    modalka.classList.add('active')
    doc.body.style.overflow = 'hidden'
}
cross.onclick = () => {
    modalka.classList.remove('active')
    doc.body.style.overflow = 'scroll'
}