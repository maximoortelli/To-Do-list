import threepoints from './media/threepoints.png';
import push from './media/push.png';
import sync from './media/sync.png';
import './style.css';

const list = [
  {
    description: 'Go to the Gym',
    completed: 'false',
    index: '1',
  },
  {
    description: 'Take a cold shower',
    completed: 'false',
    index: '2',
  },
  {
    description: 'Go for lunch',
    completed: 'false',
    index: '2',
  },
  {
    description: 'Go to Yoga',
    completed: 'false',
    index: '2',
  },
];

class Tasks {
  constructor() {
    this.elements = JSON.parse(localStorage.getItem('list')) || list;
  }
  showMyList() {
    const theLists = document.querySelector('.allthelist');
    theLists.innerHTML = '';

    this.elements.forEach((item) => {
      const full = document.createElement('div');
      const box = document.createElement('input');
      box.type = 'checkbox';
      const work = document.createElement('span');
      const points = document.createElement('img');
      full.classList.add('grouptasks');
      box.classList.add('completed');
      work.classList.add('task');
      points.classList.add('points');
      work.textContent = item.description;
      points.src = threepoints;
      document.querySelector('.imagesync').src = sync;
      document.querySelector('.push').src = push;
      full.appendChild(box);
      full.appendChild(work);
      full.appendChild(points);
      theLists.appendChild(full);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const organization = new Tasks();
  organization.showMyList();
});
