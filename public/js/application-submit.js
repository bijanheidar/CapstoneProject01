
var form = document.getElementById("add_user");
form.addEventListener("submit", async (event) => {
  event.preventDefault(); //prevent refreshing the page when the form is submitted in the "submit event"
  const course_id = document.getElementById("course_id").value,
    _program = document.getElementById("_program").value,
    _course = document.getElementById("_course").value,
    name = document.getElementById("name").value,
    age = document.getElementById("age").value,
    email = document.getElementById("email").value,
    phone = document.getElementById("phone").value,
    comment = document.getElementById("comment").value,
    requestDate = document.getElementById("requestDate");

  if (name && age && email && phone && comment) {
    let confirmSubmit = window.confirm("Are you sure to send yor request for this course?");
    if (confirmSubmit) {
      const url = "/addApplication"; //location of the endpoint
      //object that holds the data to send
      let data = {
        course_id: course_id,
        name: name,
        age: age,
        email: email,
        phone: phone,
        comment: comment,
        // requestDate: requestDate,
      };

      var request = new Request(url, {
        method: "POST",
        body: JSON.stringify(data), //convert the object with the data into a "JSON string"
        headers: { "Content-type": "application/json; charset=UTF-8" }, //add headers with the data type and encoding format
      });

      const response = await fetch(request); //call the endpoint (backend) using Javascript function "fetch" and "await" for the response

      if (response.ok) {
        const message =
          `Thanks for your request!\n
            Your Email:${data.email} \n
            Program: ${_program}, Course: ${_course}\n
            We will contact you within 2-3 business days`;
        alert(message);
        window.location.href = "/courses";
        //check if "ok" attribute of object "response" is true. If it is true, it means that the response was successful
        // let id = await response.json(); //get the "id" returned by the endpoint

      } else {
        window.alert(`Ther is an error .....`);
      }
    }
  } else {
    window.alert("Please complete the form");
  }
});