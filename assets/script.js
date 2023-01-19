// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  const container = $('#hourOfDay')
    const timeBlockElements = container.children()
   
    $(timeBlockElements).each(function(i, element) {
      const id = $(element).attr('id')
      const hour = Number(id.slice(5))


      const currentHour = dayjs().hour()

      if (currentHour < hour) {
        $(element).addClass( "future")
      } else if (currentHour === hour){
        $(element).addClass( "present")
      } else {
        $(element).addClass( "past")
      }

      
    })


  const toDos = localStorage.getItem('todos') || "{}"
  const parsedTodos = JSON.parse(toDos) 
  const hourKeys = Object.keys(parsedTodos)


  if (toDos === null){

  } else {
    const parsedTodos = JSON.parse(toDos) 
    if ( hourKeys === null){
      // const hourKeys = ''
    } else if ( hourKeys !== null){
    let hourKeys = Object.keys(parsedTodos)

    for (var i = 0; i < hourKeys.length; i++) {
      const key = hourKeys[i]
      const value = parsedTodos[key]
      const timeBlockEl = $('#' + key)
  
      timeBlockEl.children('.description').val(value)
    }

  }}

  

   // loop over hour keys
    // get div with hour id
      // get text area child
        // set value in text area
 

  var saveBtn = $('.saveBtn');

  
   saveBtn.on('click', function(){
    const timeBlockEl = $(this).parent()
    const id = timeBlockEl.attr('id')
    const input = timeBlockEl.children('.description')
    const value = input.val()


    const prevTodos = localStorage.getItem('todos')

    const toDos = {
      ...JSON.parse(prevTodos),
      [id]: value,
    }


    localStorage.setItem("todos", JSON.stringify(toDos));
   })
    

    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D'))
  });