document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
  })
  
  const onSubmit = () => {
    if(document.getElementById('name').value === ""){
      alert('enter name')
    }
    if(!document.getElementById('terms').checked){
      alert('accept terms')
    }
  }