function userInfo(){

    var userName=prompt("What is your name ?");

   
    var userGender=prompt("what is your Gender");
    var userAge=prompt("Please enter your age");

    while(userAge<1){
        alert("the gae you entered is less than 1 year , please enter your age again?")
        var userAge=prompt("Please enter your age");

        
    }

    
    var userChoice=confirm("Please press ok to display greeting message , else press cancel");
    



    if (userChoice){

        if (userGender=="male"){

           return alert(`Welcome to our website Mr ${userName} , age : ${userAge}`)
        }
        if (userGender=="female") {

            return alert(`Welcome to our website Ms ${userName} , age : ${userAge} `)
            
        } else {
            return alert(`Welcome to our website ${userName} , age : ${userAge}`)
            
        }
            
        }
    
    }
   
function extraQuestions(){

        
        var userShopping=prompt("Did you shop for groceries today ?");
        var userMovie=prompt("Did you watch a movie today ?");
        var userWorkout=prompt("Did you do workout today ?");


        answersArr.push(userShopping.toLowerCase(),userMovie.toLowerCase(),userWorkout.toLowerCase());



    }


function validateAnswers(arr){

        for(let i=0; i<arr.length;i++){
            

            if (arr[i]!="no" && arr[i]!="yes" ){
                arr[i]="invalid";
               
            }

            
        }
        console.log(arr)


    }
        


          
    
var answersArr=[] ;  
userInfo();
extraQuestions();
validateAnswers(answersArr);
