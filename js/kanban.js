let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {
  const item = document.createElement('div');
  item.classList.add('item');
  item.id = 'item-' + order;
  /* item.draggable = true; */
  item.setAttribute('draggable', true);
  item.addEventListener('dragstart', (event) => {
    return event.target.id.DataTranfer.setData('text')
  })
  item.addEventListener('dragend', (event) => {
    return event.target.id.clearData();
  })


  const input = document.createElement('input');
  item.appendChild(input);


  const save_btn = document.querySelector('button');
  save_btn.innerHTML = "Save";
  save_btn.addEventListener('click', () => {
    error.innerHTML = "";
    if (value !== "") {
      order += 1;
      item.innerHTML = input.value;
      adding = false;
    } else {
      error.innerHTML = message;
    }
  })

  item.appendChild(save_btn);

  return item;

};


document.querySelectorAll('.drop').forEach(element => {
  element.addListener('drop', (event) => {
    event.preventDefault();
    const id = event.target.DataTransfer.getData('text');
    document.getElementById(event.target).appendChild(id);
  });

  element.addListener('dragover', (event) => {
    event.preventDefault();
    const id = event.target.DataTransfer.getData('text');
    document.getElementById(event.target).appendChild(id);
  });







});




