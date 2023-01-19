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

  
  // ['hour-11', 'hour-10']

   // loop over hour keys
    // get div with hour id
      // get text area child
        // set value in text area
  // for (var i = 0; i < hourKeys.length; i++) {
  //   const key = hourKeys[i]
  //   const value = parsedTodos[key]
  //   const timeBlockEl = $('#' + key)

  //   timeBlockEl.children('.description').val(value)
  // }

 

  var saveBtn = $('.saveBtn');


    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    
  
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
    

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    

    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D'))
  });