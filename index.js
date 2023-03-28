const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
"e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
"`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
",","|",":",";","<",">",".","?","/"];

let passwordGenerated = ""
let passwordText = document.getElementById("passwordGenerated")

function generate()
{
    let passwordLength = document.getElementById("inputNumber").value
    passwordGenerated = ""
    characters.sort(()=>Math.random()-0.5)
    passwordText.textContent = "hello"
    for (let i=0;i<passwordLength;i++)
    {
        passwordGenerated += characters[i]
    }

    passwordText.textContent = passwordGenerated;
}
