var canvas=new fabric.Canvas("myCanvas")
 block_y=1;
 block_x=1;

blockimagewidth = 350;
blockimageheight = 430;

var blockimageobject= "";

function new_image(getimage)
{
	fabric.Image.fromURL(getimage,function(Img){
        blockimageobject=Img
        blockimageobject.scaleToWidth(blockimagewidth)
        blockimageobject.scaleToHeight(blockimageheight)
        blockimageobject.set({
            top:block_y,
            left:block_x
        })
        canvas.add(blockimageobject)
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image('rr1.png')
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png')
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png')
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png')
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('br.png')
	}
	
}

