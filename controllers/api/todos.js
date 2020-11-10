const { Router } = require('express')
const Todo = require('../../models/Todo')
const router = Router()

router.get('/', async (req, res) => {
  const todos = await Todo.find({}).lean()
  res.send(todos);
})

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create todo',
    isCreate: true
  })
})

router.post('/', async (req, res) => {
  const todo = new Todo({
    title: req.body.title
  })

  await todo.save()
  res.status(201).send();
})

router.put('/', async (req, res) => {
  const todo = await Todo.findById(req.body._id)
  //console.log(todo)
  todo.title = req.body.title
  todo.completed = req.body.completed
  await todo.save()

  res.status(200).send();
})


router.delete('/:id', async (req, res) => {
  await Todo.deleteOne({ _id: req.params.id }, function (err) {
    if (err)  console.error('some error occured: '+err.message);
  });
  res.status(200).send();
})

module.exports = router;