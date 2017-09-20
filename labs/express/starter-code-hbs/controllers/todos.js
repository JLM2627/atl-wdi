const express = require("express");
const router = express.Router();
const data = require("../data.js")
const bodyParser = require('body-parser');
/* INDEX TODOS */
router.get('/', function(req,res) {
    console.log(data);
    res.render('todos/index', {
      todos: data.seededTodos
    });
  });

/*NEW TODOS */
  router.get('/new', (req,res) => {
    res.render('todos/new');
})


  /* SHOWS TODO */
  router.get('/:id', (req, res) => {
      const id = parseInt(req.params.id);
      const todo = data.seededTodos[id];
      console.log(todo);

      if (!todo){
          res.render('todos/show', {
              error: " No to-do found within this ID"
          })
      } else { 
          res.render('todos/show', {
          todo:todo

          })
        }
    });
      
   router.post('/',(req,res)=> {
       console.log(req.body);

   });
      
  

  module.exports = router;