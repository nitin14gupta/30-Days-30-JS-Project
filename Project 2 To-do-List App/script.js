const input = document.querySelector(".container-input-field input");
const addBtn = document.querySelector(".container-input-field button");
const listContainer = document.querySelector('.tasks')

    function addTask(){
        if(input.value === '' || input.value === ' '){
            alert("You must Write Something")
        } else{
            let li = document.createElement('li');
            li.innerHTML = input.value;
            listContainer.appendChild(li);
            let span = document.createElement('span');
            span.innerText = "\u00d7";
            li.appendChild(span);
        }
        input.value = "";
    }


listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'SPAN'){
        e.target.parentNode.remove();
    } else if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
}, false);