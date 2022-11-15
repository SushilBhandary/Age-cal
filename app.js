// const container;
// const error;

const input = document.querySelector('#dob')

input.addEventListener('input', getAge)

function getAge(){
    const dob = document.querySelector('#dob').value
    const desc = document.querySelector('.desc')
    const date = dob.split('-')
    let now = new Date();
    let age;
    if (parseInt(date[1])< now.getMonth()+1) {
        age = now.getFullYear()-parseInt(date[0])
    } else if (parseInt(date[1])=== now.getMonth()+1) {
        if (parseInt(date[2]) <= now.getDate()) {
            age = now.getFullYear()-parseInt(date[0])
        } else {
            age = now.getFullYear()-parseInt(date[0]) -1
        }
    } else {
        age = now.getFullYear()-parseInt(date[0]) -1
    }
    desc.innerHTML = `Your Age is : ${age}`
    console.log(`Your Age is : ${age}`);
    ageCalculator()

}

function calcAge(){ 
     
}

function displayAge(){
    
}

function ageCalculator() { 
    var input = document.querySelector('#dob').value;
    const years = document.querySelector('#years')  
    const months = document.querySelector('#months')  
    const days = document.querySelector('#days')  
    var dob = new Date(input);  
    
    //extract and collect only date from date-time string  
    var mdate = input.toString();  
    var dobYear = parseInt(mdate.substring(0,4), 10);  
    var dobMonth = parseInt(mdate.substring(5,7), 10);  
    var dobDate = parseInt(mdate.substring(8,10), 10);  
      
    //get the current date from system  
    var today = new Date();  
    //date string after broking  
    var birthday = new Date(dobYear, dobMonth-1, dobDate);  
      
    //calculate the difference of dates  
    var diffInMillisecond = today.valueOf() - birthday.valueOf();  
  
    //convert the difference in milliseconds and store in day and year variable          
    var year_age = Math.floor(diffInMillisecond / 31536000000);  
    var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);  
     
    var month_age = Math.floor(day_age/30);  

    years.innerHTML = year_age
    months.innerHTML = month_age
    days.innerHTML = day_age
     
    
}  