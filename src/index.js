document.addEventListener("DOMContentLoaded", () => {
  // code!
  form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
  e.preventDefault()
  myTodoList(e.target.newTask.value)
  form.reset()
 })
});

function buildTodoList(todo) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  li.textContent = `${todo}`
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}
function handleDelete (e) {
  e.target.parentNode.remove()
}