(function(){
    window.addEventListener('keyup', function({keyCode}){
        init(keyCode)
    })

    window.addEventListener('keydown', function(e){
        e.preventDefault()
    })

    function getElement(name, callback){
        const el = document.querySelector(name)

        if(typeof callback === 'function'){
            callback(el)
        }else{
            console.error('invalid function')
        }
    }

    function addClass(className){
        this.classList.add(className)
    }

    function init(keyCode){
        getElement('h1', e => addClass.call(e, 'hide'))

        getElement('h2', function(e) {
            e.textContent = keyCode
            addClass.call(e, 'show')
        })

        getElement('body', e => addClass.call(e, 'switch'))
    }
})()