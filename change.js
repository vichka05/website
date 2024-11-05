const change = document.getElementById("change")
function change_data(){
    if (document.getElementsByTagName('div')[3].innerHTML==='Antonova'){
        document.getElementsByTagName('div')[3].innerHTML='Антонова'
        document.getElementsByTagName('div')[4].innerHTML='Виктория'
        document.getElementsByTagName('div')[5].innerHTML='Сергеевна'
    return
    }
    if (document.getElementsByTagName('div')[3].innerHTML==='Антонова'){
    document.getElementsByTagName('div')[3].innerHTML='Antonova'
    document.getElementsByTagName('div')[4].innerHTML='Viktoria'
    document.getElementsByTagName('div')[5].innerHTML='Sergeevna'
    return
    }
}

change.addEventListener("click", change_data)