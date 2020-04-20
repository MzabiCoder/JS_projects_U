let draggable_list = document.querySelector('#draggable-list')
let check = document.querySelector('#check')


let ppl = [
    'Jeff Bezoz',
    'Bill Gates',
    'Warren Buffet',
    'Brnard Arnault',
    'Carlos Selim',
    'Amancio Ortega',
    'Larry Elisson',
    'Mark Zugerbergue',
    'Michael Bloomberg',
    'lary page'

]

const items = []
let dragIndex



function createList() {
    [...ppl]
    .map(val => ({
            val,
            sort: Math.random()
        }))
        .sort((a, b) => a.sort - b.sort)
        .forEach((person, index) => {

            let li = document.createElement('li')
            li.setAttribute('data-index', index)
            // li.classList.add('over')
            li.innerHTML = `<span class="number">${index + 1}</span>   
         <div class="draggable" draggable="true">
         <p class="person-name">${person.val}</p>
         <i class="fas fa-grip-lines"></i>
         </div>
        `
            draggable_list.appendChild(li)
            items.push(li)

        })
    addEventListeners()
}
createList()





function dragStart() {
    // console.log('Event: ', 'dragstart');
    dragIndex = +this.closest('li').getAttribute('data-index') + 1
    // console.log(dragIndex);

}

function dragEnter() {
    // console.log('Event: ', 'dragenter');
    this.classList.add('over')
}

function dragLeave() {
    // console.log('Event: ', 'dragleave');
    this.classList.remove('over')
}

function dragOver(e) {
    // console.log('Event: ', 'dragover');
    e.preventDefault()
}

function dragDrop() {
    // console.log('Event: ', 'drop');
    let dragEndIndex = +this.getAttribute('data-index') + 1
    swap(dragIndex, dragEndIndex);
    //console.log(dragEndIndex);
    this.classList.remove('over')

}

function swap(frome, too) {

    let Itemone = items[frome]
    let Itemtow = items[too].querySelector('draggable')

    console.log(frome, too);

}

console.log(items);






function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    });

    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    });
}