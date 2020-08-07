
    const titleArea = document.getElementById("title-area")

    let t1 = document.getElementById("t1").innerHTML;
    let t2 = document.getElementById("t2").innerHTML;
    let t3 = document.getElementById("t3").innerHTML;
    let t4 = document.getElementById("t4").innerHTML;
    let t5 = document.getElementById("t5").innerHTML;
    let t6 = document.getElementById("t6").innerHTML;
    let t7 = document.getElementById("t7").innerHTML;
    let t8 = document.getElementById("t8").innerHTML;
    let t9 = document.getElementById("t9").innerHTML;
    let t10 = document.getElementById("t10").innerHTML;
    let t11 = document.getElementById("t11").innerHTML;
    let t12 = document.getElementById("t12").innerHTML;


    const charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
                     'p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C','D',
                     'E','F','G','H','I','J','K','L','M','N','O', 'P', 'Q','R','S',
                     'T','U','V','W','X','Y','Z','!','@','#','$','%','^','&','*','(',
                     ')', '-','+']



    // function randomNum(input) {
    //     return Math.floor(Math.random() * input.length)
    // }

    function randomMilisecondFirst() {
        return Math.floor(Math.random() * 1300)
    }

    function randomMilisecondReturn() {
        return Math.floor(Math.random() * 2500) + 4000
    }

    function randomChar() {
        return charArr[Math.floor(Math.random() * charArr.length)]      
    }
        
                

    function randomizeChars() {
        setTimeout(function() {document.getElementById("t1").innerHTML = randomChar()}, randomMilisecondFirst())
        setTimeout(function() {document.getElementById("t2").innerHTML = randomChar()}, randomMilisecondFirst())
        setTimeout(function() {document.getElementById("t3").innerHTML = randomChar()}, randomMilisecondFirst())
        setTimeout(function() {document.getElementById("t4").innerHTML = randomChar()}, randomMilisecondFirst())
        setTimeout(function() {document.getElementById("t5").innerHTML = randomChar()}, randomMilisecondFirst())
        setTimeout(function() {document.getElementById("t6").innerHTML = randomChar()}, randomMilisecondFirst())
        setTimeout(function() {document.getElementById("t7").innerHTML = randomChar()}, randomMilisecondFirst())
        setTimeout(function() {document.getElementById("t8").innerHTML = randomChar()}, randomMilisecondFirst())
        setTimeout(function() {document.getElementById("t9").innerHTML = randomChar()}, randomMilisecondFirst())
        setTimeout(function() {document.getElementById("t10").innerHTML = randomChar()}, randomMilisecondFirst())
        setTimeout(function() {document.getElementById("t11").innerHTML = randomChar()}, randomMilisecondFirst())
        setTimeout(function() {document.getElementById("t12").innerHTML = randomChar()}, randomMilisecondFirst())
    } 

    function returnTitleToNormal() {
        setTimeout(function() {document.getElementById("t1").innerHTML = 'I'}, randomMilisecondReturn())
        setTimeout(function() {document.getElementById("t2").innerHTML = 'N'}, randomMilisecondReturn())
        setTimeout(function() {document.getElementById("t3").innerHTML = 'T'}, randomMilisecondReturn())
        setTimeout(function() {document.getElementById("t4").innerHTML = 'R'}, randomMilisecondReturn())
        setTimeout(function() {document.getElementById("t5").innerHTML = 'O'}, randomMilisecondReturn())
        setTimeout(function() {document.getElementById("t6").innerHTML = 'V'}, randomMilisecondReturn())
        setTimeout(function() {document.getElementById("t7").innerHTML = 'E'}, randomMilisecondReturn())
        setTimeout(function() {document.getElementById("t8").innerHTML = 'R'}, randomMilisecondReturn())
        setTimeout(function() {document.getElementById("t9").innerHTML = 'S'}, randomMilisecondReturn())
        setTimeout(function() {document.getElementById("t10").innerHTML = 'I'}, randomMilisecondReturn())
        setTimeout(function() {document.getElementById("t11").innerHTML = 'O'}, randomMilisecondReturn())
        setTimeout(function() {document.getElementById("t12").innerHTML = 'N'}, randomMilisecondReturn())
    }



    function pageLoadRandomize() {
        setTimeout(function() {
            randomizeChars()
        }, 4000)

        setTimeout(function() {
            returnTitleToNormal()
        }, 4000)
    }

    //side nav stuff

    function openNav() { 
        if(document.getElementById("mySidenav").style.width == "0px") {
            document.getElementById("mySidenav").style.width = "250px";
        } else {
           closeNav();    
        }
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    //event listeners 

    titleArea.addEventListener("mouseover", randomizeChars)
    titleArea.addEventListener("mouseout", returnTitleToNormal)
  

    //add function to make it so that everything behind the header is slightly interted or changed?
    //possible randomize title when not looking at page? 