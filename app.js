const arr = [
  {
      userName: 'bob',
      age: 19
  },
  {
     userName: 'igor',
     age: 22
  },
  {
      userName: 'marina',
      age: 15
  },
  {
      userName: 'bond',
      age: 24
  },
  {
      userName: 'valoda',
      age: 17
  }

]
const mainDiv = document.getElementById('main');
const second = document.getElementById('second');

const ul = document.createElement ('ul');
mainDiv.appendChild(ul);

arr.forEach(item => {
    const li = document.createElement ('li');
    li.textContent = item.age > 18 ? item.userName : " "
    ul.appendChild(li);
    li.style.listStyle = "none"

})

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')


btn1.onclick = () => {
    mainDiv.style.display = 'none';
}

btn2.onclick = () => {
    mainDiv.style.display = 'block';
}
mainDiv.classList.add('big')
mainDiv.classList.add('ghost')
mainDiv.classList.add('whyThisIsSoBlack')


const btn3 = document.getElementById('btn3')
btn3.onclick = () => {
second.classList.add('big');
second.classList.add('ghost');
second.classList.add('whyThisIsSoBlack');
}


