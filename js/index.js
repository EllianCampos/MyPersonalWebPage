const DIV_UniversityProy = document.getElementById('DIV_UniversityProy')
const DIV_AutodidactProy = document.getElementById('DIV_AutodidactProy')

DIV_UniversityProy.addEventListener('click', () => {
    if (DIV_UniversityProy.querySelector('div').classList.contains('hide')) {
        DIV_UniversityProy.querySelector('div').classList.remove('hide')
    }else{
        DIV_UniversityProy.querySelector('div').classList.add('hide')
    }
})

DIV_AutodidactProy.addEventListener('click', () => {
    if (DIV_AutodidactProy.querySelector('div').classList.contains('hide')) {
        DIV_AutodidactProy.querySelector('div').classList.remove('hide')
    }else{
        DIV_AutodidactProy.querySelector('div').classList.add('hide')
    }
})

