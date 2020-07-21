
var numSquares=6;
var colors=[];
var pickedColor;
var squares =document.querySelectorAll(".squar");
var colorDisplay=document.getElementById("colorDisplay");
var message= document.getElementById("message");
var h1=document.querySelector("h1");
var resetBtn=document.querySelector("#reset");
var ModeBtn=document.querySelectorAll(".Mode");
//var easyBtn=document.querySelector("#EasyBtn");

init();
function init()
{
// Mode Buttons
	SetupModeButtons();
	SetUpSquares();
	reset();

}

function SetupModeButtons()
{
		for(var i=0;i<ModeBtn.length;i++)
		{

			ModeBtn[i].addEventListener("click",function(){
			ModeBtn[0].classList.remove("selected");
			ModeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent ==="Easy"?numSquares = 3: numSquares = 6;
			reset();
				})
		}
}
function SetUpSquares()
{
	for(var i=0;i<squares.length;i++)
		{   //Add initial Colors to squares
	
			//Add click listeners to squares
			squares[i].addEventListener("click",function(){

				 //grab the color of clicked square
				var clickedColor =this.style.background;
				//Compated the color
				if (clickedColor===pickedColor)
				{
					message.textContent="Correct!!!";
					changeColor(clickedColor);
					h1.style.background=clickedColor;
					resetBtn.textContent="Play Again?";

				}
				else
				{
					this.style.background="#232323";
					message.textContent="Try Again";
				}

			})

		}

}

function reset()
{

	colors=generateRandomColors(numSquares);
	pickedColor =PickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
		{   //Add initial Colors to squares
			if (colors[i]) 
			{
				squares[i].style.display="block";
				squares[i].style.background=colors[i];
			}
			else
			{
				squares[i].style.display="none";

			}
			
		}
		h1.style.background="steelblue";
		message.textContent="";
		resetBtn.textContent="New Colors";

}



resetBtn.addEventListener("click",function(){
	reset();
	})

function changeColor(color){

	for(i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
}
function PickColor(){
	var Random= Math.floor(Math.random()*colors.length);
	return colors[Random];
}

function generateRandomColors(num)
{
	var colorsTemp=[];
	for(i=0;i<num;i++)
	{
	var R=Math.floor(Math.random()*256);
	var G=Math.floor(Math.random()*256);
	var B=Math.floor(Math.random()*256);
	colorname= "rgb("+R+", "+G+", "+B+")";
	colorsTemp.push(colorname);
	}

	return colorsTemp;
	
}

