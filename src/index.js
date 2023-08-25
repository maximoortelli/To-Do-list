import './style.css';
import threepoints from './assets/threepoints.png';
import imagetrash from './assets/trash.png';

const tasks = [
  {
    description: 'Go to Gym',
    completed: false,
    index: 0,
  },
  {
    description: 'Do breackfast',
    completed: false,
    index: 1,
  },
  {
    description: 'Take a shower',
    completed: false,
    index: 1,
  },
];

const showList = () => {
  const father = document.getElementById('allmylist');
  father.innerHTML = '';
  const ul = document.createElement('ul');
  ul.classList.add('ul');
  for (let x = 0; x < tasks.length; x += 1) {
    if (tasks[x].completed === false) {
      const div = document.createElement('div');
      div.classList.add('Groupdiv');
      div.setAttribute('id', `id${x}`);
      const minorDiv = document.createElement('div');
      minorDiv.classList.add('div');
      const box = document.createElement('input');
      box.setAttribute('type', 'checkbox');

      const li = document.createElement('li');
      li.classList.add('li');

      li.textContent = tasks[x].description;
      const points = document.createElement('img');
      points.classList.add('threepoints');

      points.src = threepoints;

      points.addEventListener('click', () => {
        points.style.display = 'none';
        const trash = document.createElement('img');
        trash.src = imagetrash;
        trash.classList.add('mytrash');

        div.appendChild(trash);

        trash.addEventListener('click', () => {
          document.getElementById(`id${x}`).remove();
          trash.style.display = 'none';
        });
      });
      minorDiv.appendChild(box);
      minorDiv.appendChild(li);
      div.appendChild(minorDiv);
      div.appendChild(points);
      ul.appendChild(div);
    }
  }
  father.appendChild(ul);
};

document.addEventListener('DOMContentLoaded', showList);

const input = document.getElementById('input');
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const myI = {
      description: input.value,
      completed: false,
      index: tasks.length,
    };
    tasks.push(myI);
    input.value = '';
    showList();
  }
});
