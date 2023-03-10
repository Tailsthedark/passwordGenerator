let store = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","&",
"*","_","-"]//array from which we will pull the characters we will use to generate the passwords
let key ="" //variable in charge of storing the password
let randomIndex = Math.floor(Math.random()*store.length) 

function getuppercase(){
    return Math.floor(Math.random() * 26)//0-25 //generates an index containing an uppercase character
}

function getlowercase(){
    return Math.floor(Math.random() *26) + 26// 26-51 //generates an index containing a lowercase character
}

function getnumber(){
    return Math.floor(Math.random() * 10) + 52//52-61 //generates an index containing a number 
}

function getspecial(){
    return Math.floor(Math.random() *9) + 62//62 - end of array //generates an index containing a special character

}

document.getElementById("generate-btn").addEventListener("click",function(){//listens for clicking of generate password button to generate passwords to the user's  specifications 
        let selected = 0//a variable that keeps track of how many checkboxes have been selected
        if ( document.getElementById("length").value>20)
        {
            alert("Maximum length of password is 20")
            document.getElementById("o1").textContent = ""
            document.getElementById("o2").textContent = ""
            return 0
            
        }
        if( document.getElementById("length").value < 6)
        {
            alert("Minimum length of password is 6")
            document.getElementById("o1").textContent = ""
            document.getElementById("o2").textContent = ""
            return 0
        }
    for (let i = 0; i < document.querySelectorAll(".checkboxes").length; i++)//goes through every checkbox if .checked is true add 1 to selected
    {
        if (document.querySelectorAll(".checkboxes")[i].checked === true)
        {
            selected += 1
        }
    }
    if (selected < 3)//if less than 3 checkboxews have been selected generate passwords based on the specifications
    {
        if (document.getElementById("uppercase").checked === false && document.getElementById("lowercase").checked === false &&
        document.getElementById("numbers").checked === false && document.getElementById("special").checked === false)//generates default password when none of the checkboxes have been checked
        {
            generateDefault(key,"o1")
            generateDefault(key,"o2")
        }
        else if (document.getElementById("uppercase").checked === true) //exclude uppercase
        {
            noUppercase(key,"o1")
            noUppercase(key,"o2")
        }
        else if (document.getElementById("lowercase").checked === true)//exclude lowercase
        {
            noLowercase(key,"o1")
            noLowercase(key,"o2")
        }
        else if (document.getElementById("numbers").checked === true)//exclude numbers
        {
            noNumbers(key,"o1")
            noNumbers(key,"o2")
        }
        else if (document.getElementById("special").checked === true)//exclude special characters
        {
            noSpecial(key,"o1")
            noSpecial(key,"o2")
        }
        else if (document.getElementById("uppercase").checked === true && document.getElementById("numbers").checked === true)//generate passwords excluding uppercase and numbers
        {
            noUpperAndNumber(key,"o1")
            noUpperAndNumber(key,"o2")
        }
        else if (document.getElementById("lowercase").checked === true && document.getElementById("numbers").checked === true)//generate passwords excluding lowercase and numbers
        {
            noLowerAndNumber(key,"o1")
            noLowerAndNumber(key,"o2")
        }
        else if (document.getElementById("numbers").checked === true && document.getElementById("special").checked === true)//generate passwords excluding numbers and special characters
        {
            noNumberAndSpecial(key,"o1")
            noNumberAndSpecial(key,"o2")
        }
        else if (document.getElementById("uppercase").checked === true && document.getElementById("lowercase").checked === true)//generate passwords excluding uppercase and lowercase characters
        {
            noUpperAndLower(key,"o1")
            noUpperAndLower(key,"o2")
        }
        else if (document.getElementById("uppercase").checked === true && document.getElementById("special").checked === true)//generate passwords excluding uppercase and special characters
        {
            noUpperAndSpecial(key,"o1")
            noUpperAndSpecial(key,"o2")
        }
        else if (document.getElementById("lowercase").checked === true && document.getElementById("special").checked === true)//generate passwords excluding lowercase and special characters
        {
            noLowerAndSpecial(key,"o1")
            noLowerAndSpecial(key,"o2")
        }
   }
   else if( selected > 2)//if more than two checkboxes have been selected deselect all checkboxes and let user know of the limitations
   {
    alert("Cannot exclude more than two types of characters")
    document.getElementById("uppercase").checked = false
    document.getElementById("lowercase").checked = false
    document.getElementById("numbers").checked = false
    document.getElementById("special").checked = false
    document.getElementById("o1").textContent = ""
    document.getElementById("o2").textContent = ""
   }
})

function generateDefault(key, id){//generates default password which contains at least one of each type of character
    let size = document.getElementById("length").value//holds length of password specified by user
    key = ""//resets password in order to generate a new one
    let a, b, c, d = 0 //variables that receive a random index later used to make sure that those random indexes receive a certain type of character
    do
    {
        a = Math.floor(Math.random() * size)
        b = Math.floor(Math.random() * size)
        c = Math.floor(Math.random() * size)
        d = Math.floor(Math.random() * size)
    }
    while(a === b || a === c || a === d ||  b === c || b === d || d ===c)//make sure that none of the random indexes generated is similar to another if any is similar generate new ones

    for (let i = 0; i < size; i++ ){
        if (i != a && i != b && i != c && i != d)
        {
            randomIndex = Math.floor(Math.random()*store.length)
            key += store[randomIndex] 
        }
        else
        {
            if ( i === a){
                x = getuppercase()
                key += store[x]
            }
            else if (i === b)
            {
                x = getlowercase()
                key += store[x]
            }
            else if (i === c)
            {
                x = getnumber()
                key += store[x]
            }
            else if (i === d)
            {
                x = getspecial()
                key += store[x]
            }
        }
    }
    document.getElementById(id).textContent = key
}

function noUppercase(key, id){//generates password excluding uppercase characters
    let size = document.getElementById("length").value//holds length of password specified by user
    
    key = ""//resets password in order to generate a new one
    let b, c, d = 0 //variables that receive a random index later used to make sure that those random indexes receive a certain type of character
    do
    {
        b = Math.floor(Math.random() * size)
        c = Math.floor(Math.random() * size)
        d = Math.floor(Math.random() * size)
    }
    while(  b === c || b === d || d ===c) //make sure that none of the random indexes generated is similar to another if any is similar generate new ones

    for (let i = 0; i < size; i++ ){
        if (i != b && i != c && i != d)
        {
           
            do
            {
                randomIndex = Math.floor(Math.random()*store.length)
            }
            while (randomIndex < 26)  //make sure an uppercase index is not selected if one is selected generate new indexes
            key += store[randomIndex] 
        }
        else
        { 
            if (i === b)
            {
                x = getlowercase()
                key += store[x]
            }
            else if (i === c)
            {
                x = getnumber()
                key += store[x]
            }
            else if (i === d)
            {
                x = getspecial()
                key += store[x]
            }
        }
    }
    document.getElementById(id).textContent = key
}

function noLowercase(key, id){//generates password excluding lowercase characters
    let size = document.getElementById("length").value//holds length of password specified by user
    key = ""//resets password in order to generate a new one
    let a, c, d = 0 //variables that receive a random index later used to make sure that those random indexes receive a certain type of character
    do
    {
        a = Math.floor(Math.random() * size)
        c = Math.floor(Math.random() * size)
        d = Math.floor(Math.random() * size)
    }
    while(  a === c || a === d || d ===c) //make sure that none of the random indexes generated is similar to another if any is similar generate new ones

    for (let i = 0; i < size; i++ ){
        if (i != a && i != c && i != d)
        {
            
           do
           {
            randomIndex = Math.floor(Math.random()*store.length)
           }
           while ( randomIndex >= 26 && randomIndex <=51)//make sure a lowercase index is not selected if one is selected generate new indexes
           key += store[randomIndex] 
           
        }
        else
        { 
            if (i === a)
            {
                x = getuppercase()
                key += store[x]
            }
            else if (i === c)
            {
                x = getnumber()
                key += store[x]
            }
            else if (i === d)
            {
                x = getspecial()
                key += store[x]
            }
        }
    }
    document.getElementById(id).textContent = key
}

function noNumbers(key, id){//generates password excluding number characters
    let size = document.getElementById("length").value//holds length of password specified by user
    key = ""//resets password in order to generate a new one
    let a, b, d = 0 //variables that receive a random index later used to make sure that those random indexes receive a certain type of character
    do
    {
        a = Math.floor(Math.random() * size)
        c = Math.floor(Math.random() * size)
        d = Math.floor(Math.random() * size)
    }
    while(  a === b || a === d || d ===b) //make sure that none of the random indexes generated is similar to another if any is similar generate new ones

    for (let i = 0; i < size; i++ ){
        if (i != a && i != b && i != d)
        {
            
           do
           {
            randomIndex = Math.floor(Math.random()*store.length)
           }
           while ( randomIndex >= 52 && randomIndex <=61)//make sure a number index is not selected if one is selected generate new indexes
           key += store[randomIndex] 
           
        }
        else
        { 
            if (i === a)
            {
                x = getuppercase()
                key += store[x]
            }
            else if (i === b)
            {
                x = getlowercase()
                key += store[x]
            }
            else if (i === d)
            {
                x = getspecial()
                key += store[x]
            }
        }
    }
    document.getElementById(id).textContent = key
}

function noSpecial(key, id){//generates password excluding special characters
    let size = document.getElementById("length").value//holds length of password specified by user
    
    key = ""//resets password in order to generate a new one
    let a, b, c = 0 //variables that receive a random index later used to make sure that those random indexes receive a certain type of character
    do
    {
        a = Math.floor(Math.random() * size)
        b = Math.floor(Math.random() * size)
        c = Math.floor(Math.random() * size)
    }
    while(  b === c || b === a || a ===c) //make sure that none of the random indexes generated is similar to another if any is similar generate new ones

    for (let i = 0; i < size; i++ ){
        if (i != b && i != c && i != a)
        {
            do
            {
                randomIndex = Math.floor(Math.random()*store.length)
            }
            while (randomIndex > 61)//make sure a special character index is not selected if one is selected generate new indexes
            key += store[randomIndex] 
        }
        else
        { 
            if (i === a)
            {
                x = getuppercase()
                key += store[x]
            }
            else if (i === b)
            {
                x = getlowercase()
                key += store[x]
            }
            else if (i === c)
            {
                x = getnumber()
                key += store[x]
            }
        }
    }
    document.getElementById(id).textContent = key
}

function noUpperAndNumber(key, id){//generates password excluding uppercase and number characters
    let size = document.getElementById("length").value//holds length of password specified by user
    
    key = ""//resets password in order to generate a new one
    for (let i = 0; i < size; i++ )
    {
            do
            {
                randomIndex = Math.floor(Math.random()*store.length)
            }
            while ( randomIndex < 26 || (randomIndex >= 52 && randomIndex <= 61))//make sure uppercase and number indexes are not selected if one is selected generate new indexes
            key += store[randomIndex] 
    }
    document.getElementById(id).textContent = key
}

function noLowerAndNumber(key, id){//generates password excluding lowercase and number characters
    let size = document.getElementById("length").value//holds length of password specified by user
    
    key = ""//resets password in order to generate a new one

    for (let i = 0; i < size; i++ ){
           
            do
            {
                randomIndex = Math.floor(Math.random()*store.length)
            }
            while ( (randomIndex >= 26 && randomIndex <=51) || (randomIndex >= 52 && randomIndex <= 61))//make sure a lowercase or number index is not selected if one is selected generate new indexes
            key += store[randomIndex] 
        
    }
    document.getElementById(id).textContent = key
}

function noNumberAndSpecial(key, id){//generates password excluding number and special characters
    let size = document.getElementById("length").value//holds length of password specified by user
    
    key = ""//resets password in order to generate a new one
 
    for (let i = 0; i < size; i++ )
    {
            do
            {
                randomIndex = Math.floor(Math.random()*store.length)
            }
            while ( (randomIndex >= 52 && randomIndex <=61) || randomIndex > 61)//make sure a number or special character index is not selected if one is selected generate new indexes
            key += store[randomIndex] 
        
    }
    document.getElementById(id).textContent = key
}

function noUpperAndLower(key, id){//generates password excluding uppercase and lowercase characters
    let size = document.getElementById("length").value//holds length of password specified by user
    
    key = ""//resets password in order to generate a new one

    for (let i = 0; i < size; i++ ){
           
            do
            {
                randomIndex = Math.floor(Math.random()*store.length)
            }
            while (randomIndex < 52)//make sure an uppercase or lowercase index is not selected if one is selected generate new indexes
            key += store[randomIndex] 
    }
    document.getElementById(id).textContent = key
}

function noUpperAndSpecial(key, id){//generates password excluding uppercase and special characters
    let size = document.getElementById("length").value//holds length of password specified by user
    
    key = ""//resets password in order to generate a new one

    for (let i = 0; i < size; i++ ){
           
            do
            {
                randomIndex = Math.floor(Math.random()*store.length)
            }
            while (randomIndex < 26 || randomIndex > 61)//make sure an uppercase or lowercase index is not selected if one is selected generate new indexes
            key += store[randomIndex] 
    }
    document.getElementById(id).textContent = key
}

function noLowerAndSpecial(key, id){//generates password excluding lowercase and special characters
    let size = document.getElementById("length").value//holds length of password specified by user
    
    key = ""//resets password in order to generate a new one

    for (let i = 0; i < size; i++ ){
           
            do
            {
                randomIndex = Math.floor(Math.random()*store.length)
            }
            while ( (randomIndex >= 26 && randomIndex <=51) || randomIndex > 61)//make sure a lowercase or number index is not selected if one is selected generate new indexes
            key += store[randomIndex] 
    }
    document.getElementById(id).textContent = key
}