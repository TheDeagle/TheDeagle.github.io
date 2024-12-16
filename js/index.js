var aText = new Array(
"# 21yo Software Developer | Low-Level Code Slayer | Night Owl Problem Solver<br><br>Last month, I completed an intensive training program at 1337 School, where I gained hands-on experience in networking, Linux, Linux sys admin, low-level programming, and web development.<br><br>Based in Tetouan, Morocco, I live for the thrill of staying up all night, battling through complex problems, and solving them with fast fingers and a mind that refuses to give up.<br><br>C, C++, and Assembly are my playground. Whether it’s a CTF challenge or a complex project, I love diving deep into memory management and optimizing performance at the lowest level.<br><br>I don’t just write code — I break it down, figure out how it works, and rebuild it better, faster, and more efficient.<br><br>Algorithms? Profiling? Security exploits? I’ve got you covered.<br><br>I believe in mastering the fundamentals, getting down to the bare metal, and understanding how everything ticks under the hood.<br><br> If you need someone who can stay awake until the job is done — obsessing over memory, performance, and the details that others miss — you’ve found your person.<br><br>Let’s make things faster, stronger, and more efficient, one line of code at a time."
);
var iSpeed = 15;
var iIndex = 0; 
var iArrLength = aText[0].length;

var iTextPos = 0
var sContents = '';
var iRow; 
    
function typewriter()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex);
    var destination = document.getElementById("TermText");
    
    while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
    iArrLength = aText[iIndex].length;
    setTimeout("typewriter()", 500);
    }
    } else {
    setTimeout("typewriter()", iSpeed);
    }
}
    
    
typewriter();

// var lines = document.getElementsByClassName("HLine");

// window.addEventListener("resize", function(){
//     console.log(window.innerWidth);
//     if (window.innerWidth <= 450) {
//         handleMobile();
//     }
// })

// const rows = document.getElementsByClassName('Rows');


// var speed1 = 2;
// var speed2 = -2; // Changed to negative
// var speed3 = 2;

// for (let i = 0; i < rows.length; i++)
// {
//     rows[i].scrollTo({
//         left: 0
//     })
// }

// rows[1].scrollTo({
//     left: rows[1].clientWidth
// });

// function autoScroll() {
  
//     if (rows[0].scrollLeft >= rows[0].clientWidth)
//         speed1 = speed1 * -1;
//     if (rows[0].scrollLeft <= 0)
//         speed1 = speed1 * -1;
//     rows[0].scrollLeft += speed1;
// }

// function autoScroll2() {  
//     rows[1].scrollLeft += speed2;
    

//     if (rows[1].scrollLeft <= 0) {
//         speed2 = speed2 * -1;
//     } else if (rows[1].scrollLeft >= rows[1].clientWidth) {
//         speed2 = speed2 * -1;
//     }
// }

// function autoScroll3() {
//     if (rows[2].scrollLeft >= rows[2].clientWidth)
//         speed3 = speed3 * -1;
//     if (rows[2].scrollLeft <= 0)
//         speed3 = speed3 * -1;
//     rows[2].scrollLeft += speed3;
  
// }

// setInterval(autoScroll, 15);
// setInterval(autoScroll2, 15);
// setInterval(autoScroll3, 15);


const mobileSkills = `<div class="Skills Skills1">
                        <div class="Skill" id="Skill1"><span>C</span></div>
                        <div class="Skill" id="Skill2"><span>C++</span></div>
                        <div class="Skill" id="Skill3"><span>Assembly</span></div>
                        <div class="Skill" id="Skill4"><span>Python</span></div>
                        <div class="Skill" id="Skill5"><span>Bash</span></div>
                        <div class="Skill" id="Skill6"><span>HTML</span></div>
                    </div>
                    <div class="Skills Skills3">
                        <div class="Skill" id="Skill7"><span>CSS</span></div>
                        <div class="Skill" id="Skill8"><span>Javascript</span></div>
                        <div class="Skill" id="Skill9"><span>Django</span></div>
                        <div class="Skill" id="Skill10"><span>Three.js</span></div>
                        <div class="Skill" id="Skill11"><span>Mariadb</span></div>
                        <div class="Skill" id="Skill12"><span>Postgres</span></div>
                    </div>
                        <div class="Skills Skills4">
                        <div class="Skill" id="Skill13"><span>Nginx</span></div>
                        <div class="Skill" id="Skill14"><span>Docker</span></div>
                        <div class="Skill" id="Skill15"><span>D/Compose</span></div>
                        <div class="Skill" id="Skill16"><span>Virtualization</span></div>
                        <div class="Skill" id="Skill17"><span>Git</span></div>
                        <div class="Skill" id="Skill18"><span>Networking</span></div>
                    </div>
                        <div class="Skills Skills5">
                        <div class="Skill" id="Skill19"><span>Linux Sys Admin</span></div>
                        <div class="Skill Skill20"></div>
                        <div class="Skill Skill20"></div>
                        <div class="Skill Skill20"></div>
                        <div class="Skill Skill20"></div>
                        <div class="Skill Skill20"></div>
                    </div>
                        <div class="Skills Skills6">
                        <div class="Skill Skill20"></div>
                        <div class="Skill Skill20"></div>
                        <div class="Skill Skill20"></div>
                        <div class="Skill Skill20"></div>
                        <div class="Skill Skill20"></div>
                        <div class="Skill Skill20"></div>
                    </div>`;

const desktopSkills = `<div class="Skills Skills1">
                        <div class="Skill" id="Skill1"><span>C</span></div>
                        <div class="Skill" id="Skill2"><span>C++</span></div>
                        <div class="Skill" id="Skill3"><span>Assembly</span></div>
                        <div class="Skill" id="Skill4"><span>Python</span></div>
                        <div class="Skill" id="Skill5"><span>Bash</span></div>

                        <div class="Skill" id="Skill6"><span>HTML</span></div>
                        <div class="Skill" id="Skill7"><span>CSS</span></div>
                        <div class="Skill" id="Skill8"><span>Javascript</span></div>
                        <div class="Skill" id="Skill9"><span>Django</span></div>
                        <div class="Skill" id="Skill10"><span>Three.js</span></div>
                    </div>
                        <div class="Skills Skills2">
                        <div class="Skill" id="Skill11"><span>Mariadb</span></div>
                        <div class="Skill" id="Skill12"><span>Postgres</span></div>
                        <div class="Skill" id="Skill13"><span>Nginx</span></div>
                        <div class="Skill" id="Skill14"><span>Docker</span></div>
                        <div class="Skill" id="Skill15"><span>D/Compose</span></div>

                        <div class="Skill" id="Skill16"><span>Virtualization</span></div>
                        <div class="Skill" id="Skill17"><span>Git</span></div>
                        <div class="Skill" id="Skill18"><span>Networking</span></div>
                        <div class="Skill" id="Skill19"><span>Linux Sys Admin</span></div>
                    </div>`;


if (window.innerWidth <= 500) {
    document.getElementById("HLines").innerHTML = `<div class="HLine HLine1"></div>
                        <div class="HLine HLine2"></div>
                        <div class="HLine HLine3"></div>
                        <div class="HLine HLine4"></div>`;
    handleMobile();
}
else {
    document.getElementById("HLines").innerHTML = `<div class="HLine HLine1"></div>
                        <div class="HLine HLine2"></div>`;
    handleDesktop();
}

var _currentSkillsScroll = 0;
var _hLines = document.getElementsByClassName("HLine");
function handleMobile(){
    document.getElementById("SkillsContainer").innerHTML = mobileSkills;
    document.getElementById("SkillsContainer").addEventListener("scroll", function(){
        _currentSkillsScroll = this.scrollLeft;
        console.log("rhis is:", _currentSkillsScroll);
        if (this.scrollLeft < 350) {
            _hLines[0].style.boxShadow = "0 0 20px 3px white"
            _hLines[1].style.boxShadow = "none";
            _hLines[2].style.boxShadow = "none"
            _hLines[3].style.boxShadow = "none";
        }
        if (this.scrollLeft > 350 && this.scrollLeft < 650) {
            _hLines[0].style.boxShadow = "none";
            _hLines[1].style.boxShadow = "0 0 20px 3px white"
            _hLines[2].style.boxShadow = "none"
            _hLines[3].style.boxShadow = "none";
        }
        else if (this.scrollLeft > 650 && this.scrollLeft < 950)
        {
            _hLines[0].style.boxShadow = "none";
            _hLines[1].style.boxShadow = "none";
            _hLines[2].style.boxShadow = "0 0 20px 3px white"
            _hLines[3].style.boxShadow = "none";
        }
        else if (this.scrollLeft > 950)
        {
            _hLines[0].style.boxShadow = "none";
            _hLines[1].style.boxShadow = "none";
            _hLines[2].style.boxShadow = "none";
            _hLines[3].style.boxShadow = "0 0 20px 3px white"
        }
        if (this.scrollLeft > 992)
        {
            this.scrollTo({
                left: 991,
                behavior: "smooth"
            })
        }
    })
}

function handleDesktop() {
    document.getElementById("SkillsContainer").addEventListener("scroll", function(){
        if (this.scrollLeft < 350) {
            _hLines[0].style.boxShadow = "0 0 20px 3px white"
            _hLines[1].style.boxShadow = "none";
            _hLines[2].style.boxShadow = "none"
            _hLines[3].style.boxShadow = "none";
        }
        if (this.scrollLeft > 350 && this.scrollLeft < 650) {
            _hLines[0].style.boxShadow = "none";
            _hLines[1].style.boxShadow = "0 0 20px 3px white"
            _hLines[2].style.boxShadow = "none"
            _hLines[3].style.boxShadow = "none";
        }
    });
    document.getElementById("SkillsContainer").innerHTML = desktopSkills;
}

